import { useMemo } from 'preact/hooks'

export interface IImagePreviewInfo {
  width: number
  height: number
}

export function ImagePreview(props: {
  file: File
  onLoad: (info: IImagePreviewInfo) => void
}) {
  const previewUrl = useMemo(() => {
    return props.file && URL.createObjectURL(props.file)
  }, [props.file])

  function handleLoad(event: Event) {
    const img = event.target as HTMLImageElement
    props.onLoad({
      width: img.clientWidth,
      height: img.clientHeight,
    })
  }

  return (
    <div class="ImagePreview" data-test-id="ImagePreview">
      <img onLoad={handleLoad} class="ImagePreview__img" src={previewUrl} />
    </div>
  )
}
