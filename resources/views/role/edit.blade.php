@extends('layouts.base')
@section('body')
<div class="container">

<h2>Edit Role</h2>

{!! Form::model($roles,['method'=>'PATCH','route' => ['role.update',$roles->role_ID]]) !!}

<div class="form-group">
<label for="role_name" class="control-label">Name</label>
<input type="text" class="form-control" id="role_name" name="role_name" value="{{$roles->role_name}}">
@if($errors->has('role_name'))
<small>{{ $errors->first('role_name') }}</small>
@endif
</div>

<div class="form-group">
<label for="role_status" class="control-label">Status</label>
<select name="role_status" id="role_status" class="form-control" value="{{$roles->role_status}}">
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
</select>
@if($errors->has('role_status'))
<small>{{ $errors->first('role_status') }}</small>
@endif
</div>

<button type="submit" class="btn btn-primary">Save</button>
<a href="{{url('producer')}}" class="btn btn-default" role="button">Cancel</a>
</div>
</div>
</form>
@endsection