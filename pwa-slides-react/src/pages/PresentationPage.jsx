import SlideThumbnail from "../components/SlideThumbnail";
import Trumbowyg from 'react-trumbowyg';
import { addNewSlide, getSlideDiaporama, modifyDiaporama, updateSlideContent } from "../firebase/firebase";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import React from "react";
//import Reveal from "reveal.js";
//import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

export const PresentationPage = () => {

  const location = useLocation();
  const id = location.state.data;
  const [slideInterval, setSlideInterval] = React.useState([]);
  let slides = [];
  const [slideStyle, setSlideStyle] = React.useState(0)
  const navigate = useNavigate();

  getSlideDiaporama(id, (data) => {
    slides = data;
  });

  /*let deck = new Reveal({
    plugins: [Markdown]
  })
  deck.initialize();*/

  const edit_user = modifyDiaporama(id);

  const handleNewSlide = () => {
    const newSlide = {
      content: "",
    };
    addNewSlide(id);
  }

  let content = slides[0].content;

  const handleContent = (event, id_slide) => {
    if (slideInterval) {
      clearInterval(slideInterval);
    }

    let slides = [];
    getSlideDiaporama(id, (data) => {
      slides = data;
    });

    if (slideStyle == id_slide) {
      document.querySelectorAll(".slide-thumbnail-image")[id_slide].style.border = "solid 3px blue"
    } else {
      document.querySelectorAll(".slide-thumbnail-image")[id_slide].style.border = "solid 3px blue"
      document.querySelectorAll(".slide-thumbnail-image")[slideStyle].style.border = "none";
      setSlideStyle(id_slide);
    }

    document.getElementById("react-trumbowyg").innerHTML = slides[id_slide].content;
    let change = "";

    setSlideInterval(setInterval(function () {
      content = document.getElementById("react-trumbowyg").innerHTML;
      if (content != change) {
        change = content;
        updateSlideContent(id, change, slides[id_slide].key);
      }
    }, 3000));
  }

  const handleClose = () => {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    navigate("/");
    console.log("return")
  };

  return (
    <main className="container">
      <button onClick={handleClose}>Quitter le diaporama</button>
      <article>
        <header>
          <hgroup>
            <h1>PWA Slides</h1>
            <h2>Listes des slides pour la présentation X</h2>
          </hgroup>
        </header>

        <div className="row">
          <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
            <div className="row" id="slide">

              {slides.map((slide, index) => {
                return (
                  <div className="col-md-12" key={index} onClick={event => handleContent(event, index)}>
                    <SlideThumbnail id={slide.id} />
                  </div>
                );
              })
              }
              <button onClick={handleNewSlide}>+</button>
            </div>
          </div>

          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10" style={{ marginTop: 0 }}>
            <div style={{ backgroundColor: "ivory" }}>
              <Trumbowyg
                id={'react-trumbowyg'}
                data={content}
                placeholder='Type your text!'
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

