<?php

namespace App\Http\Controllers\MyWeb;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MyWebController extends Controller
{
    /**
     * Get /
     */
    public function index(Request $request)
    {
        // Validation is done in JS
        return view('myWeb.frontPage');
    }
}
