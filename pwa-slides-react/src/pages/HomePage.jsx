import Presentation from "../components/Presentation";

export const HomePage = () => {
  const presentation = {
    title: 'PWA Slides',
    created_at: '2020-01-01',
    image: 'https://picsum.photos/id/301/350/250',
  }
  const presentations = new Array(100).fill(presentation).flat();

  return (
    <>
      <header className="container">
        <Title title="Créer une présentation" />
      </header>

      <main className="container">
        <Title title="Les présentations" />
        <div className="row">
          {presentations.map((presentation, index) => {
            presentation.id = index;
            return (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index}>
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

const Title = ({title}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h3>{title}</h3>
      </div>
    </div>
  )
}