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

Route::get('/', function () {
    return view('index');
    // return View::make('index');
});
Route::get('/home', function () {
    return view('home');
    // return View::make('index');
});
Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

Route::get('/re', function () {
	echo bcrypt('123456');
    // return view('home');
    // return View::make('index');
});