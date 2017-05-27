var app = angular.module("hioh", ['routerApp']);
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
          phone: "(202) 224-5744"
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
          phone: "(202) 224-4124"
        },
      },
      house: 9
    },
  ];
});


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
        });

});
