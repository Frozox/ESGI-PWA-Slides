import Presentation from "../components/Presentation";
import { createDiaporama, getAllDiaporama, getConnectUser } from "../firebase/firebase.js";
import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const [diapos, setDiapos] = React.useState([]);

  React.useEffect(() => {
    getAllDiaporama((diapos) => {
      setDiapos(diapos);
    });
  }, [diapos.length]);
  const handleCreateDiapo = () => {
    console.log("Create diapo");
    createDiaporama();
    navigate("/");
  }

  const myUser = getConnectUser();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <header className="container">

          <Title title="Créer une présentation" />

          <button onClick={handleCreateDiapo}>+</button>
        </header>

        <main className="container">
          <Title title="Les présentations" />
          <div className="row">
            {/* {diapos.map((diapo, index) => {
              diapos.key = index;
              return (
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                    <Presentation id={diapo.key} title={diapo.title} created_at={diapo.creationTime} image={"/assets/img/301-350x250.jpg"} />
                </div>
              );
            })
            } */}
            {diapos.filter((diapo) => { return diapo.uid_creator === myUser.uid; }).map((diapo, index) => (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <Presentation id={diapo.key} title={diapo.title} created_at={diapo.creationTime} image={"/assets/img/301-350x250.jpg"} />
              </div>
            ))
            }
          </div>
        </main>
      </Suspense>
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