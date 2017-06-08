var React = require('react');
var Person = require('./Person.jsx');

var PersonsGrid = React.createClass({
  
  render: function() {
    var onPersonDelete = this.props.onPersonDelete;
    var onPersonsSort = this.props.onPersonsSort;
    return (
      <table className="bordered">
        <thead>
          <tr onClick={onPersonsSort}>
            <th data-type="name">Имя персонажа</th>
            <th data-type="description">Описание персонажа</th>
            <th data-type="reason">Причина смерти</th>
            <th data-type="killer">Кем убит</th>
            <th data-type="weapon">Орудие убийства</th>
            <th>Удалить персонажа</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.persons.map(function(el) {
              return <Person
                key={el.id}
                name={el.name}
                description={el.description}
                reason={el.reason}
                killer={el.killer}
                weapon={el.weapon}
                onDelete={onPersonDelete.bind(null, el)}
              />;
            }) 
          }
        </tbody>
      </table>
      );
  }
});

module.exports = PersonsGrid;