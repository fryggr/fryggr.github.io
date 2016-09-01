//YMaps.jQuery(function () {

            ymaps.ready(init);
            function init () {
            var myMap3 = new ymaps.Map("YMapsID", {
            center: [37.57119448, 55.66493526],
            zoom:14,
            controls: ["zoomControl"]
            });

            myMap3.controls.add('fullscreenControl',{float: 'left'});
            // Создаем геообъект с типом геометрии "Точка".
            myGeoObject = new ymaps.GeoObject();
            myMap3.geoObjects
            .add(new ymaps.Placemark([37.56058648, 55.66973722], {
            balloonContent: 'Ул. Уличная,д. 22'
            }, {
            // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/map-marker.png',
              // Размеры метки.
              iconImageSize: [203, 254],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-80, -254]
            }))
        // Создает экземпляр карты и привязывает его к созданному контейнеру
      /*  var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
        map.setCenter(new YMaps.GeoPoint(37.57119448, 55.66493526), 14);
        map.addControl(new YMaps.TypeControl());
        map.addControl(new YMaps.ToolBar());
        map.addControl(new YMaps.Zoom());
        map.addControl(new YMaps.ScaleLine());



        var placemark1 = new YMaps.Placemark(new YMaps.GeoPoint(37.56058648, 55.66973722), {hideIcon: false}, {
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
      /*  placemark1.name = "Москва";
        placemark1.description = "Столица Российской Федерации";
        // Добавляет метку на карту
        map.addOverlay(placemark1);

        var placemark2 = new YMaps.Placemark(new YMaps.GeoPoint(37.62209300, 55.75399400), {hideIcon: false}, {
          iconImageHref: 'img/map-marker.png', // картинка иконки
        	iconImageSize: [75, 85], // размер иконки
        	iconImageOffset: [-32, -64], // позиция иконки
        });
        placemark2.name = "sfssefs";
        placemark2.description = "sdfsdfsf";
        // Добавляет метку на карту
        map.addOverlay(placemark2);

            })

*/
