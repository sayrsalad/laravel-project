<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Genre;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;

class GenreController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$genres = Genre::orderBy('genre_ID','ASC')->withTrashed()->paginate(10);
		return \View::make('genre.index', compact('genres'));
	}

	public function getGenreAll(Request $request)
	{   
		if ($request->ajax()){
			$genres = Genre::orderBy('genre_ID','ASC')->get();
			return response()->json($genres);
		}
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		return \View::make('genre.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$genre = Genre::create($request->all());
		return response()->json($genre);
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
		$genre = Genre::find($id);
		return response()->json($genre);
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
			$genre = Genre::find($id);
			$genre = $genre->update($request->all());
			return response()->json($genre);
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
		$genre = Genre::findOrFail($id);
        $genre->delete();
        return response()->json(["success" => "Genre Deleted Successfully.",
             "data" => $genre,"status" => 200]);
	}

	public function restore($id)
	{
		Genre::withTrashed()->where('genre_ID',$id)->restore();
		return \Redirect::route('genre.index')->with('success','Genre Restored Successfully!');
	}
}
