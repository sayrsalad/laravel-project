<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Actor;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;

class ActorController extends Controller
{   
	
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */


	public function index()
	{
		$actors = Actor::orderBy('actor_ID','ASC')->withTrashed()->paginate(10);
		return \View::make('actor.index', compact('actors'));
	}

	public function getActorAll(Request $request)
	{   
		if ($request->ajax()){
			$actors = Actor::orderBy('actor_ID','ASC')->get();
			return response()->json($actors);
		}
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		return \View::make('actor.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{   
		$actor = Actor::create($request->all());
		return response()->json($actor);
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
		$actor = Actor::find($id);
		return response()->json($actor);
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
			$actor = Actor::find($id);
			$actor = $actor->update($request->all());
			return response()->json($actor);
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
		$actor = Actor::findOrFail($id);
        $actor->delete();
        return response()->json(["success" => "Actor Deleted Successfully.",
             "data" => $actor,"status" => 200]);
	}

	public function restore($id)
	{
		Actor::withTrashed()->where('actor_ID',$id)->restore();
		return \Redirect::route('actor.index')->with('success','Actor Restored Successfully!');
	}
}
