import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { computed, reactive } from 'vue'
import { filterByTab } from '@/utils/filter'
import EventsMock from '@/mocks/mock-data.json'

export const useGlobalStore = defineStore('global', () => {
  const route = useRoute()
  const events = reactive(EventsMock)

  const currentRouteName = computed(() => route.name)
  const filteredEvents = computed(() => filterByTab(currentRouteName.value, EventsMock.events))

  return { events, filteredEvents }
})
