@section('title', 'View Certificates')

@extends('layouts.base')
@section('body')

<div class="container">

	<button id="addCertificateButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#certificateModal"><strong>Add a Certificate</strong><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>

	<br>
	</br>
	
	@if ($message = Session::get('success'))
	<div class="alert alert-success alert-block">
		<button type="button" class="close" data-dismiss="alert">×</button>
		<strong>{{ $message }}</strong>
	</div>
	@endif

	<div class="table-responsive">
		<table class="table table-striped table-hover" id="ctable">
			<thead>
				<tr>
					<th>Certificate ID</th>
					<th>Name</th>
					<th>Status</th>
					<th>Edit</th>
					<th>Restore/Delete</th>
				</tr>
			</thead>
			<tbody id="cbody">

			</tbody>
		</table>
	</div>

	<div>
		{{$certificates->links()}}
	</div>

</div>


<div class="modal fade" id="certificateModal" role="dialog" style="display:none">
	<div class="modal-dialog modal-lg" >
		<!-- Modal content-->
		<div class="modal-content">

			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>

			<div class="modal-body">
				<form id="cform" method="post" action="{{route('certificate.store')}}" >
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
					<input type="hidden" id="form" value="add">

					<div class="form-group">
						<label for="certificate_name" class="control-label">Name</label>
						<input type="text" class="form-control" id="certificate_name" name="certificate_name">
						@if($errors->has('certificate_name'))
						<small>{{ $errors->first('certificate_name') }}</small>
						@endif
					</div>

					<div class="form-group">
						<label for="certificate_status" class="control-label">Status</label>
						<select name="certificate_status" id="certificate_status" class="form-control">
							<option value="active">Active</option>
							<option value="inactive">Inactive</option>
						</select>
						@if($errors->has('certificate_status'))
						<small>{{ $errors->first('certificate_status') }}</small>
						@endif
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button id="submitCertificate" type="submit" class="btn btn-primary" data-dismiss="modal">Save</button>
			</div>
		</div>
	</div>

</div>
@endsection
