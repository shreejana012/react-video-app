import React, { Component } from 'react';
import CommentVideo from './comment_video';


const detailStyle = {
    marginBottom: '0',
}
const channelTitleStyle = {
    color: 'red',
}
function VideoDetail(props){
    if (!props.video){
        return <div>Loading...</div>;
    }
    const video = props.video;
    const videoId = video.id.videoId;
    // const url= 'https://www.youtube.com/embed/' + videoId;
    // ES6 syntax 
    // does same string interpolation as above :
    const url = `https://www.youtube.com/embed/${videoId}`; 
    
    return (
        <div className="video-detail col-md-8">
            <div className= "embed-responsive embed-responsive-16by9">
                <iframe className= "embed-responsive-item" src={url}>
                    
                </iframe>
            </div>
            <div className="details" style = {detailStyle}>
                <div style = {channelTitleStyle}>
                    Channel Name: {video.snippet.channelTitle}
                </div>
                <div className="title">
                    {video.snippet.title}
                </div>
                <div className="description">
                    {video.snippet.description}
                </div>
            </div>
            <CommentVideo />
        </div>

    );
};


export default VideoDetail;