@extends('layouts.base')
@section('body')
<div class="container">

<h2>Edit Genre</h2>

{!! Form::model($genres,['method'=>'PATCH','route' => ['genre.update',$genres->genre_ID]]) !!}

<div class="form-group">
<label for="genre_name" class="control-label">Name</label>
<input type="text" class="form-control" id="genre_name" name="genre_name" value="{{$genres->genre_name}}">
@if($errors->has('genre_name'))
<small>{{ $errors->first('genre_name') }}</small>
@endif
</div>

<div class="form-group">
<label for="genre_status" class="control-label">Status</label>
<select name="genre_status" id="genre_status" class="form-control" value="{{$genres->genre_status}}">
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
</select>
@if($errors->has('genre_status'))
<small>{{ $errors->first('genre_status') }}</small>
@endif
</div>

<button type="submit" class="btn btn-primary">Save</button>
<a href="{{url('producer')}}" class="btn btn-default" role="button">Cancel</a>
</div>
</div>
</form>
@endsection