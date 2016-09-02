/*YMaps.jQuery(function () {

        // Создает экземпляр карты и привязывает его к созданному контейнеру
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
        map.setCenter(new YMaps.GeoPoint(37.57119448, 55.66493526), 14);
        map.addControl(new YMaps.TypeControl());
        map.addControl(new YMaps.ToolBar());
        map.addControl(new YMaps.Zoom());
        map.addControl(new YMaps.ScaleLine());



        var placemark1 = new YMaps.Placemark(new YMaps.GeoPoint(37.56058648, 55.66973722), {hideIcon: true}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map-marker.png', // картинка иконки
        	iconImageSize: [75, 85], // размер иконки
        	iconImageOffset: [-32, -64] // позиция иконки
        	//balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
        	//balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
        	//balloonImageHref: 'img/ballon1.png', // Картинка заднего фона балуна
        	//balloonImageOffset: [-65, -89], // смещание балуна, надо подогнать под стрелочку
        	//balloonImageSize: [260, 89], // размер картинки-бэкграунда балуна
        	//balloonShadow: false
        });
        /*var s = new YMaps.Style();
        s.iconStyle = new YMaps.IconStyle();
        s.iconStyle.href = "../img/map-marker.png";
        s.iconStyle.size = new YMaps.Point(75, 85);
        s.iconStyle.offset = new YMaps.Point(-9, -29);*/
        // Устанавливает содержимое балуна
       /*placemark1.name = "Москва";
        placemark1.description = "Столица Российской Федерации";
        // Добавляет метку на карту
        map.addOverlay(placemark1);

        var placemark2 = new YMaps.Placemark(new YMaps.GeoPoint(37.62209300, 55.75399400), {hideIcon: false}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map-marker.png', // картинка иконки
        	iconImageSize: [75, 85], // размер иконки
        	iconImageOffset: [-32, -64], // позиция иконки
        });
        placemark2.name = "sfssefs";
        placemark2.description = "sdfsdfsf";
        // Добавляет метку на карту
        map.addOverlay(placemark2);

      })*/
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
                  balloonImageOffset: [-5, -60],
                  // Размеры картинки балуна
                  balloonImageSize: [381, 91],
                  // Балун не имеет тени
                  balloonShadow: false,
                  ballonOpen: true
              });

              // Добавляем все метки на карту.
              myMap.geoObjects.add(myPlacemark);



                  myPlacemark.balloon.open();
              //myPlacemark2.openBalloon();

            /*  myMap.balloon.open([55.66973722, 37.56058648], { balloonContent: ''}, {
              // Опция: не показываем кнопку закрытия.
              closeButton: false,
              balloonContentSize: [130, 130],
              // Задаем макет балуна - пользовательская картинка с контентом
              balloonLayout: "default#imageWithContent",
              // Картинка балуна
              balloonImageHref: 'img/baloon.png',
              // Смещение картинки балуна
              balloonImageOffset: [-5, -60],
              // Размеры картинки балуна
              balloonImageSize: [381, 91],
              // Балун не имеет тени
              balloonShadow: false
          });*/






      }
