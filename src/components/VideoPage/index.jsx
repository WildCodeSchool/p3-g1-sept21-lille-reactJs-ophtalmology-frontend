import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
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
      .catch(() => {
        setVideoList('Cette page ne contient pas encore de videos.');
        toast.error('Une erreur est survenue !', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
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
            <iframe
              title="videoFrames"
              className="videoCont"
              src={videos.url}
            />
            <div className="videoTitle">{videos.title}</div>
          </li>
        ))}
      </ul>
    </SVideoPage>
  );
}

export default VideoPage;
