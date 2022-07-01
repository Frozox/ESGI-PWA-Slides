import AppLogin from "../components/app-login";
import '../css/login.css';
export const LoginPage = () => {
  return (
    <main className="container">
      <article className="grid">
        <div>
          <hgroup>
            <h1>Connectez vous</h1>
            <h2>Et bénéficier de toutes les fonctionnalités d'ESGI Slides...</h2>
          </hgroup>
          <AppLogin />
          <span>
            <a href="/register">Créer un compte</a>
          </span>
        </div>
        <div></div>
      </article>
    </main>
  );
}