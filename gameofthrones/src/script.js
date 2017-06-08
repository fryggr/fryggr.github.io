var ReactDOM = require('react-dom');
var React = require('react');
var PersonsApp = require('./components/PersonsApp.jsx');

ReactDOM.render(
  <PersonsApp />,
  document.getElementById("mount-point")
  );
  
$(function() {
  $('select').material_select();
  
  $('#add-person').click(function() {
    $('.person-add').toggle();
  })
});
