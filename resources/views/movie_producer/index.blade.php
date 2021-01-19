@extends('layouts.base')
@section('body')

<div class="container">
<a href="{{route('movie_producer.create')}}" class="btn btn-primary a-btn-slide-text">
<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
<span><strong>ADD</strong></span>
</a>
@if ($message = Session::get('success'))
<div class="alert alert-success alert-block">
<button type="button" class="close" data-dismiss="alert">×</button>
<strong>{{ $message }}</strong>
</div>
@endif

<div class="table-responsive">
	<table class="table table-striped table-hover">
		<thead>
			<tr>
			<th>Movie</th>
			<th>Producer</th>
			</tr>
		</thead>
		<tbody>

		@foreach($movies as $movie)

		<tr>
			<td>{{$movie->movie_title}}</td>

			<td>
			@foreach($movie->producers as $producer)
				{{$producer->producer_name}}<br>
			@endforeach
			</td>

		@endforeach

		</tbody>
	</table>
</div>

<div>

</div>

</div>
@endsection

</body>
</html>