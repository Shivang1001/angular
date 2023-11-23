angular.module('eventApp', [])

.controller('EventController', function($scope) {
  $scope.messageVisible = false;

  $scope.handleClick = function() {
    $scope.message = "Button Clicked!";
    $scope.messageVisible = true;
  };
});
