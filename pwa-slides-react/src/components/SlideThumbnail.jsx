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
        <img src="http://via.placeholder.com/400x300" alt="presentation" />
      </div>
    </div>
  )
}

export default SlideThumbnail;