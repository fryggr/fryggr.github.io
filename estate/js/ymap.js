      ymaps.ready(init);

      function init () {
          var myMap = new ymaps.Map("YMapsID", {
                  center: [55.66493526, 37.57119448],
                  zoom: 14
              });

              myMap.controls
              // Кнопка изменения масштаба.
              .add('zoomControl', { left: 5, top: 5 })
              // Список типов карты
              .add('typeSelector')
              // Стандартный набор кнопок
              .add('mapTools', { left: 35, top: 5 });

              var myPlacemark = new ymaps.Placemark([55.66973722, 37.56058648], { balloonContent: ''}, {
                  // Опции.
                  hideIconOnBalloonOpen:false,
                  // Своё изображение иконки метки.
                  iconImageHref: 'img/map-marker.png',
                  // Размеры метки.
                  iconImageSize: [75, 85],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-60, -75],
                  // Размеры содержимого балуна
                  balloonContentSize: [130, 130],
                  // Задаем макет балуна - пользовательская картинка с контентом
                  balloonLayout: "default#imageWithContent",
                  // Картинка балуна
                  balloonImageHref: 'img/baloon.png',
                  // Смещение картинки балуна
                  balloonImageOffset: [-5, -70],
                  // Размеры картинки балуна
                  balloonImageSize: [381, 91],
                  // Балун не имеет тени
                  balloonShadow: false,
                  ballonOpen: true
              });

              var myPlacemark2 = new ymaps.Placemark([55.65910313, 37.51862411], { balloonContent: ''}, {
                  // Опции.
                  hideIconOnBalloonOpen:false,
                  // Своё изображение иконки метки.
                  iconImageHref: 'img/map-marker2.png',
                  // Размеры метки.
                  iconImageSize: [73, 95],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-40, -85],
                  // Размеры содержимого балуна
                  balloonContentSize: [130, 130],
                  // Задаем макет балуна - пользовательская картинка с контентом
                  balloonLayout: "default#imageWithContent",
                  // Картинка балуна
                  balloonImageHref: 'img/baloon-lib.png',
                  // Смещение картинки балуна
                  balloonImageOffset: [20, -80],
                  // Размеры картинки балуна
                  balloonImageSize: [181, 91],
                  // Балун не имеет тени
                  balloonShadow: false,
                  ballonOpen: true
              });

              var myPlacemark3 = new ymaps.Placemark([55.66207182, 37.55630771], { balloonContent: ''}, {
                  // Опции.
                  hideIconOnBalloonOpen:false,
                  // Своё изображение иконки метки.
                  iconImageHref: 'img/map-marker2.png',
                  // Размеры метки.
                  iconImageSize: [73, 95],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-40, -85],
                  // Размеры содержимого балуна
                  balloonContentSize: [130, 130],
                  // Задаем макет балуна - пользовательская картинка с контентом
                  balloonLayout: "default#imageWithContent",
                  // Картинка балуна
                  balloonImageHref: 'img/garden.png',
                  // Смещение картинки балуна
                  balloonImageOffset: [20, -80],
                  // Размеры картинки балуна
                  balloonImageSize: [221, 91],
                  // Балун не имеет тени
                  balloonShadow: false,
                  ballonOpen: true
              });

              var myPlacemark4 = new ymaps.Placemark([55.65110508, 37.57639209], { balloonContent: ''}, {
                  // Опции.
                  hideIconOnBalloonOpen:false,
                  // Своё изображение иконки метки.
                  iconImageHref: 'img/map-marker2.png',
                  // Размеры метки.
                  iconImageSize: [73, 95],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-40, -85],
                  // Размеры содержимого балуна
                  balloonContentSize: [130, 130],
                  // Задаем макет балуна - пользовательская картинка с контентом
                  balloonLayout: "default#imageWithContent",
                  // Картинка балуна
                  balloonImageHref: 'img/olymp.png',
                  // Смещение картинки балуна
                  balloonImageOffset: [20, -80],
                  // Размеры картинки балуна
                  balloonImageSize: [265, 91],
                  // Балун не имеет тени
                  balloonShadow: false,
                  ballonOpen: true
              });

              var myPlacemark5 = new ymaps.Placemark([55.66047067, 37.60042469], { balloonContent: ''}, {
                  // Опции.
                  hideIconOnBalloonOpen:false,
                  // Своё изображение иконки метки.
                  iconImageHref: 'img/map-marker2.png',
                  // Размеры метки.
                  iconImageSize: [73, 95],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-40, -85],
                  // Размеры содержимого балуна
                  balloonContentSize: [130, 130],
                  // Задаем макет балуна - пользовательская картинка с контентом
                  balloonLayout: "default#imageWithContent",
                  // Картинка балуна
                  balloonImageHref: 'img/admin.png',
                  // Смещение картинки балуна
                  balloonImageOffset: [20, -80],
                  // Размеры картинки балуна
                  balloonImageSize: [260, 91],
                  // Балун не имеет тени
                  balloonShadow: false,
                  ballonOpen: true
              });

              // Добавляем все метки на карту.
              myMap.geoObjects.add(myPlacemark);
              myMap.geoObjects.add(myPlacemark2);
              myMap.geoObjects.add(myPlacemark3);
              myMap.geoObjects.add(myPlacemark4);
              myMap.geoObjects.add(myPlacemark5);


                  myPlacemark.balloon.open();

      }
