/**
 * Composant Presentation
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const SlideThumbnail = (props) => {
  const { id } = props;
  return (
    <div className="slide-thumbnail" id={id}>
      <div className="slide-thumbnail-image">
        <img src="/assets/img/400x300.png" loading="lazy" alt="presentation" />
      </div>
    </div>
  )
}

export default SlideThumbnail;