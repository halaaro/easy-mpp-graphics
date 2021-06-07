export function ImageInfo(props: {
  name: string
  size: number
  modified: number
  dimensions?: { width: number; height: number }
}) {
  return (
    <div class="ImageInfo">
      <div>File: {props.name} </div>
      <div>Size: {formatSizeKB(props.size)} KB </div>
      <div>Modified: {formatModified(props.modified)}</div>
      {props.dimensions && (
        <div>
          Dimensions: {props.dimensions.width} x {props.dimensions.height}
        </div>
      )}
    </div>
  )
}

function formatSizeKB(size: number): string {
  const sizeKB = size / 1024
  return Math.round(sizeKB).toLocaleString()
}

function formatModified(date: number): string {
  return new Date(date).toLocaleString()
}
