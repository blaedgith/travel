# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function () {
	function initialize(){

		var myLatlng = new google.maps.LatLng(latitude, longituted)


		var mapOptions = {
			center: myLatlng,
			zoom: 8,
			scrollWheel: false
		};

		var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			animation: google.maps.Animation.DROP,
			
		});

		var contentString = '<h2>'+ address '</h2>' + '<p>' + description '</p>';
		var infoWindow = new google.maps.Infowindow ({
			content: contentString
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);


});