var app = angular.module('newsFeed', []);

app.controller('MainCtrl', [
'$scope',
function($scope){

    //TODO: add date and function to save the current date

    $scope.posts = [ 
        {title: 'post 1', likes: 5},
        {title: 'post 2', likes: 2},
        {title: 'post 3', likes: 15},
        {title: 'post 4', likes: 9},
        {title: 'post 5', likes: 4}
    ];

    $scope.addPost = function(){
        if ($scope.title === '') { return; }
        $scope.posts.push({title: $scope.title, likes: 0})
        $scope.title = '';
    }

    $scope.like = function(post){
        post.likes += 1;
    }
}]);