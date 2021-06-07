import { Button } from './Button'

export function CancelButton(props: {
  onClick: JSX.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <Button
      class="CancelButton"
      title="Cancel"
      onClick={props.onClick}
      label="&times;"
    />
  )
}
