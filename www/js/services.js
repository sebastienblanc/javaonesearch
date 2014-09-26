var services = angular.module('starter.services', ['ngResource','base64'])

/**
 * A simple example service that returns some data.
 */
services.factory('Tweets', function($resource, $http) {
  

    var r = $resource('https://api.twitter.com/1.1/search/:action',
        {action: 'tweets.json',
         q: "javaone",
         count:100
        })

    return r;
})
.run(function ($base64, $http) {
	 var consumerKey = encodeURIComponent('DlRjFonXpoalopjVgKs2xecyb')
	    var consumerSecret = encodeURIComponent('9yyTYqhs8sHsDuA0vZH4pPBEPMy87PWpKDYKwXzsrsBBi9nIGg')
	    var credentials = $base64.encode(consumerKey + ':' + consumerSecret)
	    // Twitters OAuth service endpoint
	    var twitterOauthEndpoint = $http.post(
	        'https://api.twitter.com/oauth2/token'
	        , "grant_type=client_credentials"
	        , {headers: {'Authorization': 'Basic ' + credentials, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}
	    )
	    twitterOauthEndpoint.success(function (response) {
	        // a successful response will return
	        // the "bearer" token which is registered
	        // to the $httpProvider
	    	services.$httpProvider.defaults.headers.common['Authorization'] = "Bearer " + response.access_token
	    }).error(function (response) {
	          // error handling to some meaningful extent
	        })	

})
.config(function ($httpProvider) {
	 
	services.$httpProvider = $httpProvider
        });
