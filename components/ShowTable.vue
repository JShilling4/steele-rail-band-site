<template>
  <table class="shows-table">
    <tbody>
      <tr>
        <td class="first" width="150">
          <div class="date-container">
            <div class="date-container__text">
              <a
                v-if="show.fb_url"
                :href="show.fb_url"
                target="_blank"
                referrerpolicy="no-referrer"
                class="date-container-fb-link"
              >
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
              <span class="month">
                {{ getShortMonth(show.date) }}
              </span>
              <span class="day">
                {{ new Date(show.date).getUTCDate()
                }}{{ getDayOrdinal(show.date) }}
              </span>
              <!-- </div> -->
            </div>
          </div>
        </td>
        <td width="350" class="venue-name">
          <a
            :href="show.venue.website_url as string"
            target="_blank"
            referrerpolicy="no-referrer"
          >
            {{ show.venue.name }} {{ show.event ? `(${show.event})` : "" }}
          </a>
        </td>
        <td width="300">{{ show.start_time }} - {{ show.end_time }}</td>
        <td>
          {{ show.venue.city }}{{ show.venue.state ? "," : "" }}
          {{ show.venue.state }}
        </td>
        <td class="last" align="right">
          <a
            v-if="show.fb_url"
            :href="show.fb_url"
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
import { getDayOrdinal, getShortMonth } from "@/utilities/helpers";
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
    border: 2px solid gray;
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

    @media screen and (max-width: 1200px) {
      width: 20px;
      padding: 1rem;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  td:nth-of-type(2) {
    @media screen and (max-width: 1024px) {
      width: 300px;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  td.last {
    text-align: right;

    @media screen and (max-width: 768px) {
      text-align: left;
      font-size: 3rem;
    }
  }

  td {
    font-weight: 300;
    font-size: 18px;
    padding: 2rem;
    border: none;
    cursor: default;

    @media screen and (max-width: 1200px) {
      font-size: 16px;
      padding: 1rem;
    }

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
      color: white;
      font-weight: 500;
      text-decoration: underline;
      transition: opacity 0.3s;
      font-size: 20px;

      @media screen and (max-width: 1200px) {
        font-size: 16px;
      }
      @media screen and (max-width: 768px) {
        font-size: 22px;
      }

      &:hover {
        color: var(--color-primary);
      }
    }
  }

  .date-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgb(234, 6, 6), var(--color-primary));
    font-family: Roboto, sans-serif;
    height: 65px;
    width: 65px;
    border-radius: 5px;
    position: relative;

    @media screen and (max-width: 768px) {
      height: 60px;
      width: 100%;
      border-radius: 0;
    }
    @media screen and (max-width: 445px) {
    }
    &__text {
      width: 100%;
      text-align: center;
      font-size: 20px;

      @media screen and (max-width: 1200px) {
        font-size: 16px;
      }

      @media screen and (max-width: 768px) {
        font-size: 25px;
        top: 21px;
      }

      .month {
        display: block;
        @media screen and (max-width: 768px) {
          display: inline-block;
          margin-right: 8px;
        }
      }
      .day {
        font-weight: 600;
      }
    }

    .date-container-fb-link {
      display: none;
      position: absolute;
      left: 2rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 36px;
      @media screen and (max-width: 768px) {
        display: inline-block;
      }
      @media screen and (max-width: 768px) {
        left: 1rem;
      }
    }
  }
}

td:nth-of-type(3) {
  @media screen and (max-width: 1200px) {
    width: 225px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

td:nth-of-type(4) {
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
}

td:nth-of-type(5) {
  font-size: 3rem;
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
