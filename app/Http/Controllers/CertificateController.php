<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Certificate;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;

class CertificateController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$certificates = Certificate::orderBy('certificate_ID','ASC')->withTrashed()->paginate(10);
		return \View::make('certificate.index', compact('certificates'));
	}

	public function getCertificateAll(Request $request)
	{   
		if ($request->ajax()){
			$certificates = Certificate::orderBy('certificate_ID','ASC')->get();
			return response()->json($certificates);
		}
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		return \View::make('certificate.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$certificate = Certificate::create($request->all());
		return response()->json($certificate);
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
		$certificate = Certificate::find($id);
		return response()->json($certificate);
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
			$certificate = Certificate::find($id);
			$certificate = $certificate->update($request->all());
			return response()->json($certificate);
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
		$certificate = Certificate::findOrFail($id);
        $certificate->delete();
        return response()->json(["success" => "Certificate Deleted Successfully.",
             "data" => $certificate,"status" => 200]);
	}

	public function restore($id)
	{
		Certificate::withTrashed()->where('certificate_ID',$id)->restore();
		return \Redirect::route('certificate.index')->with('success','Certificate Restored Successfully!');
	}
}
