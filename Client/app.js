var app = angular.module('newsFeed', []);

app.controller('MainCtrl', [
'$scope',
function ($scope) {

    $scope.posts = [
    {title: 'post1', upvotes: 5},
    {title: 'post2', upvotes: 2}
    ];

    $scope.addPost = function() {
        if ($scope.title==='') {return; }
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 4});
        $scope.title = '';
        $scope.link='';
    }

    $scope.incrementUpvotes = function(post) {
        post.upvotes++;
    }

    // $scope.test = 'Hello world!';
}]);