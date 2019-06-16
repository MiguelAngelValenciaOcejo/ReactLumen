<?php
//EXAMPLE
// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });

$router->get('/test', ["uses"=>"TestsController@index"]);

// SECURE KEY GENERATOR
$router->get('/key', function(){
    return str_random(32);
});