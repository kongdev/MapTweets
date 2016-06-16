<?php

require "vendor/autoload.php";
include('config.php');
use Abraham\TwitterOAuth\TwitterOAuth;



$connection = new TwitterOAuth($CONSUMER_KEY, $CONSUMER_SECRET, $OAUTH_TOKEN, $OAUTH_TOKEN_SECRET);

$params['count'] = 100;
$params['result_type'] = $_GET['type'];


if ( !empty($_GET['q']))
{
	$params['q'] = $_GET['q'];
}

$statuses = $connection->get("search/tweets", $params);

echo json_encode($statuses->statuses);
?>