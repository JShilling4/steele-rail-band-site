<template>
  <div class="page-wrapper">
    <PageHeading>Upcoming Shows</PageHeading>

    <div class="content-container">
      <ShowsView />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";

const title = ref("Steele Rail Band - Shows");
const description = ref(
  "Steele Rail Band upcoming show venues, times and locations.",
);

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
