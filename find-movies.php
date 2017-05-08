<?php

// Returns actors for film

$actor_id = $_GET['actor'];

// TODO query database with $actor_id
$films = [
    "films" => [ [
            "id"        => "1",
            "title"     => "Jurassic Park",
            "year"      => "1993"
        ], [
            "id"        => "2",
            "title"     => "Die Hard",
            "year"      => "1988"
        ], [
            "id"        => "3",
            "title"     => "Saving Private Ryan",
            "year"      => "1998"
        ], [
            "id"        => "4",
            "title"     => "Dodgeball",
            "year"      => "2004"
        ]
    ]
];

// Response
header('Content-Type: application/json');
echo(json_encode($films));

?>