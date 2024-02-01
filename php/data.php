<?php

$data = [
    [
        'title' => 'Libro 1',
        'author' => 'Autore',
        'date_publischer' => '2001-01-01'
    ],
    [
        'title' => 'Libro 1',
        'author' => 'Autore',
        'date_publischer' => '2001-01-01'
    ]
];

header('Content-type:application/json');

echo json_encode($data);

exit;