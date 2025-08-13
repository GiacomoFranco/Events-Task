<script setup>
const props = defineProps(['tag'])
</script>
<template>
  <span class="tag">{{ tag }}</span>
</template>
<style>
.tag {
  background-color: var(--l-purple);
  color: var(--m-gray);
  padding: 0 1.2rem;
  border-radius: .4rem;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  white-space: nowrap;
  overflow: hidden;
}
</style>
