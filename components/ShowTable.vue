<template>
  <table class="shows-table">
    <tbody>
      <tr>
        <td class="first" width="150">
          <div class="date-container">
            <div class="date-container__text">
              <span class="month">{{ show.date.month }} </span>
              <span class="day">{{ show.date.day }}</span>
            </div>
          </div>
        </td>
        <td width="350" class="venue-name">
          <a
            :href="show.venue.website as string"
            target="_blank"
            referrerpolicy="no-referrer"
          >
            {{ show.venue.name }}
          </a>
        </td>
        <td width="300">{{ show.time }}</td>
        <td>{{ show.location }}</td>
        <td class="last" align="right">
          <a
            v-if="show.eventLink"
            :href="show.eventLink"
            target="_blank"
            referrerpolicy="no-referrer"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps<{
  show: {
    date: {
      month: string;
      day: string;
    };
    venue: {
      name: string;
      website: string | null;
    };
    time: string;
    location: string;
    eventLink: string | null;
  };
}>();
</script>

<style lang="scss" scoped>
.shows-table {
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  border-radius: 10px;
  padding: 1rem 2rem 0;
  margin-bottom: 2rem;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
    margin-bottom: 0;
  }

  @media screen and (max-width: 556px) {
    margin-top: 2rem;
  }
  @media screen and (max-width: 430px) {
    padding: 0;
  }

  tr {
    margin-bottom: 2rem;
    border: 5px solid var(--color-secondary);
    background-color: var(--banner-color);
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
  td.first {
    padding: 2rem;
  }
  td.last {
    padding-bottom: 2rem;
  }

  td {
    font-weight: 300;
    font-size: 18px;
    padding: 2rem;
    border: none;

    @media screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
      font-size: 20px;
    }

    @media screen and (max-width: 430px) {
      padding: 1rem;
    }

    &.center {
      text-align: center;
    }
    &.venue-name a {
      color: var(--color-primary-bright);
      font-weight: 500;
      text-decoration: underline;
      transition: opacity 0.3s;
      &:hover {
        color: var(--color-primary);
      }
    }
  }

  .date-container {
    display: inline-block;
    position: relative;
    background-color: var(--color-primary);
    font-family: Roboto, sans-serif;
    height: 60px;
    width: 60px;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
      height: 100px;
      width: 100%;
      border-radius: 0;
    }
    &__text {
      position: absolute;
      top: 13px;
      width: 100%;
      text-align: center;
      font-size: 15px;

      @media screen and (max-width: 768px) {
        font-size: 25px;
        top: 21px;
      }

      .month {
        display: block;
        font-weight: 400;
      }
      .day {
        font-weight: 600;
      }
    }
  }
}

td:nth-of-type(5) {
  font-size: 3rem;
}
</style>
