<template>
  <div class="tabs-container">
    <div
      v-for="tab in options"
      :key="tab.id"
      :class="['tab', { '--active': activeTab === tab.id }]"
      @click="emit('tab-change', tab.id)"
    >
      {{ tab.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface TabOption {
  id: string;
  label: string;
}
defineProps<{
  activeTab: string;
  options: TabOption[];
}>();

const emit = defineEmits<{
  (e: "tab-change", value: string): void;
}>();
</script>

<style lang="scss" scoped>
.tabs-container {
  display: flex;
  justify-content: center;
  gap: 15px;

  .tab {
    font-family: Roboto;
    font-size: 20px;
    color: white;
    font-weight: 300;
    letter-spacing: 2px;
    border-radius: 10px;
    padding: 1rem;
    border: 1px solid white;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
      padding: 0.5rem;
      font-size: 16px;
    }

    &.--active {
      background-color: white;
      color: black;
      font-weight: 500;
    }
  }
}
</style>
