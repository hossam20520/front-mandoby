<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
class PriceListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
         
        $perPage = intval($request->limit);
        $skip = intval($request->pagen);
        $client = new Client(); 
        $response = $client->request('GET', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/price_lists/pagentation?skip='.$skip.'&limit='.$perPage  );
        $jsonData = $response->getBody();
        $data = json_decode($jsonData, true);
        return response()->json([
            'priceLists' => $data['items'],
            'totalRows' => $data['total'],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $ob = [
            "en_title" =>  $request['en_title'] ,
            "ar_title" => $request['ar_title'],
            "is_active" => ( $request['is_active'] == true) ? true : false,
            
        ];

        // return $ob;

      

        $client = new Client(); 
        $response = $client->request('POST', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/price_lists/' , [
            'json' => $ob
        ]);
        $jsonData = $response->getBody();
        $data = json_decode($jsonData, true);
        return   $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request , $id)
    {
        $limit = intval($request->limit);
        $skip = intval($request->skip);
        $client = new Client();
        $ProductRespone = $client->request('GET', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/price_list_items/'.$id.'?skip='.$skip.'&limit='.$limit);
        $jsonData = $ProductRespone->getBody();
        $data = json_decode($jsonData, true);
      
        
  

        $ProductResponeS = $client->request('GET', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/products/select');
        $jsonDataS = $ProductResponeS->getBody();
        $dataS = json_decode($jsonDataS, true);
        
        $ProductResponeList = $client->request('GET', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/price_lists/select');
        $jsonDataList = $ProductResponeList->getBody();
        $dataList = json_decode($jsonDataList, true);

        $obj = [];
        foreach ($data['items'] as $key => $value) {
        
         
            
       
        $item = [
        "id" =>  $value['Price_list_itemModel']['id'],
        "product_id" =>  $value['ProductModel']['id'],
        "ar_title"=> $value['ProductModel']['ar_title'],
        "en_title"=> $value['ProductModel']['en_title'],
        "old_price"=> $value['ProductModel']['price'],
        "new_price"=> $value['Price_list_itemModel']['new_price'],
        "discount"=> $value['Price_list_itemModel']['discount'],
        "priceList"=> $value['Price_listModel']['ar_title'],
        "is_active"=> $value['Price_listModel']['is_active'],

       ];

             array_push($obj , $item );
        }

        // $obj = [
        //     "ar_title" => $data['items']['ar_title']
        // ];

        return response()->json([
            'products'=>  $dataS ,
            'lists'=>  $dataList  ,
            'priceLists' =>  $obj,
            'totalRows' => $data['total'],
        ]);
        
     


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


     
    public function update(Request $request, $id)
    {
      
        $obj = [
                
            "en_title" => $request->en_title,
            "ar_title" => $request->ar_title,
            "is_active" => $request->is_active
    
    
    ];

    $client = new Client(); 
    $response = $client->request('PUT', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/price_lists/'.$id , [
        'json' => $obj
    ]);
    $jsonData = $response->getBody();
    $data = json_decode($jsonData, true);
    return   $data;



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
