<!DOCTYPE html>

<html>
	<head>
		<title>kong-dev</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable = no">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&v=3.8&libraries=places&language=en"></script>
		<script type="text/javascript" src="js/search.js"></script>
		<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
		<style>
			.map-canvas{
				height: 600px; width: 100%; position: relative; overflow: hidden;
			}
			#btn_search { width: 100%; }
			.col-sm-11 { padding-right: 0; }
		</style>
	</head>
<body>


	<dlv class="row">
		<div class="col-sm-12">
			<div class="map-canvas" id="map-canvas"></div>
		</div>
		
		<div class="col-sm-11">
			<div class="form-group">
				<input type="text" class="form-control" id="gg_map" name="gg_map" placeholder="Search" />
			</div>
		</div>
		<div class="col-sm-1">
			<button id="btn_search" type="button" class="btn btn-primary" autocomplete="off">Search</button>
		</div>
		
	</dlv>

</body>
</html>
