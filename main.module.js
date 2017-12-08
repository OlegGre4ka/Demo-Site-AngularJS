'use strict';

angular.
  module('myApp', ['ngRoute','paintingTable','carouselBogomol'])
  // якщо підключати ui-bootstrap то обовязково підключити ці можулі - 'ngAnimate', 'ngSanitize','ui.bootstrap','ui.carousel',
  // 'paintingTable' - підключити в []коли буду виносити в окремий модуль
  // Другим аргументом в модулі ми передаємо масив залежностей:[angular-animate.js - 'ngAnimate',angular-sanitize.js-'ngSanitise' ,angular-ui-bootstrap - 'ui.bootstrap']
  
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      
      .when('/', {
        templateUrl: 'painting_seva.html'
      })
      // .when('/chat', {
      //   templateUrl: 'chat.html'
      // })
      .when('/vystavky', {
        // Увага!!!Не може одночасно, в одному методі when() прописуватись і template і  templateUrl!!!
        // Або те , або те!!!При чому якщо прописано обидва то грузить template, незалежно першим стоїть чи другим по порядку
        //template:'<h1 style="color:aqua">Routing for page2.html working!</h1>',
        templateUrl: 'vystavky.html'
      })
      .when('/page3', {
        templateUrl: 'page3.html',

      })
      .otherwise('/')
  })
 

 