export const ImageItem = ({ img, onDeleteImg }) => {
  const { id, link, name } = img;

  return (
    <div className='images__item item'>
      <div className="item__img">
        <img src={link} alt={name} className="item__img-picture" />
      </div>
      <button className="item__delete" onClick={() => onDeleteImg(id)}>
        <img src="/images/cross.jpg" alt="cross-icon" className="item__cross" />
      </button>
    </div>
  )
}
