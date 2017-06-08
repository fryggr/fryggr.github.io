var React = require('react');
var PERSONS = require('./persons.json');

var PersonsEditor = React.createClass({
  getInitialState: function() {
    return {
        displayedPersons: PERSONS
    };
  },
  
  componentDidMount: function() {
    var input = this.refs.input;
    this.select = this.refs.select;
    input.oninput = this.handleSearchPerson;
  },

  handleSearchPerson: function(event) {
    var searchQuery = event.target.value.toLowerCase();
    
    function filterAllPersons(obj) {
      var validEntries = false;
      for (var key in obj) {
        var searchValue = (obj[key]+'').toLowerCase();
        if (searchValue.indexOf(searchQuery) !== -1) {
          validEntries = true;
          break;
        } 
      };
      if (validEntries == true) {
        validEntries = false;
        return true;
      }
      else {
        return false;
      }
    };
    
    var filterSelectPersons = (obj) => {
      var select = this.select.value;
      var searchValue = obj[select].toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    };
    
    if (this.select.value == 'all') {
      var displayedPersons = PERSONS.filter(filterAllPersons);
    }
    else {
      displayedPersons = PERSONS.filter(filterSelectPersons);
    }
    
    this.props.onSearchPerson(displayedPersons);
    
  },
    
  render: function() {
    return (
      <div className="person-editor">
        <div className="row">
          <div className="input-field col s4">
            <input type="text" name="tags" id="tags" placeholder="Поиск" ref="input"/>
          </div>
            <div className="input-field col s4">
              <select ref="select">
                <option value="all" selected="">Все поля</option>
                <option value="name">Имя персонажа</option>
                <option value="description">Описание персонажа</option>
                <option value="reason">Причина смерти</option>
                <option value="killer">Кем убит</option>
                <option value="weapon">Орудие убийства</option>
              </select>
            </div>
          <div className="input-field col s4">
            <button className="btn waves-effect waves-light" type="button" id="add-person">Добавить персонажа</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PersonsEditor;