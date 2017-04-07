var app = angular.module("myRoute", ["ngRoute"])
.run(function ($rootScope, $http) {
  $http.get("articles.json")
  .then(function (takes) {
    $rootScope.articles = takes.data;
  });
  $rootScope.newArticles = [];
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
app.controller("xboxGame", ["$scope", function($scope) {
        $scope.buy = function() {
            $scope.newArticles.push({console:this.article.consol, game:this.article.jeux, price:this.article.prix
            });
        };
        /*$scope.console = function() { 
            return $scope.newArticles.console; 
        };
        $scope.game = function() {
            return $scope.newArticles.game;
        };
        $scope.price = function() {
            return $scope.newArticles.price;
        };*/
}]);
app.controller("pcGames", ["$scope", function($scope) {
        $scope.buy = function() {
            $scope.newArticles.push({console:this.article.consol, game:this.article.jeux, price:this.article.prix
            });
        };
        $scope.remove = function (item) {
           $scope.newArticles.splice(item, 1);
       };
}]);
app.controller("playstationGames", ["$scope", function($scope) {
        $scope.buy = function() {
            $scope.newArticles.push({console:this.article.consol, game:this.article.jeux, price:this.article.prix
            });
        };
        
}]);
app.controller("nintendoGames", ["$scope", function($scope) {
        $scope.buy = function() {
            $scope.newArticles.push({console:this.article.consol, game:this.article.jeux, price:this.article.prix
            });
        };
}]);
