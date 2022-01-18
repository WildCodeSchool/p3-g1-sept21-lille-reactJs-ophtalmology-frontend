import Comments from './Comments';
import SCommentsArea from './style';

function CommentsArea() {
  return (
    <SCommentsArea>
      <>
        <section className="commentSection">
          <h3>Mes échanges avec les internautes</h3>
          <Comments />
          <h5>Laissez votre commentaire</h5>
          <div className="writeComment">
            <p className="inputTitle">Nom</p>
            <input
              className="commentInput"
              type="text"
              placeholder="Votre nom"
            />
            <p className="inputTitle">Commentaire</p>
            <input
              className="commentInput"
              type="text"
              placeholder="Votre message"
            />
            <div className="btnDiv">
              <button className="sendBtn" type="submit">
                ENVOYER
              </button>
            </div>
          </div>
        </section>
      </>
    </SCommentsArea>
  );
}

export default CommentsArea;
