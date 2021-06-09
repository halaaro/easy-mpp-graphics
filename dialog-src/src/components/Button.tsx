import { JSX } from 'preact'

export function Button(props: {
  onClick: JSX.MouseEventHandler<HTMLButtonElement>
  children: JSX.Element | string
  class?: string
  type?: string
  title?: string
}) {
  return <button {...props} class={`Button ${props.class || ''}`}></button>
}
