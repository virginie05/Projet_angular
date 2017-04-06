var app = angular.module("myRoute", ["ngRoute"])
        .run(function ($rootScope, $http) {
            $http.get("articles.json")
                    .then(function (takes) {
                        $rootScope.articles = takes.data;
                    });
        });
app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider
                .when("/", {
                    templateUrl: "accueil.html",
                    controller: "accueil"
                })
                .when("/xboxGame", {
                    templateUrl: "xboxGame.html",
                    controller: "xboxGame"
                })
                .when("/xboxAccesories", {
                    templateUrl: "xboxAccesories.html",
                    controller: "xboxAccesories"
                })
                .when("/pcGames", {
                    templateUrl: "pcGames.html",
                    controller: "pcGames"
                })
                .when("/pcAccesories", {
                    templateUrl: "pcAccesories.html",
                    controller: "pcAccesories"
                })
                .when("/playstationGames", {
                    templateUrl: "playstationGames.html",
                    controller: "playstationGames"
                })
                .when("/playstationAccesories", {
                    templateUrl: "playstationAccesories.html",
                    controller: "playstationAccesories"
                })
                .when("/nintendoGames", {
                    templateUrl: "nintendoGames.html",
                    controller: "nintendoGames"
                })
                .when("/nintendoAccesories", {
                    templateUrl: "nintendoAccesories.html",
                    controller: "nintendoAccesories"
                })
                .otherwise({
                    redirectTo: "/"
                });
    }]);

app.controller("accueil", ["$scope", function($scope){
    $scope.slide = function(dir) {
        $('#myCarousel').carousel(dir);
    };
}]);