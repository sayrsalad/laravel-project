<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Auth::routes();

Route::get('/actor/show/{id}',['uses' => 'ActorController@getActor','as' => 'actor.getactor'] );
Route::get('/actor/all',['uses' => 'ActorController@getActorAll','as' => 'actor.getactorall'] );
Route::resource('actor', 'ActorController')->middleware('auth');

Route::get('/movie/show/{id}',['uses' => 'MovieController@getMovie','as' => 'movie.getmovie'] );
Route::get('/movie/all',['uses' => 'MovieController@getMovieAll','as' => 'movie.getmovieall'] );
Route::resource('movie', 'MovieController')->middleware('auth');

Route::get('/producer/show/{id}',['uses' => 'ProducerController@getProducer','as' => 'producer.getproducer'] );
Route::get('/producer/all',['uses' => 'ProducerController@getProducerAll','as' => 'producer.getproducerall'] );
Route::resource('producer', 'ProducerController')->middleware('auth');

Route::get('/certificate/show/{id}',['uses' => 'CertificateController@getCertificate','as' => 'certificate.getcertificate'] );
Route::get('/certificate/all',['uses' => 'CertificateController@getCertificateAll','as' => 'certificate.getcertificateall'] );
Route::resource('certificate', 'CertificateController')->middleware('auth');

Route::get('/genre/show/{id}',['uses' => 'GenreController@getGenre','as' => 'genre.getgenre'] );
Route::get('/genre/all',['uses' => 'GenreController@getGenreAll','as' => 'genre.getgenreall'] );
Route::resource('genre', 'GenreController')->middleware('auth');

Route::get('/role/show/{id}',['uses' => 'RoleController@getRole','as' => 'role.getrole'] );
Route::get('/role/all',['uses' => 'RoleController@getRoleAll','as' => 'role.getroleall'] );
Route::resource('role', 'RoleController')->middleware('auth');

Route::resource('movie_producer', 'MovieProducerController')->middleware('auth');
Route::resource('movie_actor_role', 'MovieActorRoleController')->middleware('auth');


Route::get('/actor/restore/{id}',['uses' => 'ActorController@restore',
'as' => 'actor.restore']);

Route::get('/movie/restore/{id}',['uses' => 'MovieController@restore',
'as' => 'movie.restore']);

Route::get('/producer/restore/{id}',['uses' => 'ProducerController@restore',
'as' => 'producer.restore']);

Route::get('/genre/restore/{id}',['uses' => 'GenreController@restore',
'as' => 'genre.restore']);

Route::get('/certificate/restore/{id}',['uses' => 'CertificateController@restore',
'as' => 'certificate.restore']);

Route::get('/role/restore/{id}',['uses' => 'RoleController@restore',
'as' => 'role.restore']);


Route::post('handle-form', function () {
dd(storage_path());
echo Request::file('movie_poster')->move(storage_path().'/images',Request::file('movie_poster')->getClientOriginalName());

return 'File was moved.';
});

Route::get('/home', 'HomeController@index')->name('home');
