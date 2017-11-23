'use strict';

angular.
  module('paintingTable')
  .component('paintingTable', {

    templateUrl: 'painting-table/paintingTable.template.html',

    controller: function PaintingTableController() {
      console.log('component paintingTable available! ');
      this.paintings = [
        {
          id: 'Incognito',
          imageUrl: "foto/incognito.jpg",
          title: "Інкогніто"
        },
        {
          id: 'Kruh zagadki Malevicha',
          imageUrl: "foto/Krah_M.jpg",
          title: "Неминучий крах загадки Малевича"
        },
        {
          id: 'Vesna',
          imageUrl: "foto/Vesna.jpg",
          title: "Весна"
        },
        {
          id: 'Trijcya',
          imageUrl: "foto/rizba_trijcya.jpg",
          title: "Трійця.(Різба по дереву)"
        },
       
        {
          id: 'Blakytna_perlyna_Vsesvitu', //чомусь немає значення формат JSON?чи в "" ,чи без у визначенні об"єкту? 
          imageUrl: "foto/Blakytna_perlyna_Vsesvitu.jpg",
          title: "Блакитна Перлина Всесвіту"

        },
        {
          id: 'Angely',
          imageUrl: "foto/Angely.jpg",
          title: "Ангели"
        },
        {
          id: 'Velyke_Dyvo_Vsesvitu',
          imageUrl: "foto/Velyke_Dyvo_Vsesvitu.jpg",
          title: "Велике Диво Всесвіту"
        },
        {
          id: 'Znamennya',
          imageUrl: "foto/Znamennya.jpg",
          title: "Знамення.Імени Божі."
        },
        {
          id: 'Lebid',
          imageUrl: "foto/rizba_lebid.jpg",
          title: "Лебідь"
        },
        {
          id: 'Zmiya',
          imageUrl: "foto/zmija.jpg",
          title: "Змія"
        },
      ];
    }
  })