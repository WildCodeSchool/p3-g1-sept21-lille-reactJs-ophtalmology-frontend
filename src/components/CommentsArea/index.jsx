import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import doctorAvatar from '../../assets/doctorAvatar.png';
import userAvatar from '../../assets/userAvatar.png';
import SComments from './commentsStyle';
import SCommentsArea from './style';

function CommentsArea() {
  // GET COMMENTS FROM DB
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5050/comments')
      .then((res) => res.data)
      .then((data) => {
        setCommentList(data);
      })
      .catch((err) => {
        setCommentList('Cette page ne contient pas encore de commentaires.');
        console.log(err);
      });
  }, []);

  // INPUT HANDLERS
  const [nameChange, setNameChange] = useState('');
  const onNameChange = (evt) => setNameChange(evt.target.value);

  const [messageChange, setMessageChange] = useState('');
  const onMessageChange = (evt) => setMessageChange(evt.target.value);

  // FORM ?
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
    };
    axios
      .post('http://localhost:5050/comments', commentData)
      .then(() =>
        setCommentList([
          ...commentList,
          {
            id: 0,
            message: form.message,
            authorName: form.authorName,
            idPages: form.idPages,
            date: Date.now(),
          },
        ])
      )
      .catch((err) => console.log(err));
  };

  return (
    <SCommentsArea>
      <form className="commentSection" onSubmit={handleSubmit}>
        <h3>Mes échanges avec les internautes</h3>

        <SComments>
          {/* TEST WITH MAP */}
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
                  className="comment userComment"
                >
                  <div className="avatarContainer">
                    <img
                      className="avatars"
                      src={userAvatar}
                      alt="User Avatar"
                    />
                  </div>
                  <div className="infoContainer">
                    <p className="nameDisplay">{comments.authorName}</p>
                    <div className="dateContainer">
                      <p className="dateDisplay">Publié le {comments.date}</p>
                    </div>
                    <p className="messageDisplay">{comments.message}</p>
                  </div>
                </li>
              ))}

            {/* IF COMMENT IS BY AL-J */}
            {/* <li className="comment answerComment">
              <div className="avatarContainer">
                <img
                  className="avatars"
                  src={doctorAvatar}
                  alt="Doctor Avatar"
                />
              </div>
              <div className="infoContainer">
                <p className="nameDisplay">{comments.authorName}</p>
                <div className="dateContainer">
                  <p className="dateDisplay">Publié le {comments.date}</p>
                </div>
                <p className="messageDisplay">{comments.message}</p>
              </div>
            </li> */}
          </ul>
        </SComments>
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
