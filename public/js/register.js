function createUser(){
	var myuser = $("#uname").val();
	var mybio = $("#bio").val();
	$.post('/register', { user:myuser, bio:mybio}, function(data, status, res) {
		console.log("submitted request");
		console.log(status, res, data);
		if (data == "registerSuccess") {
			clearForms();
			$('#alerts').append("<div class='panel callout radius'><h4>Registration Successful!</h4></div>");
			$('#signup').addClass("disabled");
			$('#clear').addClass("disabled");
			$('#signup').attr('onclick','null');
			$('#clear').attr('onclick','null');
		}
		else {
//			alert("Error registering!");
			console.log("appending");
			$('#alerts').append("<div class='panel callout radius'><h4>Error registering!</h4></div>");
		}
	});
}

$("#signup").click(function(){
		createUser();
});

function clearForms(){
	$(".form").each(function(index, element){
		element.value = "";
	});
	$("#alerts").empty();
}