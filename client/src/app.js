var React = require('react');
var ReactDOM = require('react-dom');

var ChartsContainer = require('./components/ChartsContainer.jsx')

window.onload = function(){
  ReactDOM.render(
    <ChartsContainer/>,
    document.getElementById('app')
  );
}
