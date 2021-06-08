import { Button } from './Button'

export function FileInputButton(props: {
  onSelectFile: (file: File) => void
  onInvalid?: (file: File) => void
  accept?: Array<string>
}) {
  const accept = (props.accept && props.accept.join(', ')) || '*.*'

  function handleClick(event: MouseEvent) {
    event.preventDefault()
    const fileInput = event.target as HTMLInputElement
    fileInput.click()
  }

  function handleChange(event: Event) {
    event.preventDefault()
    const fileInput = event.target as HTMLInputElement
    const file0 = (fileInput.files || [])[0]
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
        label="Browse..."
      ></Button>
      <input
        id="FileInputButton__input"
        style="height: 0; opacity: 0; position: absolute; pointer-events: none;"
        onChange={(e) => handleChange(e)}
        type="file"
        multiple={false}
        accept={accept}
      ></input>
    </form>
  )
}
