import _ from "lodash";
import React, { Component } from "react";
import "./style/style.css";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyBUwG7LE-M9z0Uq8xMbmX0Tky19JfDRMos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("star wars");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div className="App">
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="parent">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => {
              this.setState({ selectedVideo });
            }}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
