@section('title', 'View Roles')

@extends('layouts.base')
@section('body')

<div class="container">

	<button id="addRoleButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#roleModal"><strong>Add a Role</strong><span  class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>

	<br>
</br>

@if ($message = Session::get('success'))
<div class="alert alert-success alert-block">
	<button type="button" class="close" data-dismiss="alert">×</button>
	<strong>{{ $message }}</strong>
</div>
@endif

<div class="table-responsive">
	<table class="table table-striped table-hover" id="rtable">
		<thead>
			<tr>
				<th>Role ID</th>
				<th>Name</th>
				<th>Status</th>
				<th>Edit</th>
				<th>Restore/Delete</th>
			</tr>
		</thead>
		<tbody id="rbody">


		</tbody>
	</table>
</div>

<!-- 	<div>
		{{$roles->links()}}
	</div> -->

</div>


<div class="modal fade" id="roleModal" role="dialog" style="display:none">
	<div class="modal-dialog modal-lg" >
		<!-- Modal content-->
		<div class="modal-content">

			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>

			<div class="modal-body">
				<form id="rform" method="post" action="{{route('role.store')}}" >
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
					<input type="hidden" id="form" value="add">

					<div class="form-group">
						<label for="role_name" class="control-label">Name</label>
						<input type="text" class="form-control" id="role_name" name="role_name" value="{{old('role_name')}}">
						@if($errors->has('role_name'))
						<small>{{ $errors->first('role_name') }}</small>
						@endif
					</div>

					<div class="form-group">
						<label for="role_status" class="control-label">Status</label>
						<select name="role_status" id="role_status" class="form-control" value="{{old('role_status')}}">
							<option value="active">Active</option>
							<option value="inactive">Inactive</option>
						</select>
						@if($errors->has('role_status'))
						<small>{{ $errors->first('role_status') }}</small>
						@endif
					</div>

				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button id="submitRole" type="submit" class="btn btn-primary" data-dismiss="modal">Save</button>
			</div>
		</div>
	</div>

</div>
@endsection

