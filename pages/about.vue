<template>
  <div class="page-wrapper">
    <PageHeading>About</PageHeading>

    <div class="content-container">Coming soon...</div>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";

const title = ref("Steele Rail Band - About");
const description = ref("");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<style lang="scss" scoped>
.content-container {
  max-width: 1400px;
  margin: 0 auto;
}
.top-copy {
  line-height: 2;
  font-weight: 300;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.856);

  @media screen and (max-width: 430px) {
    margin-bottom: 1rem;
  }
}
.hero-container {
  float: left;
  margin: 0 2rem 2rem 0;
  height: 402px;
  img {
    max-height: 100%;
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    float: none;
    height: initial;
    margin: 0;
  }
}
.copy-container {
  margin-top: 3rem;
  font-size: 17px;
  line-height: 1.5;

  @media screen and (max-width: 430px) {
    margin-top: 1rem;
  }

  .point {
    margin-bottom: 3rem;

    .question {
      color: var(--color-primary);
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: 1rem;
      font-weight: 500;
      font-size: 20px;
    }

    .answer {
      font-weight: 300;
      line-height: 1.75;
      color: var(--copy-white-faded);
    }
  }
}
</style>
