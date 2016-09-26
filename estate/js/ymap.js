      ymaps.ready(init);

      function init () {
          var myMap = new ymaps.Map("YMapsID", {
                  center: [55.66730499, 37.55121889],
                  zoom: 15
              });

              myMap.controls
              // Кнопка изменения масштаба.
              .add('zoomControl', { left: 5, top: 5 })
              // Список типов карты
              .add('typeSelector')
              // Стандартный набор кнопок
              .add('mapTools', { left: 35, top: 5 });

              var myPlacemark = new ymaps.Placemark([55.66590475, 37.54770428], { balloonContent: 'Москва, ул. Профсоюзная, 64'}, {
                  // Опции.
                  hideIconOnBalloonOpen:false,
                  // Своё изображение иконки метки.
                  iconImageHref: 'img/map-marker.png',
                  // Размеры метки.
                  iconImageSize: [75, 85],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-35, -50],
                  // Размеры содержимого балуна
                  balloonContentSize: [130, 130],
                  // Задаем макет балуна - пользовательская картинка с контентом
                  //balloonLayout: "default#imageWithContent",
                  // Картинка балуна
                 // balloonImageHref: 'img/baloon.png',
                  // Смещение картинки балуна
                 // balloonImageOffset: [-5, -70],
                  // Размеры картинки балуна
               //   balloonImageSize: [381, 91],
                  // Балун не имеет тени
                  balloonShadow: false,
                  ballonOpen: true
              });

              var myPlacemark2 = new ymaps.Placemark([55.66597752, 37.54884153], { balloonContent: 'Чайхона, "Азбука вкуса"'}, {
                  // Опции.
                  hideIconOnBalloonOpen:true,
                  // Своё изображение иконки метки.
                  iconImageHref: 'img/map-marker2.png',
                  // Размеры метки.
                  iconImageSize: [73, 95],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [15, 15],
                  // Размеры содержимого балуна
                  balloonContentSize: [130, 130],
                  balloonPanelMaxMapArea: 0,
                  // Задаем макет балуна - пользовательская картинка с контентом
                  //balloonLayout: "default#imageWithContent",
                  // Картинка балуна
                  //balloonImageHref: 'img/baloon.png',
                  // Смещение картинки балуна
                  //balloonImageOffset: [-5, -70],
                  // Размеры картинки балуна
                  //balloonImageSize: [381, 91],
                  // Балун не имеет тени
                  balloonShadow: false,
                  ballonOpen: false,
              });

              var myPlacemark3 = new ymaps.Placemark([55.66712802, 37.54089850], { balloonContent: 'Воронцовский парк'}, {
                  // Опции.
                  hideIconOnBalloonOpen:true,
                  // Своё изображение иконки метки.
                  iconImageHref: 'img/map-marker2.png',
                  // Размеры метки.
                  iconImageSize: [73, 95],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-15, -15],
                  // Размеры содержимого балуна
                  balloonContentSize: [130, 130],
                  balloonPanelMaxMapArea: 0,
                  // Задаем макет балуна - пользовательская картинка с контентом
                  //balloonLayout: "default#imageWithContent",
                  // Картинка балуна
                  //balloonImageHref: 'img/baloon.png',
                  // Смещение картинки балуна
                  //balloonImageOffset: [-5, -70],
                  // Размеры картинки балуна
                  //balloonImageSize: [381, 91],
                  // Балун не имеет тени
                  balloonShadow: false,
                  ballonOpen: false,
              });

              var myPlacemark4 = new ymaps.Placemark([55.67007503, 37.55445975], { balloonContent: 'Метро Новые Черемушки'}, {
                  // Опции.
                  hideIconOnBalloonOpen:true,
                  // Своё изображение иконки метки.
                  iconImageHref: 'img/map-marker2.png',
                  // Размеры метки.
                  iconImageSize: [73, 95],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-60, -70],
                  // Размеры содержимого балуна
                  balloonContentSize: [130, 130],
                  balloonPanelMaxMapArea: 0,
                  // Задаем макет балуна - пользовательская картинка с контентом
                  //balloonLayout: "default#imageWithContent",
                  // Картинка балуна
                  //balloonImageHref: 'img/baloon.png',
                  // Смещение картинки балуна
                  //balloonImageOffset: [-5, -70],
                  // Размеры картинки балуна
                  //balloonImageSize: [381, 91],
                  // Балун не имеет тени
                  balloonShadow: false,
                  ballonOpen: false,
              });

              var myPlacemark5 = new ymaps.Placemark([55.66303851, 37.55900138], { balloonContent: 'Школа Газпрома'}, {
                  // Опции.
                  hideIconOnBalloonOpen:true,
                  // Своё изображение иконки метки.
                  iconImageHref: 'img/map-marker2.png',
                  // Размеры метки.
                  iconImageSize: [73, 95],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-15, -15],
                  // Размеры содержимого балуна
                  balloonContentSize: [130, 130],
                  balloonPanelMaxMapArea: 0,
                  // Задаем макет балуна - пользовательская картинка с контентом
                  //balloonLayout: "default#imageWithContent",
                  // Картинка балуна
                  //balloonImageHref: 'img/baloon.png',
                  // Смещение картинки балуна
                  //balloonImageOffset: [-5, -70],
                  // Размеры картинки балуна
                  //balloonImageSize: [381, 91],
                  // Балун не имеет тени
                  balloonShadow: false,
                  ballonOpen: false,
              });
                  myMap.behaviors
                        // Отключаем часть включенных по умолчанию поведений:
                        //  - drag - перемещение карты при нажатой левой кнопки мыши;
                        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
                        .disable(['drag', 'scrollZoom', 'multiTouch'])
              // Добавляем все метки на карту.
              myMap.geoObjects.add(myPlacemark);
              myMap.geoObjects.add(myPlacemark2);
              myMap.geoObjects.add(myPlacemark3);
              myMap.geoObjects.add(myPlacemark4);
              myMap.geoObjects.add(myPlacemark5);


                  myPlacemark.balloon.open();

                  var myMapMobile = new ymaps.Map("YMapsID-mobile", {
                          center: [55.67017379, 37.55885318],
                          zoom: 14,
                          behaviors: ['scrollZoom'],
                      });
                        myMapMobile.behaviors.disable('scrollZoom');
                      myMapMobile.controls
                      // Кнопка изменения масштаба.
                      .add('zoomControl', { left: 5, top: 5 })
                      // Список типов карты
                      .add('typeSelector')
                      // Стандартный набор кнопок
                      .add('mapTools', { left: 35, top: 5 });

                      var myPlacemarkMobile = new ymaps.Placemark([55.66973722, 37.56058648], { balloonContent: 'Тверь, Набережная Степана Разина, д. 20'}, {
                          // Опции.
                          hideIconOnBalloonOpen:true,
                          // Своё изображение иконки метки.
                          iconImageHref: 'img/map-marker.png',
                          // Размеры метки.
                          iconImageSize: [75, 85],
                          // Смещение левого верхнего угла иконки относительно
                          // её "ножки" (точки привязки).
                          iconImageOffset: [-60, -75],
                          // Размеры содержимого балуна
                          balloonContentSize: [130, 130],
                          balloonPanelMaxMapArea: 0,
                          // Задаем макет балуна - пользовательская картинка с контентом
                          //balloonLayout: "default#imageWithContent",
                          // Картинка балуна
                          //balloonImageHref: 'img/baloon.png',
                          // Смещение картинки балуна
                          //balloonImageOffset: [-5, -70],
                          // Размеры картинки балуна
                          //balloonImageSize: [381, 91],
                          // Балун не имеет тени
                          balloonShadow: true,
                          ballonOpen: true,
                          //behaviors:['default', 'scrollZoom']
                      });
                      myMapMobile.behaviors.disable('drag');
                      //myMapMobile.behaviors.disable(['drag', 'scrollZoom', 'multiTouch']);
                        // Отключаем часть включенных по умолчанию поведений:
                        //  - drag - перемещение карты при нажатой левой кнопки мыши;
                        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
                        //.disable(['drag', 'scrollZoom', 'multiTouch']);
                      //myMapMobile.behaviors.disable('scrollZoom');
                      //myMapMobile.behaviors.disable('drag');
                      // Добавляем все метки на карту.
                      myMapMobile.geoObjects.add(myPlacemarkMobile);





      }
