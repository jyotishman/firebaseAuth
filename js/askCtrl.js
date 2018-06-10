authApp.controller('AskCtrl', ['$scope', 'Notification', '$location', function($scope, Notification, $location) {
  $scope.displayName = '';
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $scope.getUserName(user.displayName)

    } else {
      $location.path('/');
      $scope.$apply();
    }
  });
  $scope.getUserName = function(name) {
    $scope.displayName = name;
    $scope.$apply();
    
  }
  $scope.logout =  function() {
    firebase.auth().signOut()
    .then(function(data) {
      Notification.success('Congrats! Loggedin successfully.');
      $location.path('/');
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      Notification.warning(errorMessage);
    }); 
  }

}]);