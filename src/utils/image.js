export function getImageName(path) {
  return path ? path.split('/').pop().replace('.webp', '') : ''
}
