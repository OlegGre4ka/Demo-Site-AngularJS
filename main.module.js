'use strict';

angular.
module('myApp', ['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap','paintingTable'])
// 'paintingTable' - підключити в []коли буду виносити в окремий модуль
  // Другим аргументом в модулі ми передаємо масив залежностей:[angular-animate.js - 'ngAnimate',angular-sanitize.js-'ngSanitise' ,angular-ui-bootstrap - 'ui.bootstrap']

  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    
    $routeProvider
     .when('/', {
    templateUrl: 'home.html'
    })
    .when('/chat',{
    templateUrl:'chat.html'
    })
    .when('/page2',{
      // Увага!!!Не може одночасно, в одному методі when() прописуватись і template і  templateUrl!!!
      // Або те , або те!!!При чому якщо прописано обидва то грузить template, незалежно першим стоїть чи другим по порядку
    //template:'<h1 style="color:aqua">Routing for page2.html working!</h1>',
    templateUrl:'page2.html'
    })
    .when('/page3',{
    templateUrl:'page3.html',
   // template:'<h2 style="color:green">Routing for page3.html working!</h2>',
    
    })
    . otherwise('/')
  }) 
  .controller('MenuCtrl', function ($scope) {//підключити $location коли буду виносити все меню
    $scope.confirmRegchat = function () {
      confirm('Щоб мати змогу користуватись нашим чатом - зареєструйтесь (кнопка REG),' +
        "а якщо ви зареєстровані введіть Логін і Пароль(кнопка Log in) - і...Шалом, чатери! Что новенького на Плюке?")
    };

    // $scope.isActive = function (viewLocation) {

    //     var active=(viewLocation === $location.path());
    //     return active;
    //  }     
    //  $scope.isActive = function () {

    //     return path();
    //  }     
  })
  //Функція confirmRegchat() контролера спрацьовує, коли вже перебуваєш на сайті і хочеш перейти на сторінку "Чат",
  //директива confirmRegchat зпрацює якщо зайти на сторінку "Чат" одразу
  // .directive('confirmRegchat', function () {
  //   return {
  //     link: function (scope, element, attrs) {
  //       console.log('confirmRegchat directive working!!'),
  //         confirm('Щоб мати змогу користуватись нашим чатом - зареєструйтесь (кнопка REG),' +
  //           "а якщо ви зареєстровані введіть Логін і Пароль(кнопка Log in) - і...Шалом, чатери! Что новенького на Плюке?")
  //     }
  //   }
  // })
  //Далі: контролери модальних вікон взято з Angular UI-Bootstrap і адаптовано

  .controller('ModalDemoCtrl', function ($scope, $uibModal, $log, $document) {
    console.log('ModalDemoCtrl is working!');
    // чомусь не виводяться дані з масиву codes в select через ng-options та ng-repeat
    // $scope.codes = ['+380','+375','+48']

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
      });

      modalInstance.result.then(
        function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
    };


    $scope.openMultipleModals = function () {
      $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title-bottom',
        ariaDescribedBy: 'modal-body-bottom',
        size: 'sm',
        controller: function ($scope) {
          $scope.name = 'bottom';
        }
      });

      $uibModal.open({
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

  .controller('ModalInstanceCtrl', function ($scope, $log, $uibModalInstance) {

    $scope.ok = function () {
      $uibModalInstance.close();
      // console.log('Функція ОК на кнопку Submit працює!');
      // виявляється можна виводити в консоль інфу через $log , попередньо підключивши його в функцію,відрізняється від звичного 
      // console.log(), тим що має ще ряд функціональних(смислових) методів - warn(),error(),log(),debug()
      $log.info('Функція ОК на кнопку Submit зпрацювала!' + new Date());
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  })

  .controller('ModalLoginCtrl', function ($scope, $uibModal, $log, $document) {
    console.log('ModalLoginCtrl is working!');

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalLoginContent.html',
        controller: 'ModalLoginInstanceCtrl',
        size: size,
      });

      modalInstance.result.then(
        function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
    };


    $scope.openMultipleModals = function () {
      $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title-bottom',
        ariaDescribedBy: 'modal-body-bottom',
        size: 'sm',
        controller: function ($scope) {
          $scope.name = 'bottom';
        }
      });

      $uibModal.open({
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

  .controller('ModalLoginInstanceCtrl', function ($scope, $log, $uibModalInstance) {

    $scope.ok = function () {
      $uibModalInstance.close();
      $log.info('Функція ОК на кнопку Submit зпрацювала!' + new Date());
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  })
  // компонент закоментовано, бо винесено в окремий модуль 'paintingTable', потім видалю
// .component('paintingTable',
// {
//   template:'<div>'+
//   '<table>'+
//       '<caption>'+
//           '<h2>Енкаустика.Загадка Всесвіту</h2>'+
//       '</caption>'+
//       '<tr>'+
//           '<th>№</th>'+
//           '<th>Назва картини</th>'+
//           '<th>Місце знаходження</th>'+
//       '</tr>'+
//       '<tr ng-repeat="painting in $ctrl.paintings">'+
//           '<td>{{painting.number}}</td>'+
//           '<td><a ng-href="{{painting.name.foto}}" target="_blank">{{painting.name.title}}</a></td>'+
//           '<td>{{painting.home}}</td>'+
//       '</tr>'+
//   '</table>'+
// '</div>',
// controller: function PaintingTableController() {
 
//    this.paintings = [
//     {
//      number: 1, //чомусь немає значення формат JSON?чи в "" ,чи без у визначенні об"єкту?
//       name: {
//         foto: "foto/Blakytna_perlyna_Vsesvitu.jpg",
//         title: "Блакитна Перлина Всесвіту"
//       },
//       home: "Лувр(Париж,Франція)",
//     },
//     {
//       number: 2,
//       name: {
//         foto: "foto/Angely.jpg",
//         title: "Ангели"
//       },
//       home: "Національний Музей(Київ,Україна)",
//     },
//     {
//       number: 3,
//       name: {
//         foto: "foto/Velyke_Dyvo_Vsesvitu.jpg",
//         title: "Велике Диво Всесвіту"
//       },
//       home: "Приватна колекція Віри Бондар(Київ,Україна)",
//     },
//     {
//       number: 4,
//       name: {
//         foto: "foto/Znamennya.jpg",
//         title: "Знамення.Імени Божі."
//       },
//       home: "Музей Ватикану(Рим,Італія)",
//     },
//   ];
//   }
// })

  .controller('PaintingTableCtrl', function ($scope) {
    $scope.paintings = [
      {
        "number": 1,
        "name": {
          "foto": "foto/Blakytna_perlyna_Vsesvitu.jpg",
          "title": "Блакитна Перлина Всесвіту"
        },
        "home": "Лувр(Париж,Франція)",
      },
      {
        "number": 2,
        "name": {
          "foto": "foto/Angely.jpg",
          "title": "Ангели"
        },
        "home": "Національний Музей(Київ,Україна)",
      },
      {
        "number": 3,
        "name": {
          "foto": "foto/Velyke_Dyvo_Vsesvitu.jpg",
          "title": "Велике Диво Всесвіту"
        },
        "home": "Приватна колекція Віри Бондар(Київ,Україна)",
      },
      {
        "number": 4,
        "name": {
          "foto": "foto/Znamennya.jpg",
          "title": "Знамення.Імени Божі."
        },
        "home": "Музей Ватикану(Рим,Італія)",
      },
    ]
  })

