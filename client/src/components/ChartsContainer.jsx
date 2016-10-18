var React = require('react');
var Top20Container  =require('./Top20Container.jsx')

var ChartsContainer = React.createClass({

  getInitialState: function(){
    return{songs: []};
  },

  handleApiData: function(data){
    var apiData = JSON.parse(data);
    var songs = apiData.feed.entry;
    this.setState({songs: songs});
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      console.log("Request has loaded...");
      var data = request.responseText;
      this.handleApiData(data);
    }.bind(this);
    request.send();
  },

  render: function(){
    return(
      <div>
        <h2>Top 20 Charts</h2>
        <Top20Container songs={this.state.songs}/>
      </div>
      )
  }

})

module.exports = ChartsContainer;