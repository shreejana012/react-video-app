import axios from 'axios';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY =  'AIzaSyDOkIHRmlpR0p2BCEvwePv8xlDP3YMo_UI';
export const videoSearch = (term) => {
    const params = {
        part: 'snippet',
        key: API_KEY,
        q: term,
        type: 'video',
    };
    const request = axios.get(YOUTUBE_URL, { params: params });
    return {
        type: "fetch",
        payload: request
      };
}