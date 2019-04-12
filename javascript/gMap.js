function initMap(){
	var myCenter = map;
	var marker = new google.maps.Marker({
		position:myCenter,
		//animation:google.maps.Animation.BOUNCE
		icon:'images/PizzaImpereLogo5.png'
	});
	marker.setMap(map);
	
	var map = new google.maps.Map(document.getElementById("googleMap"), {
		zoom:25,
		center: {lat: 52.662305, lng: -8.625059},
	});
	
}