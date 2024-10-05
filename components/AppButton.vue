<template>
  <button
    :class="[
      'appButton',
      {
        primary: color == 'primary',
        secondary: color == 'secondary',
      },
    ]"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
interface Props {
  color?: string;
}
withDefaults(defineProps<Props>(), {
  color: "primary",
});
</script>

<style lang="scss" scoped>
button {
  font-family: Roboto;
  padding: 1rem;
  background-color: transparent;
  border: 2px solid var(--color-secondary);
  /* color: var(--color-primary-bright); */
  color: white;
  outline: none;
  min-width: 11rem;
  border-radius: 10px;
  letter-spacing: 1px;
  font-size: 1.1rem;
  font-weight: 400;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    letter-spacing 0.3s;

  @media screen and (max-width: 556px) {
    font-size: 1rem;
    min-width: 10rem;
  }

  &:hover {
    letter-spacing: 1.4px;
    background-color: var(--color-secondary);
    color: var(--color-primary);
    font-weight: 600;
    box-shadow: 1rem 2rem 2rem rgba(0, 0, 0, 0.3);
  }
}
</style>
