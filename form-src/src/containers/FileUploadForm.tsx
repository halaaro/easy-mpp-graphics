import { Button } from '../components/Button'

export function FileUploadForm(props: { onConfirm: () => void }) {
  function handleConfirm(event: Event) {
    event.preventDefault()
    props.onConfirm()
  }
  return (
    <form class="FileUploadForm">
      {/* <label id="file_name" class="FileUploadForm__label">
        Name
      </label>
      <input
        class="FileUploadForm__textInput"
        type="text"
        name="file_name"
        value={props.initialName}
        placeholder="File Name"
      ></input> */}
      <div class="FileUploadForm__buttonContainer">
        <Button
          class="FileUploadForm__submitButton"
          type="submit"
          label="Upload"
          onClick={handleConfirm}
        />
      </div>
    </form>
  )
}
