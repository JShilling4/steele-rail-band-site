<template>
  <div class="page-wrapper">
    <PageHeading>Upcoming {{ new Date().getFullYear() }} Shows</PageHeading>

    <div class="content-container">
      <ShowsView />
    </div>
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
