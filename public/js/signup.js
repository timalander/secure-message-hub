function createUser(){
	var myuser = $("#uname").val();
	var mypkey = $("#pkey").val();
	$.post('/register', { user:myuser, pubkey:mypkey}, function(data, status, res) {
		console.log("submitted request");
		console.log(status, res, data);
	});
}

$("#signup").click(function(){
		createUser();
});