'use strict';

angular.
  module('carouselBogomol')
  .component('carouselBogomol', {
   
    templateUrl: 'components/carousel-bogomol/carouselBogomol.template.html',

    controller: function CarouselBogomolController() {
      console.log('component CarouselBogomol available! ');
      this.slides = [
        {
          imageUrl: "foto/bogomol/Evgen.jpg",
          title: "Автор"
        },
        {
          imageUrl: "foto/bogomol/Evgen-Olga.jpg",
          title: "Разом з Ольгою Богомолець та Оксаною Білозір"
        },
        {
          imageUrl: "foto/bogomol/vystavka.jpg",
          title: "Виставка"
        },
        {
          imageUrl: "foto/bogomol/Evgen-3.jpg",
          title: "Автор"
        },

        {
          imageUrl: "foto/bogomol/picture-1.jpg",
          title: "Картина"

        },
        {
          imageUrl: "foto/bogomol/picture-2.jpg",
          title: "Картина2"
        },
       
      ]

      
      
  
  },
  })