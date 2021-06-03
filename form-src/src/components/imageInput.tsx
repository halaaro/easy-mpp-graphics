import { useLayoutEffect, useRef, useState } from 'preact/hooks'
import { FileUploadButton } from './fileUploadButton'

export function ImageInput(props: {
  renderButtons: Function
  onSelect: (file: File) => void
}) {
  const [dropTarget, setDropTarget] = useState(false)
  const handleSelectFile = (file: File) => props.onSelect(file)

  function handled(event: DragEvent) {
    event.preventDefault()
    event.stopPropagation()
  }

  function handleDropEnter(event: DragEvent) {
    setDropTarget(true)
    handled(event)
  }

  function handleDropLeave(event: DragEvent) {
    setDropTarget(false)
    handled(event)
  }

  function handleDrop(event: DragEvent) {
    setDropTarget(false)
    const files = event.dataTransfer?.files ?? []
    handleSelectFile(files[0])
    handled(event)
  }

  return (
    <div class="imageInput">
      <div
        class={`imageInput__target ${
          dropTarget ? 'imageInput__target__over' : ''
        }`}
        onDragEnter={handleDropEnter}
        onDragOver={handled}
        onDragLeave={handleDropLeave}
        onDrop={handleDrop}
      ></div>

      <div class="imageInput__buttons">
        <FileUploadButton
          onSelectFile={handleSelectFile}
          accept="image/jpeg, image/png"
        />
        {props.renderButtons && props.renderButtons()}
      </div>
    </div>
  )
}
