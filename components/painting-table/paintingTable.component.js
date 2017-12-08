'use strict';

angular
.module('paintingTable')
  .component('paintingTable', {

    templateUrl: 'components/painting-table/paintingTable.template.html',

    controller: function PaintingListController() {
      console.log('component PaintingList available! ');
      var vm = this;

      vm.paintings = [
        {
          id: 'Incognito',
          imageUrl: "foto/enkavstika/incognito.jpg",
          title: "Інкогніто",

        },
        {
          id: 'Kruh zagadki Malevicha',
          imageUrl: "foto/enkavstika/Krah_M.jpg",
          title: "Неминучий крах загадки Малевича"
        },
        {
          id: 'Vesna',
          imageUrl: "foto/enkavstika/Vesna.jpg",
          title: "Весна"
        },
        {
          id: 'Trijcya',
          imageUrl: "foto/enkavstika/rizba_trijcya.jpg",
          title: "Трійця.(Різьба по дереву)"
        },

        {
          id: 'Blakytna_perlyna_Vsesvitu', //чомусь немає значення формат JSON?чи в "" ,чи без у визначенні об"єкту? 
          imageUrl: "foto/enkavstika/Blakytna_perlyna_Vsesvitu.jpg",
          title: "Блакитна Перлина Всесвіту"

        },
        {
          id: 'Angely',
          imageUrl: "foto/enkavstika/Angely.jpg",
          title: "Ангели"
        },
        {
          id: 'Velyke_Dyvo_Vsesvitu',
          imageUrl: "foto/enkavstika/Velyke_Dyvo_Vsesvitu.jpg",
          title: "Велике Диво Всесвіту"
        },
        {
          id: 'Znamennya',
          imageUrl: "foto/enkavstika/Znamennya.jpg",
          title: "Знамення.Імени Божі"
        },
        {
          id: 'Lebid',
          imageUrl: "foto/enkavstika/rizba_lebid.jpg",
          title: "Лебідь(Різьба по дереву)"
        },
        {
          id: 'Spokusa',
          imageUrl: "foto/enkavstika/spokusa.jpg",
          title: "Спокуса(Різьба по дереву)"
        },

      ];

      vm.myModal = document.getElementById('myModal');

      vm.isModal = false;
      vm.selectedModelItem = {};

      vm.showModal = function (item) {
        vm.selectedModelItem = item;
        vm.isModal = true;
        vm.myModal.style.display = "block";
        console.log('showModal() function working!')

      }
      vm.closeModal = function () {
        vm.isModal = false;
        vm.selectedModelItem = {};
        vm.myModal.style.display = "none";
      }
    },
  })