<template>
  <div
    class="input-group"
    :style="{
      marginBottom: bottomMargin,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  bottomMargin?: string;
}
withDefaults(defineProps<Props>(), {
  bottomMargin: "2rem",
});
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 10rem;
  text-align: center;
  color: var(--color-primary);
}

.container {
  max-width: var(--wrapper-width);
  margin: 0 auto;
}

.heading-container {
  text-align: center;
}

.content {
  display: flex;
  margin-top: 2rem;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  .contactForm {
    width: 100%;
    padding: 2rem 8rem;
    @media screen and (max-width: 1200px) {
      width: 70%;
      order: 2;
      padding: 0;
    }
    @media screen and (max-width: 556px) {
      width: 100%;
    }
  }

  img {
    height: 400px;
    @media screen and (max-width: 1200px) {
      height: auto;
      width: 70%;
      margin-bottom: 4rem;
      border-radius: 10px;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }

  button {
    margin-top: 2rem;
    width: 15rem;
  }
}
</style>
