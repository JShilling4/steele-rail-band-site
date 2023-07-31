<template>
  <input
    class="textInput"
    :style="{
      width: width,
    }"
  />
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
input {
  font-family: "Nunito Sans", sans-serif;
  height: 4rem;
  border: none;
  border-radius: var(--input-border-radius);
  outline: none;
  background-color: var(--input-bg-color);
  color: var(--color-secondary);
  font-weight: 700;
  font-size: 16px;
  padding-left: 1rem;
  border: 3px solid var(--color-secondary);

  @media screen and (max-width: 556px) {
    height: 3rem;
  }

  &:focus {
    box-shadow: var(--input-focus-shadow);
  }
}
</style>
