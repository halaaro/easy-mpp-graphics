import { Button } from '../components/Button'

export function FileUploadForm(props: { onConfirm: () => void }) {
  function handleConfirm(event: Event) {
    event.preventDefault()
    props.onConfirm()
  }
  return (
    <form class="FileUploadForm">
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
