var app = angular.module("myRoute", ["ngRoute"])
.run(function ($rootScope, $http) {
  $http.get("articles.json")
  .then(function (takes) {
    $rootScope.articles = takes.data;
  });
  $rootScope.newArticles = [];
  $rootScope.buy = function() {
    $rootScope.newArticles.push({console:this.article.consol, game:this.article.jeux, quantity:this.article.quantit, price:this.article.prix
    });
  };
  $rootScope.remove = function(item) {
    $rootScope.newArticles.splice(item, 1);
  };
  $rootScope.total = function () {
    var total = 0;
    for (var i = 0; i < $rootScope.newArticles.length; i++) {
      total += ($rootScope.newArticles[i].quantity * $rootScope.newArticles[i].price);
    }
    ;
    return total;
  };
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
app.controller("xboxAccesories", ["$scope", function($scope) {
}]);

app.controller("pcGames", ["$scope", function($scope) {
}]);
app.controller("pcAccesories", ["$scope", function($scope) {
}]);

app.controller("playstationGames", ["$scope", function($scope) {
}]);
app.controller("playstationAccesories", ["$scope", function($scope) {
}]);

app.controller("nintendoGames", ["$scope", function($scope) {
}]);
app.controller("nintendoAccesories", ["$scope", function($scope) {
}]);
