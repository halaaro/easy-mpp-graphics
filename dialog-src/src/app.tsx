import { useState } from 'preact/hooks'

import { FileDropBehavior } from './behaviors/FileDropBehavior'
import { Button } from './components/Button'
import { FileDropArea } from './containers/FileDropArea'
import { ImageUploadConfirm } from './containers/ImageUploadConfirm'
import githubImgUrl from './assets/GitHub-Mark-32px.png'

export function App() {
  const [imageFile, setImageFile] = useState<File | null>(null)

  const handleSearch = () =>
    window._handleSearch
      ? window._handleSearch()
      : window.alert('Unable to show search dialog')

  const handleUpload = () =>
    window._handleUpload != null && imageFile != null
      ? window._handleUpload(imageFile)
      : window.alert(`Unable to upload ${imageFile?.name} to vault`)

  const imageAccept = ['image/png', 'image/jpeg']
  const handleInvalidType = () =>
    window._handleInvalidType
      ? window._handleInvalidType('Only PNG and JPEG images are allowed!')
      : window.alert('Invalid file. Only PNG and JPEG images are allowed!')

  return imageFile != null ? (
    <FileDropBehavior
      accept={imageAccept}
      onSelect={setImageFile}
      onInvalid={handleInvalidType}
      render={(handlers) => (
        <ImageUploadConfirm
          {...handlers}
          file={imageFile}
          onConfirm={handleUpload}
          onCancel={() => setImageFile(null)}
        />
      )}
    />
  ) : (
    <FileDropArea
      accept={imageAccept}
      onSelect={(newFile) => setImageFile(newFile)}
      onInvalid={handleInvalidType}
    >
      <>
        <a href="https://github.com/halaaro/easy-mpp-graphics" class="githubLink" target="_blank">
          <img src={githubImgUrl} title="github logo"></img>
        </a>
        <Button data-test-id="SearchButton" onClick={handleSearch}>
          Search Existing...
        </Button>
      </>
    </FileDropArea>
  )
}
