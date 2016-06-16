
$(window).load(function () {
	initialize();
	$('#gg_map').focus();
});

function initialize()
{

	/* ฟังก์ชั่นที่ช่วยให้แปลงพิกัดตำแหน่งละติจูด (Latitude) และลองติจูด (Longitude) */
	geocoder = new google.maps.Geocoder();

	/* Latitude Longitude ของ อนุสาวรีย์ชัยสมรภูมิ กรุงเทพมหานคร ประเทศไทย */
	var lat = 13.762723;
	var lng = 100.537097;

	var latlng = new google.maps.LatLng(lat, lng);
//	console.log(latlng);
	var mapOptions = {
		center: latlng,
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);



	$('#gg_map').on('keypress', function (event) {
		if (event.which === 13) {
			searchTweets($(this).val());
		}
	});
}

function searchTweets(txt) {
	var markersList = [];

	$.ajax({
		dataType: 'json',
		url: 'tweets.php?q=' + txt,
		success: function (json) {

			$.each(json, function (k, v) {


				if (v.place != null) {

					var latitude = v.place.bounding_box.coordinates[0][0][1];
					var longitude = v.place.bounding_box.coordinates[0][0][0];
					var screen_name = v.user.screen_name
					var tweetText = v.text;
					var profileImageURL = v.user.profile_image_url;

					marker = new google.maps.Marker({
						position: new google.maps.LatLng(latitude, longitude),
						map: map,
						title: tweetText,
						icon: profileImageURL
					});
					markersList.push(marker);
					var content = 'Tweet : ' + tweetText + '<br /> When : ' + v.created_at;
					var infowindow = new google.maps.InfoWindow();


					google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
						return function () {
							infowindow.setContent(content);
							infowindow.open(map, marker);
						};
					})(marker, content, infowindow));


				}
			});

		}, error: function () {
			// show error message
			console.log("No response from the server!");
		}

	});
}

function codeAddress()
{

	var address = document.getElementById("gg_map").value;

	geocoder.geocode({
		'address': address
	}, function (results, status) {
		if (status == google.maps.GeocoderStatus.OK) {

			var location = results[0].geometry.location;
			var lat = location.lat();
			var lng = location.lng();

			map.setCenter(location);
			map.setZoom(12);


			searchLocation(lat, lng);

		} else {
			alert("Non Found");
			return false;
		}
	});
}

function searchLocation(lat, lng) {


	var markersList = [];

	$.ajax({
		dataType: 'json',
		url: 'search.php?x=' + lat + '&y=' + lng,
		success: function (json) {

			$.each(json, function (k, v) {


				if (v.place != null) {

					var latitude = v.place.bounding_box.coordinates[0][0][1];
					var longitude = v.place.bounding_box.coordinates[0][0][0];
					var screen_name = v.user.screen_name
					var tweetText = v.text;
					var profileImageURL = v.user.profile_image_url;

					marker = new google.maps.Marker({
						position: new google.maps.LatLng(latitude, longitude),
						map: map,
						title: tweetText,
						icon: profileImageURL
					});
					markersList.push(marker);
					var content = 'Tweet : ' + tweetText + '<br /> When : ' + v.created_at;
					var infowindow = new google.maps.InfoWindow();


					google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
						return function () {
							infowindow.setContent(content);
							infowindow.open(map, marker);
						};
					})(marker, content, infowindow));


				}
			});

		}, error: function () {
			// show error message
			console.log("No response from the server!");
		}

	});
}
