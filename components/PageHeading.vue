<template>
  <h1 class="page-heading">
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 200;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 1px;
  font-size: 38px;
  margin-bottom: 3rem;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 1200px) {
    font-size: 34px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 28px;
    margin-bottom: 0;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
}
</style>
