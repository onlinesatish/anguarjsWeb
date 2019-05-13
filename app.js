var app = angular.module('amaApp', ['ngRoute']);
 app.config(['$routeProvider', function($routeProvider){
 //$locationProvider.html5Mode(true);
 
 
 $routeProvider
 // Home
 .when("/", {templateUrl: "templates/contents/home.html", controller: "amaCtrl"})
 // Home
 .when("/about", {templateUrl: "templates/contents/about.html", controller: "amaCtrl"})
 // Home
 .when("/contact", {templateUrl: "templates/contents/contact.html", controller: "amaCtrl"})
 // else 404
 .otherwise( {templateUrl: "templates/contents/404.html", controller: "amaCtrl"});
 
 // use the HTML5 History API
 $locationProvider.html5Mode(true);
 $locationProvider.hashPrefix('');}]);
 app.controller('amaCtrl', function($scope){
 
 
 })
 
