<script>
export default {
  name: 'Accordion',

  data() {
    return {};
  },

  components: {},
};
</script>

<template>
  <div
    class="jq-container accordion accordion-flush"
    id="accordionFlushExample"
  >
    <!-- Elem 1 -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="jq-accordion accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          <p>
            <span>+</span>
            17/08/2020 GEM FESTIVAL 2020 ANAKALIA, GEORGIA
          </p>
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div class="cont-img">
            <img src="../../public/img/images/map.png" alt="" />
          </div>
          <div class="cont-info">
            <span>Untold Stories</span>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea comtnodo consequat.
            </p>
            <button>Book now</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Elem 2 -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="jq-accordion accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
          <p>
            <span>+</span>
            24/9/2020 GROOVEFEST DOMINICAL REPUBLIC
          </p>
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div class="cont-img">
            <img src="../../public/img/images/map.png" alt="" />
          </div>
          <div class="cont-info">
            <span>Untold Stories</span>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea comtnodo consequat.
            </p>
            <button>Book now</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Elem 3 -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="jq-accordion accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree"
          aria-expanded="false"
          aria-controls="flush-collapseThree"
        >
          <p>
            <span>+</span>
            31/10/2020 OASIS FESTIVAL 2020 MARRAKECH, MOROCCO
          </p>
        </button>
      </h2>
      <div
        id="flush-collapseThree"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div class="cont-img">
            <img src="../../public/img/images/map.png" alt="" />
          </div>
          <div class="cont-info">
            <span>Untold Stories</span>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea comtnodo consequat.
            </p>
            <button>Book now</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Elem 4 -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="jq-accordion accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFour"
          aria-expanded="false"
          aria-controls="flush-collapseFour"
        >
          <p>
            <span>+</span>
            07/11/2020 MOGA FESTIVAL ESSAOURIA, MOROCCO
          </p>
        </button>
      </h2>
      <div
        id="flush-collapseFour"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div class="cont-img">
            <img src="../../public/img/images/map.png" alt="" />
          </div>
          <div class="cont-info">
            <span>Untold Stories</span>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea comtnodo consequat.
            </p>
            <button>Book now</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Elem 5 -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="jq-accordion accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFive"
          aria-expanded="false"
          aria-controls="flush-collapseFive"
        >
          <p>
            <span>+</span>
            10/12/2020 ENVISION FESTIVAL UVITA, COSTA RICA
          </p>
        </button>
      </h2>
      <div
        id="flush-collapseFive"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div class="cont-img">
            <img src="../../public/img/images/map.png" alt="" />
          </div>
          <div class="cont-info">
            <span>Untold Stories</span>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea comtnodo consequat.
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

      .cont-info {
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
