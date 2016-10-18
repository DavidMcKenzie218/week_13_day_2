var React = require('react');
var Song = require('./Song.jsx');

var Top20Container = React.createClass({

  render: function(){

    var songList = this.props.songs.map(function(song, index){
      return <Song key={index} artist={song["im:artist"].label} title={song["im:name"].label} position={index+1}></Song>
    });

    return(
        <div>
          <h3>Top 20 List</h3>
          {songList}
        </div>
        )
  }

})

module.exports = Top20Container;