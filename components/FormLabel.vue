<template>
  <label
    :id="id"
    class="formLabel"
    :style="{
      display: isInline ? 'inline' : 'block',
    }"
  >
    <slot/>
  </label>
</template>

<script setup lang="ts">
interface Props {
  id?: string;
  isInline?: boolean;
}
withDefaults(defineProps<Props>(), {
  id: "",
  isInline: false,
});
</script>

<style lang="scss" scoped>
label {
  font-family: Roboto, sans-serif;
  color: var(--color-secondary);
  /* color: white; */
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 4px;
}
</style>
