<?php

// Returns actors for film

$film_id = $_GET['film'];

// TODO query database with $film_id
$actors = [
    "actors" => [ [
            "id"        => "1",
            "firstName" => "Dan",
            "lastName"  => "Jones",
            "image"     => "images/default-actor.png"
        ], [
            "id"        => "2",
            "firstName" => "Dan",
            "lastName"  => "Jones",
            "image"     => "images/default-actor.png"
        ], [
            "id"        => "3",
            "firstName" => "Dan",
            "lastName"  => "Jones",
            "image"     => "images/default-actor.png"
        ], [
            "id"        => "4",
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