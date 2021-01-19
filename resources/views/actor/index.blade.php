<!-- resources/views/actor/index.blade.php -->
@section('title', 'View Actors')

@extends('layouts.base')
@section('body')

<div class="container">

	<button id="addActorButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#actorModal"><strong>Add an Actor</strong><span  class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>

	<br>
</br>

@if ($message = Session::get('success'))
<div class="alert alert-success alert-block">
	<button type="button" class="close" data-dismiss="alert">×</button>
	<strong>{{ $message }}</strong>
</div>
@endif

<div class="table-responsive">
	<table class="table table-striped table-hover" id="atable">
		<thead>
			<tr>
				<th>Actor ID</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Notes</th>
				<th>Image</th>
				<th>Status</th>
				<th>Edit</th>
				<th>Restore/Delete</th>
			</tr>
		</thead>
		<tbody id="abody">

		</tbody>
	</table>
</div>

<div>
	<!-- {{$actors->links()}} -->
</div>

</div>

<div class="modal fade" id="actorModal" role="dialog" style="display:none">
	<div class="modal-dialog modal-lg" >
		<!-- Modal content-->
		<div class="modal-content">

			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>

			<div class="modal-body">
				<form id="aform" method="post" action="{{route('actor.store')}}" >
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
					<input type="hidden" id="form" value="add">

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

<!-- 					<div class="form-group">
						<label for="actor_img" class="control-label">Image</label>
						<input type="hidden" class="form-control" id="actor_img" name="actor_img" value="">
					</div> -->
				</form> 
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button id="submitActor" type="submit" class="btn btn-primary" data-dismiss="modal">Save</button>
			</div>
		</div>
	</div>
</div>
@endsection
