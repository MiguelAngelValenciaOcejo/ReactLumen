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
        $test = Test::create([
            'data'=>$data['data']
        ]);
        return response()->json($test, 200);
    }
    function deleteTest(Request $request){
        $data = $request->json()->all();
        $test = Test::find($data['id']);
        $test->delete();
        return response()->json($test, 200);
    }
    function updateTest(Request $request){
        $data = $request->json()->all();
        $test = Test::find($data['id']);
        $test->update([
            'data'=>$data['data']
        ]);
        return response()->json($test, 200);
    }
}
