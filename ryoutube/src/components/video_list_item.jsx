import React, { Component } from "react";

class VideoListItem extends Component {
  render() {
    const { video, onVideoSelect } = this.props;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li
        className="list-group-item"
        onClick={() => {
          onVideoSelect(video);
        }}
      >
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" alt="images" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
