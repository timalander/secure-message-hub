function getMessages(){
	console.log("clicked get messages");
//	$("#mtable").removeClass("invisible");
//	$("#alerts").empty();
	var mysender = $("#sender").val();
	var getting = $.post('/getmessages', { user:mysender });
	getting.done(function(data, res){
			console.log("inside get req");
			console.log(data,res);
			console.log(data.length);
			$("#tbody").empty();
			var any = false;
			for (var m in data){
				console.log(data[m].sender);
				var pkey =$("#pkey").val();
				console.log(pkey);
				var unencrypted = decrypt(pkey, data[m].text);
				console.log(data[m].text);
				console.log(unencrypted);
				if (unencrypted) {
					if (!any){
						any = true;
						$("#mtable").removeClass("invisible");
						$("#alerts").empty();
					}
					$("#tbody").append("<tr><td>"+data[m].sender+"</td><td>"+data[m].subject+"</td><td>"+unencrypted+"</td></tr>");
				}
			}
			if (any == false) {
				$("#mtable").addClass("invisible");
				$('#alerts').empty();
				$('#alerts').append("<div class='panel callout radius'><h4>No messages for that username/passphrase combo.</h4></div>");
			}
		});
//		data.map(function(item){
//			$("#tbody").append("<tr><td>"+item.sender+"</td><td>"+item.file+"</td></tr>");
//		});
//		for (var m in data){
//			console.log(data[m].sender);
//			$("#tbody").append("<tr><td>"+data[m].sender+"</td><td>"+data[m].file+"</td></tr>");
//		}


}

$(".data").click(function(){
console.log(this.val());
	this.val(decrypt("hello", this.val()));
})

function decryptMessage(id){
	var picker= "'#" + id.toString() + "'";
	console.log(picker);
//	var m = $(picker);

	console.log($(picker).val());
	var newval = decrypt("hello", $(picker).val()	)
	$(picker).val(decrypt("hello", m.val()));
}