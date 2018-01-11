
var channels=["ESL_SC2","freecodecamp","test_channel","OgamingSC2"];
var channelImages=[
					"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
					"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
					"https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-300x300.jpg",
					"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-70x70.jpeg"
					];
var channelName,streamStatus,channelGame,channelImage,tagStyle,channelLink;
// console.log(channels[0]);
for(i=0;i<channels.length;i++){
	
	console.log(channels[i]);
	
	makeRequest(i);
}

function makeRequest(i){

	$.ajax({

		url: "https://wind-bow.gomix.me/twitch-api/streams/"+channels[i],
		dataType: "jsonp",
		type: "GET",
		success: function(data){
			
			console.log(data);
			// console.log(channels[i]);
			channelName= channels[i];
			channelLink= "https://www.twitch.tv/"+ channelName;
			channelImage= "<img id='channel-icon' src="+ channelImages[i] +">";
			// console.log(channelImageURL);
			tagStyle= "style='display:inline'";


			if(data.stream !== null){
				console.log(data.stream.channel.status);
				
				streamStatus= (data.stream.channel.status).substring(0,15);
				channelGame= data.stream.game;
				
				$("#demo").append("<div class='row'><div class='col-lg-4 col-md-4 col-sm-4'>"+ channelImage +"</div><div class='col-lg-4 col-md-4 col-sm-4' ><h3 "+ tagStyle +" ><a  class='white-text' target='_blank' href="+ channelLink +">"+ channelName +"</a></h3></div><div class='col-lg-4 col-md-4 col-sm-4'><i> "+ channelGame + "  "+ streamStatus +"</i></div></div>");
				// $("#demo").append("<div class='row'><div class='col-lg-3'>"+ channelImage +"</div><div class='col-lg-3><h3 "+ tagStyle +" ><a  class='white-text' target='_blank' href="+ channelLink +">"+ channelName +"</a></h3></div>"+ "<div class='col-lg-3' ><i>Hi there </i></div></div>");

15	}
			// console.log(channelName);
			else
				$("#demo").append("<div class='row'><div class='col-lg-4 col-md-4 col-sm-4'>"+ channelImage +"</div><div class='col-lg-4 col-md-4 col-sm-4' ><h3 "+ tagStyle +" ><a  class='white-text' target='_blank' href="+ channelLink +">"+ channelName +"</a></h3></div><div class='col-lg-4 col-md-4 col-sm-4'><i>offline</i></div>");
		},
		error: function(xhr){
	      alert("Error: "+ xhr.status+ " " + xhr.statusText);
	    }

	});	


}
