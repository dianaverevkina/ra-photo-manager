import { v4 as uuidv4 } from 'uuid';
import { ImageWidget } from './components/ImageWidget/ImageWidget';
import { ImagesContainer } from './components/ImagesContainer/ImagesContainer';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [ images, setImages ] = useState([]);
  const fileRef = useRef();

  function handleForChangeFiles() {
    const files = fileRef.current.files;

    const newImages = [...files].map((file, index) => {
      const { name } = file;
      const link = URL.createObjectURL(file);

      return { 
        id: uuidv4(), 
        link, 
        name 
      };
    })

    setImages([...newImages, ...images])
  }

  function handleForDeleteImage(imgId) {
    setImages(images.filter(img => img.id !== imgId));
  }

  return (
    <div className="app__container">
      <ImageWidget 
        onChangeFiles={handleForChangeFiles}
        fileRef={fileRef}
      />
      <ImagesContainer images={images} onDeleteImg={handleForDeleteImage} />
    </div>
  );
}

export default App;
