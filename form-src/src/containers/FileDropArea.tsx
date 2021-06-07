import { useLayoutEffect, useRef, useState } from 'preact/hooks'
import { FileInputButton } from '../components/FileInputButton'
import { FileDropBehavior } from '../behaviors/FileDropBehavior'
import { JSX } from 'preact'

export function FileDropArea(props: {
  onSelect: (file: File) => void
  onInvalid?: (file: File) => void
  accept?: Array<string>
  children: JSX.Element
}) {
  const [dropTarget, setDropTarget] = useState(false)
  const handleSelectFile = (file: File) => props.onSelect(file)
  return (
    <FileDropBehavior
      accept={props.accept}
      onSelect={props.onSelect}
      onInvalid={props.onInvalid}
      onActive={setDropTarget}
      render={(handlers) => (
        <div class="FileDropArea">
          <div
            class={`FileDropArea__target ${
              dropTarget ? 'FileDropArea__target__over' : ''
            }`}
            {...handlers}
          ></div>

          <div class="FileDropArea__buttons">
            <FileInputButton
              onSelectFile={handleSelectFile}
              onInvalid={props.onInvalid}
              accept={props.accept}
            />
            {props.children}
          </div>
        </div>
      )}
    ></FileDropBehavior>
  )
}
