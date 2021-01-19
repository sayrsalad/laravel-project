function submitButtonHandler(e){
	if (e.data.objId == 'submitMovie') {
		e.preventDefault();
		var data = $("#mform").serialize();
		console.log(data);
		$.ajax({
			type: "post",
			url: "/movie",
			data: data,
			headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
			dataType: "json",
			success: function(data) {
				console.log(data);
            // $("myModal").modal("hide");
            $('#movieModal').each(function(){
            	$(this).modal('hide'); });
              // $.each(data, function(key, value){
              	var tr = $("<tr>");
              	tr.append($("<td>").html(data.movie_ID));
              	tr.append($("<td>").html(data.movie_title));
              	tr.append($("<td>").html(data.genre_ID));
              	tr.append($("<td>").html(data.movie_story));
              	tr.append($("<td>").html(data.movie_release_date));
              	tr.append($("<td>").html(data.movie_film_duration));
              	tr.append($("<td>").html(data.movie_additional_info));
              	tr.append($("<td>").html(data.certificate_ID));
              	tr.append($("<td>").html(data.movie_poster));
              	tr.append($("<td>").html(data.movie_status));

              	tr.append("<td align='center'><a href="+'/movie/'+data.movie_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");

              	if (data.deleted_at == true) {
              		tr.append("<td align='center'><a href="+'/movie/'+data.movie_ID+'/restore'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
              	} else {
              		tr.append("<td align='center'><a href="+'/movie/'+data.movie_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
              	}

              	$('#mtable').prepend(tr);
              },
              error: function(error) {
              	console.log('error');
              }
          });
	} 
	
}


function modalButtonHandler(e){
	if (e.data.objId == 'addMovieButton') {
		$(".modal-header h4").html("Create New Movie");
	} else if (e.data.objId == 'editMovieButton') {
		$(".modal-header h4").html("Edit Movie");
	}
	
}

$(document).ready(function() {

	$('#addMovieButton').on({'click':modalButtonHandler},{'objId':'addMovieButton'});

	$(document).on('click','#editMovieButton',{'objId':'editMovieButton'},modalButtonHandler);

	$('#submitMovie').on({'click':submitButtonHandler},{'objId':'submitMovie'});

	$.ajax({
		type: "GET",
		url: "/movie/all",
		dataType: 'json',
		success: function (data) {
			console.log(data);
			$.each(data, function(key, value) {
				if (key == "movies") {
					$.each(value, function(key, value) {

							// console.log(value);
							// var id = value.id;
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
							tr.append("<td align='center' id='editMovieButton'><a href=# data-toggle='modal' data-target='#movieModal' id='editMovieButton' data-id="+ value.movie_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
							
							if (value.deleted_at == true) {
								tr.append("<td align='center'><a href="+'/movie/'+value.movie_ID+'/restore'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
							} else {
								tr.append("<td align='center'><a href="+'/movie/'+value.movie_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
							}

							$("#mbody").append(tr);


						});
				} else if (key == 'genres') {
					$.each(value, function(key, value) {

						var option = "<option value='"+value.genre_ID+"'>"+value.genre_name+"</option>"; 

						$("#genre_ID").append(option);

					});
				} else {
					$.each(value, function(key, value) {

						var option = "<option value='"+value.certificate_ID+"'>"+value.certificate_name+"</option>"; 

						$("#certificate_ID").append(option);

					});
				}
			});
		},
		error: function(){
			console.log('AJAX load did not work');
			alert("error");
		}
	});

	$.ajax({
		type: "GET",
		url: "/actor/all",
		dataType: 'json',
		success: function (data) {
			console.log(data);
			$.each(data, function(key, value) {
				// console.log(value);
				// var id = value.id;
				var tr = $("<tr>");
				tr.append($("<td>").html(value.actor_ID));
				tr.append($("<td>").html(value.actor_fname));
				tr.append($("<td>").html(value.actor_lname));
				tr.append($("<td>").html(value.actor_notes));
				tr.append($("<td>").html(value.actor_img));
				tr.append($("<td>").html(value.actor_status));

				tr.append("<td align='center'><a href="+'/actor/'+value.actor_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (value.deleted_at == true) {
					tr.append("<td align='center'><a href="+'/actor/'+value.actor_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href="+'/actor/'+value.actor_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				}

				$("#abody").append(tr);

			});
		},
		error: function(){
			console.log('AJAX load did not work');
			alert("error");
		}
	});

	$.ajax({
		type: "GET",
		url: "/producer/all",
		dataType: 'json',
		success: function (data) {
			console.log(data);
			$.each(data, function(key, value) {
				// console.log(value);
				// var id = value.id;
				var tr = $("<tr>");
				tr.append($("<td>").html(value.producer_ID));
				tr.append($("<td>").html(value.producer_name));
				tr.append($("<td>").html(value.producer_email_address));
				tr.append($("<td>").html(value.producer_website));
				tr.append($("<td>").html(value.producer_status));

				tr.append("<td align='center'><a href="+'/producer/'+value.producer_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (value.deleted_at == true) {
					tr.append("<td align='center'><a href="+'/producer/'+value.producer_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href="+'/producer/'+value.producer_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				}

				$("#pbody").append(tr);

			});
		},
		error: function(){
			console.log('AJAX load did not work');
			alert("error");
		}
	});

	$.ajax({
		type: "GET",
		url: "/genre/all",
		dataType: 'json',
		success: function (data) {
			console.log(data);
			$.each(data, function(key, value) {
				// console.log(value);
				// var id = value.id;
				var tr = $("<tr>");
				tr.append($("<td>").html(value.genre_ID));
				tr.append($("<td>").html(value.genre_name));
				tr.append($("<td>").html(value.genre_status));

				tr.append("<td align='center'><a href="+'/genre/'+value.genre_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				

				if (value.deleted_at == true) {
					tr.append("<td align='center'><a href="+'/genre/'+value.genre_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href="+'/genre/'+value.genre_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				}

				$("#gbody").append(tr);
				
			});
		},
		error: function(){
			console.log('AJAX load did not work');
			alert("error");
		}
	});

	$.ajax({
		type: "GET",
		url: "/certificate/all",
		dataType: 'json',
		success: function (data) {
			console.log(data);
			$.each(data, function(key, value) {
				console.log(value);
				var id = value.id;
				var tr = $("<tr>");
				tr.append($("<td>").html(value.certificate_ID));
				tr.append($("<td>").html(value.certificate_name));
				tr.append($("<td>").html(value.certificate_status));

				tr.append("<td align='center'><a href="+'/certificate/'+value.certificate_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (value.deleted_at == true) {
					tr.append("<td align='center'><a href="+'/certificate/'+value.certificate_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href="+'/certificate/'+value.certificate_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				}

				$("#cbody").append(tr);

			});
		},
		error: function(){
			console.log('AJAX load did not work');
			alert("error");
		}
	});

	$.ajax({
		type: "GET",
		url: "/role/all",
		dataType: 'json',
		success: function (data) {
			console.log(data);
			$.each(data, function(key, value) {
				// console.log(value);
				// var id = value.id;
				var tr = $("<tr>");
				tr.append($("<td>").html(value.role_ID));
				tr.append($("<td>").html(value.role_name));
				tr.append($("<td>").html(value.role_status));

				tr.append("<td align='center'><a href="+'/certificate/'+value.role_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (value.deleted_at == true) {
					tr.append("<td align='center'><a href="+'/certificate/'+value.role_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href="+'/certificate/'+value.role_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				}

				$("#rbody").append(tr);

			});
		},
		error: function(){
			console.log('AJAX load did not work');
			alert("error");
		}
	});

	// $("#submitMovie").on('click', function(e) {
	// 	e.preventDefault();
	// 	var data = $("#mform").serialize();
	// 	console.log(data);
	// 	$.ajax({
	// 		type: "post",
	// 		url: "/movie",
	// 		data: data,
	// 		headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
	// 		dataType: "json",
	// 		success: function(data) {
	// 			console.log(data);
 //            // $("myModal").modal("hide");
 //            $('#movieModal').each(function(){
 //            	$(this).modal('hide'); });
 //              // $.each(data, function(key, value){
 //              	var tr = $("<tr>");
 //              	tr.append($("<td>").html(data.movie_ID));
 //              	tr.append($("<td>").html(data.movie_title));
 //              	tr.append($("<td>").html(data.genre_ID));
 //              	tr.append($("<td>").html(data.movie_story));
 //              	tr.append($("<td>").html(data.movie_release_date));
 //              	tr.append($("<td>").html(data.movie_film_duration));
 //              	tr.append($("<td>").html(data.movie_additional_info));
 //              	tr.append($("<td>").html(data.certificate_ID));
 //              	tr.append($("<td>").html(data.movie_poster));
 //              	tr.append($("<td>").html(data.movie_status));

 //              	tr.append("<td align='center'><a href="+'/movie/'+data.movie_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");

 //              	if (data.deleted_at == true) {
 //              		tr.append("<td align='center'><a href="+'/movie/'+data.movie_ID+'/restore'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
 //              	} else {
 //              		tr.append("<td align='center'><a href="+'/movie/'+data.movie_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
 //              	}

 //              	$('#mtable').prepend(tr);
 //              },
 //              error: function(error) {
 //              	console.log('error');
 //              }
 //          });
	// });

	$("#submitActor").on('click', function(e) {
		e.preventDefault();
		var data = $("#aform").serialize();
		console.log(data);
		$.ajax({
			type: "post",
			url: "/actor",
			data: data,
			headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
			dataType: "json",
			success: function(data) {
				console.log(data);
				$('#myModal').each(function(){
					$(this).modal('hide'); });
				var tr = $("<tr>");
				tr.append($("<td>").html(data.actor_ID));
				tr.append($("<td>").html(data.actor_fname));
				tr.append($("<td>").html(data.actor_lname));
				tr.append($("<td>").html(data.actor_notes));
				tr.append($("<td>").html(data.actor_img));
				tr.append($("<td>").html(data.actor_status));

				tr.append("<td align='center'><a href="+'/actor/'+data.actor_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (data.deleted_at == true) {
					tr.append("<td align='center'><a href="+'/actor/'+data.actor_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href="+'/actor/'+data.actor_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				}

				$('#atable').prepend(tr);
			},
			error: function(error) {
				console.log('error');
			}
		});
	});

	$("#submitProducer").on('click', function(e) {
		e.preventDefault();
		var data = $("#pform").serialize();
		console.log(data);
		$.ajax({
			type: "post",
			url: "/producer",
			data: data,
			headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
			dataType: "json",
			success: function(data) {
				console.log(data);
				$('#myModal').each(function(){
					$(this).modal('hide'); });
				var tr = $("<tr>");
				tr.append($("<td>").html(data.producer_ID));
				tr.append($("<td>").html(data.producer_name));
				tr.append($("<td>").html(data.producer_email_address));
				tr.append($("<td>").html(data.producer_website));
				tr.append($("<td>").html(data.producer_status));

				tr.append("<td align='center'><a href="+'/producer/'+data.producer_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (data.deleted_at == true) {
					tr.append("<td align='center'><a href="+'/producer/'+data.producer_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href="+'/producer/'+data.producer_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				}

				$('#ptable').prepend(tr);
			},
			error: function(error) {
				console.log('error');
			}
		});
	});

	$("#submitGenre").on('click', function(e) {
		e.preventDefault();
		var data = $("#gform").serialize();
		console.log(data);
		$.ajax({
			type: "post",
			url: "/genre",
			data: data,
			headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
			dataType: "json",
			success: function(data) {
				console.log(data);
				$('#myModal').each(function(){
					$(this).modal('hide'); });
				var tr = $("<tr>");
				tr.append($("<td>").html(data.genre_ID));
				tr.append($("<td>").html(data.genre_name));
				tr.append($("<td>").html(data.genre_status));

				tr.append("<td align='center'><a href="+'/genre/'+data.genre_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (data.deleted_at == true) {
					tr.append("<td align='center'><a href="+'/genre/'+data.genre_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href="+'/genre/'+data.genre_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				}

				$('#gtable').prepend(tr);
			},
			error: function(error) {
				console.log('error');
			}
		});
	});

	$("#submitCertificate").on('click', function(e) {
		e.preventDefault();
		var data = $("#cform").serialize();
		console.log(data);
		$.ajax({
			type: "post",
			url: "/certificate",
			data: data,
			headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
			dataType: "json",
			success: function(data) {
				console.log(data);
				$('#myModal').each(function(){
					$(this).modal('hide'); });
				var tr = $("<tr>");
				tr.append($("<td>").html(data.certificate_ID));
				tr.append($("<td>").html(data.certificate_name));
				tr.append($("<td>").html(data.certificate_status));

				tr.append("<td align='center'><a href="+'/certificate/'+data.certificate_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (data.deleted_at == true) {
					tr.append("<td align='center'><a href="+'/certificate/'+data.certificate_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href="+'/certificate/'+data.certificate_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				}

				$('#ctable').prepend(tr);
			},
			error: function(error) {
				console.log('error');
			}
		});
	});

	$("#submitRole").on('click', function(e) {
		e.preventDefault();
		var data = $("#rform").serialize();
		console.log(data);
		$.ajax({
			type: "post",
			url: "/role",
			data: data,
			headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
			dataType: "json",
			success: function(data) {
				console.log(data);
				$('#myModal').each(function(){
					$(this).modal('hide'); });
				var tr = $("<tr>");
				tr.append($("<td>").html(data.role_ID));
				tr.append($("<td>").html(data.role_name));
				tr.append($("<td>").html(data.role_status));

				tr.append("<td align='center'><a href="+'/role/'+data.role_ID+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (data.deleted_at == true) {
					tr.append("<td align='center'><a href="+'/role/'+data.role_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href="+'/role/'+data.role_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				}

				$('#rtable').prepend(tr);
			},
			error: function(error) {
				console.log('error');
			}
		});
	});

	// $('th').on('click', function(){
	// 	var column = $(this).data('column')
	// 	var order = $(this).data('order')
	// 	var text = $(this).html()
	// 	text = text.substring(0, text.length - 1)

	// 	if(order == 'desc'){
	// 		$(this).data('order', "asc")
	// 		movies = movies.sort((a,b) => a[column] > b[column] ? 1 : -1)
	// 		text += '&#9660'

	// 	}else{
	// 		$(this).data('order', "desc")
	// 		movies = movies.sort((a,b) => a[column] < b[column] ? 1 : -1)
	// 		text += '&#9650'

	// 	}
	// 	$(this).html(text)
	// 	buildTable(movies)
	// })

	// buildTable(movies)

	// function buildTable(data){
	// 	var table = document.getElementById('mtable')
	// 	table.innerHTML = ''
	// 	for (var i = 0; i < data.length; i++){
	// 		var row = `<tr>
	// 						<td>${data[i].name}</td>
	// 						<td>${data[i].age}</td>
	// 						<td>${data[i].birthdate}</td>
	// 				  </tr>`
	// 		table.innerHTML += row


	// 	}
	// }

});




