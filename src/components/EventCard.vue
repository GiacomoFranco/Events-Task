<script setup>
import Tag from '@/components/Tag.vue';
import { getImageName, formateDate, formateHour } from '@/utils';

const props = defineProps(['event']);
</script>

<template>
  <article class="event-card">
    <div class="event-card__content">
      <div class="event-card__content__image">
        <img :src="event.image_url" :alt="getImageName(event.image_url)">
      </div>
      <div class="event-card__content__info">
        <span>{{ formateDate(event.start_time) }}</span>
        <span>{{ formateHour(event.start_time) }}</span>
      </div>
      <div class="event-card__content__title">
        <p><strong>{{ event.title }}</strong></p>
      </div>
    </div>
    <div class="event-card__tags">
      <Tag v-for="tag in event.tags" :tag="tag" />
    </div>
  </article>
</template>

<style lang="scss">
.event-card {
  background-color: var(--m-white);
  flex-basis: 32.6rem;
  flex-grow: 1;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  cursor: pointer;
  border-radius: .8rem;


  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    &__image {
      width: 100%;
      height: 20.6rem;
      border-radius: .8rem;
      overflow: hidden;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    &__info {
      display: flex;
      gap: .8rem;

      span:first-child {
        border-right: 1px solid #D9D9D9;
        padding-right: .8rem;
      }
    }
  }

  &__tags {
    display: flex;
    gap: .8rem;
  }
}

@media (max-width: 700px) {
  .event-card {
    &__tags {
      flex-wrap: wrap;
    }
  }
}
</style>
