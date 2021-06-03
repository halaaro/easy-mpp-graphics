import { useState } from 'preact/hooks'
import { formatSizeKB } from './util'

import { ImageInput } from './components/imageInput'

export function App() {
  const [imageFile, setImageFile] = useState<File | null>(null)

  const onSearch = () => window.alert('todo: show search dialog')

  console.log(imageFile)
  return imageFile != null ? (
    <>
      <button onClick={() => setImageFile(null)}>X</button>
      <div>File: {imageFile.name} </div>
      <div>Size: {formatSizeKB(imageFile.size)} KB </div>
    </>
  ) : (
    <ImageInput
      onSelect={(newFile) => setImageFile(newFile)}
      renderButtons={() => (
        <button class="btn" onClick={onSearch}>
          Search Existing...
        </button>
      )}
    />
  )
}
