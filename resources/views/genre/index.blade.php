@section('title', 'View Genres')

@extends('layouts.base')
@section('body')

<div class="container">

	<button id="addGenreButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#genreModal"><strong>Add a Genre</strong><span  class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>

	<br>
</br>

@if ($message = Session::get('success'))
<div class="alert alert-success alert-block">
	<button type="button" class="close" data-dismiss="alert">×</button>
	<strong>{{ $message }}</strong>
</div>
@endif
<!-- <button class="refresher">Refresh table</button> -->
<div class="table-responsive">
	<table class="table table-striped table-hover" id="gtable">
		<thead>
			<tr>
				<th>Genre ID</th>
				<th>Name</th>
				<th>Status</th>
				<th style="text-align: center;">Edit</th>
				<th style="text-align: center;">Restore/Delete</th>
			</tr>
		</thead>
		<tbody id="gbody">

		</tbody>
	</table>
</div>

<!-- <div>
	{{$genres->links()}}
</div> -->

<div class="modal fade" id="genreModal" role="dialog" style="display:none">
	<div class="modal-dialog modal-lg" >
		<!-- Modal content-->
		<div class="modal-content">

			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>

			<div class="modal-body">
				<form id="gform" method="post" action="{{route('genre.store')}}" >
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
					<input type="hidden" id="form" value="add">

					<div class="form-group">
						<label for="genre_name" class="control-label">Name</label>
						<input type="text" class="form-control" id="genre_name" name="genre_name" value="{{old('genre_name')}}">
						@if($errors->has('genre_name'))
						<small>{{ $errors->first('genre_name') }}</small>
						@endif
					</div>

					<div class="form-group">
						<label for="genre_status" class="control-label">Status</label>
						<select name="genre_status" id="genre_status" class="form-control" value="{{old('genre_status')}}">
							<option value="active">Active</option>
							<option value="inactive">Inactive</option>
						</select>
						@if($errors->has('genre_status'))
						<small>{{ $errors->first('genre_status') }}</small>
						@endif
					</div>

				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button id="submitGenre" type="submit" class="btn btn-primary" data-dismiss="modal">Save</button>
			</div>
		</div>
	</div>

</div>
@endsection

