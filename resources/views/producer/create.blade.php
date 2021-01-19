@extends('layouts.base')
@section('body')
<div class="container">

<h2>Create New Producer</h2>
<form method="post" action="{{route('producer.store')}}" >
<input type="hidden" name="_token" value="{{ csrf_token() }}">

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
<label for="producer_webiste" class="control-label">Website</label>
<input type="text" class="form-control " id="producer_webiste" name="producer_webiste" value="{{old('producer_webiste')}}">
@if($errors->has('producer_webiste'))
<small>{{ $errors->first('producer_webiste') }}</small>
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

<button type="submit" class="btn btn-primary">Save</button>
<a href="{{url('producer')}}" class="btn btn-default" role="button">Cancel</a>
</div>
</div>
</form>
@endsection