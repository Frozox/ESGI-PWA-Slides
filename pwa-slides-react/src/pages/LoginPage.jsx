import AppLogin from "../components/app-login";
import {ArticleTitle} from "../components/ArticleTitle";

export const LoginPage = () => {
  return (
    <main className="container login-container">
      <article className="grid">
        <div>
          <ArticleTitle title="Connectez vous" subtitle="Et bénéficier de toutes les fonctionnalités d'ESGI Slides..." />
          <AppLogin />
          <span>
            <a href="/register">Créer un compte</a>
          </span>
        </div>
        <div className={"hero-image"}></div>
      </article>
    </main>
  );
}