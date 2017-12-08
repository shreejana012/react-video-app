import React, { Component } from 'react';


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
            <div className="details">
                <div className="title">
                    {video.snippet.title}
                </div>
                <div className="description">
                    {video.snippet.description}
                </div>
            </div>
        </div>

    );
};
export default VideoDetail;