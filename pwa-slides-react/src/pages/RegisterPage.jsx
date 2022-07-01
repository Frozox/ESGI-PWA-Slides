import AppRegister from "../components/app-register";
import {ArticleTitle} from "../components/ArticleTitle";

export const RegisterPage = () => {
  return (
    <main className="container login-container">
      <article className="grid">
        <div>
          <ArticleTitle title="Créez votre compte" subtitle="Et bénéficier de toutes les fonctionnalités d'ESGI Slides..." />
          <AppRegister />
          <span>
            <a href="/login">Connexion</a>
          </span>
        </div>
      </article>
    </main>
  )
}