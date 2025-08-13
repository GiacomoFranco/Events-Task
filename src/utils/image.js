export function getImageName(path) {
  return path.split('/').pop().replace('.webp', '')
}
