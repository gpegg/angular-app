$(document).foundation();

var garrettApp = angular.module('garrettApp', ['ngRoute']);

garrettApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'MenuController'
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
garrettApp.controller('MenuController',['$scope', function($scope) {
    $scope.title = 'Our Full Menu';
    $scope.promo ="It's not that big...";
    $scope.menu = [{
      name: 'Pancakes',
      price: 7,
      calories: 500,
      cover: 'assets/img/pancakes.jpg',
    },
    {
      name: 'Eggs',
      price: 5,
      calories: 100,
      cover: 'assets/img/eggs.jpg',
    },
    {
      name: 'Cereal',
      price: 10,
      calories: 400,
      cover: 'assets/img/cereal.jpg',
    },
    {
      name: 'Muffin',
      price: 10,
      calories: 350,
      cover: 'assets/img/muffin.jpg',
    },
    {
      name: 'Bagel',
      price: 10,
      calories: 250,
      cover: 'assets/img/bagel.jpg',
    },
    {
      name: 'Doughnut',
      price: 10,
      calories: 250,
      cover: 'assets/img/donut.jpg',
    },
    {
      name: 'Hot Dogs',
      price: 7,
      calories: 500,
      cover: 'assets/img/hotdog.jpg',
    },
    {
      name: "Mac n' Cheese",
      price: 5,
      calories: 100,
      cover: 'assets/img/mac.jpg',
    },
    {
      name: 'Soups',
      price: 10,
      calories: 400,
      cover: 'assets/img/soup.jpg',
    },
    {
      name: 'Sandwiches',
      price: 10,
      calories: 350,
      cover: 'assets/img/sandwich.jpg',
    },
    {
      name: 'Pizza',
      price: 10,
      calories: 250,
      cover: 'assets/img/pizza.jpg',
    },
    {
      name: 'Salads',
      price: 10,
      calories: 250,
      cover: 'assets/img/salad.jpg',
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
      cover: 'assets/img/pancakes.jpg',
    },
    {
      name: 'Eggs',
      price: 5,
      calories: 100,
      cover: 'assets/img/eggs.jpg',
    },
    {
      name: 'Cereal',
      price: 10,
      calories: 400,
      cover: 'assets/img/cereal.jpg',
    },
    {
      name: 'Muffin',
      price: 10,
      calories: 350,
      cover: 'assets/img/muffin.jpg',
    },
    {
      name: 'Bagel',
      price: 10,
      calories: 250,
      cover: 'assets/img/bagel.jpg',
    },
    {
      name: 'Doughnut',
      price: 10,
      calories: 250,
      cover: 'assets/img/donut.jpg',
    }
    ];
  }]);

  garrettApp.controller('LunchController',['$scope', function($scope) {
    $scope.title = 'Lunch Menu';
    $scope.promo ='Launch into Lunch';
    $scope.lunch = [{
      name: 'Hot Dogs',
      price: 7,
      calories: 500,
      cover: 'assets/img/hotdog.jpg',
    },
    {
      name: "Mac n' Cheese",
      price: 5,
      calories: 100,
      cover: 'assets/img/mac.jpg',
    },
    {
      name: 'Soups',
      price: 10,
      calories: 400,
      cover: 'assets/img/soup.jpg',
    },
    {
      name: 'Sandwiches',
      price: 10,
      calories: 350,
      cover: 'assets/img/sandwich.jpg',
    },
    {
      name: 'Pizza',
      price: 10,
      calories: 250,
      cover: 'assets/img/pizza.jpg',
    },
    {
      name: 'Salads',
      price: 10,
      calories: 250,
      cover: 'assets/img/salad.jpg',
    }
    ];
  }]);

  garrettApp.controller('DinnerController',['$scope', function($scope) {
    $scope.title = 'Dinner Menu';
    $scope.promo ='Lunch foods are also dinner foods... but breakfast foods are not.';
    $scope.dinner = [{
      name: 'Hot Dogs',
      price: 7,
      calories: 500,
      cover: 'assets/img/hotdog.jpg',
    },
    {
      name: "Mac n' Cheese",
      price: 5,
      calories: 100,
      cover: 'assets/img/mac.jpg',
    },
    {
      name: 'Soups',
      price: 10,
      calories: 400,
      cover: 'assets/img/soup.jpg',
    },
    {
      name: 'Sandwiches',
      price: 10,
      calories: 350,
      cover: 'assets/img/sandwich.jpg',
    },
    {
      name: 'Pizza',
      price: 10,
      calories: 250,
      cover: 'assets/img/pizza.jpg',
    },
    {
      name: 'Salads',
      price: 10,
      calories: 250,
      cover: 'assets/img/salad.jpg',
    },
    {
      name: 'Burger',
      price: 7,
      calories: 500,
      cover: 'assets/img/burger.jpg',
    },
    {
      name: "Wings",
      price: 5,
      calories: 100,
      cover: 'assets/img/wings.jpg',
    },
    {
      name: 'Steak',
      price: 10,
      calories: 400,
      cover: 'assets/img/steak.jpg',
    },
    {
      name: 'Salmon',
      price: 10,
      calories: 350,
      cover: 'assets/img/salmon.jpg',
    },
    {
      name: 'Ribs',
      price: 10,
      calories: 250,
      cover: 'assets/img/ribs.jpg',
    },
    {
      name: 'Crab Cake',
      price: 10,
      calories: 250,
      cover: 'assets/img/crabcake.jpg',
    }
    ];
  }]);