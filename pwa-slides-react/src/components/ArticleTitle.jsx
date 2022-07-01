export const ArticleTitle = (props) => {
  return (
    <hgroup>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </hgroup>
  );
}