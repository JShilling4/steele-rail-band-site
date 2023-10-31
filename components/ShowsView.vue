<template>
  <div class="view-container --with-bg">
    <SelectorTabs
      :active-tab="activeTab"
      :options="tabOptions"
      @tab-change="(val) => (activeTab = val)"
    />
    <div class="shows-container">
      <div class="table-wrapper">
        <ShowTable v-for="(show, i) in computedShows" :key="i" :show="show" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Database } from "@/types/supabase";
const client = useSupabaseClient<Database>();

const allShows = ref<IShow[]>([]);
const currentYearShows = computed(() => {
  const thisYear = new Date().getFullYear();
  return allShows.value.filter(
    (show) => show.date.slice(0, 4) === String(thisYear),
  );
});
const nextYearShows = computed(() => {
  const thisYear = new Date().getFullYear();
  return allShows.value.filter(
    (show) => show.date.slice(0, 4) === String(Number(thisYear) + 1),
  );
});

enum Tabs {
  CurrentYear = "2023",
  NextYear = "2024",
}
const { activeTab } = useTabs(Tabs.CurrentYear);

const computedShows = computed(() => {
  if (activeTab.value === Tabs.NextYear) {
    return nextYearShows.value;
  }
  return currentYearShows.value;
});

const tabOptions = [
  {
    id: Tabs.CurrentYear,
    label: Tabs.CurrentYear,
  },
  {
    id: Tabs.NextYear,
    label: Tabs.NextYear,
  },
];

export interface IShow {
  id: number;
  date: string;
  venue: IVenue;
  start_time: string;
  end_time: string;
  event: string | null;
  fb_url: string | null;
}
export interface IVenue {
  id: number;
  name: string;
  website_url: string | null;
  city: string | null;
  state: string | null;
}
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

  /* @media screen and (max-width: 768px) {
    margin-top: 0rem;
  } */
  @media screen and (max-width: 556px) {
    padding: 0 0 4rem;
  }
  @media screen and (max-width: 430px) {
    padding: 0 0 4rem;
  }
}
.shows-container {
  display: flex;
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
}
</style>
