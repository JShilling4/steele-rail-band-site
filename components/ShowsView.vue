<template>
  <div class="view-container">
    <div class="shows-container">
      <div class="table-wrapper">
        <ShowTable v-for="(show, i) in shows" :key="i" :show="show" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const shows = [
  {
    date: {
      month: "Aug",
      day: "12th",
    },
    venue: {
      name: "Rack N Helens Bar & Grill",
      website: "https://www.facebook.com/rackandhelens",
    },
    time: "10pm - 1am",
    location: "New Haven, IN",
    eventLink: "https://www.facebook.com/events/600631315156465/",
  },
  {
    date: {
      month: "Aug",
      day: "19th",
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
    date: {
      month: "Sep",
      day: "2nd",
    },
    venue: {
      name: "Luken's Lake",
      website: "https://www.facebook.com/pages/Lukens-Lake/146045522082063",
    },
    time: "8pm - 11pm",
    location: "Roann, IN",
    eventLink: "https://www.facebook.com/events/8539128622827992",
  },
  {
    date: {
      month: "Sep",
      day: "9th",
    },
    venue: {
      name: "Downtown Huntington Days",
      website: null,
    },
    time: "6:30pm - 8:30pm",
    location: "Huntington, IN",
    eventLink:
      "https://www.facebook.com/events/1194016611491710?active_tab=about",
  },
  {
    date: {
      month: "Sep",
      day: "15th",
    },
    venue: {
      name: "Knockin' Boots Saloon",
      website: "https://facebook.com/knockinbootssaloon",
    },
    time: "9pm - 1am",
    location: "Fort Wayne, IN",
    eventLink: "https://www.facebook.com/events/1005220330500330",
  },
  {
    date: {
      month: "Sep",
      day: "16th",
    },
    venue: {
      name: "Private Party",
      website: null,
    },
    time: "9pm - 12am",
    location: "",
    eventLink: "https://www.facebook.com/events/558812119439267",
  },
];
</script>

<style lang="scss" scoped>
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
