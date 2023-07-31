<template>
  <textarea
    :style="{
      width: width,
    }"
  >
  </textarea>
</template>

<script setup lang="ts">
interface Props {
  width?: string;
}
withDefaults(defineProps<Props>(), {
  width: "100%",
});
</script>

<style lang="scss" scoped>
textarea {
  font-family: "Nunito Sans", sans-serif;
  background-color: var(--input-bg-color);
  border: none;
  border-radius: var(--input-border-radius);
  height: 8rem;
  padding: 1rem;
  font-weight: 700;
  color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
  outline: none;
  font-size: 16px;
}
</style>
