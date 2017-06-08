var React = require('react');

var PersonAdd = React.createClass({
  getInitialState: function() {
    return {
        name: ''
    };
  },
 
  handleTextChange: function(event) {
    this.setState({name: event.target.value});
  },
  
  handleNoteAdd: function(event) {
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
  
  render: function() {
    return (
      <div className="row person-add">
        <div className="col s12">
          
            <div className="row">
              <div className="input-field col s6">
                <input 
                  placeholder="Имя персонажа" 
                  type="text" 
                  className="validate"
                  value={this.state.name}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button className="btn waves-effect waves-light" onClick={this.handleNoteAdd}>Добавить</button>
              </div>
            </div>
          
        </div>
      </div>
    );
  }
 });

module.exports = PersonAdd;