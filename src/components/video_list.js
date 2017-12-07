import React, { Component } from 'react';
import VideoListItem from './video_list_item';

function VideoList(props){
    let videoItems = props.videos.map((video) =>{
        return <VideoListItem video= {video}/>
    });
    return (
        <div>
            <ul>
              {videoItems}  
            </ul>
        </div>

    );
}

export default VideoList;