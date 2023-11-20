export const ImageWidget = ({fileRef, onChangeFiles}) => {
  return (
    <div className="widget">
      <div className="file-container">
        <div className="file-container__content">
          <div className="file-container__img">
            <img src="/images/upload.png" alt="Drag and drop" />
          </div>
          <p className="file-container__text">Select file</p>
        </div>
        <input 
          name="add file"
          type="file" 
          onChange={onChangeFiles}
          className="file-container__input" 
          accept="image/png, image/jpeg"
          ref={fileRef} 
          multiple 
        />
      </div>
    </div>
  )
}
