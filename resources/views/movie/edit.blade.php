@extends('layouts.base')
@section('body')
<div class="container">

<h2>Edit New Movie</h2>

{!! Form::model($movies,['method'=>'PATCH','route' => ['movie.update',$movies->movie_ID]]) !!}

<div class="form-group">
<label for="movie_ID" class="control-label">Movie ID</label>
<input type="text" class="form-control" id="movie_ID" name="movie_ID" value="{{$movies->movie_ID}}" readonly>
</div>

<div class="form-group">
<label for="movie_title" class="control-label">Title</label>
<input type="text" class="form-control" id="movie_title" name="movie_title" value="{{$movies->movie_title}}">
@if($errors->has('movie_title'))
<small>{{ $errors->first('movie_title') }}</small>
@endif
</div>

<div class="form-group">
<label for="genre_ID">Genre</label>
{!! Form::select('genre_ID',$genres, null,['class' => 'form-control', 'value' => $movies->genre_ID]) !!}
</div>

<div class="form-group">
<label for="movie_story" class="control-label">Story</label>
<input type="text" class="form-control " id="movie_story" name="movie_story" value="{{$movies->movie_story}}"></text>
@if($errors->has('movie_story'))
<small>{{ $errors->first('movie_story') }}</small>
@endif
</div>

<div class="form-group">
<label for="movie_release_date" class="control-label">Release Date</label>
<input type="text" class="form-control " id="movie_release_date" name="movie_release_date" value="{{$movies->movie_release_date}}">
@if($errors->has('movie_release_date'))
<small>{{ $errors->first('movie_release_date') }}</small>
@endif
</div>

<div class="form-group">
<label for="movie_film_duration" class="control-label">Duration</label>
<input type="text" class="form-control " id="movie_film_duration" name="movie_film_duration" value="{{$movies->movie_film_duration}}">
@if($errors->has('movie_film_duration'))
<small>{{ $errors->first('movie_film_duration') }}</small>
@endif
</div>

<div class="form-group">
<label for="movie_additional_info" class="control-label">Additional Info</label>
<input type="text" class="form-control " id="movie_additional_info" name="movie_additional_info" value="{{$movies->movie_additional_info}}">
@if($errors->has('movie_additional_info'))
<small>{{ $errors->first('movie_additional_info') }}</small>
@endif
</div>

<div class="form-group">
<label for="certificate_ID">Certificate</label>
{!! Form::select('certificate_ID',$certificates, null,['class' => 'form-control', 'value' => $movies->certificate_ID]) !!}
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
<select name="movie_status" id="movie_status" class="form-control" value="{{$movies->movie_status}}">
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
</select>
@if($errors->has('movie_status'))
<small>{{ $errors->first('movie_status') }}</small>
@endif
</div>

<button type="submit" class="btn btn-primary">Save</button>
<a href="{{url('movie')}}" class="btn btn-default" role="button">Cancel</a>
</div>
</div>
</form>
@endsection