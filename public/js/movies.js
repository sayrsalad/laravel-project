function submitButtonHandler(e) {
	e.preventDefault();
	if (document.getElementById("form").value == "add") {
		if (e.data.objId == 'submitMovie' && validateForm('#mform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var data = $("#mform").serialize();
			console.log(data);
			$.ajax({
				type: "post",
				url: "/movie",
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					// console.log(data);
					// $("myModal").modal("hide");
					$('#movieModal').each(function () {
						$(this).modal('hide');
					});
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

					tr.append("<td align='center'><a href=# id='editMovieButton' data-toggle='modal' data-target='#movieModal' data-id=" + data.movie_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");

					if (data.deleted_at == true) {
						// tr.append("<td align='center'><a href="+'/movie/'+data.movie_ID+'/restore'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
					} else {
						tr.append("<td align='center'><a href='#' class='deleteMovieBtn' data-id=" + data.movie_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
					}

					$('#mtable').prepend(tr);
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else if (e.data.objId == 'submitActor' && validateForm('#aform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var data = $("#aform").serialize();
			console.log(data);
			$.ajax({
				type: "post",
				url: "/actor",
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					console.log(data);
					$('#actorModal').each(function () {
						$(this).modal('hide');
					});
					var tr = $("<tr>");
					tr.append($("<td>").html(data.actor_ID));
					tr.append($("<td>").html(data.actor_fname));
					tr.append($("<td>").html(data.actor_lname));
					tr.append($("<td>").html(data.actor_notes));
					tr.append($("<td>").html(data.actor_img));
					tr.append($("<td>").html(data.actor_status));

					tr.append("<td align='center'><a href=# id='editActorButton' data-toggle='modal' data-target='#actorModal' data-id=" + data.actor_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


					if (data.deleted_at == true) {
						// tr.append("<td align='center'><a href="+'/actor/'+data.actor_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
					} else {
						tr.append("<td align='center'><a href='#' class='deleteActorBtn' data-id=" + data.actor_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
					}

					$('#atable').prepend(tr);
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else if (e.data.objId == 'submitProducer' && validateForm('#pform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var data = $("#pform").serialize();
			console.log(data);
			$.ajax({
				type: "post",
				url: "/producer",
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					console.log(data);
					$('#producerModal').each(function () {
						$(this).modal('hide');
					});
					var tr = $("<tr>");
					tr.append($("<td>").html(data.producer_ID));
					tr.append($("<td>").html(data.producer_name));
					tr.append($("<td>").html(data.producer_email_address));
					tr.append($("<td>").html(data.producer_website));
					tr.append($("<td>").html(data.producer_status));

					tr.append("<td align='center'><a href=# id='editProducerButton' data-toggle='modal' data-target='#producerModal' data-id=" + data.producer_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


					if (data.deleted_at == true) {
						tr.append("<td align='center'><a href=" + '/producer/' + data.producer_ID + '/delete' + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
					} else {
						tr.append("<td align='center'><a href='#' class='deleteProducerBtn' data-id=" + data.producer_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
					}

					$('#ptable').prepend(tr);
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else if (e.data.objId == 'submitGenre' && validateForm('#gform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var data = $("#gform").serialize();
			console.log(data);
			$.ajax({
				type: "post",
				url: "/genre",
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					console.log(data);
					$('#genreModal').each(function () {
						$(this).modal('hide');
					});
					var tr = $("<tr>");
					tr.append($("<td>").html(data.genre_ID));
					tr.append($("<td>").html(data.genre_name));
					tr.append($("<td>").html(data.genre_status));

					tr.append("<td align='center'><a href=# id='editGenreButton' data-toggle='modal' data-target='#genreModal' data-id=" + data.genre_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


					if (data.deleted_at == true) {
						// tr.append("<td align='center'><a href="+'/genre/'+data.genre_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
					} else {
						tr.append("<td align='center'><a href='#' class='deleteGenreBtn' data-id=" + data.genre_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
					}

					$('#gtable').prepend(tr);
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else if (e.data.objId == 'submitCertificate' && validateForm('#cform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var data = $("#cform").serialize();
			console.log(data);
			$.ajax({
				type: "post",
				url: "/certificate",
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					console.log(data);
					$('#myModal').each(function () {
						$(this).modal('hide');
					});
					var tr = $("<tr>");
					tr.append($("<td>").html(data.certificate_ID));
					tr.append($("<td>").html(data.certificate_name));
					tr.append($("<td>").html(data.certificate_status));

					tr.append("<td align='center'><a href=# id='editCertificaButton' data-toggle='modal' data-target='#certificateModal' data-id=" + data.certificate_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


					if (data.deleted_at == true) {
						tr.append("<td align='center'><a href=" + '/certificate/' + data.certificate_ID + '/delete' + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
					} else {
						tr.append("<td align='center'><a href='#' class='deleteCertificateBtn' data-id=" + data.certificate_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
					}

					$('#ctable').prepend(tr);
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else if (e.data.objId == 'submitRole' && validateForm('#rform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var data = $("#rform").serialize();
			console.log(data);
			$.ajax({
				type: "post",
				url: "/role",
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					console.log(data);
					$('#myModal').each(function () {
						$(this).modal('hide');
					});
					var tr = $("<tr>");
					tr.append($("<td>").html(data.role_ID));
					tr.append($("<td>").html(data.role_name));
					tr.append($("<td>").html(data.role_status));

					tr.append("<td align='center'><a href=# id='editRoleButton' data-toggle='modal' data-target='#roleModal' data-id=" + data.role_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


					if (data.deleted_at == true) {
						tr.append("<td align='center'><a href=" + '/role/' + data.role_ID + '/delete' + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
					} else {
						tr.append("<td align='center'><a href='#' class='deleteRoleBtn' data-id=" + data.role_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
					}

					$('#rtable').prepend(tr);
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else {
			alert('Make sure you have completed all the required information.');
			document.getElementById(e.data.objId).removeAttribute("data-dismiss");
		}

	} else if (document.getElementById("form").value == "update") {
		if (e.data.objId == 'submitMovie' && validateForm('#mform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var id = $('#movie_ID').val();
			var data = $("#mform").serialize();
			console.log(data);
			$.ajax({
				type: "PUT",
				url: "/movie/" + id,
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					console.log(data);
					$('#movieModal').each(function () {
						$(this).modal('hide');
					});
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else if (e.data.objId == 'submitActor' && validateForm('#aform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var id = $('#actor_ID').val();
			var data = $("#aform").serialize();
			console.log(data);
			$.ajax({
				type: "PUT",
				url: "/actor/" + id,
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					console.log(data);
					$('#actorModal').each(function () {
						$(this).modal('hide');
					});
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else if (e.data.objId == 'submitProducer' && validateForm('#pform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var id = $('#producer_ID').val();
			var data = $("#pform").serialize();
			console.log(data);
			$.ajax({
				type: "PUT",
				url: "/producer/" + id,
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					console.log(data);
					$('#producerModal').each(function () {
						$(this).modal('hide');
					});
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else if (e.data.objId == 'submitGenre' && validateForm('#gform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var id = $('#genre_ID').val();
			var data = $("#gform").serialize();
			console.log(data);
			$.ajax({
				type: "PUT",
				url: "/genre/" + id,
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					console.log(data);
					$('#genreModal').each(function () {
						$(this).modal('hide');
					});
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else if (e.data.objId == 'submitCertificate' && validateForm('#cform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var id = $('#certificate_ID').val();
			var data = $("#cform").serialize();
			console.log(data);
			$.ajax({
				type: "PUT",
				url: "/certificate/" + id,
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					console.log(data);
					$('#certificateModal').each(function () {
						$(this).modal('hide');
					});
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else if (e.data.objId == 'submitRole' && validateForm('#rform').form()) {
			document.getElementById(e.data.objId).setAttribute("data-dismiss", "modal");
			var id = $('#role_ID').val();
			var data = $("#rform").serialize();
			console.log(data);
			$.ajax({
				type: "PUT",
				url: "/role/" + id,
				data: data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				dataType: "json",
				success: function (data) {
					console.log(data);
					$('#roleModal').each(function () {
						$(this).modal('hide');
					});
				},
				error: function (error) {
					console.log('error');
				}
			});

		} else {
			alert('Make sure you have completed all the required information.');
			document.getElementById(e.data.objId).removeAttribute("data-dismiss");
		}
	}

}

function deleteButtonHandler(e) {
	e.preventDefault();
	if (e.data.deleteData == "movie") {
		var id = $(this).data('id');
		var $tr = $(this).closest('tr');
		bootbox.confirm({
			message: "Do you want to delete this movie?",
			buttons: {
				confirm: {
					label: 'Yes',
					className: 'btn-success'
				},
				cancel: {
					label: 'No',
					className: 'btn-danger'
				}
			},
			callback: function (result) {
				if (result)
					$.ajax({
						type: "DELETE",
						url: "/movie/" + id,
						headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
						dataType: "json",
						success: function (data) {
							console.log(data);
							// bootbox.alert('success');
							$tr.find('td').fadeOut(2000, function () {
								$tr.remove();
							});
						},
						error: function (error) {
							console.log('error');
						}
					});
			}
		});
		console.log("Movie has been deleted.");

	} else if (e.data.deleteData == "actor") {
		var id = $(this).data('id');
		var $tr = $(this).closest('tr');
		bootbox.confirm({
			message: "Do you want to delete this actor?",
			buttons: {
				confirm: {
					label: 'Yes',
					className: 'btn-success'
				},
				cancel: {
					label: 'No',
					className: 'btn-danger'
				}
			},
			callback: function (result) {
				if (result)
					$.ajax({
						type: "DELETE",
						url: "/actor/" + id,
						headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
						dataType: "json",
						success: function (data) {
							console.log(data);
							// bootbox.alert('success');
							$tr.find('td').fadeOut(2000, function () {
								$tr.remove();
							});
						},
						error: function (error) {
							console.log('error');
						}
					});
			}
		});
		console.log("Actor has been deleted.");

	} else if (e.data.deleteData == "producer") {
		var id = $(this).data('id');
		var $tr = $(this).closest('tr');
		bootbox.confirm({
			message: "Do you want to delete this producer?",
			buttons: {
				confirm: {
					label: 'Yes',
					className: 'btn-success'
				},
				cancel: {
					label: 'No',
					className: 'btn-danger'
				}
			},
			callback: function (result) {
				if (result)
					$.ajax({
						type: "DELETE",
						url: "/producer/" + id,
						headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
						dataType: "json",
						success: function (data) {
							console.log(data);
							// bootbox.alert('success');
							$tr.find('td').fadeOut(2000, function () {
								$tr.remove();
							});
						},
						error: function (error) {
							console.log('error');
						}
					});
			}
		});
		console.log("Producer has been deleted.");

	} else if (e.data.deleteData == "genre") {
		var id = $(this).data('id');
		var $tr = $(this).closest('tr');
		bootbox.confirm({
			message: "Do you want to delete this genre?",
			buttons: {
				confirm: {
					label: 'Yes',
					className: 'btn-success'
				},
				cancel: {
					label: 'No',
					className: 'btn-danger'
				}
			},
			callback: function (result) {
				if (result)
					$.ajax({
						type: "DELETE",
						url: "/genre/" + id,
						headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
						dataType: "json",
						success: function (data) {
							console.log(data);
							// bootbox.alert('success');
							$tr.find('td').fadeOut(2000, function () {
								$tr.remove();
							});
						},
						error: function (error) {
							console.log('error');
						}
					});
			}
		});
		console.log("Genre has been deleted.");

	} else if (e.data.deleteData == "certificate") {
		var id = $(this).data('id');
		var $tr = $(this).closest('tr');
		bootbox.confirm({
			message: "Do you want to delete this certificate?",
			buttons: {
				confirm: {
					label: 'Yes',
					className: 'btn-success'
				},
				cancel: {
					label: 'No',
					className: 'btn-danger'
				}
			},
			callback: function (result) {
				if (result)
					$.ajax({
						type: "DELETE",
						url: "/certificate/" + id,
						headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
						dataType: "json",
						success: function (data) {
							console.log(data);
							// bootbox.alert('success');
							$tr.find('td').fadeOut(2000, function () {
								$tr.remove();
							});
						},
						error: function (error) {
							console.log('error');
						}
					});
			}
		});
		console.log("Certificate has been deleted.");

	} else if (e.data.deleteData == "role") {
		var id = $(this).data('id');
		var $tr = $(this).closest('tr');
		bootbox.confirm({
			message: "Do you want to delete this role?",
			buttons: {
				confirm: {
					label: 'Yes',
					className: 'btn-success'
				},
				cancel: {
					label: 'No',
					className: 'btn-danger'
				}
			},
			callback: function (result) {
				if (result)
					$.ajax({
						type: "DELETE",
						url: "/role/" + id,
						headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
						dataType: "json",
						success: function (data) {
							console.log(data);
							// bootbox.alert('success');
							$tr.find('td').fadeOut(2000, function () {
								$tr.remove();
							});
						},
						error: function (error) {
							console.log('error');
						}
					});
			}
		});
		console.log("Role has been deleted.");

	}

}

function modalButtonHandler(e) {
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
		$(".modal-footer #submitActor").html("Add");
		document.getElementById("form").value = "add";
	} else if (e.data.objId == 'editActorButton') {
		$(".modal-header h4").html("Edit Actor Details");
		$(".modal-footer #submitActor").html("Update");
		document.getElementById("form").value = "update";
	} else if (e.data.objId == 'addProducerButton') {
		$(".modal-header h4").html("Create New Producer");
		$(".modal-footer #submitProducer").html("Add");
		document.getElementById("form").value = "add";
	} else if (e.data.objId == 'editProducerButton') {
		$(".modal-header h4").html("Edit Producer Details");
		$(".modal-footer #submitProducer").html("Update");
		document.getElementById("form").value = "update";
	} else if (e.data.objId == 'addGenreButton') {
		$(".modal-header h4").html("Create New Genre");
		$(".modal-footer #submitGenre").html("Add");
		document.getElementById("form").value = "add";
	} else if (e.data.objId == 'editGenreButton') {
		$(".modal-header h4").html("Edit Genre Details");
		$(".modal-footer #submitGenre").html("Update");
		document.getElementById("form").value = "update";
	} else if (e.data.objId == 'addCertificateButton') {
		$(".modal-header h4").html("Create New Certificate");
		$(".modal-footer #submitCertificate").html("Add");
		document.getElementById("form").value = "add";
	} else if (e.data.objId == 'editCertificaButton') {
		$(".modal-header h4").html("Edit Certificate Details");
		$(".modal-footer #submitCertificate").html("Update");
		document.getElementById("form").value = "update";
	} else if (e.data.objId == 'addRoleButton') {
		$(".modal-header h4").html("Create New Role");
		$(".modal-footer #submitRole").html("Add");
		document.getElementById("form").value = "add";
	} else if (e.data.objId == 'editRoleButton') {
		$(".modal-header h4").html("Edit Role Details");
		$(".modal-footer #submitRole").html("Update");
		document.getElementById("form").value = "update";
	}

}

function modalHandler(e) {
	e.preventDefault();
	if (e.type == 'hidden') {
		if (e.data.objId == 'movieModal') {
			$("#mform").trigger("reset");
			if ($('#movie_ID')) {
				$('tbody tr').remove();
				$('#movie_ID').remove();
				$.ajax({
					type: "GET",
					url: "/movie/all",
					dataType: 'json',
					success: function (data) {
						console.log(data);
						$.each(data, function (key, value) {
							if (key == "movies") {
								$.each(value, function (key, value) {

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
									tr.append("<td align='center'><a href=# id='editMovieButton' data-toggle='modal' data-target='#movieModal' data-id=" + value.movie_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");

									if (value.deleted_at == true) {
										tr.append("<td align='center'><a href=" + '/movie/' + value.movie_ID + '/restore' + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
									} else {
										tr.append("<td align='center'><a href='#' class='deleteMovieBtn' data-id=" + value.movie_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red' ></a></i></td>");
									}

									$("#mbody").append(tr);


								});
							} else if (key == 'genres') {
								$.each(value, function (key, value) {

									var option = "<option value='" + value.genre_ID + "'>" + value.genre_name + "</option>";

									$("#genre_ID").append(option);

								});
							} else {
								$.each(value, function (key, value) {

									var option = "<option value='" + value.certificate_ID + "'>" + value.certificate_name + "</option>";

									$("#certificate_ID").append(option);

								});
							}
						});
					},
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'actorModal') {
			$("#aform").trigger("reset");
			if ($('#actor_ID')) {
				$('tbody tr').remove();
				$('#actor_ID').remove();
				$.ajax({
					type: "GET",
					url: "/actor/all",
					dataType: 'json',
					success: function (data) {
						console.log(data);
						$.each(data, function (key, value) {
							// console.log(value);
							// var id = value.id;
							var tr = $("<tr>");
							tr.append($("<td>").html(value.actor_ID));
							tr.append($("<td>").html(value.actor_fname));
							tr.append($("<td>").html(value.actor_lname));
							tr.append($("<td>").html(value.actor_notes));
							tr.append($("<td>").html(value.actor_img));
							tr.append($("<td>").html(value.actor_status));

							tr.append("<td align='center'><a href=# id='editActorButton' data-toggle='modal' data-target='#actorModal' data-id=" + value.actor_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


							if (value.deleted_at == true) {

							} else {
								tr.append("<td align='center'><a href='#' class='deleteActorBtn' data-id=" + value.actor_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
							}

							$("#abody").append(tr);

						});
					},
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'producerModal') {
			$("#pform").trigger("reset");
			if ($('#producer_ID')) {
				$('tbody tr').remove();
				$('#producer_ID').remove();
				$.ajax({
					type: "GET",
					url: "/producer/all",
					dataType: 'json',
					success: function (data) {
						console.log(data);
						$.each(data, function (key, value) {
							// console.log(value);
							// var id = value.id;
							var tr = $("<tr>");
							tr.append($("<td>").html(value.producer_ID));
							tr.append($("<td>").html(value.producer_name));
							tr.append($("<td>").html(value.producer_email_address));
							tr.append($("<td>").html(value.producer_website));
							tr.append($("<td>").html(value.producer_status));

							tr.append("<td align='center'><a href=# id='editProducerButton' data-toggle='modal' data-target='#producerModal' data-id=" + value.producer_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


							if (value.deleted_at == true) {
								// tr.append("<td align='center'><a href="+'/producer/'+value.producer_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
							} else {
								tr.append("<td align='center'><a href='#' class='deleteActorBtn' data-id=" + value.actor_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
							}

							$("#pbody").append(tr);

						});
					},
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'genreModal') {
			if ($('#genre_ID')) {
				$('tbody tr').remove();
				$('#genre_ID').remove();
				$.ajax({
					type: "GET",
					url: "/genre/all",
					dataType: 'json',
					success: function (data) {
						console.log(data);
						$.each(data, function (key, value) {
							// console.log(value);
							// var id = value.id;
							var tr = $("<tr>");
							tr.append($("<td>").html(value.genre_ID));
							tr.append($("<td>").html(value.genre_name));
							tr.append($("<td>").html(value.genre_status));

							tr.append("<td align='center'><a href=# id='editGenreButton' data-toggle='modal' data-target='#genreModal' data-id=" + value.genre_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


							if (value.deleted_at == true) {
								// tr.append("<td align='center'><a href="+'/genre/'+value.genre_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
							} else {
								tr.append("<td align='center'><a href='#' class='deleteGenreBtn' data-id=" + value.genre_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
							}

							$("#gbody").append(tr);

						});
					},
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

			$("#gform").trigger("reset");

		} else if (e.data.objId == 'certificateModal') {
			$("#cform").trigger("reset");
			if ($('#certificate_ID')) {
				$('tbody tr').remove();
				$('#certificate_ID').remove();
				$.ajax({
					type: "GET",
					url: "/certificate/all",
					dataType: 'json',
					success: function (data) {
						console.log(data);
						$.each(data, function (key, value) {
							console.log(value);
							var id = value.id;
							var tr = $("<tr>");
							tr.append($("<td>").html(value.certificate_ID));
							tr.append($("<td>").html(value.certificate_name));
							tr.append($("<td>").html(value.certificate_status));

							tr.append("<td align='center'><a href=# id='editCertificaButton' data-toggle='modal' data-target='#certificateModal' data-id=" + value.certificate_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


							if (value.deleted_at == true) {
								tr.append("<td align='center'><a href=" + '/certificate/' + value.certificate_ID + '/delete' + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
							} else {
								tr.append("<td align='center'><a href='#' class='deleteCertificateBtn' data-id=" + value.certificate_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
							}

							$("#cbody").append(tr);

						});
					},
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'roleModal') {
			$("#rform").trigger("reset");
			if ($('#role_ID')) {
				$('tbody tr').remove();
				$('#role_ID').remove();
				$.ajax({
					type: "GET",
					url: "/role/all",
					dataType: 'json',
					success: function (data) {
						console.log(data);
						$.each(data, function (key, value) {
							// console.log(value);
							// var id = value.id;
							var tr = $("<tr>");
							tr.append($("<td>").html(value.role_ID));
							tr.append($("<td>").html(value.role_name));
							tr.append($("<td>").html(value.role_status));

							tr.append("<td align='center'><a href=# id='editRoleButton' data-toggle='modal' data-target='#roleModal' data-id=" + value.role_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


							if (value.deleted_at == true) {
								tr.append("<td align='center'><a href=" + '/certificate/' + value.role_ID + '/delete' + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
							} else {
								tr.append("<td align='center'><a href='#' class='deleteRoleBtn' data-id=" + value.role_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></i></td>");
							}

							$("#rbody").append(tr);

						});
					},
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		}

	} else if (e.type == 'shown') {

		if (e.data.objId == 'movieModal') {
			if (document.getElementById("form").value == "add") {
				console.log(validateForm('#mform'));
				validateForm('#mform').form();
			} else {
				validateForm('#mform').resetForm();
			}
			
			var element = document.getElementById("movieModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				// console.log(id);
				$('<input>').attr({ type: 'hidden', id: 'movie_ID', name: 'movie_ID', value: id }).appendTo('#mform');
				$.ajax({
					type: "GET",
					url: "/movie/" + id + "/edit",
					success: function (data) {
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
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'actorModal') {
			if (document.getElementById("form").value == "add") {
				validateForm('#aform').form();
			} else {
				validateForm('#aform').resetForm();
			}

			var element = document.getElementById("actorModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				console.log(id);
				$('<input>').attr({ type: 'hidden', id: 'actor_ID', name: 'actor_ID', value: id }).appendTo('#aform');
				$.ajax({
					type: "GET",
					url: "/actor/" + id + "/edit",
					success: function (data) {
						console.log(data);
						$("#actor_fname").val(data.actor_fname);
						$("#actor_lname").val(data.actor_lname);
						$("#actor_notes").val(data.actor_notes);
						// $("#actor_img").val(data.actor_img);
						$("#actor_status").val(data.actor_status);
					},
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'producerModal') {
			if (document.getElementById("form").value == "add") {
				validateForm('#pform').form();
			} else {
				validateForm('#pform').resetForm();
			}
			var element = document.getElementById("producerModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				console.log(id);
				$('<input>').attr({ type: 'hidden', id: 'producer_ID', name: 'producer_ID', value: id }).appendTo('#pform');
				$.ajax({
					type: "GET",
					url: "/producer/" + id + "/edit",
					success: function (data) {
						console.log(data);
						$("#producer_name").val(data.producer_name);
						$("#producer_email_address").val(data.producer_email_address);
						$("#producer_website").val(data.producer_website);
						$("#producer_status").val(data.producer_status);
					},
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'genreModal') {
			if (document.getElementById("form").value == "add") {
				validateForm('#gform').form();
			} else {
				validateForm('#gform').resetForm();
			}
			var element = document.getElementById("genreModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				console.log(id);
				$('<input>').attr({ type: 'hidden', id: 'genre_ID', name: 'genre_ID', value: id }).appendTo('#gform');
				$.ajax({
					type: "GET",
					url: "/genre/" + id + "/edit",
					success: function (data) {
						console.log(data);
						$("#genre_name").val(data.genre_name);
						$("#genre_status").val(data.genre_status);
					},
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'certificateModal') {
			if (document.getElementById("form").value == "add") {
				validateForm('#cform').form();
			} else {
				validateForm('#cform').resetForm();
			}
			var element = document.getElementById("certificateModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				console.log(id);
				$('<input>').attr({ type: 'hidden', id: 'certificate_ID', name: 'certificate_ID', value: id }).appendTo('#cform');
				$.ajax({
					type: "GET",
					url: "/certificate/" + id + "/edit",
					success: function (data) {
						console.log(data);
						$("#certificate_name").val(data.certificate_name);
						$("#certificate_status").val(data.certificate_status);
					},
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		} else if (e.data.objId == 'roleModal') {
			if (document.getElementById("form").value == "add") {
				validateForm('#rform').form();
			} else {
				validateForm('#rform').resetForm();
			}
			var element = document.getElementById("roleModal");
			if ($(e.relatedTarget).attr('data-id')) {
				var id = $(e.relatedTarget).attr('data-id');
				console.log(id);
				$('<input>').attr({ type: 'hidden', id: 'role_ID', name: 'role_ID', value: id }).appendTo('#rform');
				$.ajax({
					type: "GET",
					url: "/role/" + id + "/edit",
					success: function (data) {
						console.log(data);
						$("#role_name").val(data.role_name);
						$("#role_status").val(data.role_status);
					},
					error: function () {
						console.log('AJAX load did not work');
						alert("error");
					}
				});
			}

		}

	}

}

function validateForm(formID) {
	if (formID == '#mform') {
		var validationObj = $(formID).validate({
			rules: {
				movie_title: { required: true },
				genre_ID: { required: true, number: true },
				movie_story: { required: true },
				movie_release_date: { required: true, date: true },
				movie_film_duration: { required: true, number: true },
				movie_additional_info: { required: true },
				certificate_ID: { required: true, number: true  }
			},
			messages: {
				movie_film_duration: { number: 'Invalid Duration.'},
				genre_ID: { number: 'Invalid Genre.' },
				certificate_ID: { number: 'Invalid Certificate.' }
			}
		});

	} else if (formID == '#aform') {
		var validationObj = $(formID).validate({
			rules: {
				actor_fname: { required: true },
				actor_lname: { required: true },
				actor_notes: { required: true },
				actor_status: { required: true}
			},
			messages: {
				
			}
		});

	} else if (formID == '#pform') {
		var validationObj = $(formID).validate({
			rules: {
				producer_name: { required: true },
				producer_email_address: { required: true, email: true },
				producer_website: { required: true },
				producer_status: { required: true}
			},
			messages: {
				producer_email_address: { email: 'Please enter a valid e-mail address.' }
			}
		});
		
	} else if (formID == '#gform') {
		var validationObj = $(formID).validate({
			rules: {
				genre_name: { required: true },
				genre_status: { required: true },
			},
			messages: {
			}
		});
		
	} else if (formID == '#cform') {
		var validationObj = $(formID).validate({
			rules: {
				certificate_name: { required: true },
				certificate_status: { required: true },
			},
			messages: {
			}
		});

	} else if (formID == '#rform') {
		var validationObj = $(formID).validate({
			rules: {
				role_name: { required: true },
				role_status: { required: true },
			},
			messages: {
			}
		});

	}

	return validationObj;

}

function sortableTables() {
	var tables = ['#mbody', '#abody', '#pbody', '#gbody', '#cbody', '#rbody'];
	$.each(tables, function (index, value) {
		$(value).sortable();
	});

}

$(document).ready(function () {

	sortableTables();

	$('#addMovieButton').on({ 'click': modalButtonHandler }, { 'objId': 'addMovieButton' });
	$(document).on('click', '#editMovieButton', { 'objId': 'editMovieButton' }, modalButtonHandler);
	$('#addActorButton').on({ 'click': modalButtonHandler }, { 'objId': 'addActorButton' });
	$(document).on('click', '#editActorButton', { 'objId': 'editActorButton' }, modalButtonHandler);
	$('#addProducerButton').on({ 'click': modalButtonHandler }, { 'objId': 'addProducerButton' });
	$(document).on('click', '#editProducerButton', { 'objId': 'editProducerButton' }, modalButtonHandler);
	$('#addGenreButton').on({ 'click': modalButtonHandler }, { 'objId': 'addGenreButton' });
	$(document).on('click', '#editGenreButton', { 'objId': 'editGenreButton' }, modalButtonHandler);
	$('#addCertificateButton').on({ 'click': modalButtonHandler }, { 'objId': 'addCertificateButton' });
	$(document).on('click', '#editCertificaButton', { 'objId': 'editCertificaButton' }, modalButtonHandler);
	$('#addRoleButton').on({ 'click': modalButtonHandler }, { 'objId': 'addRoleButton' });
	$(document).on('click', '#editRoleButton', { 'objId': 'editRoleButton' }, modalButtonHandler);

	$('#movieModal').on({ 'hidden.bs.modal': modalHandler }, { 'objId': 'movieModal' });
	$('#actorModal').on({ 'hidden.bs.modal': modalHandler }, { 'objId': 'actorModal' });
	$('#producerModal').on({ 'hidden.bs.modal': modalHandler }, { 'objId': 'producerModal' });
	$('#genreModal').on({ 'hidden.bs.modal': modalHandler }, { 'objId': 'genreModal' });
	$('#certificateModal').on({ 'hidden.bs.modal': modalHandler }, { 'objId': 'certificateModal' });
	$('#roleModal').on({ 'hidden.bs.modal': modalHandler }, { 'objId': 'roleModal' });

	$('#movieModal').on({ 'shown.bs.modal': modalHandler }, { 'objId': 'movieModal' });
	$('#actorModal').on({ 'shown.bs.modal': modalHandler }, { 'objId': 'actorModal' });
	$('#producerModal').on({ 'shown.bs.modal': modalHandler }, { 'objId': 'producerModal' });
	$('#genreModal').on({ 'shown.bs.modal': modalHandler }, { 'objId': 'genreModal' });
	$('#certificateModal').on({ 'shown.bs.modal': modalHandler }, { 'objId': 'certificateModal' });
	$('#roleModal').on({ 'shown.bs.modal': modalHandler }, { 'objId': 'roleModal' });


	$('#submitMovie').on({ 'click': submitButtonHandler }, { 'objId': 'submitMovie' });
	$('#submitActor').on({ 'click': submitButtonHandler }, { 'objId': 'submitActor' });
	$('#submitProducer').on({ 'click': submitButtonHandler }, { 'objId': 'submitProducer' });
	$('#submitGenre').on({ 'click': submitButtonHandler }, { 'objId': 'submitGenre' });
	$('#submitCertificate').on({ 'click': submitButtonHandler }, { 'objId': 'submitCertificate' });
	$('#submitRole').on({ 'click': submitButtonHandler }, { 'objId': 'submitRole' });

	$('#mbody').on('click', '.deleteMovieBtn', { 'deleteData': 'movie' }, deleteButtonHandler);
	$('#abody').on('click', '.deleteActorBtn', { 'deleteData': 'actor' }, deleteButtonHandler);
	$('#pbody').on('click', '.deleteProducerBtn', { 'deleteData': 'producer' }, deleteButtonHandler);
	$('#gbody').on('click', '.deleteGenreBtn', { 'deleteData': 'genre' }, deleteButtonHandler);
	$('#cbody').on('click', '.deleteCertificateBtn', { 'deleteData': 'certificate' }, deleteButtonHandler);
	$('#rbody').on('click', '.deleteRoleBtn', { 'deleteData': 'role' }, deleteButtonHandler);

	$.ajax({
		type: "GET",
		url: "/movie/all",
		dataType: 'json',
		success: function (data) {
			console.log(data);
			$.each(data, function (key, value) {
				if (key == "movies") {
					$.each(value, function (key, value) {

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
						tr.append("<td align='center'><a href=# id='editMovieButton' data-toggle='modal' data-target='#movieModal' data-id=" + value.movie_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");

						if (value.deleted_at == true) {
							tr.append("<td align='center'><a href=" + '/movie/' + value.movie_ID + '/restore' + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
						} else {
							tr.append("<td align='center'><a href='#' class='deleteMovieBtn' data-id=" + value.movie_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red' ></a></i></td>");
						}

						$("#mbody").append(tr);


					});
				} else if (key == 'genres') {
					$.each(value, function (key, value) {

						var option = "<option value='" + value.genre_ID + "'>" + value.genre_name + "</option>";

						$("#genre_ID").append(option);

					});
				} else {
					$.each(value, function (key, value) {

						var option = "<option value='" + value.certificate_ID + "'>" + value.certificate_name + "</option>";

						$("#certificate_ID").append(option);

					});
				}
			});
		},
		error: function () {
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
			$.each(data, function (key, value) {
				// console.log(value);
				// var id = value.id;
				var tr = $("<tr>");
				tr.append($("<td>").html(value.actor_ID));
				tr.append($("<td>").html(value.actor_fname));
				tr.append($("<td>").html(value.actor_lname));
				tr.append($("<td>").html(value.actor_notes));
				tr.append($("<td>").html(value.actor_img));
				tr.append($("<td>").html(value.actor_status));

				tr.append("<td align='center'><a href=# id='editActorButton' data-toggle='modal' data-target='#actorModal' data-id=" + value.actor_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (value.deleted_at == true) {

				} else {
					tr.append("<td align='center'><a href='#' class='deleteActorBtn' data-id=" + value.actor_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
				}

				$("#abody").append(tr);

			});
		},
		error: function () {
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
			$.each(data, function (key, value) {
				// console.log(value);
				// var id = value.id;
				var tr = $("<tr>");
				tr.append($("<td>").html(value.producer_ID));
				tr.append($("<td>").html(value.producer_name));
				tr.append($("<td>").html(value.producer_email_address));
				tr.append($("<td>").html(value.producer_website));
				tr.append($("<td>").html(value.producer_status));

				tr.append("<td align='center'><a href=# id='editProducerButton' data-toggle='modal' data-target='#producerModal' data-id=" + value.producer_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (value.deleted_at == true) {
					// tr.append("<td align='center'><a href="+'/producer/'+value.producer_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href='#' class='deleteActorBtn' data-id=" + value.actor_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
				}

				$("#pbody").append(tr);

			});
		},
		error: function () {
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
			$.each(data, function (key, value) {
				// console.log(value);
				// var id = value.id;
				var tr = $("<tr>");
				tr.append($("<td>").html(value.genre_ID));
				tr.append($("<td>").html(value.genre_name));
				tr.append($("<td>").html(value.genre_status));

				tr.append("<td align='center'><a href=# id='editGenreButton' data-toggle='modal' data-target='#genreModal' data-id=" + value.genre_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (value.deleted_at == true) {
					// tr.append("<td align='center'><a href="+'/genre/'+value.genre_ID+'/delete'+"><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href='#' class='deleteGenreBtn' data-id=" + value.genre_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
				}

				$("#gbody").append(tr);

			});
		},
		error: function () {
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
			$.each(data, function (key, value) {
				console.log(value);
				var id = value.id;
				var tr = $("<tr>");
				tr.append($("<td>").html(value.certificate_ID));
				tr.append($("<td>").html(value.certificate_name));
				tr.append($("<td>").html(value.certificate_status));

				tr.append("<td align='center'><a href=# id='editCertificaButton' data-toggle='modal' data-target='#certificateModal' data-id=" + value.certificate_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (value.deleted_at == true) {
					tr.append("<td align='center'><a href=" + '/certificate/' + value.certificate_ID + '/delete' + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href='#' class='deleteCertificateBtn' data-id=" + value.certificate_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></a></i></td>");
				}

				$("#cbody").append(tr);

			});
		},
		error: function () {
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
			$.each(data, function (key, value) {
				// console.log(value);
				// var id = value.id;
				var tr = $("<tr>");
				tr.append($("<td>").html(value.role_ID));
				tr.append($("<td>").html(value.role_name));
				tr.append($("<td>").html(value.role_status));

				tr.append("<td align='center'><a href=# id='editRoleButton' data-toggle='modal' data-target='#roleModal' data-id=" + value.role_ID + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");


				if (value.deleted_at == true) {
					tr.append("<td align='center'><a href=" + '/certificate/' + value.role_ID + '/delete' + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
				} else {
					tr.append("<td align='center'><a href='#' class='deleteRoleBtn' data-id=" + value.role_ID + "><i class='fa fa-trash-o' aria-hidden='true' style='font-size:24px; color:red'></i></td>");
				}

				$("#rbody").append(tr);

			});
		},
		error: function () {
			console.log('AJAX load did not work');
			alert("error");
		}
	});
});


