angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tudung_i', {
    url: '/page1',
    templateUrl: 'templates/tudung_i.html',
    controller: 'tudung_iCtrl'
  })

  .state('2Tudung_i', {
    url: '/page2',
    templateUrl: 'templates/2Tudung_i.html',
    controller: '2Tudung_iCtrl'
  })

  .state('3Tudung_i', {
    url: '/page6',
    templateUrl: 'templates/3Tudung_i.html',
    controller: '3Tudung_iCtrl'
  })

  .state('page', {
    url: '/page3',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('aboutUs', {
    url: '/page7',
    templateUrl: 'templates/aboutUs.html',
    controller: 'aboutUsCtrl'
  })

  .state('sliderPage', {
    url: '/page8',
    templateUrl: 'templates/sliderPage.html',
    controller: 'sliderPageCtrl'
  })

$urlRouterProvider.otherwise('/page8')


});