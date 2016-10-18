var React = require('react');

var Song = function(props){
  return(
    <div>
      <h3>{props.position + " - " + props.title}</h3>
      <p>({props.artist})</p>
    </div>
    )
}

module.exports = Song;