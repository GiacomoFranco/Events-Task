export function formateDate(isoString) {
  const date = new Date(isoString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formateHour(isoString) {
  const date = new Date(isoString)
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

export function parseDate(date) {
  return date instanceof Date ? date : new Date(date)
}
