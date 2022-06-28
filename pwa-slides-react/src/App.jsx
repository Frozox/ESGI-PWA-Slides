import '@picocss/pico'
import 'flexboxgrid'
import './index.css'
import Presentation from "./Presentation";

function App() {
  const presentation = {
    title: 'PWA Slides',
    created_at: '2020-01-01',
    image: 'https://picsum.photos/350/250',
  }
  const presentations = new Array(100).fill(presentation).flat();


  return (
    <>
      <header className={"container"}>
        <div className={"grid"}>
          <article>
              Créer une présentation
          </article>
        </div>
      </header>

      <main className={"container"}>
        <div className={"row"}>
            {presentations.map((presentation, index) => {
              presentation.id = index;
                return (
                  <div className={"col-xs-12 col-sm-6 col-md-4 col-lg-3"} key={index}>
                    <Presentation id={presentation.id} title={presentation.title} created_at={presentation.created_at} image={presentation.image} />
                  </div>
                );
              })
            }
        </div>
      </main>
    </>
  )
}

export default App
