@extends('layouts.base')
@section('body')
<div class="container">

	<h2>Create New Actor</h2>
	<form id="aform" method="post" action="{{route('actor.store')}}" >
		<input type="hidden" name="_token" value="{{ csrf_token() }}">

		<div class="form-group">
			<label for="actor_fname" class="control-label">First Name</label>
			<input type="text" class="form-control" id="actor_fname" name="actor_fname" value="{{old('actor_fname')}}">
			@if($errors->has('actor_fname'))
			<!-- <small>{{ $errors->first('actor_fname') }}</small> -->
			<small>The first name field is required.</small>
			@endif
		</div>

		<div class="form-group">
			<label for="actor_lname" class="control-label">Last Name</label>
			<input type="text" class="form-control " id="actor_lname" name="actor_lname" value="{{old('actor_lname')}}"></text>
			@if($errors->has('actor_lname'))
			<!-- <small>{{ $errors->first('actor_lname') }}</small> -->
			<small>The last name field is required.</small>
			@endif
		</div>

		<div class="form-group">
			<label for="actor_notes" class="control-label">Notes</label>
			<input type="text" class="form-control " id="actor_notes" name="actor_notes" value="{{old('actor_notes')}}">
			@if($errors->has('actor_notes'))
			<small>{{ $errors->first('actor_notes') }}</small>
			@endif
		</div>

		<div class="form-group">
			<label for="actor_status" class="control-label">Status</label>
			<select name="actor_status" id="actor_status" class="form-control" value="{{old('actor_status')}}">
				<option value="active">Active</option>
				<option value="inactive">Inactive</option>
			</select>
			@if($errors->has('actor_status'))
			<small>{{ $errors->first('actor_status') }}</small>
			@endif
		</div>

		<div class="form-group">
			<label for="actor_img" class="control-label">Image</label>
			<input type="hidden" class="form-control" id="actor_img" name="actor_img" value="">
		</div>

		<button type="submit" class="btn btn-primary">Save</button>
		<a href="{{url('actor')}}" class="btn btn-default" role="button">Cancel</a>
	</div>
</div>
</form>
@endsection