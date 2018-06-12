<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

# MFE (my) Main Site Front Page
Route::get('/', 'MyWeb\MyWebController@index');

# Ajax call to send an Email
Route::post('/ajax/sendAnE_Mail', 'MyWeb\MyWebController@sendAnE_Mail');
