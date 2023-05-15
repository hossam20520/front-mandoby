<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\utils\helpers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use \Gumlet\ImageResize;
use GuzzleHttp\Client;
use Intervention\Image\ImageManagerStatic as Image;
class CategorieController extends BaseController
{

    //-------------- Get All Categories ---------------\\

    public function index(Request $request)
    {

        $perPage = intval($request->limit);
        $skip = intval($request->pagen);
        $client = new Client(); 
        $response = $client->request('GET', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/categorys/pagenation?skip='.$skip.'&limit='.$perPage  );
        $jsonData = $response->getBody();
        $data = json_decode($jsonData, true);
        return response()->json([
            'categories' => $data['items'],
            'totalRows' => $data['total'],
        ]);


        $this->authorizeForUser($request->user('api'), 'view', Category::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $categories = Category::where('deleted_at', '=', null)

        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('code', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $categories->count();
        $categories = $categories->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'categories' => $categories,
            'totalRows' => $totalRows,
        ]);
    }

    //-------------- Store New Category ---------------\\

    public function store(Request $request)
    {


        request()->validate([
            'ar_title' => 'required',
            'en_title' => 'required',
            'code' => 'required',
        ]);

        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

            $image_resize = Image::make($image->getRealPath());
            $image_resize->resize(200, 200);
            $image_resize->save(public_path('/images/category/' . $filename));
           
        } else {
            $filename = 'no-image.png';
        }
       
        $obj = [
        
                "en_title" => $request['en_title'],
                "ar_title" => $request['ar_title'],
                "code" => $request['code'],
                "image" => $filename
           
        ];

        $client = new Client(); 
        $response = $client->request('POST', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/categorys/' , [
            'json' => $obj
        ]);
        $jsonData = $response->getBody();
        $data = json_decode($jsonData, true);
        return   $data;




        $this->authorizeForUser($request->user('api'), 'create', Category::class);

        request()->validate([
            'name' => 'required',
            'code' => 'required',
        ]);

        Category::create([
            'code' => $request['code'],
            'name' => $request['name'],
        ]);
        return response()->json(['success' => true]);
    }

     //------------ function show -----------\\

    public function show($id){
        //
    
    }

    //-------------- Update Category ---------------\\

    public function update(Request $request, $id)
    {
        request()->validate([
            'en_title' => 'required',
        ]);
    

        if( $request->updateImage  ){
            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
    
                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/category/' . $filename));
               
            } else {
               
                $filename =  $request->currentImage;
            }  
        }else{
            $filename =  $request->currentImage;
        }
      


 
                $obj = [
                
                    "en_title" => $request->en_title,
                    "ar_title" => $request->ar_title,
                    "code" => $request->code,
                    "image" => $filename
            
            ];

            $client = new Client(); 
            $response = $client->request('PUT', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/categorys/'.$id , [
                'json' => $obj
            ]);
            $jsonData = $response->getBody();
            $data = json_decode($jsonData, true);
            return   $data;


        $this->authorizeForUser($request->user('api'), 'update', Category::class);

        request()->validate([
            'name' => 'required',
            'code' => 'required',
        ]);

        Category::whereId($id)->update([
            'code' => $request['code'],
            'name' => $request['name'],
        ]);
        return response()->json(['success' => true]);

    }

    //-------------- Remove Category ---------------\\

    public function destroy(Request $request, $id)
    {

           $client = new Client(); 
            $response = $client->request('DELETE', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/categorys/'.$id);
            $jsonData = $response->getBody();
            $data = json_decode($jsonData, true);
            return   $data;
        $this->authorizeForUser($request->user('api'), 'delete', Category::class);

        Category::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\\

    public function delete_by_selection(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Category::class);
        $selectedIds = $request->selectedIds;

        foreach ($selectedIds as $category_id) {
            Category::whereId($category_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }

        return response()->json(['success' => true]);
    }

}
