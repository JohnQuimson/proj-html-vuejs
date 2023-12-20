<script>
import BigButton from './BigButton.vue';
//import CardNews from './CardNews.vue';

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
      <div class="cont-sx">
        <!-- Elem 1 -->
        <div class="elem-orizz">
          <div class="cont-img">
            <img
              :src="`../../public/img/images/${latestNews.card1.img}.jpg`"
              alt=""
            />
          </div>
          <div class="cont-info">
            <h4>{{ latestNews.card1.title }}</h4>
            <p>{{ latestNews.card1.paragraph }}</p>
          </div>
        </div>
        <!-- SEZIONE sinistra-centrale -->
        <div class="cont-sx-centro">
          <!-- Elem 2 -->
          <div class="elem-vert">
            <div class="cont-img">
              <img
                :src="`../../public/img/images/${latestNews.card2.img}.jpg`"
                alt=""
              />
            </div>
            <div class="cont-info">
              <h4>{{ latestNews.card2.title }}</h4>
              <p>{{ latestNews.card2.paragraph }}</p>
            </div>
          </div>
          <!-- Elem 3 -->
          <div class="elem-vert">
            <div class="cont-img">
              <img
                :src="`../../public/img/images/${latestNews.card3.img}.jpg`"
                alt=""
              />
            </div>
            <div class="cont-info">
              <h4>{{ latestNews.card3.title }}</h4>
              <p>{{ latestNews.card3.paragraph }}</p>
            </div>
          </div>
        </div>
        <!-- Elem 4 -->
        <div class="elem-orizz">
          <div class="cont-img">
            <img
              :src="`../../public/img/images/${latestNews.card4.img}.jpg`"
              alt=""
            />
          </div>
          <div class="cont-info">
            <h4>{{ latestNews.card4.title }}</h4>
            <p>{{ latestNews.card4.paragraph }}</p>
          </div>
        </div>
      </div>
      <div class="cont-dx">
        <!-- Elem 5 -->
        <div class="elem-vert">
          <div class="cont-img">
            <img
              :src="`../../public/img/images/${latestNews.card5.img}.jpg`"
              alt=""
            />
          </div>
          <div class="cont-info">
            <h4>{{ latestNews.card5.title }}</h4>
            <p>{{ latestNews.card5.paragraph }}</p>
          </div>
        </div>
        <!-- Elem 6 -->
        <div class="elem-vert">
          <div class="cont-img">
            <img
              :src="`../../public/img/images/${latestNews.card6.img}.jpg`"
              alt=""
            />
          </div>
          <div class="cont-info">
            <h4>{{ latestNews.card6.title }}</h4>
            <p>{{ latestNews.card6.paragraph }}</p>
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
    width: 70%;
    display: flex;
    height: 150vh;
    gap: 20px;
    margin: 60px 0 200px;

    .cont-sx {
      width: 65%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .cont-sx-centro {
        display: flex;
        flex: 1;
        gap: 20px;

        .elem-vert {
          width: 50%;
        }
      }
    }

    .cont-dx {
      width: 35%;
      display: flex;
      flex-direction: column;
      gap: 50px;

      .elem-vert {
        height: 50%;
      }
    }

    .elem-orizz {
      height: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .cont-img {
        height: 77%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .elem-vert {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .cont-img {
        height: 90%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .cont-info {
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: start;
      background-color: #323844;
      padding: 15px;

      h4 {
        margin: 0;
        color: #ec4958;
        font-size: 18px;
        font-weight: 700;
      }

      p {
        margin: 0;
        width: 100%;
        text-align: start;
        font-size: 14px;
      }
    }
  }
}

//common
</style>
