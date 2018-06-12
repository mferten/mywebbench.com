<?php

namespace App\Http\Controllers\MyWeb;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Utility;

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

    # Send an Email message
    public function sendAnE_Mail(Request $request)
    {
        return Utility::processSendMail($request['toMailAddress'], $request['mailMessage']);
    }
}
