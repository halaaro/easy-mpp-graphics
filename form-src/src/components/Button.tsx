export function Button(props: {
  onClick: JSX.MouseEventHandler<HTMLButtonElement>
  label: string
  class?: string
  type?: string
  title?: string
}) {
  return (
    <button
      class={`Button ${props.class || ''}`}
      title={props.title || ''}
      type={props.type || ''}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}
