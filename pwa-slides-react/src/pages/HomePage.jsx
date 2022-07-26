import Presentation from "../components/Presentation";
import { createDiaporama, getAllDiaporama } from "../firebase/firebase.js";
import React from "react";

export const HomePage = () => {

  const [diapos, setDiapos] = React.useState([]);
  
  React.useEffect(() => {
    getAllDiaporama((diapos) => {
      setDiapos(diapos);
    });
  },[diapos.length]);

  const handleCreateDiapo = () => {
    console.log("Create diapo");
    createDiaporama();
  }

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