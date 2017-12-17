import axios from 'axios';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY =  'AIzaSyDOkIHRmlpR0p2BCEvwePv8xlDP3YMo_UI';
export const SEARCH_VIDEOS = 'SEARCHVIDEOS';
// export const SELECTED_VIDEO = 'SELECTEDVIDEO';
// const ROOT_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&&type=video&q=${term}&maxResults=12&relevanceLanguage=en&regionCode=gb&key=${API_KEY}`; 
export const updateComment = (comment) => {
    return {
        type: 'ADDED_COMMENT',
        payload: comment
    }
};

export function videoSearch(term) {
    const params = {
        key: API_KEY,
        term: term,
        type: 'SEARCH_VIDEOS',
    };
    const request = axios.get(YOUTUBE_URL, { params: params });
    return {
        type: "fetch",
        payload: request
      };
    // const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&&type=video&q=${term}&maxResults=12&relevanceLanguage=en&regionCode=gb&key=${API_KEY}`;
    // const request = fetch(url).then(response => response.json());
    // return {
    //   type: SEARCH_VIDEOS,
    //   payload: request
    // }
};

// export function selectedVideo(video) {
//     return {
//       type: SELECTED_VIDEO,
//       payload: video,
//     };
// }