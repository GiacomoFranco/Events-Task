import { describe, expect, beforeEach, test } from 'vitest'

import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard.vue'
import EventMock from '@/mocks/mock-event.json'
import { getImageName, formateDate, formateHour } from '@/utils'

describe('EventCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(EventCard, {
      props: { event: EventMock },
    })
  })

  test('should render properly', () => {
    expect(wrapper.text()).toContain('Sustainable Storytelling Workshop')
  })

  test('should render event title', () => {
    const title = wrapper.find('.event-title')
    expect(title.text()).toBe('Sustainable Storytelling Workshop')
  })

  test('should render image with correct alt text', () => {
    const image = wrapper.find('.event-image')
    expect(image.attributes('src')).toBe(EventMock.image_url)
    expect(image.attributes('alt')).toBe(getImageName(EventMock.image_url))
  })

  test('should render date and time correctly', () => {
    const date = wrapper.find('.event-date')
    const time = wrapper.find('.event-hour')
    expect(date.text()).toBe(formateDate(EventMock.start_time))
    expect(time.text()).toBe(formateHour(EventMock.start_time))
  })
})
