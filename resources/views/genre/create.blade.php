@extends('layouts.base')
@section('body')
<div class="container">

<h2>Create New Genre</h2>
<form method="post" action="{{route('genre.store')}}" >
<input type="hidden" name="_token" value="{{ csrf_token() }}">

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

<button type="submit" class="btn btn-primary">Save</button>
<a href="{{url('genre')}}" class="btn btn-default" role="button">Cancel</a>
</div>
</div>
</form>
@endsection