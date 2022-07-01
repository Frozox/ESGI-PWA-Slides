import AppRegister from "../components/app-register";

export const RegisterPage = () => {
  return (
    <main className="container">
      <article className="grid">
        <div>
          <hgroup>
            <h1>Inscrivez vous</h1>
            <h2>S'inscrire vous permettra de bénéficier de toutes les fonctionnalités d'ESGI Slides</h2>
          </hgroup>
          <AppRegister />
          <span>
            <a href="/login">Se connecter</a>
          </span>
        </div>
      </article>
    </main>
  )
}