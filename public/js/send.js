function sendMessage(){
	var senduser = $("#sender").val();
	var myrecipient = $("#recipient").val();
	var mykey = $("#passphrase").val();
	var message= $("#message").val();
	console.log(message);
	var mymessage = encrypt(mykey,message).toString();
	console.log(mymessage);
	var mysubject= $("#subject").val();
	$.post('/send', { sender:senduser, recipient:myrecipient, text:mymessage, subject:mysubject}, function(data, status, res) {
		console.log("submitted request");
		console.log(status, res, data);
		if (data == "sendSuccess") {
			clearForms();
			$('#alerts').append("<div class='panel callout radius'><h4>Message Sent!</h4></div>");
			$('#subtitle').html("Send Another Message");
		}
		else {
//			alert("Error registering!");
			console.log("appending");
			$('#alerts').append("<div class='panel callout radius'><h4>Error Sending Message!</h4></div>");
		}
	});
}

function clearForms(){
	$(".form").each(function(index, element){
		element.value = "";
	});
	$("#alerts").empty();
}