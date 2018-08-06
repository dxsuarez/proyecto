/*

var feedApp = angular.module('feedApp', ['ngResource', 'angularMoment', 'ngAnimate']);

feedApp.controller('FeedCtrl', ['$scope', '$resource', '$timeout', function($scope, $resource, $timeout) {
  $scope.feedEntries = $resource('/test').query();

  console.log('paso 1');
  io.socket.on('/test/subscribe', function(data, jwr) {
    console.log('paso 2', data, jwr);
    io.socket.on('new_entry', function(entry) {
      $timeout(function() {
        $scope.feedEntries.unshift(entry);
      });
    });
  });
}]);

*/

io.socket.on('message', function (data) {
  console.log(data);
});
