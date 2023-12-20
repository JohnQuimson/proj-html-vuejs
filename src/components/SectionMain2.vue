<script>
import BigButton from './BigButton.vue';
// import CardNews from './CardNews.vue';

export default {
  name: 'Latest Band News',

  data() {
    return {
      latestNews: {
        card1: {
          img: 'blog_music_techo',
          title: 'Technology and music',
          paragraph:
            'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.',
        },
        card2: {
          img: 'blog-post3',
          title: 'While my guitar gently weeps',
          paragraph:
            'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.',
        },
        card3: {
          img: 'blog-post4',
          title: 'It just sounds better',
          paragraph:
            'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.',
        },
        card4: {
          img: 'blog_flavor_rock',
          title: 'The flavor of rock',
          paragraph:
            'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.',
        },
        card5: {
          img: 'blog-post1',
          title: 'Taking it back to the old school',
          paragraph:
            'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.',
        },
        card6: {
          img: 'blog-post2',
          title: 'Sharing the stage with a legend',
          paragraph:
            'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.',
        },
      },
    };
  },

  components: {
    BigButton,
    // CardNews,
  },
};
</script>

<template>
  <section class="latest-news">
    <h2>Music Is Life</h2>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet
      distinctio praesentium eum corrupti. Cumque dolore recusandae tempore
      aliquid id maiores quos voluptatibus
    </p>
    <div class="news-container">
      <!-- LEFT -->
      <div class="left-cont col-md-8">
        <div class="col-12">
          <!-- CARD ELEMENT 1 -->
          <div class="card-element">
            <!-- IMG -->
            <div class="cont-img">
              <img
                :src="`../../public/img/images/${latestNews.card1.img}.jpg`"
                :alt="latestNews.card1.title"
              />
            </div>
            <!-- TEXT -->
            <div class="cont-text">
              <h4>{{ latestNews.card1.title }}</h4>
              <p>{{ latestNews.card1.paragraph }}</p>
            </div>
          </div>
        </div>
        <div class="cont-sx-centro">
          <div class="col-6">
            <!-- CARD ELEMENT 2 -->
            <div class="card-element">
              <!-- IMG -->
              <div class="cont-img">
                <img
                  :src="`../../public/img/images/${latestNews.card2.img}.jpg`"
                  :alt="latestNews.card2.title"
                />
              </div>
              <!-- TEXT -->
              <div class="cont-text">
                <h4>{{ latestNews.card2.title }}</h4>
                <p>{{ latestNews.card2.paragraph }}</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <!-- CARD ELEMENT 3 -->
            <div class="card-element">
              <!-- IMG -->
              <div class="cont-img">
                <img
                  :src="`../../public/img/images/${latestNews.card3.img}.jpg`"
                  :alt="latestNews.card3.title"
                />
              </div>
              <!-- TEXT -->
              <div class="cont-text">
                <h4>{{ latestNews.card3.title }}</h4>
                <p>{{ latestNews.card3.paragraph }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <!-- CARD ELEMENT 4 -->
          <div class="card-element">
            <!-- IMG -->
            <div class="cont-img">
              <img
                :src="`../../public/img/images/${latestNews.card4.img}.jpg`"
                :alt="latestNews.card4.title"
              />
            </div>
            <!-- TEXT -->
            <div class="cont-text">
              <h4>{{ latestNews.card4.title }}</h4>
              <p>{{ latestNews.card4.paragraph }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- RIGHT -->
      <div class="right-cont col-md-4">
        <div class="col-12">
          <!-- CARD ELEMENT 5 -->
          <div class="card-element">
            <!-- IMG -->
            <div class="cont-img">
              <img
                :src="`../../public/img/images/${latestNews.card5.img}.jpg`"
                :alt="latestNews.card5.title"
              />
            </div>
            <!-- TEXT -->
            <div class="cont-text">
              <h4>{{ latestNews.card5.title }}</h4>
              <p>{{ latestNews.card5.paragraph }}</p>
            </div>
          </div>
        </div>
        <div class="col-12">
          <!-- CARD ELEMENT 6 -->
          <div class="card-element">
            <!-- IMG -->
            <div class="cont-img">
              <img
                :src="`../../public/img/images/${latestNews.card6.img}.jpg`"
                :alt="latestNews.card6.title"
              />
            </div>
            <!-- TEXT -->
            <div class="cont-text">
              <h4>{{ latestNews.card6.title }}</h4>
              <p>{{ latestNews.card6.paragraph }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BigButton />
  </section>
</template>

<style lang="scss" scoped>
.latest-news {
  background-color: #252a33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0 0 0;

  h2 {
    color: #ffffff;
    font-size: 50px;
  }

  hr {
    border-color: #444e62;
    width: 10%;
  }

  p {
    color: #7d7b8d;
    width: 40%;
    text-align: center;
    margin-top: 20px;
  }

  .news-container {
    border: 1px solid red;
    color: white;
    width: 60%;
    margin: 0 auto;
    display: flex;

    .left-cont {
      border: 1px solid yellow;

      .cont-sx-centro {
        display: flex;
      }

      & > * {
        border: 1px solid burlywood;
      }
    }

    .right-cont {
      border: 1px solid orange;

      & > * {
        border: 1px solid purple;
        height: 50%;
      }
    }
  }
}

//common
.card-element {
  display: flex;
  flex-direction: column;
  .cont-img {
    width: 100%;
    height: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .cont-text {
    border: 1px solid red;
    height: 50%;
    padding: 20px;
    background-color: #323844;

    h4 {
      color: #ec4958;
      font-size: 18px;
    }

    p {
      color: #7d7b8d;
      width: 100%;
      text-align: start;
      margin: 0;
    }
  }
}
</style>
