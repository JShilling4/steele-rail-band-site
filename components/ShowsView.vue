<template>
  <div class="view-container">
    <div class="shows-container">
      <div class="table-wrapper">
        <ShowTable v-for="show in shows" :key="show.id" :show="show" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const shows = [
  {
    id: 1,
    date: {
      month: "Aug",
      day: "12",
    },
    venue: {
      name: "Rack N' Helen's Bar & Grill",
      website: "https://www.facebook.com/rackandhelens",
    },
    time: "10pm - 1am",
    location: "New Haven, IN",
    eventLink: "https://www.facebook.com/events/600631315156465/",
  },
  {
    id: 2,
    date: {
      month: "Aug",
      day: "19",
    },
    venue: {
      name: "Private Party",
      website: null,
    },
    time: "7pm - 10pm",
    location: "",
    eventLink: "https://www.facebook.com/events/8539128622827992",
  },
  {
    id: 3,
    date: {
      month: "Sep",
      day: "2",
    },
    venue: {
      name: "Luken's Lake",
      website: "https://www.facebook.com/pages/Lukens-Lake/146045522082063",
    },
    time: "8pm - 11pm",
    location: "Roann, IN",
    eventLink: "https://www.facebook.com/events/8539128622827992",
  },
];
</script>

<style lang="scss" scoped>
:deep(h1) {
  color: var(--banner-color);
}

.table-wrapper {
  margin: 1rem auto 0;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 0rem;
  }
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
  padding: 0 3rem 6rem;

  @media screen and (max-width: 768px) {
    padding: 0 2rem 4rem;
  }
  @media screen and (max-width: 430px) {
    padding: 0 1rem 4rem;
  }
}
</style>
