import { ImageItem } from "./ImageItem/ImageItem"

export const ImagesContainer = ({images, onDeleteImg}) => {
  return (
    <div className="images">
      <div className="images__container">
        {images.map(image => <ImageItem 
          key={image.id} 
          img={image} 
          onDeleteImg={onDeleteImg}
        />)}
      </div>
    </div>
  )
}
