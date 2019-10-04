<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require "mapclasses/Map.php";

$myMap2 = new Map(6229597);

$myMap2->createMap();

?>