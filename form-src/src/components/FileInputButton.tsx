import { useRef, useState } from 'preact/hooks'
import { Button } from './Button'

export function FileInputButton(props: {
  onSelectFile: (file: File) => void
  onInvalid?: (file: File) => void
  accept?: Array<string>
}) {
  const accept = (props.accept && props.accept.join(', ')) || '*.*'
  const fileInput = useRef<HTMLInputElement>(null)
  const [testStateInputClicked, setStateDataInputClicked] = useState({})

  function handleClick(event: MouseEvent) {
    event.preventDefault()
    fileInput.current.click()
  }

  function handleChange(event: Event) {
    event.preventDefault()
    setStateDataInputClicked(true)
    const file0 = (fileInput.current.files || [])[0]
    if (file0) {
      if (props.accept && !props.accept.includes(file0.type)) {
        props.onInvalid && props.onInvalid(file0)
        return
      }
      props.onSelectFile(file0)
    }
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      style="display: inline-block"
    >
      <Button
        class="FileInputButton"
        onClick={handleClick}
        data-test-id="FileInputButton_BrowseButton"
      >
        Browse...
      </Button>
      <input
        ref={fileInput}
        id="FileInputButton__input"
        style="height: 0; opacity: 0; position: absolute; pointer-events: none;"
        onChange={(e) => handleChange(e)}
        type="file"
        data-test-id="FileInputButton_input"
        data-test={testStateInputClicked && 'clicked'}
        multiple={false}
        accept={accept}
      />
    </form>
  )
}
