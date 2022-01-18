import doctorAvatar from '../../../assets/doctorAvatar.png';
import userAvatar from '../../../assets/userAvatar.png';
import SComments from './style';

function Comments() {
  return (
    <SComments>
      <>
        <div className="comment userComment">
          <div className="avatarContainer">
            <img className="avatars" src={userAvatar} alt="User Avatar" />
          </div>
          <div className="infoContainer">
            <p className="nameDisplay">USERNAME</p>
            <div className="dateContainer">
              <p className="dateDisplay">Publié le date.here</p>
              <button className="replyBtn" type="submit">
                RÉPONDRE
              </button>
            </div>
            <p className="commentDisplay">I am a useless temporary comment</p>
          </div>
        </div>

        <div className="comment answerComment">
          <div className="avatarContainer">
            <img className="avatars" src={doctorAvatar} alt="Doctor Avatar" />
          </div>
          <div className="infoContainer">
            <p className="nameDisplay">DOCTEUR JEANNEROT</p>
            <div className="dateContainer">
              <p className="dateDisplay">Publié le date.here</p>
            </div>
            <p className="commentDisplay">
              I also am a useless temporary comment, but I am a reply posted by
              Doctor Jeannerot
            </p>
          </div>
        </div>

        {/* USELESS TEST */}
        <div className="comment userComment">
          <div className="avatarContainer">
            <img className="avatars" src={userAvatar} alt="User Avatar" />
          </div>
          <div className="infoContainer">
            <p className="nameDisplay">USERNAME</p>
            <div className="dateContainer">
              <p className="dateDisplay">Publié le date.here</p>
              <button className="replyBtn" type="submit">
                RÉPONDRE
              </button>
            </div>
            <p className="commentDisplay">
              I too am a useless temporary comment, but I was written by another
              patient. And the sole purpose of my existence is to be long enough
              to be several lines long. This way, my creator can modify the font
              size and line height without too much trouble. I too am a useless
              temporary comment, but I was written by another patient. And the
              sole purpose of my existence is to be long enough to be several
              lines long. This way, my creator can modify the font size and line
              height without too much trouble. I too am a useless temporary
              comment, but I was written by another patient. And the sole
              purpose of my existence is to be long enough to be several lines
              long. This way, my creator can modify the font size and line
              height without too much trouble
            </p>
          </div>
        </div>
        {/* USEFUL TEST WITH PROPS */}
      </>
    </SComments>
  );
}

export default Comments;
