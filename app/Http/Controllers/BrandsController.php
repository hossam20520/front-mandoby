<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
use GuzzleHttp\Client;
class BrandsController extends Controller
{
   


 
    //------------ GET ALL Brands -----------\\
    
    public function index(Request $request)
    {


        $perPage = intval($request->limit);
        $skip = intval($request->pagen);
        $client = new Client(); 
        $response = $client->request('GET', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/brands/pagentation?skip='.$skip.'&limit='.$perPage  );
        $jsonData = $response->getBody();
        $data = json_decode($jsonData, true);
        return response()->json([
            'brands' => $data['items'],
            'totalRows' => $data['total'],
        ]);
    



        $this->authorizeForUser($request->user('api'), 'view', Brand::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $brands = Brand::where('deleted_at', '=', null)

        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('description', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $brands->count();
        $brands = $brands->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'brands' => $brands,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Brand -------------\\

    public function store(Request $request)
    {


        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

            $image_resize = Image::make($image->getRealPath());
            $image_resize->resize(200, 200);
            $image_resize->save(public_path('/images/brands/' . $filename));

        } else {
            $filename = 'no-image.png';
        }

        $obj = [
        
            "en_title" => $request['en_title'],
            "ar_title" => $request['ar_title'],
            "description" => $request['description'],
            "image" => $filename
       
         ];


         $client = new Client(); 
         $response = $client->request('POST', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/brands/' , [
             'json' => $obj
         ]);
         $jsonData = $response->getBody();
         $data = json_decode($jsonData, true);
         return   $data;


        $this->authorizeForUser($request->user('api'), 'create', Brand::class);

        request()->validate([
            'name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/brands/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Brand = new Brand;

            $Brand->name = $request['name'];
            $Brand->description = $request['description'];
            $Brand->image = $filename;
            $Brand->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Brand -------------\\

     public function update(Request $request, $id)
     {


        if( $request->updateImage  ){
            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
    
                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/brands/' . $filename));
               
            } else {
               
                $filename =  $request->currentImage;
            }  
        }else{
            $filename =  $request->currentImage;
        }


        $obj = [
        
            "en_title" => $request['en_title'],
            "ar_title" => $request['ar_title'],
            "description" => $request['description'],
            "image" => $filename
       
         ];

        

         $client = new Client(); 
         $response = $client->request('PUT', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/brands/'.$id , [
             'json' => $obj
         ]);
         $jsonData = $response->getBody();
         $data = json_decode($jsonData, true);
         return   $data;
 
         $this->authorizeForUser($request->user('api'), 'update', Brand::class);
 
         request()->validate([
             'name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Brand = Brand::findOrFail($id);
             $currentImage = $Brand->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/brands';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/brands/' . $filename));
 
                 $BrandImage = $path . '/' . $currentImage;
                 if (file_exists($BrandImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($BrandImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/brands';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/brands/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Brand::whereId($id)->update([
                 'name' => $request['name'],
                 'description' => $request['description'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Brand -----------\\

    public function destroy(Request $request, $id)
    {



        $client = new Client(); 
        $response = $client->request('DELETE', env("URL_HOSTNAME", "http://localhost:8080").'/api/v1.0/brands/'.$id);
        $jsonData = $response->getBody();
        $data = json_decode($jsonData, true);
        return   $data;

        $this->authorizeForUser($request->user('api'), 'delete', Brand::class);

        Brand::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'delete', Brand::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $brand_id) {
            Brand::whereId($brand_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}
