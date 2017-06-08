var React = require('react');
var PersonsGrid = require('./PersonsGrid.jsx');
var PersonAdd = require('./PersonAdd.jsx');
var PersonsEditor = require('./PersonsEditor.jsx');
var PERSONS = require('./persons.json');

var PersonsApp = React.createClass({
  getInitialState: function() {
    return {
        persons: PERSONS
    };
  },
  
  componentDidMount: function() {
    this.sortVariable = false;
  },

  handlePersonDelete: function(person) {
    var personId = person.id;
    var newPersons = this.state.persons.filter(function(person) {
        return person.id !== personId;
    });
    this.setState({ persons: newPersons });
  },
  
  handleSearchPerson: function(query) {
    this.setState({ persons: query });
  },
  
  
  handleNoteAdd: function(newPerson) {
    var newPersons = this.state.persons.slice();
    newPersons.unshift(newPerson);
    this.setState({ persons: newPersons });
  },
  
  handleSort: function(event) {
    var sortQuery = event.target.getAttribute('data-type');

    var sortPersons = (a, b) => {
        var key = sortQuery;
        var rowA = a[key];
        var rowB = b[key];
      if (this.sortVariable) {
        if (rowA > rowB) return 1
        else return -1;
      }
      if (rowA < rowB) return 1
      else return -1;
    };
    this.sortVariable = !this.sortVariable;
    var newPersons = this.state.persons.sort(sortPersons);
    this.setState({ persons: newPersons });
  },
  
  render: function() {
    return (
      <div className="notes-app">
        <PersonsEditor persons={this.state.persons} onSearchPerson={this.handleSearchPerson}/>
        <PersonAdd onNoteAdd={this.handleNoteAdd} />
        <div className="row">
          <div className="col s12" id="container">
            <PersonsGrid persons={this.state.persons} onPersonDelete={this.handlePersonDelete} onPersonsSort={this.handleSort} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PersonsApp;