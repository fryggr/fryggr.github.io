/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";

	var PERSONS = [{
	  "id": 1,
	  "name": "Робб Старк",
	  "description": "Старший сын лорда Эддарда Старка из Винтерфелла и его жены Кейтилин Старк. У него две сестры и два брата. После смерти Эддарда Старка, он стал лордом Винтерфелла, а позже был провозглашён королём Севера.",
	  "reason": "Сговор Уолдера Фрея с Тайвином Ланнистером  и Русе Болтоном.",
	  "killer": "Русе Болтон",
	  "weapon": "Меч"
	}, {
	  "id": 2,
	  "name": "Эддард Старк",
	  "description": "Бывший глава великого дома Старков из Винтерфелла. Хранитель Севера, лорд Винтерфелла.",
	  "reason": "Публично признался в попытке захватить железный трон.",
	  "killer": "Илин Пейн",
	  "weapon": "Двуручный меч, который носит имя Лёд"
	}, {
	  "id": 3,
	  "name": "Ренли Баратеон",
	  "description": "Младший брат короля Роберта, сын лорда Стеффонa Баратеона и Кассаны Эстермонт. После победы в восстании Роберт передал своему брату замок Штормовой Предел, таким образом сделав Ренли верховным лордом Штормовых Земель, а также сделал его мастером над законами в своем Малом Совете.",
	  "reason": "Отказ заключить мир со Станнисом",
	  "killer": "Станнис Баратеон",
	  "weapon": "Тень, порожденная красной жрицей Мелисандрой Асшайской"
	}, {
	  "id": 4,
	  "name": "Игритт",
	  "description": "Девушка-одичалая, копьеносица в отряде Гремучей Рубашки, любовница Джона Сноу — и, по понятиям одичалых, жена.",
	  "reason": "Убийство Игритт отца Олли в деревне неподалеку от Чёрного замка",
	  "killer": "Олли - мальчишка из деревни на Севере",
	  "weapon": "Лук"
	}, {
	  "id": 5,
	  "name": "Куорен Полурукий",
	  "description": "Брат Ночного Дозора, командир разведчиков Сумеречной Башни и ближайший помощник сира Дениса Маллистера.",
	  "reason": "Окруженный одичалыми, Куорен Полурукий ценой своей жизни помогает Джону Сноу, вступив с ним в поединок, обеспечивая ему тем самым доверие и авторитет среди них.",
	  "killer": "Джон Сноу",
	  "weapon": "Меч - Длинный Коготь"
	}, {
	  "id": 6,
	  "name": "Джоффри Баратеон",
	  "description": "Сын короля Роберта Баратеона и его жены Серсеи Ланнистер, хотя настоящим его отцом является Джейме Ланнистер. После смерти Роберта Баратеона он взошёл на трон и стал править Семью Королевствами.",
	  "reason": "Жестокость Джоффри",
	  "killer": "Оленна Тирелл",
	  "weapon": "Отравленное вино"
	}, {
	  "id": 7,
	  "name": "Бейлон Грейджой",
	  "description": "Бейлон Грейджой по прозвищу Смелый — глава дома Грейджоев, верховный лорд Железных Островов.",
	  "reason": "Эурон считал, что Бейлон слишком стар, его время прошло и теперь пора позволить править другим.",
	  "killer": "Эурон Грейджой",
	  "weapon": "Эурон столкнул брата с моста"
	}, {
	  "id": 8,
	  "name": "Визерис Таргариен",
	  "description": "Самопровозглашенный Визерис III, сын короля Эйриса II Таргариена и королевы Рейлы Таргариен, брат Рейгара и Дейнерис Таргариен.",
	  "reason": "На пиру Визерис выпил лишнего и потребовал у Дрого воинов немедленно, иначе он вырежет из чрева Дени сына. Дрого в ответ короновал его расплавленным золотом.",
	  "killer": "Кхал Дрого",
	  "weapon": "Расплавленное золото"
	}];

	var Person = React.createClass({
	  displayName: "Person",

	  render: function render() {
	    return React.createElement(
	      "tr",
	      null,
	      React.createElement(
	        "td",
	        null,
	        " ",
	        this.props.name,
	        " "
	      ),
	      React.createElement(
	        "td",
	        null,
	        " ",
	        this.props.description,
	        " "
	      ),
	      React.createElement(
	        "td",
	        null,
	        " ",
	        this.props.reason,
	        " "
	      ),
	      React.createElement(
	        "td",
	        null,
	        " ",
	        this.props.killer,
	        " "
	      ),
	      React.createElement(
	        "td",
	        null,
	        " ",
	        this.props.weapon,
	        " "
	      ),
	      React.createElement(
	        "td",
	        { className: "delete" },
	        React.createElement(
	          "a",
	          { className: "btn-floating  grey lighten-1", onClick: this.props.onDelete },
	          React.createElement(
	            "i",
	            { className: "material-icons" },
	            "delete"
	          )
	        )
	      )
	    );
	  }
	});

	var PersonAdd = React.createClass({
	  displayName: "PersonAdd",

	  getInitialState: function getInitialState() {
	    return {
	      name: ''
	    };
	  },

	  handleTextChange: function handleTextChange(event) {
	    this.setState({ name: event.target.value });
	  },

	  handleNoteAdd: function handleNoteAdd(event) {
	    // event.preventDefault();
	    var newPerson = {
	      name: this.state.name,
	      id: Date.now(),
	      description: '',
	      reason: '',
	      killer: '',
	      weapon: ''
	    };
	    this.props.onNoteAdd(newPerson);
	    this.setState({ name: '' });
	  },

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "row person-add" },
	      React.createElement(
	        "div",
	        { className: "col s12" },
	        React.createElement(
	          "div",
	          { className: "row" },
	          React.createElement(
	            "div",
	            { className: "input-field col s6" },
	            React.createElement("input", {
	              placeholder: "Имя персонажа",
	              type: "text",
	              className: "validate",
	              value: this.state.name,
	              onChange: this.handleTextChange
	            })
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "row" },
	          React.createElement(
	            "div",
	            { className: "input-field col s12" },
	            React.createElement(
	              "button",
	              { className: "btn waves-effect waves-light", onClick: this.handleNoteAdd },
	              "Добавить"
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var PersonsEditor = React.createClass({
	  displayName: "PersonsEditor",

	  getInitialState: function getInitialState() {
	    return {
	      displayedPersons: PERSONS
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    var input = this.refs.input;
	    this.select = this.refs.select;
	    input.oninput = this.handleSearchPerson;
	  },

	  handleSearchPerson: function handleSearchPerson(event) {
	    var _this = this;

	    var searchQuery = event.target.value.toLowerCase();

	    function filterAllPersons(obj) {
	      var validEntries = false;
	      for (var key in obj) {
	        var searchValue = (obj[key] + '').toLowerCase();
	        if (searchValue.indexOf(searchQuery) !== -1) {
	          validEntries = true;
	          break;
	        }
	      };
	      if (validEntries == true) {
	        validEntries = false;
	        return true;
	      } else {
	        return false;
	      }
	    };

	    var filterSelectPersons = function filterSelectPersons(obj) {
	      var select = _this.select.value;
	      var searchValue = obj[select].toLowerCase();
	      return searchValue.indexOf(searchQuery) !== -1;
	    };

	    if (this.select.value == 'all') {
	      var displayedPersons = PERSONS.filter(filterAllPersons);
	    } else {
	      displayedPersons = PERSONS.filter(filterSelectPersons);
	    }

	    this.props.onSearchPerson(displayedPersons);
	  },

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "person-editor" },
	      React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "div",
	          { className: "input-field col s4" },
	          React.createElement("input", { type: "text", name: "tags", id: "tags", placeholder: "Поиск", ref: "input" })
	        ),
	        React.createElement(
	          "div",
	          { className: "input-field col s4" },
	          React.createElement(
	            "select",
	            { ref: "select" },
	            React.createElement(
	              "option",
	              { value: "all", selected: "" },
	              "Все поля"
	            ),
	            React.createElement(
	              "option",
	              { value: "name" },
	              "Имя персонажа"
	            ),
	            React.createElement(
	              "option",
	              { value: "description" },
	              "Описание персонажа"
	            ),
	            React.createElement(
	              "option",
	              { value: "reason" },
	              "Причина смерти"
	            ),
	            React.createElement(
	              "option",
	              { value: "killer" },
	              "Кем убит"
	            ),
	            React.createElement(
	              "option",
	              { value: "weapon" },
	              "Орудие убийства"
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "input-field col s4" },
	          React.createElement(
	            "button",
	            { className: "btn waves-effect waves-light", type: "button", id: "add-person" },
	            "Добавить персонажа"
	          )
	        )
	      )
	    );
	  }
	});

	var PersonsGrid = React.createClass({
	  displayName: "PersonsGrid",

	  render: function render() {
	    var onPersonDelete = this.props.onPersonDelete;
	    var onPersonsSort = this.props.onPersonsSort;
	    return React.createElement(
	      "table",
	      { className: "bordered" },
	      React.createElement(
	        "thead",
	        null,
	        React.createElement(
	          "tr",
	          { onClick: onPersonsSort },
	          React.createElement(
	            "th",
	            { "data-type": "name" },
	            "Имя персонажа"
	          ),
	          React.createElement(
	            "th",
	            { "data-type": "description" },
	            "Описание персонажа"
	          ),
	          React.createElement(
	            "th",
	            { "data-type": "reason" },
	            "Причина смерти"
	          ),
	          React.createElement(
	            "th",
	            { "data-type": "killer" },
	            "Кем убит"
	          ),
	          React.createElement(
	            "th",
	            { "data-type": "weapon" },
	            "Орудие убийства"
	          ),
	          React.createElement(
	            "th",
	            null,
	            "Удалить персонажа"
	          )
	        )
	      ),
	      React.createElement(
	        "tbody",
	        null,
	        this.props.persons.map(function (el) {
	          return React.createElement(Person, {
	            key: el.id,
	            name: el.name,
	            description: el.description,
	            reason: el.reason,
	            killer: el.killer,
	            weapon: el.weapon,
	            onDelete: onPersonDelete.bind(null, el)
	          });
	        })
	      )
	    );
	  }
	});

	var PersonsApp = React.createClass({
	  displayName: "PersonsApp",

	  getInitialState: function getInitialState() {
	    return {
	      persons: PERSONS
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this.sortVariable = false;
	  },

	  handlePersonDelete: function handlePersonDelete(person) {
	    var personId = person.id;
	    var newPersons = this.state.persons.filter(function (person) {
	      return person.id !== personId;
	    });
	    this.setState({ persons: newPersons });
	  },

	  handleSearchPerson: function handleSearchPerson(query) {
	    this.setState({ persons: query });
	  },

	  handleNoteAdd: function handleNoteAdd(newPerson) {
	    var newPersons = this.state.persons.slice();
	    newPersons.unshift(newPerson);
	    this.setState({ persons: newPersons });
	  },

	  handleSort: function handleSort(event) {
	    var _this2 = this;

	    var sortQuery = event.target.getAttribute('data-type');

	    var sortPersons = function sortPersons(a, b) {
	      var key = sortQuery;
	      var rowA = a[key];
	      var rowB = b[key];
	      if (_this2.sortVariable) {
	        if (rowA > rowB) return 1;else return -1;
	      }
	      if (rowA < rowB) return 1;else return -1;
	    };
	    this.sortVariable = !this.sortVariable;
	    var newPersons = this.state.persons.sort(sortPersons);
	    this.setState({ persons: newPersons });
	  },

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "notes-app" },
	      React.createElement(PersonsEditor, { persons: this.state.persons, onSearchPerson: this.handleSearchPerson }),
	      React.createElement(PersonAdd, { onNoteAdd: this.handleNoteAdd }),
	      React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "div",
	          { className: "col s12", id: "container" },
	          React.createElement(PersonsGrid, { persons: this.state.persons, onPersonDelete: this.handlePersonDelete, onPersonsSort: this.handleSort })
	        )
	      )
	    );
	  }
	});

	ReactDOM.render(React.createElement(PersonsApp, null), document.getElementById("mount-point"));

	$(function () {
	  $('select').material_select();

	  $('#add-person').click(function () {
	    $('.person-add').toggle();
	  });
	});

/***/ })
/******/ ]);