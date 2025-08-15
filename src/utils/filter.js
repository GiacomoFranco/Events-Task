import { parseDate } from './format'

export function filterByTab(tab, events) {
  return events.filter((event) => {
    if (tab === 'Upcoming') return isUpcoming(event.start_time)
    if (tab === 'Past Events') return isPast(event.start_time)
    if (tab === 'My Events') return false
    return true
  })
}

export function isPast(eventDate, now = new Date()) {
  return parseDate(eventDate).getTime() < now.getTime()
}

export function isUpcoming(eventDate, now = new Date()) {
  return parseDate(eventDate).getTime() >= now.getTime()
}
