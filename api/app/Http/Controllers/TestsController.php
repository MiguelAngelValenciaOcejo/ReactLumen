<?php

namespace App\Http\Controllers;

use App\Test;
use Illuminate\Http\Request;
class TestsController extends Controller
{
    function getTests(){
        $tests = Test::all();
        return response()->json($tests, 200);
    }
    function createTest(Request $request){
        $data = $request->json()->all();
        $tests = Test::create([
            'data'=>$data['data']
        ]);
        return response()->json($tests, 201);
    }
}
