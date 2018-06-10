authApp.controller('AuthCtrl', ['$scope', 'Notification', '$location', function($scope, Notification, $location) {
  $scope.isDisabled = false;
  var auth = firebase.auth();


  $scope.submitLogin = function(event) {
    var email = $scope.user.email;
    var password = $scope.user.password;
    $scope.isDisabled = true;
    auth.signInWithEmailAndPassword(email, password)
    .then(function(data){
      Notification.success('Congrats! Loggedin successfully.');
      $location.path('/ask');
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      Notification.warning(errorMessage);
      scope.isDisabled = false;
    });
  }
  $scope.submitRegister = function() {
    $scope.isDisabled = true;
  	var email = $scope.register.email;
    var name = $scope.register.name;
    var password = $scope.register.password;
    
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(user){
      user.user.updateProfile({
        displayName: name
      }).then(function() {
          
      });
      Notification.success('Congrats ' + name + '! Your account has been created successfully.');
      auth.signInWithEmailAndPassword(email, password)
      .then(function(data){
        $location.path('/ask');
      })
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      Notification.warning(errorMessage);
      scope.isDisabled = false;
    });
  }
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $scope.getUserName(user.displayName)
    } else {
      // No user is signed in.
    }
  });
  $scope.getUserName = function(name) {
    $scope.displayName = name;
  }
  $scope.init =  function() {
    
  }
  $scope.init();

}]);