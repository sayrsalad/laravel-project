$(document).ready(function() {
	$.ajax({
			type: "GET",
			url: "/movie/all",
			dataType: 'json',
			success: function (data) {
					console.log(data);
					$.each(data, function(key, value) {
						console.log(value);
						var id = value.id;
						var tr = $("<tr>");
						tr.append($("<td>").html(value.movie_ID));
						tr.append($("<td>").html(value.movie_title));
						tr.append($("<td>").html(value.genre_ID));
						tr.append($("<td>").html(value.movie_story));
						tr.append($("<td>").html(value.movie_release_date));
						tr.append($("<td>").html(value.movie_film_duration));
						tr.append($("<td>").html(value.movie_additional_info));
						tr.append($("<td>").html(value.certificate_ID));
						tr.append($("<td>").html(value.movie_poster));
						tr.append($("<td>").html(value.movie_status));
						tr.append("<td align='center'><a href="+'/movie/'+value.movie_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
						
						if (value.deleted_at == true) {
							tr.append("<td align='center'><a href="+'/movie/'+value.movie_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
						} else {
							tr.append("<td align='center'><a href="+'/movie/'+value.movie_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
						}

						$("#mbody").append(tr);
			});
				},
			error: function(){
				console.log('AJAX load did not work');
				alert("error");
			}
	});
});


$(document).ready(function() {
	$.ajax({
			type: "GET",
			url: "/actor/all",
			dataType: 'json',
			success: function (data) {
					console.log(data);
					$.each(data, function(key, value) {
						console.log(value);
						var id = value.id;
						var tr = $("<tr>");
						tr.append($("<td>").html(value.actor_ID));
						tr.append($("<td>").html(value.actor_fname));
						tr.append($("<td>").html(value.actor_lname));
						tr.append($("<td>").html(value.actor_notes));
						tr.append($("<td>").html(value.actor_img));
						tr.append($("<td>").html(value.actor_status));

						tr.append("<td align='center'><a href="+'/movie/'+value.actor_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
						

						if (value.deleted_at == true) {
							tr.append("<td align='center'><a href="+'/movie/'+value.actor_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
						} else {
							tr.append("<td align='center'><a href="+'/movie/'+value.actor_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
						}

						$("#abody").append(tr);
						
			});
				},
			error: function(){
				console.log('AJAX load did not work');
				alert("error");
			}
	});
});


$(document).ready(function() {
	$.ajax({
			type: "GET",
			url: "/producer/all",
			dataType: 'json',
			success: function (data) {
					console.log(data);
					$.each(data, function(key, value) {
						console.log(value);
						var id = value.id;
						var tr = $("<tr>");
						tr.append($("<td>").html(value.producer_ID));
						tr.append($("<td>").html(value.producer_name));
						tr.append($("<td>").html(value.producer_email_address));
						tr.append($("<td>").html(value.producer_website));
						tr.append($("<td>").html(value.producer_status));

						tr.append("<td align='center'><a href="+'/movie/'+value.producer_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
						

						if (value.deleted_at == true) {
							tr.append("<td align='center'><a href="+'/movie/'+value.producer_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
						} else {
							tr.append("<td align='center'><a href="+'/movie/'+value.producer_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
						}

						$("#pbody").append(tr);
						
			});
				},
			error: function(){
				console.log('AJAX load did not work');
				alert("error");
			}
	});
});