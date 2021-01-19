@section('title', 'View Movies')
@extends('layouts.base')
@section('body')

<div class="container">

	<button id="addMovieButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#movieModal"><strong>Add a Movie</strong><span  class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>

	<br>
	</br>
	
	@if ($message = Session::get('success'))
	<div class="alert alert-success alert-block">
		<button type="button" class="close" data-dismiss="alert">×</button>
		<strong>{{ $message }}</strong>
	</div>
	@endif


<div class="table-responsive">
	<table id="mtable" class="table table-striped table-hover">
		<thead>
			<tr>
				<th data-column="movie_ID" data-order="desc">Movie ID</th>
				<th>Title</th>
				<th>Genre</th>
				<th>Story</th>
				<th>Release Date</th>
				<th>Film Duration</th>
				<th>Additional Info</th>
				<th>Certificate</th>
				<th>Poster</th>
				<th>Status</th>
				<th>Edit</th>
				<th>Restore/Delete</th>
			</tr>
		</thead>
		<tbody id="mbody">

		</tbody>
	</table>
</div>

<div>
	<!--    {{$movies->links()}} -->
</div>

</div>

<div class="modal fade" id="movieModal" role="dialog" style="display:none">
	<div class="modal-dialog modal-lg" >
		<!-- Modal content-->
		<div class="modal-content">

			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>

			<div class="modal-body">
				<form id="mform" method="post" >
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
					<input type="hidden" id="form" value="add">

					<div class="form-group">
						<label for="movie_title" class="control-label">Title</label>
						<input type="text" class="form-control" id="movie_title" name="movie_title" value="{{old('movie_title')}}">
						@if($errors->has('movie_title'))
						<small>{{ $errors->first('movie_title') }}</small>
						@endif
					</div>

					<div class="form-group">
						<label for="genre_ID">Genre</label>
						<!-- {!! Form::select('genre_ID') !!} -->
						<select name="genre_ID" id="genre_ID" class="form-control">
							<option value="0" disabled selected>-- Select Genre --</option>
						</select>
					</div>

					<div class="form-group">
						<label for="movie_story" class="control-label">Story</label>
						<input type="text" class="form-control " id="movie_story" name="movie_story"></text>
						@if($errors->has('movie_story'))
						<small>{{ $errors->first('movie_story') }}</small>
						@endif
					</div>

					<div class="form-group">
						<label for="movie_release_date" class="control-label">Release Date</label>
						<input type="text" class="form-control" id="movie_release_date" name="movie_release_date" data-provide="datepicker-inline" data-date-format="yyyy-mm-dd"readonly>
						<div class="input-group-addon">
					        <span class="glyphicon glyphicon-th"></span>
					    </div>
						@if($errors->has('movie_release_date'))
						<small>{{ $errors->first('movie_release_date') }}</small>
						@endif
					</div>

					<div class="form-group">
						<label for="movie_film_duration" class="control-label">Duration</label>
						<input type="text" class="form-control " id="movie_film_duration" name="movie_film_duration">
						@if($errors->has('movie_film_duration'))
						<small>{{ $errors->first('movie_film_duration') }}</small>
						@endif
					</div>

					<div class="form-group">
						<label for="movie_additional_info" class="control-label">Additional Info</label>
						<input type="text" class="form-control " id="movie_additional_info" name="movie_additional_info" value="{{old('movie_additional_info')}}">
						@if($errors->has('movie_additional_info'))
						<small>{{ $errors->first('movie_additional_info') }}</small>
						@endif
					</div>

					<div class="form-group">
						<label for="certificate_ID">Certificate</label>
						<!-- {!! Form::select('certificate_ID') !!} -->
						<select name="certificate_ID" id="certificate_ID" class="form-control">
							<option value="0" disabled selected>-- Select Certificate --</option>
						</select>
					</div>

					<div class="form-group">
						<label for="movie_poster" class="control-label">Poster</label>
						<input type="hidden" class="form-control" id="movie_poster" name="movie_poster" value="">
						@if($errors->has('movie_poster'))
						<small>{{ $errors->first('movie_poster') }}</small>
						@endif
					</div>

					<div class="form-group">
						<label for="movie_status" class="control-label">Status</label>
						<select name="movie_status" id="movie_status" class="form-control" value="{{old('movie_status')}}">
							<option value="active">Active</option>
							<option value="inactive">Inactive</option>
						</select>
						@if($errors->has('movie_status'))
						<small>{{ $errors->first('movie_status') }}</small>
						@endif
					</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button id="submitMovie" type="submit" class="btn btn-primary" data-dismiss="modal">Save</button>
				</div>
				</form> 
			</div>

		</div>
	</div>
</div>
@endsection
