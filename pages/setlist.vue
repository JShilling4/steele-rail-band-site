<template>
  <div></div>
</template>

<script setup lang="ts">
import type { Database } from "@/types/supabase";
const client = useSupabaseClient<Database>();

onBeforeMount(async () => {
  const { data: setlist } = await useAsyncData("setlist", async () => {
    const { data } = await client
      .from("setlist")
      .select("id, name, url")
      .eq("name", "main")
      .single();
    return data;
  });

  if (setlist.value?.url) {
    console.log(setlist.value.url);
    window.location.href = setlist.value.url;
  }
});
</script>

<style lang="scss" scoped></style>
