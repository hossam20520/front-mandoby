<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
class PriceListItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
 
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
            "price_list_id" =>  $request['priceList'] ,
            "product_id" => $request['product'],
            "discount" =>  $request['discount'] ,
            "new_price" =>  $request['newPrice'] ,
            
        ];

 

      

        $client = new Client(); 
        $response = $client->request('POST', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/price_list_items/' , [
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
    public function show($id)
    {
        //
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
       
        $ob = [
            "price_list_id" =>  $request['priceList'] ,
            "product_id" => $request['product'],
            "discount" =>  $request['discount'] ,
            "new_price" =>  $request['newPrice'] ,
            
        ];

 

      

        $client = new Client(); 
        $response = $client->request('PUT', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/price_list_items/'.$id , [
            'json' => $ob
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
        $id = intval($id);
        $client = new Client(); 
        $response = $client->request('DELETE', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/price_list_items/'.$id);
        $jsonData = $response->getBody();
        $data = json_decode($jsonData, true);
        return   $data;
    }
}
