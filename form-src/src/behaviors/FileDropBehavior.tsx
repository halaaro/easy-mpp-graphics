export function FileDropBehavior(props: {
  accept?: Array<string>
  onActive?: (active: boolean) => void
  onInvalid?: (file: File) => void
  onSelect: (file: File) => void
  render: (handlers: IFileDropBehaviorHandlers) => JSX.Element
}) {
  const handleSelectFile = (file: File) => props.onSelect(file)
  const setActive = (active: boolean) =>
    props.onActive && props.onActive(active)

  function handled(event: DragEvent) {
    event.preventDefault()
    event.stopPropagation()
  }

  function handleDropEnter(event: DragEvent) {
    setActive(true)
    handled(event)
  }

  function handleDropLeave(event: DragEvent) {
    setActive(false)
    handled(event)
  }

  function handleDrop(event: DragEvent) {
    setActive(false)
    handled(event)
    const files = event.dataTransfer?.files ?? []
    const file0 = files[0]
    if (file0 && props.accept) {
      if (!props.accept.includes(file0.type)) {
        props.onInvalid && props.onInvalid(file0)
        return
      }
    }
    handleSelectFile(files[0])
  }

  return props.render({
    onDragEnter: handleDropEnter,
    onDragOver: handled,
    onDragLeave: handleDropLeave,
    onDrop: handleDrop,
  })
}

export interface IFileDropBehaviorHandlers {
  onDragEnter: (event: DragEvent) => void
  onDragOver: (event: DragEvent) => void
  onDragLeave: (event: DragEvent) => void
  onDrop: (event: DragEvent) => void
}
