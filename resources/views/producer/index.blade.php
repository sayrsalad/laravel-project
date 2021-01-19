@section('title', 'View Poducers')

@extends('layouts.base')
@section('body')

<div class="container">

	<button id="addProducerButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#producerModal"><strong>Add a Poducer</strong><span  class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>

	<br>
</br>

@if ($message = Session::get('success'))
<div class="alert alert-success alert-block">
	<button type="button" class="close" data-dismiss="alert">×</button>
	<strong>{{ $message }}</strong>
</div>
@endif

<div class="table-responsive">
	<table class="table table-striped table-hover" id="ptable">
		<thead>
			<tr>
				<th>Producer ID</th>
				<th>Name</th>
				<th>Email Address</th>
				<th>Website</th>
				<th>Status</th>
				<th>Edit</th>
				<th>Restore/Delete</th>
			</tr>
		</thead>
		<tbody id="pbody">

		</tbody>
	</table>
</div>

<div>
	<!-- {{$producers->links()}} -->
</div>

</div>

<div class="modal fade" id="producerModal" role="dialog" style="display:none">
	<div class="modal-dialog modal-lg" >
		<!-- Modal content-->
		<div class="modal-content">

			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>

			<div class="modal-body">
				<form id="pform" method="post" action="{{route('producer.store')}}" >
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
					<input type="hidden" id="form" value="add">

					<div class="form-group">
						<label for="producer_name" class="control-label">Name</label>
						<input type="text" class="form-control" id="producer_name" name="producer_name" value="{{old('producer_name')}}">
						@if($errors->has('producer_name'))
						<!-- <small>{{ $errors->first('producer_name') }}</small> -->
						<small>The name field is required.</small>
						@endif
					</div>

					<div class="form-group">
						<label for="producer_email_address" class="control-label">Email Address</label>
						<input type="text" class="form-control " id="producer_email_address" name="producer_email_address" value="{{old('producer_email_address')}}"></text>
						@if($errors->has('producer_email_address'))
						<small>{{ $errors->first('producer_email_address') }}</small>
						@endif
					</div>

					<div class="form-group">
						<label for="producer_website" class="control-label">Website</label>
						<input type="text" class="form-control " id="producer_website" name="producer_website" value="{{old('producer_website')}}">
						@if($errors->has('producer_website'))
						<small>{{ $errors->first('producer_website') }}</small>
						@endif
					</div>

					<div class="form-group">
						<label for="producer_status" class="control-label">Status</label>
						<select name="producer_status" id="producer_status" class="form-control" value="{{old('producer_status')}}">
							<option value="active">Active</option>
							<option value="inactive">Inactive</option>
						</select>
						@if($errors->has('producer_status'))
						<small>{{ $errors->first('producer_status') }}</small>
						@endif
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button id="submitProducer" type="submit" class="btn btn-primary" data-dismiss="modal">Save</button>
			</div>
		</div>
	</div>
</div>
@endsection
