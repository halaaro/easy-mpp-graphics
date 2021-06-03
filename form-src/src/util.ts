export function formatSizeKB(size: number): string {
  const sizeKB = size / 1024
  return Math.round(sizeKB).toLocaleString()
}
