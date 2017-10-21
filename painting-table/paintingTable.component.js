'use strict';

angular. 
module('paintingTable')
.component('paintingTable', {
  
    templateUrl:'painting-table/paintingTable.template.html',
    
    controller: function PaintingTableController() {
      console.log('component paintingTable available! ');
     this.paintings = [
      {
       'number': 1, //чомусь немає значення формат JSON?чи в "" ,чи без у визначенні об"єкту?
        name: {
          foto: "foto/Blakytna_perlyna_Vsesvitu.jpg",
          title: "Блакитна Перлина Всесвіту"
        },
        home: "Лувр(Париж,Франція)",
      },
      {
        number: 2,
        name: {
          foto: "foto/Angely.jpg",
          title: "Ангели"
        },
        home: "Національний Музей(Київ,Україна)",
      },
      {
        number: 3,
        name: {
          foto: "foto/Velyke_Dyvo_Vsesvitu.jpg",
          title: "Велике Диво Всесвіту"
        },
        home: "Приватна колекція Віри Бондар(Київ,Україна)",
      },
      {
        number: 4,
        name: {
          foto: "foto/Znamennya.jpg",
          title: "Знамення.Імени Божі."
        },
        home: "Музей Ватикану(Рим,Італія)",
      },
    ];
    }
})