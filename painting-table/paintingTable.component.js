'use strict';

angular 
.module('paintingTable',[])
.component('paintingTable', {
    // template:  '<div>'+
    //     '<table>'+
    //         '<caption>'+
    //             '<h2>Енкаустика.Загадка Всесвіту</h2>'+
    //         '</caption>'+
    //         '<tr><th>№</th><th>Назва картини</th><th>Місце знаходження</th></tr>'+
    //         '<tr ng-repeat="painting in $ctrl.paintings">'+
    //             '<td>{{painting.number}}</td>'+
    //             '<td><a ng-href="{{painting.name.foto}}" target="_blank">{{painting.name.title}}</a></td>'+
    //             '<td>{{painting.home}}</td>'+
    //         '</tr>'+
    //     '</table>'+
    // '</div>',
    templateUrl:'painting-table/paintingTable.template.html',
    
    controller: function PaintingTableCtrl() {
      console.log('component paintingTable available! ');
     this.paintings = [
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
    }
})