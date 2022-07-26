import { Navigate, useNavigate } from "react-router-dom";
import Presentation from "../components/Presentation";
import { getUser, getAuthState, deleteEditDiaporama, createDiaporam, getAllDiaporama } from "../firebase/firebase.js";
import {
  setRessources,
  setRessource,
  getRessources,
  getRessource,
  setCart,
  getCart as getCartFromIdb,
} from "../idbHelpers";

export const HomePage = (network) => {

  //const deleteUser = deleteEditDiaporama();
  //console.log(deleteUser);
  const navigate = useNavigate();

  const handleCreateDiapo = () => {
    console.log("Create diapo");
    const diapo = createDiaporam();
  }
  //get all diaporama created and display them
  let diapos = [];
  getAllDiaporama((comments) => {
    diapos = comments
  });
  console.log(diapos);
  return (
    <>
      <header className="container">
        <Title title="Créer une présentation" />
        <button onClick={handleCreateDiapo}>+</button>
      </header>

      <main className="container">
        <Title title="Les présentations" />
        <div className="row">
          {diapos.map((diapo, index) => {
            diapos.key = index;
            return (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <Presentation id={diapo.key} title={diapo.title} created_at={diapo.creationTime} image={"https://picsum.photos/id/301/350/250"} creator={diapo.uid_creator} />
              </div>
            );
          })
          }
          {/* display all diaporama */}
        </div>
      </main>
    </>
  )
}

const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h3>{title}</h3>
      </div>
    </div>
  )
}