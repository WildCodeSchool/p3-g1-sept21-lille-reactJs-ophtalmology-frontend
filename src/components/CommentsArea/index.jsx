import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import doctorAvatar from '../../assets/doctorAvatar.png';
import userAvatar from '../../assets/userAvatar.png';
import SCommentsArea from './style';

function CommentsArea() {
  // GET COMMENTS FROM DB
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/comments`)
      .then((res) => res.data)
      .then((data) => {
        setCommentList(data);
      })
      .catch(() => {
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

  // INPUT HANDLERS
  const [nameChange, setNameChange] = useState('');
  const onNameChange = (evt) => setNameChange(evt.target.value);

  const [messageChange, setMessageChange] = useState('');
  const onMessageChange = (evt) => setMessageChange(evt.target.value);

  // FORM
  const dicoPages = {
    '/': 1,
    '/glaucoma': 2,
    '/cataract': 3,
    '/refractive': 4,
  };
  const pageUrl = useLocation().pathname;

  const [form, setForm] = useState({
    authorName: nameChange,
    message: messageChange,
    idPages: dicoPages[pageUrl],
    idParent: null,
  });
  useEffect(() => {
    setForm({
      ...form,
      authorName: nameChange,
      message: messageChange,
    });
  }, [nameChange, messageChange]);

  useEffect(() => {
    setForm({
      ...form,
      idPages: dicoPages[pageUrl],
    });
  }, [pageUrl]);

  // POST A COMMENT
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const commentData = {
      authorName: form.authorName,
      message: form.message,
      idPages: form.idPages,
      idParent: form.idParent,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/comments`, commentData)
      .then(() =>
        setCommentList([
          ...commentList,
          {
            id: 0,
            message: form.message,
            authorName: form.authorName,
            idPages: form.idPages,
            idParent: form.idParent,
            date: Date.now(),
          },
        ])
      )
      .catch(() =>
        toast.error('Une erreur est survenue !', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
      );
  };

  return (
    <SCommentsArea>
      <form className="commentSection" onSubmit={handleSubmit}>
        <h3>Mes échanges avec les internautes</h3>

        <ul>
          {commentList
            .filter((data) => {
              return parseInt(data.idPages, 10) === dicoPages[pageUrl];
            })
            .map((comments) => (
              <li
                key={comments.id}
                authorName={comments.authorName}
                message={comments.message}
                date={comments.date}
                idPages={comments.idPages}
                idParent={comments.idParent}
                className={
                  comments.idParent == null
                    ? `comment userComment`
                    : `comment answerComment`
                }
              >
                <div className="avatarContainer">
                  <img
                    className="avatars"
                    src={comments.idParent == null ? userAvatar : doctorAvatar}
                    alt="User Avatar"
                  />
                </div>
                <div className="infoContainer">
                  <p className="nameDisplay">{comments.authorName}</p>
                  <div className="dateContainer">
                    <p className="dateDisplay">
                      Publié le {comments.date.split('T')[0]} à{' '}
                      {comments.date.split('T')[1].split('.')[0]}
                    </p>
                  </div>
                  <p className="messageDisplay">{comments.message}</p>
                </div>
              </li>
            ))}
        </ul>

        <h5>Laissez votre commentaire</h5>
        <div className="writeComment">
          <p className="inputTitle">Nom</p>
          <input
            className="messageInput"
            type="text"
            placeholder="Votre nom"
            value={nameChange}
            onChange={onNameChange}
          />
          <p className="inputTitle">Message</p>
          <input
            className="messageInput"
            type="text"
            placeholder="Votre message"
            value={messageChange}
            onChange={onMessageChange}
            required
          />
          <div className="btnDiv">
            <input className="sendBtn" type="submit" value="ENVOYER" />
          </div>
        </div>
      </form>
    </SCommentsArea>
  );
}

export default CommentsArea;
