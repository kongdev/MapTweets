<?php

require "vendor/autoload.php";
include('config.php');
use Abraham\TwitterOAuth\TwitterOAuth;



$connection = new TwitterOAuth($CONSUMER_KEY, $CONSUMER_SECRET, $OAUTH_TOKEN, $OAUTH_TOKEN_SECRET);



$params['q'] = '%20';
$params['count'] = 100;
$params['result_type'] = 'mixed';


if ( !empty($_GET['x']) && !empty($_GET['y']) ){
	$params['geocode'] = $_GET['x'].",".$_GET['y']."," . $radius;
}

$statuses = $connection->get("search/tweets", $params);

echo json_encode($statuses->statuses);
?>