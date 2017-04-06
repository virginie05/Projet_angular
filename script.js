var cart = angular.module("cart", []);

cart.controller("cartController", ['$scope', '$http', function ($scope, $http) {
        $scope.remove = function (item) {
        };
        $http.get('articles.json').then(function (res) {
            $scope.articles = res.data;
        });
    }]);
