import { parseDate } from './format'

export function filterByTab(tab, events) {
  return events.filter((event) => {
    if (tab === 'upcoming') return isUpcoming(event.start_time)
    if (tab === 'past') return isPast(event.start_time)
    if (tab === 'mine') return event.start_time
    return true
  })
}

export function isPast(eventDate, now = new Date()) {
  return parseDate(eventDate).getTime() < now.getTime()
}

export function isUpcoming(eventDate, now = new Date()) {
  return parseDate(eventDate).getTime() >= now.getTime()
}
