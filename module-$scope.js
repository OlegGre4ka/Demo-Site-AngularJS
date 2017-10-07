angular.module('myAppDemoSite-$scope', ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])
// Другим аргументом в модулі ми передаємо масив залежностей:[angular-animate.js - 'ngAnimate',angular-sanitize.js-'ngSanitise' ,angular-ui-bootstrap - 'ui.bootstrap']

// Функція run запускає любі процеси одразу з запуском сторінк, це функція глобальної області $rootScope, поки що вона нам не потрібна
//  .run( function ($rootScope){
//                   alert('Шалом дараженькі сябри і генацвалє!!! Welcom to my Demo Version WEB-page!') ;
//                   alert('Дуже просили мама і тато, і я вас прошу зарєєструватись! Тисніть, калі-ласка на кнопку REG! Далі буде цікавіше:)!' )         
//  })

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
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
        $scope.name = 'bottom';  
      }
    });

    $uibModal.open({
      animation: $scope.animationsEnabled,
      ariaLabelledBy: 'modal-title-top',
      ariaDescribedBy: 'modal-body-top',
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
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
.controller('PaintingTableCtrl',function ($scope) {
  $scope.paintings=[
    {
      "number": 1,
      "name":{
        "foto":"foto/Blakytna_perlyna_Vsesvitu.jpg",
        "title":"Блакитна Перлина Всесвіту"
      },
      "home":"Лувр(Париж,Франція)",
    },
    {
      "number": 2,
      "name":{
        "foto":"foto/Angely.jpg",
        "title":"Ангели"
      },
      "home":"Національний Музей(Київ,Україна)",
    },
    {
      "number": 3,
      "name":{
        "foto":"foto/Velyke_Dyvo_Vsesvitu.jpg",
        "title":"Велике Диво Всесвіту"
      },
      "home":"Приватна колекція Віри Бондар(Київ,Україна)",
    },
    {
      "number": 4,
      "name":{
        "foto":"foto/Znamennya.jpg",
        "title":"Знамення.Імени Божі."
      },
      "home":"Музей Ватикану(Рим,Італія)",
    },
  ]
})
.directive('confirmRegchat',function () {
  return{
    link:function (scope,element,attrs) {
    console.log('confirmRegchat directive working!!'),
    confirm('Щоб мати змогу користуватись нашим чатом - зареєструйтесь (кнопка REG),'+
    "а якщо ви зареєстровані введіть Логін і Пароль(кнопка Log in) - і...Шалом, чатери! Что новенького на Плюке?")
    }
  }
})
