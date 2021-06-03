import { useRef } from 'preact/hooks'

export function FileUploadButton(props: {
  onSelectFile: (file: File) => void
  accept?: string
}) {
  const fileInput = useRef<HTMLInputElement>(null)

  const accept = props.accept || '*.*'

  function handleClick(event: MouseEvent) {
    console.log(event)
    event.preventDefault()
    fileInput.current.click()
  }

  function handleChange(event: Event) {
    console.log(event)
    const file0 = (fileInput.current.files || [])[0]
    if (file0) {
      props.onSelectFile(file0)
    }
    event.preventDefault()
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      style="display: inline-block"
    >
      <button className="btn" onClick={handleClick}>
        Browse...
      </button>
      <input
        ref={fileInput}
        id="fileInputButton__input"
        style="height: 0; opacity: 0; position: absolute; pointer-events: none;"
        onChange={(e) => handleChange(e)}
        type="file"
        multiple={false}
        accept={accept}
      ></input>
    </form>
  )
}
