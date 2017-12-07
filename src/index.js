import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
const API_KEY =  'AIzaSyDOkIHRmlpR0p2BCEvwePv8xlDP3YMo_UI';

// Creata a new component.This component produce some HTML
// Take this component's generated HTML and put it
// On the page (in the DOM)
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
    }
    YTSearch({key: API_KEY,term: 'surfboards',},function(data){
      console.log(data);
    });
  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetail />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(<App />, document.querySelector('.container'));
