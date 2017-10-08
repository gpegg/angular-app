$(document).foundation();

var garrettApp = angular.module('garrettApp', ['ngRoute']);

garrettApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'MainController'
        })

        // route for the breakfast page
        .when('/breakfast', {
            templateUrl : 'views/breakfast.html',
            controller  : 'BreakfastController'
        })

        // route for the lunch page
        .when('/lunch', {
            templateUrl : 'views/lunch.html',
            controller  : 'LunchController'
        })

        // route for the dinner page
        .when('/dinner', {
            templateUrl : 'views/dinner.html',
            controller  : 'DinnerController'
        });
}]);

// create the controller and inject Angular's $scope
garrettApp.controller('MainController',['$scope', function($scope) {
    $scope.title = 'Our Full Menu';
    $scope.promo ="It's not that big...";
    $scope.breakfast = [{
      name: 'Pancakes',
      price: 7,
      calories: 500,
      cover: 'https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg',
    },
    {
      name: 'Eggs',
      price: 5,
      calories: 100,
      cover: 'https://www.incredibleegg.org/wp-content/themes/incredibleegg/assets/images/facts-left-egg.png',
    },
    {
      name: 'Cereal',
      price: 10,
      calories: 400,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Froot-Loops-Cereal-Bowl.jpg/220px-Froot-Loops-Cereal-Bowl.jpg',
    },
    {
      name: 'Muffin',
      price: 10,
      calories: 350,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BlueberryMuffin.jpg/1200px-BlueberryMuffin.jpg',
    },
    {
      name: 'Bagel',
      price: 10,
      calories: 250,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bagel-Plain-Alt.jpg/250px-Bagel-Plain-Alt.jpg',
    }
    ];
  }]);

garrettApp.controller('BreakfastController',['$scope', function($scope) {
    $scope.title = 'Breakfast Menu';
    $scope.promo ='BreakFAST - Fast Breakfast';
    $scope.breakfast = [{
      name: 'Pancakes',
      price: 7,
      calories: 500,
      cover: 'https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg',
    },
    {
      name: 'Eggs',
      price: 5,
      calories: 100,
      cover: 'https://www.incredibleegg.org/wp-content/themes/incredibleegg/assets/images/facts-left-egg.png',
    },
    {
      name: 'Cereal',
      price: 10,
      calories: 400,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Froot-Loops-Cereal-Bowl.jpg/220px-Froot-Loops-Cereal-Bowl.jpg',
    },
    {
      name: 'Muffin',
      price: 10,
      calories: 350,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BlueberryMuffin.jpg/1200px-BlueberryMuffin.jpg',
    },
    {
      name: 'Bagel',
      price: 10,
      calories: 250,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bagel-Plain-Alt.jpg/250px-Bagel-Plain-Alt.jpg',
    }
    ];
  }]);

  garrettApp.controller('LunchController',['$scope', function($scope) {
    $scope.title = 'Lunch Menu';
    $scope.promo ='Launch into Lunch';
    $scope.breakfast = [{
      name: 'Pancakes',
      price: 7,
      calories: 500,
      cover: 'https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg',
    },
    {
      name: 'Eggs',
      price: 5,
      calories: 100,
      cover: 'https://www.incredibleegg.org/wp-content/themes/incredibleegg/assets/images/facts-left-egg.png',
    },
    {
      name: 'Cereal',
      price: 10,
      calories: 400,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Froot-Loops-Cereal-Bowl.jpg/220px-Froot-Loops-Cereal-Bowl.jpg',
    },
    {
      name: 'Muffin',
      price: 10,
      calories: 350,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BlueberryMuffin.jpg/1200px-BlueberryMuffin.jpg',
    },
    {
      name: 'Bagel',
      price: 10,
      calories: 250,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bagel-Plain-Alt.jpg/250px-Bagel-Plain-Alt.jpg',
    }
    ];
  }]);

  garrettApp.controller('DinnerController',['$scope', function($scope) {
    $scope.title = 'Dinner Menu';
    $scope.promo ='*Clever Dinner Pun*';
    $scope.breakfast = [{
      name: 'Pancakes',
      price: 7,
      calories: 500,
      cover: 'https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg',
    },
    {
      name: 'Eggs',
      price: 5,
      calories: 100,
      cover: 'https://www.incredibleegg.org/wp-content/themes/incredibleegg/assets/images/facts-left-egg.png',
    },
    {
      name: 'Cereal',
      price: 10,
      calories: 400,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Froot-Loops-Cereal-Bowl.jpg/220px-Froot-Loops-Cereal-Bowl.jpg',
    },
    {
      name: 'Muffin',
      price: 10,
      calories: 350,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BlueberryMuffin.jpg/1200px-BlueberryMuffin.jpg',
    },
    {
      name: 'Bagel',
      price: 10,
      calories: 250,
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bagel-Plain-Alt.jpg/250px-Bagel-Plain-Alt.jpg',
    }
    ];
  }]);