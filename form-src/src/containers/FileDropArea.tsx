import { useState } from 'preact/hooks'
import { FileInputButton } from '../components/FileInputButton'
import { FileDropBehavior } from '../behaviors/FileDropBehavior'
import { JSX } from 'preact'

export function FileDropArea(props: {
  onSelect: (file: File) => void
  onInvalid?: (file: File) => void
  accept?: Array<string>
  children: JSX.Element
}) {
  const [dropTargetActive, setDropTargetActive] = useState(false)
  const handleSelectFile = (file: File) => props.onSelect(file)
  return (
    <FileDropBehavior
      accept={props.accept}
      onSelect={props.onSelect}
      onInvalid={props.onInvalid}
      onActive={setDropTargetActive}
      render={(handlers) => (
        <div class="FileDropArea" data-test-id="FileDropArea">
          <div
            data-test-id="FileDropArea_target"
            class={`FileDropArea__target ${
              dropTargetActive ? 'FileDropArea__target__over' : ''
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
