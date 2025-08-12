<script setup>
import Tag from './Tag.vue'
</script>

<template>
  <article class="event-card">
    <div class="event-card__content">
      <div class="event-card__content__image">
        <img src="/src/assets/card-image-ref.png" alt="">
      </div>
      <div class="event-card__content__info">
        <span>June 25, 2025</span>
        <span>3:00 PM</span>
      </div>
      <div class="event-card__content__title">
        <p><strong>Creator Briefing: Best Practices for Video Editing</strong></p>
      </div>
    </div>
    <div class="event-card__tags">
      <Tag v-for="value in [1, 2]" />
    </div>
  </article>
</template>

<style lang="scss">
.event-card {
  background-color: var(--m-white);
  max-width: 37.6rem;
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
</style>
