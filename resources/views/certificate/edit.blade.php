@extends('layouts.base')
@section('body')
<div class="container">

<h2>Edit Certificate</h2>

{!! Form::model($certificates,['method'=>'PATCH','route' => ['certificate.update',$certificates->certificate_ID]]) !!}

<div class="form-group">
<label for="certificate_name" class="control-label">Name</label>
<input type="text" class="form-control" id="certificate_name" name="certificate_name" value="{{$certificates->certificate_name}}">
@if($errors->has('certificate_name'))
<small>{{ $errors->first('certificate_name') }}</small>
@endif
</div>

<div class="form-group">
<label for="certificate_status" class="control-label">Status</label>
<select name="certificate_status" id="certificate_status" class="form-control" value="{{$certificates->certificate_status}}">
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
</select>
@if($errors->has('certificate_status'))
<small>{{ $errors->first('certificate_status') }}</small>
@endif
</div>

<button type="submit" class="btn btn-primary">Save</button>
<a href="{{url('producer')}}" class="btn btn-default" role="button">Cancel</a>
</div>
</div>
</form>
@endsection