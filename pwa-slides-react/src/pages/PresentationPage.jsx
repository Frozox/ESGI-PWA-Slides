import SlideThumbnail from "../components/SlideThumbnail";
import Trumbowyg from 'react-trumbowyg'

export const PresentationPage = () => {

  const slides = Array(10).fill({
    id: 1,
  });
  return (
    <main className="container">
      <article>
        <header>
          <hgroup>
            <h1>PWA Slides</h1>
            <h2>Listes des slides pour la présentation X</h2>
          </hgroup>
        </header>

        <div className="row">
          <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
            <div className="row">

              { slides.map((slide, index) => {
                  return (
                    <div className="col-md-12" key={index}>
                      <SlideThumbnail />
                    </div>
                  );
                })
              }


            </div>
          </div>

          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10" style={{marginTop:0}}>
            <div style={{backgroundColor: "ivory"}}>
              <Trumbowyg
                id={'react-trumbowyg'}
                data={""}
                placeholder='Type your text!'
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

