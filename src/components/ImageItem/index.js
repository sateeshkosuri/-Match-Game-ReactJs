import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickTabImage} = props
  const {thumbnailUrl, id} = imageDetails
  const onClicked = () => {
    onClickTabImage(id)
  }

  return (
    <li className="thumbnail-images-container">
      <button type="button" onClick={onClicked} className="button-image">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-images" />
      </button>
    </li>
  )
}

export default ImageItem
