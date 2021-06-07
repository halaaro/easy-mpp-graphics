import { useState } from 'preact/hooks'

import { FileDropBehavior } from './behaviors/FileDropBehavior'
import { Button } from './components/Button'
import { FileDropArea } from './containers/FileDropArea'
import { ImageUploadConfirm } from './containers/ImageUploadConfirm'

declare global {
  /* makes typescript happy */
  interface Window {
    /* should be provided by caller */
    _handleSearch: () => void
    _handleUpload: (file: File) => void
    _handleInvalid: () => void
  }
}

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
  const handleInvalid = () =>
    window._handleInvalid
      ? window._handleInvalid()
      : window.alert('Only PNG and JPEG images are allowed!')

  console.log(imageFile)
  return imageFile != null ? (
    <FileDropBehavior
      accept={imageAccept}
      onSelect={setImageFile}
      onInvalid={handleInvalid}
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
      onInvalid={handleInvalid}
    >
      <Button onClick={handleSearch} label="Search Existing..." />
    </FileDropArea>
  )
}
