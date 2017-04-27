<?php

// Returns actors for film

$film_id = $_GET['film'];

// TODO query database with $film_id
$actors = [
    "actors" => [ [
            "firstName" => "Dan",
            "lastName"  => "Jones",
            "image"     => "images/default-actor.png"
        ], [
            "firstName" => "Dan",
            "lastName"  => "Jones",
            "image"     => "images/default-actor.png"
        ], [
            "firstName" => "Dan",
            "lastName"  => "Jones",
            "image"     => "images/default-actor.png"
        ], [
            "firstName" => "Dan",
            "lastName"  => "Jones",
            "image"     => "images/default-actor.png"
        ]
    ]
];

// Response
header('Content-Type: application/json');
echo(json_encode($actors));

?>