<template>
  <div class="empty-list__content">
    <h2 class="empty-list__title">No upcoming events</h2>
    <p>Stay tuned! New events will show up here as they're announced. Keep an eye out for opportunities to connect,
      share, and grow.</p>
  </div>
</template>
<style lang="scss">
.empty-list__content {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  text-align: center;
  max-width: 55.6rem;
  margin: 9.368rem 0;

  .empty-list__title {
    font-weight: 600;
    color: var(--m-purple);
  }
}
</style>
