angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Tweets) {
  $scope.tweets = [];
  
  
  $scope.doRefresh = function() {
	  var tweets = Tweets.get().$promise.then(function(data) {
		  $scope.tweets = data.statuses;
		  $scope.$broadcast('scroll.refreshComplete');
	  });
  };
  $scope.doRefresh(); 
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Tweets) {
  //$scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
