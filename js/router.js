'use strict';

class Router {
    constructor(routes){
        this.routes = routes;
        this.rootElem = document.getElementById('app');
        this.init();
        this.test = 1;
        this.routeName = 'start';
        this.routeOption = 0;
        this.validAnswers = 0;
    }

    on(){
        var r = this.routes;

        // обработчик нажатий на ссылки
        let handler = event =>  {

            let element = event.currentTarget;

            let url = element.getAttribute('data-route');

            if (element.hasAttribute('route-option')) {

                this.routeOption = element.getAttribute('route-option');
            }

            this.hasChanged(this, r, url);
        }

        // получаем все ссылки на странице
        let anchors = document.querySelectorAll('.route');

        // вешаем на событие onclick обработчик
        for( let anchor of anchors ) anchor.onclick = handler;

        switch (this.routeName) {
            case 'quest':
              this.renderQuest();
              break;
            case 'answer':
              this.renderAnswer();
              break;
            case 'final':
              this.renderResult();
              break;
            default:
              break;
          }

    }

    renderResult(){
        let pointText = document.querySelector('.point-text');
        let finalTitle = document.querySelector('.card__main-title');
        let finalImage = document.querySelector('.final-image__img');
        let result = this.getResult();

        pointText.innerHTML = `${this.validAnswers} из ${questions.length} правильных ответов`;
        finalTitle.innerHTML = `${results[result].title}`;
        finalImage.setAttribute('src', `assets/img/${results[result].img}.png`);

        this.validAnswers = 0;
    }

    renderQuest(){

        this.renderHeader();
        
        let question = questions[this.test-1];
        let routes = document.querySelectorAll('.route');

        for( let i=0; i<routes.length; i++ ) {
            routes[i].innerHTML = question.options[i].text;
        }
    }

    renderHeader(){
        let pointText = document.querySelector('.point-text');
        let questTitle = document.querySelector('.quest-title');
        let question = questions[this.test-1];

        questTitle.innerHTML = question.title;
        pointText.innerHTML = `${this.test}/${questions.length}`;
    }

    renderAnswer(){

        this.renderHeader();

        let question = questions[this.test-1];
        let selectedOption = document.querySelector('.selected-option');
        let selectedText = document.querySelector('.selected-text');
        let buttonContinue = document.querySelector('.button-continue');
        let selected = question.options[this.routeOption];

        selectedOption.innerHTML = selected.text;
        selectedText.innerHTML = selected.description;

        if(selected.valid) {
            selectedOption.classList.remove('button_wrong');
            selectedOption.classList.add('button_right');
            this.validAnswers++;
        }

        if(this.test === questions.length){
            buttonContinue.setAttribute('data-route', 'final');
            this.test = 1;
        }
        else this.test++;

    }

    getResult(){
        switch (true) {
            case this.validAnswers == 0:
                return 0;
            case this.validAnswers <= 3:
                return 1;
            case this.validAnswers <= 5:
                return 2;
            case this.validAnswers <= 7:
                return 3;
            case this.validAnswers == 8:
                return 4;
            default:
                return 0;
        }
    }

    init(){
        var r = this.routes;
        this.hasChanged(this, r);
    }

    hasChanged(scope, r, url){
        if (typeof url !== 'undefined') {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.isActiveRoute(url)) {
                    scope.goToRoute(route.htmlName);
                    this.routeName = route.name;

                }
            }
        } else {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    }

    goToRoute(htmlName) {
        (function(scope) {
            var url = 'views/' + htmlName,
                xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText;
                    scope.on();
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
}
