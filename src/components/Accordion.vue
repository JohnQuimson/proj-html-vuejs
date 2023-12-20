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
  <ul id="accordion">
    <!-- elem 1 -->
    <li>
      <label for="first"
        ><span>+</span>17/08/2020 CEM FESTIVAL 2020 ANAKALIA, CEORCIA</label
      >
      <input type="radio" name="accordion" id="first" />
      <div class="content">
        <div class="cont-img">
          <img src="../../public/img/images/map.png" alt="" />
        </div>
        <div class="cont-info">
          <span>Untold Stories</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea comtnodo consequat.
          </p>
          <button>Book now</button>
        </div>
      </div>
    </li>
    <!-- elem 2 -->
    <li>
      <label for="second"
        ><span>+</span>17/08/2020 CEM FESTIVAL 2020 ANAKALIA, CEORCIA</label
      >
      <input type="radio" name="accordion" id="second" />
      <div class="content">
        <div class="cont-img">
          <img src="../../public/img/images/map.png" alt="" />
        </div>
        <div class="cont-info">
          <span>Untold Stories</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea comtnodo consequat.
          </p>
          <button>Book now</button>
        </div>
      </div>
    </li>
    <!-- elem 3 -->
    <li>
      <label for="third"
        ><span>+</span>17/08/2020 CEM FESTIVAL 2020 ANAKALIA, CEORCIA</label
      >
      <input type="radio" name="accordion" id="third" />
      <div class="content">
        <div class="cont-img">
          <img src="../../public/img/images/map.png" alt="" />
        </div>
        <div class="cont-info">
          <span>Untold Stories</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea comtnodo consequat.
          </p>
          <button>Book now</button>
        </div>
      </div>
    </li>
    <!-- elem 4 -->
    <li>
      <label for="fourth"
        ><span>+</span>17/08/2020 CEM FESTIVAL 2020 ANAKALIA, CEORCIA</label
      >
      <input type="radio" name="accordion" id="fourth" />
      <div class="content">
        <div class="cont-img">
          <img src="../../public/img/images/map.png" alt="" />
        </div>
        <div class="cont-info">
          <span>Untold Stories</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea comtnodo consequat.
          </p>
          <button>Book now</button>
        </div>
      </div>
    </li>
    <!-- elem 5 -->
    <li>
      <label for="fifth"
        ><span>+</span>17/08/2020 CEM FESTIVAL 2020 ANAKALIA, CEORCIA</label
      >
      <input type="radio" name="accordion" id="fifth" />
      <div class="content">
        <div class="cont-img">
          <img src="../../public/img/images/map.png" alt="" />
        </div>
        <div class="cont-info">
          <span>Untold Stories</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea comtnodo consequat.
          </p>
          <button>Book now</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
#accordion {
  margin: 0 auto 100px;
}

#accordion li {
  list-style: none;
  width: 100%;
  margin-bottom: 10px;
  background-color: white;

  border-radius: 4px;
}

#accordion li label {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  color: #ec4958;
  background-color: #323844;
  letter-spacing: 0.8px;
  padding: 10px 20px;
}

#accordion li label span {
  font-size: 22px;
  color: white;
  margin-right: 10px;
}

#accordion label + input[type='radio'] {
  display: none;
}

#accordion .content {
  padding: 10px 20px 15px;
  line-height: 26px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;
  display: flex;
  background-color: #323844;
  gap: 40px;
  padding: 0 20px;

  .cont-img {
    width: 40%;
    height: 100%;
    padding: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .cont-info {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 20px;

    span {
      color: white;
      font-size: 16px;
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
      padding: 5px 15px;
      font-size: 12px;

      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
}

#accordion label + input[type='radio']:checked + .content {
  max-height: 400px;
}
</style>
