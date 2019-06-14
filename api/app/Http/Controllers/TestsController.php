<?php

namespace App\Http\Controllers;

use App\Test;

class TestsController extends Controller
{
    function index(){
        $tests = Test::all();
        return response()->json($tests, 200);
    }
}
