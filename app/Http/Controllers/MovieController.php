<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Movie;
use App\Genre;
use App\Certificate;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;

class MovieController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$movies = Movie::orderBy('movie_ID','ASC')->withTrashed()->paginate(10);
		return \View::make('movie.index', compact('movies'));
	}

	public function getMovieAll(Request $request)
	{   
		if ($request->ajax()){
			$movies = Movie::orderBy('movie_ID','DESC')->get();
			$genres = Genre::orderBy('genre_ID','DESC')->get();
			$certificates = Certificate::orderBy('certificate_ID','DESC')->get();
			$result = array('movies' => $movies, 'genres' => $genres, 'certificates' => $certificates);
			return response()->json($result);
		}
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		$genres = Genre::pluck('genre_name','genre_ID');
		$certificates = Certificate::pluck('certificate_name','certificate_ID');
		return \View::make('movie.create',compact('genres', 'certificates'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{

		$movie = Movie::create($request->all());
		return response()->json($movie);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{   
		$movie = Movie::find($id);
		return response()->json($movie);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{   
		if ($request->ajax()) {
			$movie = Movie::find($id);
			$movie = $movie->update($request->all());
			return response()->json($movie);
		}
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		$movie = Movie::findOrFail($id);
        $movie->delete();
        return response()->json(["success" => "Movie Deleted Successfully.",
             "data" => $movie,"status" => 200]);
	}
	
	public function restore($id)
	{
		Movie::withTrashed()->where('movie_ID',$id)->restore();
		return \Redirect::route('movie.index')->with('success','Movie Restored Successfully!');
	}
}
