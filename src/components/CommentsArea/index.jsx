import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import doctorAvatar from '../../assets/doctorAvatar.png';
import userAvatar from '../../assets/userAvatar.png';
import SComments from './commentsStyle';
import SCommentsArea from './style';

/* const dicoPages = {
  videos: 1,
  glaucoma: 2,
}; */

function CommentsArea() {
  const [form] = useState({
    authorName: 'Romain',
    message: 'Bla',
    date: '2022/01/19',
    idPage: useLocation().pathname,
  });

  // const [nameChange, setNameChange] = useState('');
  // const onNameChange = (evt) => setNameChange({ authorName: evt.target.value });

  const [messageChange, setMessageChange] = useState('');
  const onMessageChange = (evt) =>
    setMessageChange({ message: evt.target.value });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const commentData = {
      authorName: form.authorName,
      message: form.message,
      date: form.date,
      idPages: form.idPages,
      idParent: form.idParent,
    };
    axios
      .post('http:localhost:5050/comments', commentData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const [commentList] = useState([]);

  /*  const getComments = () => {
    axios
      .get('http:localhost:5050/comments')
      .then((res) => res.data)
      .then((data) => {
        setCommentList(data.results);
      });
  }; */

  return (
    <SCommentsArea>
      <form className="commentSection">
        <h3>Mes échanges avec les internautes</h3>

        <SComments>
          {/* TEST WITH MAP 
          WHERE DO I PUT THE 'getComments'? 
          HOW DO I RETRIEVE THE 'idPages' and 'idParent'? */}
          {commentList.map((comments) => (
            <ul
              key={comments.id}
              authorName={comments.authorName}
              message={comments.message}
              date={comments.date}
              idPages={comments.idPages}
              idParent={comments.idParent}
            >
              <li className="comment userComment">
                <div className="avatarContainer">
                  <img className="avatars" src={userAvatar} alt="User Avatar" />
                </div>
                <div className="infoContainer">
                  <p className="nameDisplay">{comments.authorName}</p>
                  <div className="dateContainer">
                    <p className="dateDisplay">Publié le {comments.date}</p>
                  </div>
                  <p className="messageDisplay">{comments.message}</p>
                </div>
              </li>

              {/* IF COMMENT IS NOT BY AL-J */}
              <li className="comment userComment">
                <div className="avatarContainer">
                  <img className="avatars" src={userAvatar} alt="User Avatar" />
                </div>
                <div className="infoContainer">
                  <p className="nameDisplay">{comments.authorName}</p>
                  <div className="dateContainer">
                    <p className="dateDisplay">Publié le {comments.date}</p>
                    <button className="replyBtn" type="submit">
                      RÉPONDRE
                    </button>
                  </div>
                  <p className="messageDisplay">{comments.message}</p>
                </div>
              </li>

              {/* IF COMMENT IS BY AL-J */}
              <li className="comment answerComment">
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
              </li>
            </ul>
          ))}
        </SComments>
        <h5>Laissez votre commentaire</h5>
        <div className="writeComment">
          <p className="inputTitle">Nom</p>
          <input
            className="messageInput"
            type="text"
            placeholder="Votre nom ?"
            value={form.authorName}
            // onChange={onNameChange}
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
            <button className="sendBtn" type="submit" onSubmit={handleSubmit}>
              ENVOYER
            </button>
          </div>
        </div>
      </form>
    </SCommentsArea>
  );
}

export default CommentsArea;
