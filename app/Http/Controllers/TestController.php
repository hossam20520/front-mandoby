<?php

namespace App\Http\Controllers;
use GuzzleHttp\Client;


use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test(){
    $client = new Client(); 
    $response = $client->request('GET', 'http://gatway_service:8000/api/v1.0/gateways/categories?skip=0&limit=100');
     return dd( $response);

}
}
