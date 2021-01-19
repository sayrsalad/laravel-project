<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Producer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;

class ProducerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $producers = Producer::orderBy('producer_ID','ASC')->withTrashed()->paginate(10);
        return \View::make('producer.index', compact('producers'));
    }

    public function getProducerAll(Request $request)
    {   
        if ($request->ajax()){
            $producers = Producer::orderBy('producer_ID','ASC')->get();
            return response()->json($producers);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return \View::make('producer.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $producer = Producer::create($request->all());
        return response()->json($producer);    
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
        $producer = Producer::find($id);
        return response()->json($producer);
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
            $producer = Producer::find($id);
            $producer = $producer->update($request->all());
            return response()->json($producer);
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
        $producer = Producer::findOrFail($id);
        $producer->delete();
        return response()->json(["success" => "Producer Deleted Successfully.",
             "data" => $producer,"status" => 200]);
    }

    public function restore($id)
    {
        Producer::withTrashed()->where('producer_ID',$id)->restore();
        return \Redirect::route('producer.index')->with('success','Producer Restored Successfully!');
    }
}
