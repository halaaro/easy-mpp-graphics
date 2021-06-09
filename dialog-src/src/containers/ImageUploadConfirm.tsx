import { useState } from 'preact/hooks'
import { CancelButton } from '../components/CancelButton'
import { ImageInfo } from '../components/ImageInfo'
import { IImagePreviewInfo, ImagePreview } from '../components/ImagePreview'
import { FileUploadForm } from './FileUploadForm'

export function ImageUploadConfirm(props: {
  onConfirm: () => void
  onCancel: () => void
  file: File
}) {
  const { onConfirm, onCancel, file, ...otherProps } = props
  const [imageInfo, setImageInfo] = useState<IImagePreviewInfo | null>(null)
  return (
    <div class="ImageUploadConfirm__container" {...otherProps}>
      <CancelButton onClick={() => onCancel()} />
      <div class="ImageUploadConfirm__controls">
        <ImageInfo
          name={file.name}
          size={file.size}
          dimensions={imageInfo || undefined}
          modified={file.lastModified}
        />
        <FileUploadForm {...{ onConfirm }} />
      </div>
      <ImagePreview file={file} onLoad={setImageInfo} />
    </div>
  )
}
