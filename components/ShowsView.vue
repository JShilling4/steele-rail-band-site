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
  // {
  //   date: {
  //     month: "Sep",
  //     day: "2nd",
  //   },
  //   venue: {
  //     name: "Luken's Lake",
  //     website: "https://www.facebook.com/pages/Lukens-Lake/146045522082063",
  //   },
  //   time: "8pm - 11pm",
  //   location: "Roann, IN",
  //   eventLink: "https://www.facebook.com/events/8539128622827992",
  // },
  // {
  //   date: {
  //     month: "Sep",
  //     day: "9th",
  //   },
  //   venue: {
  //     name: "Downtown Huntington Days",
  //     website: null,
  //   },
  //   time: "6:30pm - 8:30pm",
  //   location: "Huntington, IN",
  //   eventLink:
  //     "https://www.facebook.com/events/1194016611491710?active_tab=about",
  // },
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
  {
    date: {
      month: "Oct",
      day: "14th",
    },
    venue: {
      name: "Rochester VFW",
      website: null,
    },
    time: "6pm - 10pm",
    location: "Rochester, IN",
    eventLink: "https://www.facebook.com/events/1431068650793216",
  },
  {
    date: {
      month: "Oct",
      day: "27th",
    },
    venue: {
      name: "The Post",
      website: "https://www.facebook.com/profile.php?id=100057054386233",
    },
    time: "9pm - 1am",
    location: "Pierceton, IN",
    eventLink: "https://www.facebook.com/events/856344468941146",
  },
  {
    date: {
      month: "Oct",
      day: "28th",
    },
    venue: {
      name: "The Post",
      website: "https://www.facebook.com/profile.php?id=100057054386233",
    },
    time: "9pm - 1am",
    location: "Pierceton, IN",
    eventLink: "https://www.facebook.com/events/859098571996088",
  },
  {
    date: {
      month: "Nov",
      day: "4th",
    },
    venue: {
      name: "Wabash Elk's",
      website: "https://www.facebook.com/ELKS471",
    },
    time: "8pm - 12am",
    location: "Wabash, IN",
    eventLink: "https://www.facebook.com/events/916077502747986",
  },
  {
    date: {
      month: "Nov",
      day: "11th",
    },
    venue: {
      name: "Goshen Moose (Members only)",
      website: "https://www.facebook.com/goshenmoose",
    },
    time: "7pm - 10pm",
    location: "Goshen, IN",
    eventLink: "https://www.facebook.com/events/698778365301114",
  },
  {
    date: {
      month: "Nov",
      day: "18th",
    },
    venue: {
      name: "Timber Ridge Club 250",
      website: "https://www.facebook.com/timberridgegc",
    },
    time: "8pm - 11pm",
    location: "Bluffton, IN",
    eventLink: "https://www.facebook.com/events/560251752669730",
  },
  {
    date: {
      month: "Nov",
      day: "22nd",
    },
    venue: {
      name: "The Post",
      website: "https://www.facebook.com/profile.php?id=100057054386233",
    },
    time: "8pm - 12am",
    location: "Pierceton, IN",
    eventLink: "https://www.facebook.com/events/658103672772137",
  },
  {
    date: {
      month: "Nov",
      day: "24th",
    },
    venue: {
      name: "The Post",
      website: "https://www.facebook.com/profile.php?id=100057054386233",
    },
    time: "8pm - 12am",
    location: "Pierceton, IN",
    eventLink: "https://www.facebook.com/events/893777268289362",
  },
  {
    date: {
      month: "Nov",
      day: "25th",
    },
    venue: {
      name: "The Post",
      website: "https://www.facebook.com/profile.php?id=100057054386233",
    },
    time: "8pm - 12am",
    location: "Pierceton, IN",
    eventLink: "https://www.facebook.com/events/968002007937774",
  },
  {
    date: {
      month: "Dec",
      day: "8th",
    },
    venue: {
      name: "Harry's Tap & Grill",
      website: "https://www.facebook.com/harrystapandgrill",
    },
    time: "7pm - 11pm",
    location: "Milford, IN",
    eventLink: "https://www.facebook.com/events/801133704759530",
  },
  {
    date: {
      month: "Dec",
      day: "9th",
    },
    venue: {
      name: "Wabash Eagles",
      website: "https://www.facebook.com/profile.php?id=100048562394841",
    },
    time: "8pm - 12am",
    location: "Wabash, IN",
    eventLink: "https://www.facebook.com/events/541916254654633",
  },
  {
    date: {
      month: "Dec",
      day: "30th",
    },
    venue: {
      name: "The Post",
      website: "https://www.facebook.com/profile.php?id=100057054386233",
    },
    time: "8pm - 12am",
    location: "Pierceton, IN",
    eventLink: "https://www.facebook.com/events/527900555958079",
  },
  {
    date: {
      month: "Dec",
      day: "31th",
    },
    venue: {
      name: "The Post (New Years Eve Party)",
      website: "https://www.facebook.com/profile.php?id=100057054386233",
    },
    time: "9pm - 1am",
    location: "Pierceton, IN",
    eventLink: "https://www.facebook.com/events/835356087749439",
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
