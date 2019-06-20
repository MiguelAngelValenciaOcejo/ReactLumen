<?php
//EXAMPLE
// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });

$router->get('/test', ["uses"=>"TestsController@getTests"]);
$router->delete('/test', ["uses"=>"TestsController@deleteTest"]);
$router->post('/test', ["uses"=>"TestsController@createTest"]);
$router->put('/test', ["uses"=>"TestsController@updateTest"]);

// SECURE KEY GENERATOR
// $router->get('/key', function(){
//     return str_random(32);
// });