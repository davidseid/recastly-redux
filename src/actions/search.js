import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
// const fetch = require('whatwg-fetch');


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  const options = {
    key: YOUTUBE_API_KEY,
    query: q,
    max: 5
  };
  return (dispatch) => {
    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });

  }
};

export default handleVideoSearch;
