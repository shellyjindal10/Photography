var app = angular.module('Flickr', []);

app.controller('MainController', function($scope, $http) {
  $http.jsonp("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2d0dca73fa32eb6ab7c1a5f251d8e3cd&per_page=30&format=json&jsoncallback=JSON_CALLBACK&user_id=35003907@N06")
  .success(function(data){

    $scope.data = data.photos.photo;

  })
});
