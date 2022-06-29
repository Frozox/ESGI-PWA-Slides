import { useNavigate } from "react-router-dom";

/**
 * Composant Presentation
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Presentation(props) {
  const { id, title, created_at, image } = props;
  const final_created_at = new Date(created_at).toDateString();

  const navigate = useNavigate();
  return (
    <div className="presentation">
      <div style={{position: "relative"}}>
        <img className="image" src={image} alt="presentation" id={"presentation_img_"+id}/>
        <div className="middle">
          <button className="text outline" onClick={()=>navigate(`/presentation/${id}`)}>Consulter</button>
          <button className="text outline secondary">Supprimer</button>
        </div>
      </div>

      <article style={{ marginTop: 0 }} id={"presentation_" + id}>
          <div className="row center-md center-lg center-sm center-xs">
            <div className="col-md-12 col-xs-12">
              <h5>{title}</h5>
              <a className="secondary"></a>
            </div>

            <div className="col-md-12 col-xs-12">
              <span>{final_created_at}</span>
            </div>
          </div>
        </article>
      </div>
  );
}

export default Presentation;