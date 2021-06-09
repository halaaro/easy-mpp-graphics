export function ImageInfo(props: {
  name: string
  size: number
  modified: number
  dimensions?: { width: number; height: number }
}) {
  return (
    <div class="ImageInfo" data-test-id="ImageInfo">
      <div data-test-id="ImageInfo_filename">File: {props.name} </div>
      <div data-test-id="ImageInfo_size">
        Size: {formatSizeKB(props.size)} KB{' '}
      </div>
      <div data-test-id="ImageInfo_modified">
        Modified: {formatModified(props.modified)}
      </div>
      {props.dimensions && (
        <div data-test-id="ImageInfo_dimensions">
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
