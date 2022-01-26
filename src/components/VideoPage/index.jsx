import { useState, useEffect } from 'react';
import axios from 'axios';
import SVideoPage from './style';

function VideoPage() {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/videos`)
      .then((res) => res.data)
      .then((data) => {
        setVideoList(data);
      })
      .catch((err) => {
        setVideoList('Cette page ne contient pas encore de videos.');
        console.log(err);
      });
  }, []);
  return (
    <SVideoPage>
      <ul className="videoList">
        {videoList.map((videos) => (
          <li
            className="videoItem"
            key={videos.id}
            url={videos.url}
            title={videos.title}
          >
            <video
              controls
              poster={videos.url}
              className="videoCont"
              src={videos.url}
            >
              <source src={videos.url} type="video" />
              <track
                src="captions_en.vtt"
                kind="captions"
                srcLang="en"
                label="english_captions"
              />
            </video>
            <div className="videoTitle">{videos.title}</div>
          </li>
        ))}
      </ul>
    </SVideoPage>
  );
}

export default VideoPage;
