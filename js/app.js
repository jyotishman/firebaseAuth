var authApp = angular.module("authApp", ["ngRoute", 'ui-notification']);

authApp.config(['$routeProvider', '$locationProvider', 'NotificationProvider',function($routeProvider, $locationProvider, NotificationProvider){
	$routeProvider
	.when('/',{
		controller: "AuthCtrl",
		templateUrl: "/authentication.html"
	})
	.when('/ask',{
		controller: "AskCtrl",
		templateUrl: "/ask.html"
	}).
	otherwise({
		redirectTo: '/authentication.html'
	});
}]);
