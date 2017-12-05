'use strict';

angular.
  module('myApp', ['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap','ui.carousel', 'paintingTable','carouselBogomol'])
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
 
  //Далі: контролери модальних вікон взято з Angular UI-Bootstrap і адаптовано

  // .controller('ModalDemoCtrl', function ($scope, $uibModal, $log, $document) {
  //   console.log('ModalDemoCtrl is working!');
  //   // чомусь не виводяться дані з масиву codes в select через ng-options та ng-repeat
  //   // $scope.codes = ['+380','+375','+48']

  //   $scope.animationsEnabled = true;

  //   $scope.open = function (size) {

  //     var modalInstance = $uibModal.open({
  //       animation: $scope.animationsEnabled,
  //       ariaLabelledBy: 'modal-title',
  //       ariaDescribedBy: 'modal-body',
  //       templateUrl: 'myModalContent.html',
  //       controller: 'ModalInstanceCtrl',
  //       size: size,
  //     });

  //     modalInstance.result.then(
  //       function () {
  //         $log.info('Modal dismissed at: ' + new Date());
  //       });
  //   };


  //   $scope.openMultipleModals = function () {
  //     $uibModal.open({
  //       animation: $scope.animationsEnabled,
  //       ariaLabelledBy: 'modal-title-bottom',
  //       ariaDescribedBy: 'modal-body-bottom',
  //       size: 'sm',
  //       controller: function ($scope) {
  //         $scope.name = 'bottom';
  //       }
  //     });

  //     $uibModal.open({
  //       animation: $scope.animationsEnabled,
  //       ariaLabelledBy: 'modal-title-top',
  //       ariaDescribedBy: 'modal-body-top',
  //       size: 'sm',
  //       controller: function ($scope) {
  //         $scope.name = 'top';
  //       }
  //     });
  //   };

  //   $scope.toggleAnimation = function () {
  //     $scope.animationsEnabled = !$scope.animationsEnabled;
  //   };
  // })

  // .controller('ModalInstanceCtrl', function ($scope, $log, $uibModalInstance) {

  //   $scope.ok = function () {
  //     $uibModalInstance.close();
  //     // console.log('Функція ОК на кнопку Submit працює!');
  //     // виявляється можна виводити в консоль інфу через $log , попередньо підключивши його в функцію,відрізняється від звичного 
  //     // console.log(), тим що має ще ряд функціональних(смислових) методів - warn(),error(),log(),debug()
  //     $log.info('Функція ОК на кнопку Submit зпрацювала!' + new Date());
  //   };

  //   $scope.cancel = function () {
  //     $uibModalInstance.dismiss('cancel');
  //   };
  // })

  .controller('ModalPaintingCtrl', function ($scope, $uibModal, $log, $document) {
    console.log('ModalPaintingCtrl is working!');

    $scope.animationsEnabled = true;

    $scope.openModal = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',

        templateUrl: 'ModalPaintingContent.html',
        controller: 'ModalPaintingInstanceCtrl',

        size: size,
      });

      modalInstance.result.then(
        function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
    };


    $scope.openMultipleModals = function () {
      $uibModal.openModal({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title-bottom',
        ariaDescribedBy: 'modal-body-bottom',
        size: 'sm',
        controller: function ($scope) {
          $scope.name = 'bottom';
        }
      });

      $uibModal.openModal({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title-top',
        ariaDescribedBy: 'modal-body-top',
        size: 'sm',
        controller: function ($scope) {
          $scope.name = 'top';
        }
      });
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };
  })

  .controller('ModalPaintingInstanceCtrl', function ($scope, $log, $uibModalInstance) {
   
    $scope.ok = function () {
      $uibModalInstance.close();
      $log.info('Функція ОК на кнопку Submit зпрацювала!' + new Date());
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  })

  