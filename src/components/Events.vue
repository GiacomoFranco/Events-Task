<script setup>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores/global';
import EventCard from '@/components/EventCard.vue';
import EmptyList from '@/components/EmptyList.vue';

const store = useGlobalStore()
const { filteredEvents } = storeToRefs(store)

</script>

<template>
  <template v-if="filteredEvents && filteredEvents.length">
    <div class="crowded-list">
      <EventCard v-for="event in filteredEvents" :event="event" :key="event.id" />
    </div>
  </template>
  <template v-else>
    <div class="empty-list">
      <EmptyList />
    </div>
  </template>
</template>

<style lang="scss">
.crowded-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32.6rem, 1fr));
  gap: 2.4rem;
}

.empty-list {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 440px) {
  .crowded-list {
    grid-template-columns: repeat(auto-fit, minmax(22.6rem, 1fr));
  }
}
</style>
