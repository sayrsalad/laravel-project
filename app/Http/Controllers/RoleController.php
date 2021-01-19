<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$roles = Role::orderBy('role_ID','ASC')->withTrashed()->paginate(10);
		return \View::make('role.index', compact('roles'));
	}

	public function getRoleAll(Request $request)
	{   
		if ($request->ajax()){
			$roles = Role::orderBy('role_ID','ASC')->get();
			return response()->json($roles);
		}
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		return \View::make('role.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$role = Role::create($request->all());
		return response()->json($role);
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
		$role = role::find($id);
		return response()->json($role);
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
			$role = Role::find($id);
			$role = $role->update($request->all());
			return response()->json($role);
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
		$role = Role::findOrFail($id);
        $role->delete();
        return response()->json(["success" => "Role Deleted Successfully.",
             "data" => $role,"status" => 200]);
	}

	public function restore($id)
	{
		Role::withTrashed()->where('role_ID',$id)->restore();
		return \Redirect::route('role.index')->with('success','Role Restored Successfully!');
	}
}
