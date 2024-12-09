<template>
  <div class="view-container --with-bg">
    <div :class="['shows-container', { 'temp-height': !allShows.length }]">
      <div class="table-wrapper">
        <ShowTable
          v-for="(show, i) in currentYearShows"
          :key="i"
          :show="show"
        />
      </div>
      <div v-if="allShows.length" class="table-wrapper">
        <h1 class="next-year-heading">{{ new Date().getFullYear() + 1 }}</h1>
        <ShowTable v-for="(show, i) in nextYearShows" :key="i" :show="show" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Database, IShow } from "@/types";

const client = useSupabaseClient<Database>();

const allShows = ref<IShow[]>([]);
const currentYearShows = computed(() => {
  const thisYear = new Date().getFullYear();
  const today = new Date(new Date().toLocaleDateString());
  today.setHours(0, 0, 0);

  return allShows.value.filter((show) => {
    const dateObj = new Date(show.date);
    const showDate = new Date(
      new Date(dateObj.setDate(dateObj.getDate())).setHours(0, 0, 0),
    );

    return show.date.slice(0, 4) === String(thisYear) && showDate >= today;
  });
});
const nextYearShows = computed(() => {
  const thisYear = new Date().getFullYear();
  return allShows.value.filter(
    (show) => show.date.slice(0, 4) === String(Number(thisYear) + 1),
  );
});

onBeforeMount(async () => {
  const { data: shows } = await useAsyncData("show", async () => {
    const { data } = await client.from("show").select(`
        id,
        date,
        start_time,
        end_time,
        event,
        fb_url,
        venue (
          id,
          name,
          website_url,
          city,
          state
        )
      `);
    return data;
  });

  allShows.value = (shows.value as IShow[]).sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
});
</script>

<style lang="scss" scoped>
.table-wrapper {
  margin: 2rem auto 0;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 556px) {
    padding: 0 0 4rem;
  }
  @media screen and (max-width: 430px) {
    padding: 0 0 4rem;
  }

  .next-year-heading {
    display: inline-block;
    padding: 1rem 4rem;
    border-radius: 10px;
    position: relative;
    margin-bottom: 2rem;
    background-color: #fff;
    color: #000;
  }
}
.shows-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: auto;
  padding: 0 3rem;

  @media screen and (max-width: 768px) {
    padding: 0 0 0;
    display: block;
  }
  @media screen and (max-width: 430px) {
    padding: 0 1rem;
  }

  &.temp-height {
    min-height: 90vh;
  }
}
</style>
