var app = angular.module("hioh", ['routerApp', 'letterWriter', 'repSelector']);

//this is the repfinder
var app = angular.module("repSelector", []);
app.controller("repCtrl", function($scope) {
  $scope.states = [
    {
      state: "AL",
      sen: {
        seat1: {
          name: "Richard Shelby",
          party: "R",
          DOB: 1934,
          in: 1987,
          out: 2023,
          email: "Sen Shelby does not have a direct email address. You can find his contanct form on his website",
          website: "http://www.shelby.senate.gov/",
          mailing: "304 Russell Senate Office Building Washington DC 20510",
          phone: "(202) 224-5744",
          img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Richard_Shelby%2C_official_portrait%2C_112th_Congress_crop.jpg"
        },
        seat2: {
          name: "Luther Strange",
          party: "R",
          DOB: 1953,
          in: 2017,
          out: 2012,
          email: "Sen Strange does not have a direct email address. You can find his contanct form on his website",
          website: "https://www.strange.senate.gov/content/contact-senator",
          mailing: "G-12 Dirksen Senate Office Building Washington DC 20510",
          phone: "(202) 224-4124",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Luther_Strange_official_portrait.jpg/467px-Luther_Strange_official_portrait.jpg"
        },
      },
      house: 9
    },
  ];
});

//this is all the routing
var routerApp = angular.module('routerApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })

        .state('repfinder', {
          url: '/repfinder',
          templateUrl: 'rep-finder.html'
        })

        .state('letter', {
          url: '/letter',
          templateUrl: 'letter.html'
        })

});

//this is the letter-writer
var lttrApp = angular.module('letterWriter', []);

//date magic!
app.controller('dateCtrl', function($scope){
$scope.today = new Date();
});

//download as pdf
