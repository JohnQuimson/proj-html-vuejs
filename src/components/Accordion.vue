<script>
export default {
  name: 'Accordion',

  data() {
    return {
      accordionArray: {
        elem1: {
          place: '17/08/2020 GEM FESTIVAL 2020 ANAKALIA, GEORGIA',
          title: 'GEM FESTIVAL 2020',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea comtnodo consequat.',
          pic: 'gem-fest.jpg',
          number: 'One',
        },
        elem2: {
          place: '24/9/2020 GROOVEFEST, DOMINICAL REPUBLIC',
          title: 'GROOVEFEST 2020',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea comtnodo consequat.',
          pic: 'groove-fest.jpg',
          number: 'Two',
        },
        elem3: {
          place: '31/10/2020 OASIS FESTIVAL 2020 MARRAKECH, MOROCCO',
          title: 'OASIS FESTIVAL 2020',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea comtnodo consequat.',
          pic: 'oasis-fest.jpg',
          number: 'Three',
        },
        elem4: {
          place: '07/11/2020 MOGA FESTIVAL ESSAOURIA, MOROCCO',
          title: 'MOGA FESTIVAL 2020',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea comtnodo consequat.',
          pic: 'moga-fest.jpg',
          number: 'Four',
        },
        elem5: {
          place: '10/12/2020 ENVISION FESTIVAL UVITA, COSTA RICA',
          title: 'ENVISION FESTIVAL 2020',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea comtnodo consequat.',
          pic: 'envision-fest.jpg',
          number: 'Five',
        },
      },
    };
  },

  components: {},
};
</script>

<template>
  <div
    class="jq-container accordion accordion-flush"
    id="accordionFlushExample"
  >
    <!-- Element Accordion -->
    <div v-for="element in accordionArray" class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="jq-accordion accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#flush-collapse${element.number}`"
          aria-expanded="false"
          :aria-controls="`flush-collapse${element.number}`"
        >
          <p>
            <span>+</span>
            {{ element.place }}
          </p>
        </button>
      </h2>
      <div
        :id="`flush-collapse${element.number}`"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div class="cont-img">
            <img
              :src="`../../public/img/images/accordion-imgs/${element.pic}`"
              alt=""
            />
          </div>
          <div class="cont-info">
            <span> {{ element.title }}</span>

            <p>
              {{ element.description }}
            </p>
            <button>Book now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jq-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px 0 80px;

  .accordion-item {
    border: none;

    .jq-accordion {
      background-color: #323844;
      color: #ec4958;
      padding: 10px 15px 15px;

      p {
        margin: 0;
        text-transform: uppercase;
        color: #ec4958;
        background-color: #323844;
        letter-spacing: 0.8px;
        font-size: 14px;

        span {
          font-size: 22px;
          color: white;
          margin-right: 10px;
        }
      }

      &:focus {
        box-shadow: none;
      }

      &::after {
        display: none;
      }
    }

    .accordion-body {
      background-color: #323844;
      display: flex;
      gap: 40px;
      border: none;

      .cont-img {
        width: 30%;

        img {
          width: 100%;
          object-fit: cover;
        }
      }

      .cont-info {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-around;

        span {
          color: white;
          font-size: 18px;
        }

        p {
          color: #787b8d;
        }

        button {
          background: none;
          color: white;
          background-color: #ec4958;
          border: none;
          text-transform: uppercase;
          padding: 10px 20px;
          font-size: 12px;

          &:hover {
            background-color: white;
            color: black;
          }
        }
      }
    }
  }
}
</style>
