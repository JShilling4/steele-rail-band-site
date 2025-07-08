<template>
  <div class="shows-table">
    <div>
      <div class="show">
        <div class="date-container">
          <span class="month">
            {{ getShortMonth(show.date) }}
          </span>
          <span class="day">
            {{ new Date(show.date).getUTCDate() }}{{ getDayOrdinal(show.date) }}
          </span>
        </div>
        <div class="details-container">
          <div class="venue">
            <a
              :href="show.venue.website_url as string"
              target="_blank"
              referrerpolicy="no-referrer"
            >
              {{ show.venue.name }}
            </a>
          </div>
          <div class="location">
            {{ show.venue.city }}{{ show.venue.state ? "," : "" }}
            {{ show.venue.state }}
          </div>
          <div class="time">{{ show.start_time }} - {{ show.end_time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getDayOrdinal, getShortMonth } from "~/utility/helpers";
import type { IShow } from "@/types";

defineProps<{
  show: IShow;
}>();
</script>

<style lang="scss" scoped>
.shows-table {
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  padding: 5px 0;
  margin-bottom: 2rem;
  font-family: Roboto, sans-serif;
  border: 1px solid gray;
  border-left: none;
  border-right: none;

  @media screen and (min-width: 1024px) {
    border: none;
    padding: 0;
  }

  .show {
    display: flex;
    align-items: center;
    background-color: var(--bg-primary);

    @media screen and (min-width: 1024px) {
      padding: 1rem;
    }
  }

  .date-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgb(234, 6, 6), var(--color-primary));
    font-family: Roboto, sans-serif;
    height: 65px;
    min-width: 65px;
    border-radius: 5px;
    position: relative;
    text-align: center;
    font-size: 20px;
    margin-right: 1rem;

    @media screen and (min-width: 1200px) {
      height: 90px;
    }

    .month {
      display: block;
    }
    .day {
      font-weight: 600;
    }
  }

  .details-container {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.5;
    font-size: 16px;

    .venue {
      margin-right: 1rem;
      font-weight: 500;
      letter-spacing: 1px;

      @media screen and (min-width: 768px) {
        font-size: 20px;
      }

      @media screen and (min-width: 1200px) {
        font-size: 24px;
      }
    }
    .location {
      width: 100%;
      font-weight: 300;

      @media screen and (min-width: 768px) {
        font-size: 18px;
      }

      @media screen and (min-width: 1200px) {
        font-size: 22px;
      }
    }
    .time {
      color: rgb(181, 181, 181);
      @media screen and (min-width: 768px) {
        font-size: 20px;
      }

      @media screen and (min-width: 1200px) {
        font-size: 24px;
      }
    }
  }
}
</style>
