//Create
function addButtonHandler(e){
	if (document.getElementById("form").value == "add") {
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

              	tr.append("<td align='center'><a href=# id='editMovieButton' data-toggle='modal' data-target='#movieModal' data-id="+ data.movie_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");

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

		} else if (e.data.objId == 'submitActor') {
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
					$('#actorModal').each(function(){
						$(this).modal('hide'); });
					var tr = $("<tr>");
					tr.append($("<td>").html(data.actor_ID));
					tr.append($("<td>").html(data.actor_fname));
					tr.append($("<td>").html(data.actor_lname));
					tr.append($("<td>").html(data.actor_notes));
					tr.append($("<td>").html(data.actor_img));
					tr.append($("<td>").html(data.actor_status));

					tr.append("<td align='center'><a href=# id='editActorButton' data-toggle='modal' data-target='#actorModal' data-id="+ data.actor_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


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

		} else if (e.data.objId == 'submitProducer') {
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
					$('#producerModal').each(function(){
						$(this).modal('hide'); });
					var tr = $("<tr>");
					tr.append($("<td>").html(data.producer_ID));
					tr.append($("<td>").html(data.producer_name));
					tr.append($("<td>").html(data.producer_email_address));
					tr.append($("<td>").html(data.producer_website));
					tr.append($("<td>").html(data.producer_status));

					tr.append("<td align='center'><a href=# id='editProducerButton' data-toggle='modal' data-target='#producerModal' data-id="+ data.producer_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


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

		} else if (e.data.objId == 'submitGenre') {
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
					$('#genreModal').each(function(){
						$(this).modal('hide'); });
					var tr = $("<tr>");
					tr.append($("<td>").html(data.genre_ID));
					tr.append($("<td>").html(data.genre_name));
					tr.append($("<td>").html(data.genre_status));

					tr.append("<td align='center'><a href=# id='editGenreButton' data-toggle='modal' data-target='#genreModal' data-id="+ data.genre_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


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

		} else if (e.data.objId == 'submitCertificate') {
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

					tr.append("<td align='center'><a href=# id='editCertificaButton' data-toggle='modal' data-target='#certificateModal' data-id="+ data.certificate_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


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

		} else if (e.data.objId == 'submitRole') {
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

					tr.append("<td align='center'><a href=# id='editRoleButton' data-toggle='modal' data-target='#roleModal' data-id="+ data.role_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


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

		}
	}

}

//Edit 
function updateButtonHandler(e) {
	e.preventDefault();
	if (document.getElementById("form").value == "update") {
		if (e.data.objId == 'addMovieButton') {
			
		} 
	}

}


function modalButtonHandler(e){
	e.preventDefault();
	if (e.data.objId == 'addMovieButton') {
		$(".modal-header h4").html("Create New Movie");
		$(".modal-footer #submitMovie").html("Add");
		document.getElementById("form").value = "add";
	} else if (e.data.objId == 'editMovieButton') {
		$(".modal-header h4").html("Edit Movie Details");
		$(".modal-footer #submitMovie").html("Update");
		document.getElementById("form").value = "update";
	} else if (e.data.objId == 'addActorButton') {
		$(".modal-header h4").html("Create New Actor");
	} else if (e.data.objId == 'editActorButton') {
		$(".modal-header h4").html("Edit Actor Details");
	} else if (e.data.objId == 'addProducerButton') {
		$(".modal-header h4").html("Create New Producer");
	} else if (e.data.objId == 'editProducerButton') {
		$(".modal-header h4").html("Edit Producer Details");
	} else if (e.data.objId == 'addGenreButton') {
		$(".modal-header h4").html("Create New Genre");
	} else if (e.data.objId == 'editGenreButton') {
		$(".modal-header h4").html("Edit Genre Details");
	} else if (e.data.objId == 'addCertificateButton') {
		$(".modal-header h4").html("Create New Certificate");
	} else if (e.data.objId == 'editCertificaButton') {
		$(".modal-header h4").html("Edit Certificate Details");
	} else if (e.data.objId == 'addRoleButton') {
		$(".modal-header h4").html("Create New Role");
	} else if (e.data.objId == 'editRoleButton') {
		$(".modal-header h4").html("Edit Role Details");
	}
	
}

function modalHandler(e){
	e.preventDefault();
	console.log(e);
	if (e.type == 'hidden') {
		if (e.data.objId == 'movieModal') {
			$("#mform").trigger("reset");
			if (document.getElementById("movie_ID")) {
				var movie_ID = document.getElementById("movie_ID");
				movie_ID.remove();
			}

		} else if (e.data.objId == 'actorModal') {
			$("#aform").trigger("reset");
			if (document.getElementById("actor_ID")) {
				var actor_ID = document.getElementById("actor_ID");
				actor_ID.remove();
			}

		} else if (e.data.objId == 'producerModal') {
			$("#pform").trigger("reset");
			if (document.getElementById("producer_ID")) {
				var producer_ID = document.getElementById("producer_ID");
				producer_ID.remove();
			}

		} else if (e.data.objId == 'genreModal') {
			$("#gform").trigger("reset");
			if (document.getElementById("genre_ID")) {
				var genre_ID = document.getElementById("genre_ID");
				genre_ID.remove();
			}

		} else if (e.data.objId == 'certificateModal') {
			$("#cform").trigger("reset");
			if (document.getElementById("certificate_ID")) {
				var certificate_ID = document.getElementById("certificate_ID");
				certificate_ID.remove();
			}

		} else if (e.data.objId == 'roleModal') {
			$("#rform").trigger("reset");
			if (document.getElementById("role_ID")) {
				var role_ID = document.getElementById("role_ID");
				role_ID.remove();
			}

		}

	} else if (e.type == 'shown') {

		if (e.data.objId == 'movieModal') {
			var element = document.getElementById("movieModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				console.log(id);
				$('<input>').attr({type: 'hidden', id:'movie_ID',name: 'movie_ID',value: id}).appendTo('#mform');
				$.ajax({
					type: "GET",
					url: "/movie/" + id + "/edit",
					success: function(data){
						console.log(data);
						$("#movie_title").val(data.movie_title);
						$("#genre_ID").val(data.genre_ID);
						$("#movie_story").val(data.movie_story);
						$("#movie_release_date").val(data.movie_release_date);
						$("#movie_film_duration").val(data.movie_film_duration);
						$("#movie_additional_info").val(data.movie_additional_info);
						$("#certificate_ID").val(data.certificate_ID);
						$("#movie_status").val(data.movie_status);
					},
					error: function(){
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'actorModal') {
			var element = document.getElementById("actorModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				console.log(id);
				$('<input>').attr({type: 'hidden', id:'actor_ID',name: 'actor_ID',value: id}).appendTo('#aform');
				$.ajax({
					type: "GET",
					url: "/actor/" + id + "/edit",
					success: function(data){
						console.log(data);
						$("#actor_fname").val(data.actor_fname);
						$("#actor_lname").val(data.actor_lname);
						$("#actor_notes").val(data.actor_notes);
						// $("#actor_img").val(data.actor_img);
						$("#actor_status").val(data.actor_status);
					},
					error: function(){
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'producerModal') {
			var element = document.getElementById("producerModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				console.log(id);
				$('<input>').attr({type: 'hidden', id:'producer_ID',name: 'producer_ID',value: id}).appendTo('#pform');
				$.ajax({
					type: "GET",
					url: "/producer/" + id + "/edit",
					success: function(data){
						console.log(data);
						$("#producer_name").val(data.producer_name);
						$("#producer_email_address").val(data.producer_email_address);
						$("#producer_website").val(data.producer_website);
						$("#producer_status").val(data.producer_status);
					},
					error: function(){
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'genreModal') {
			var element = document.getElementById("genreModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				console.log(id);
				$('<input>').attr({type: 'hidden', id:'genre_ID',name: 'genre_ID',value: id}).appendTo('#gform');
				$.ajax({
					type: "GET",
					url: "/genre/" + id + "/edit",
					success: function(data){
						console.log(data);
						$("#genre_name").val(data.genre_name);
						$("#genre_status").val(data.genre_status);
					},
					error: function(){
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'certificateModal') {
			var element = document.getElementById("certificateModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				console.log(id);
				$('<input>').attr({type: 'hidden', id:'certificate_ID',name: 'certificate_ID',value: id}).appendTo('#cform');
				$.ajax({
					type: "GET",
					url: "/certificate/" + id + "/edit",
					success: function(data){
						console.log(data);
						$("#certificate_name").val(data.certificate_name);
						$("#certificate_status").val(data.certificate_status);
					},
					error: function(){
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'roleModal') {
			var element = document.getElementById("roleModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				console.log(id);
				$('<input>').attr({type: 'hidden', id:'role_ID',name: 'role_ID',value: id}).appendTo('#rform');
				$.ajax({
					type: "GET",
					url: "/role/" + id + "/edit",
					success: function(data){
						console.log(data);
						$("#role_name").val(data.role_name);
						$("#role_status").val(data.role_status);
					},
					error: function(){
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		}

	}

}


$(document).ready(function() {
	
	$('#addMovieButton').on({'click':modalButtonHandler},{'objId':'addMovieButton'});
	$(document).on('click','#editMovieButton',{'objId':'editMovieButton'},modalButtonHandler);
	$('#addActorButton').on({'click':modalButtonHandler},{'objId':'addActorButton'});
	$(document).on('click','#editActorButton',{'objId':'editActorButton'},modalButtonHandler);
	$('#addProducerButton').on({'click':modalButtonHandler},{'objId':'addProducerButton'});
	$(document).on('click','#editProducerButton',{'objId':'editProducerButton'},modalButtonHandler);
	$('#addGenreButton').on({'click':modalButtonHandler},{'objId':'addGenreButton'});
	$(document).on('click','#editGenreButton',{'objId':'editGenreButton'},modalButtonHandler);
	$('#addCertificateButton').on({'click':modalButtonHandler},{'objId':'addCertificateButton'});
	$(document).on('click','#editCertificaButton',{'objId':'editCertificaButton'},modalButtonHandler);
	$('#addRoleButton').on({'click':modalButtonHandler},{'objId':'addRoleButton'});
	$(document).on('click','#editRoleButton',{'objId':'editRoleButton'},modalButtonHandler);


	$('#movieModal').on({'hidden.bs.modal':modalHandler},{'objId':'movieModal'});
	$('#actorModal').on({'hidden.bs.modal':modalHandler},{'objId':'actorModal'});
	$('#producerModal').on({'hidden.bs.modal':modalHandler},{'objId':'producerModal'});
	$('#genreModal').on({'hidden.bs.modal':modalHandler},{'objId':'genreModal'});
	$('#certificateModal').on({'hidden.bs.modal':modalHandler},{'objId':'certificateModal'});
	$('#roleModal').on({'hidden.bs.modal':modalHandler},{'objId':'roleModal'});
	
	$('#movieModal').on({'shown.bs.modal':modalHandler},{'objId':'movieModal'});
	$('#actorModal').on({'shown.bs.modal':modalHandler},{'objId':'actorModal'});
	$('#producerModal').on({'shown.bs.modal':modalHandler},{'objId':'producerModal'});
	$('#genreModal').on({'shown.bs.modal':modalHandler},{'objId':'genreModal'});
	$('#certificateModal').on({'shown.bs.modal':modalHandler},{'objId':'certificateModal'});
	$('#roleModal').on({'shown.bs.modal':modalHandler},{'objId':'roleModal'});

	//Add Buttons
	$('#submitMovie').on({'click':addButtonHandler},{'objId':'submitMovie'});
	$('#submitActor').on({'click':addButtonHandler},{'objId':'submitActor'});
	$('#submitProducer').on({'click':addButtonHandler},{'objId':'submitProducer'});
	$('#submitGenre').on({'click':addButtonHandler},{'objId':'submitGenre'});
	$('#submitCertificate').on({'click':addButtonHandler},{'objId':'submitCertificate'});
	$('#submitRole').on({'click':addButtonHandler},{'objId':'submitRole'});

	//Edit Buttons
	$('#submitMovie').on({'click':updateButtonHandler},{'objId':'submitMovie'});
	$('#submitActor').on({'click':updateButtonHandler},{'objId':'submitActor'});
	$('#submitProducer').on({'click':updateButtonHandler},{'objId':'submitProducer'});
	$('#submitGenre').on({'click':updateButtonHandler},{'objId':'submitGenre'});
	$('#submitCertificate').on({'click':updateButtonHandler},{'objId':'submitCertificate'});
	$('#submitRole').on({'click':updateButtonHandler},{'objId':'submitRole'});

	$.ajax({
		type: "GET",
		url: "/movie/all",
		dataType: 'json',
		success: function (data) {
			console.log(data);
			$.each(data, function(key, value) {
				if (key == "movies") {
					$.each(value, function(key, value) {

						console.log(value);
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
						tr.append("<td align='center'><a href=# id='editMovieButton' data-toggle='modal' data-target='#movieModal' data-id="+ value.movie_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");

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

				tr.append("<td align='center'><a href=# id='editActorButton' data-toggle='modal' data-target='#actorModal' data-id="+ value.actor_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


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

				tr.append("<td align='center'><a href=# id='editProducerButton' data-toggle='modal' data-target='#producerModal' data-id="+ value.producer_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


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

				tr.append("<td align='center'><a href=# id='editGenreButton' data-toggle='modal' data-target='#genreModal' data-id="+ value.genre_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				

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

				tr.append("<td align='center'><a href=# id='editCertificaButton' data-toggle='modal' data-target='#certificateModal' data-id="+ value.certificate_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


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

				tr.append("<td align='center'><a href=# id='editRoleButton' data-toggle='modal' data-target='#roleModal' data-id="+ value.role_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


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




