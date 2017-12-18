import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../containers/search_bar';
import VideoDetail from '../containers/video_detail';
import VideoList from '../containers/video_list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import{ videoSearch} from '../actions/video-search-action';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        selectedVideo: null
      }
      this.props.videoSearch('nepali');   
  }

    searchVideo = (term) => {
        this.props.videoSearch(term);
    }
    
    componentWillReceiveProps = (nextProps) => {
      this.setState({selectedVideo: nextProps.selectedVideo});
    }
    // videoSearch(term){
    //    YTSearch({key: API_KEY,term: term},(data) => {
    //     this.setState({
    //       videos: data,
    //       selectedVideo: data[0]
    //     });
    //   });
    // }
    
    render(){
     const searchVideo = _.debounce((term) => {this.searchVideo(term) }, 300)
      return(
        <div>
          <SearchBar onSelectTermChange= {searchVideo}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.props.videos} />
        </div>
      );
    }
  }
  function mapStateToProps(state) {
    return { 
      videos: state.videos,
      selectedVideo: state.videos[0]
     };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({videoSearch}, dispatch)
  }
 
  export default connect(mapStateToProps, mapDispatchToProps)(App);