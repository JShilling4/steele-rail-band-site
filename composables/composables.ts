export const useTabs = (defaultTab: string) => {
  const activeTab = ref(defaultTab);

  return { activeTab };
};
