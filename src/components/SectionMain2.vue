<script>
import BigButton from './BigButton.vue';
//import CardNews from './CardNews.vue';
import Title from './Title.vue';
import { store } from '../store';

export default {
  name: 'Latest Band News',

  data() {
    return {
      store,
      latestNews: {
        card1: {
          visibleRedLayer: false,
          img: 'blog_music_techo',
          title: 'Technology and music',
          paragraph:
            'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.',
        },
        card2: {
          visibleRedLayer: false,
          img: 'blog-post3',
          title: 'While my guitar gently weeps',
          paragraph:
            'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.',
        },
        card3: {
          visibleRedLayer: false,
          img: 'blog-post4',
          title: 'It just sounds better',
          paragraph:
            'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.',
        },
        card4: {
          visibleRedLayer: false,
          img: 'blog_flavor_rock',
          title: 'The flavor of rock',
          paragraph:
            'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.',
        },
        card5: {
          visibleRedLayer: false,
          img: 'blog-post1',
          title: 'Taking it back to the old school',
          paragraph:
            'Sed sit amet sem turpis. Curabitur cursus lacinia est at interdum risus id condimentum.',
        },
        card6: {
          visibleRedLayer: false,
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
    Title,
  },

  methods: {
    onHover(card) {
      this.latestNews[card].visibleRedLayer = true;
    },
    notHover(card) {
      this.latestNews[card].visibleRedLayer = false;
    },
  },
};
</script>

<template>
  <section class="latest-news">
    <Title
      :title="store.titles.elementSection2.title"
      :paragraph="store.titles.elementSection2.paragraph"
    />

    <div class="news-container">
      <div class="cont-sx">
        <!-- Elem 1 -->
        <div
          @mouseover="onHover('card1')"
          @mouseleave="notHover('card1')"
          class="elem-orizz"
        >
          <div class="cont-img">
            <img
              :src="`../../public/img/images/${latestNews.card1.img}.jpg`"
              alt=""
            />
            <div v-show="latestNews.card1.visibleRedLayer" class="red-layer">
              {{ latestNews.card1.title }}
            </div>
          </div>
          <div class="cont-info">
            <h4>{{ latestNews.card1.title }}</h4>
            <p>{{ latestNews.card1.paragraph }}</p>
          </div>
        </div>
        <!-- SEZIONE sinistra-centrale -->
        <div class="cont-sx-centro">
          <!-- Elem 2 -->
          <div
            @mouseover="onHover('card2')"
            @mouseleave="notHover('card2')"
            class="elem-vert"
          >
            <div class="cont-img">
              <img
                :src="`../../public/img/images/${latestNews.card2.img}.jpg`"
                alt=""
              />
              <div v-show="latestNews.card2.visibleRedLayer" class="red-layer">
                {{ latestNews.card2.title }}
              </div>
            </div>
            <div class="cont-info">
              <h4>{{ latestNews.card2.title }}</h4>
              <p>{{ latestNews.card2.paragraph }}</p>
            </div>
          </div>
          <!-- Elem 3 -->
          <div
            @mouseover="onHover('card3')"
            @mouseleave="notHover('card3')"
            class="elem-vert"
          >
            <div class="cont-img">
              <img
                :src="`../../public/img/images/${latestNews.card3.img}.jpg`"
                alt=""
              />
              <div v-show="latestNews.card3.visibleRedLayer" class="red-layer">
                {{ latestNews.card3.title }}
              </div>
            </div>
            <div class="cont-info">
              <h4>{{ latestNews.card3.title }}</h4>
              <p>{{ latestNews.card3.paragraph }}</p>
            </div>
          </div>
        </div>
        <!-- Elem 4 -->
        <div
          @mouseover="onHover('card4')"
          @mouseleave="notHover('card4')"
          class="elem-orizz"
        >
          <div class="cont-img">
            <img
              :src="`../../public/img/images/${latestNews.card4.img}.jpg`"
              alt=""
            />
            <div v-show="latestNews.card4.visibleRedLayer" class="red-layer">
              {{ latestNews.card4.title }}
            </div>
          </div>
          <div class="cont-info">
            <h4>{{ latestNews.card4.title }}</h4>
            <p>{{ latestNews.card4.paragraph }}</p>
          </div>
        </div>
      </div>
      <div class="cont-dx">
        <!-- Elem 5 -->
        <div
          @mouseover="onHover('card5')"
          @mouseleave="notHover('card5')"
          class="elem-vert"
        >
          <div class="cont-img">
            <img
              :src="`../../public/img/images/${latestNews.card5.img}.jpg`"
              alt=""
            />
            <div v-show="latestNews.card5.visibleRedLayer" class="red-layer">
              {{ latestNews.card5.title }}
            </div>
          </div>
          <div class="cont-info">
            <h4>{{ latestNews.card5.title }}</h4>
            <p>{{ latestNews.card5.paragraph }}</p>
          </div>
        </div>
        <!-- Elem 6 -->
        <div
          @mouseover="onHover('card6')"
          @mouseleave="notHover('card6')"
          class="elem-vert"
        >
          <div class="cont-img">
            <img
              :src="`../../public/img/images/${latestNews.card6.img}.jpg`"
              alt=""
            />
            <div v-show="latestNews.card6.visibleRedLayer" class="red-layer">
              {{ latestNews.card6.title }}
            </div>
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

  .news-container {
    width: 70%;
    display: flex;
    height: 150vh;
    gap: 20px;
    margin: 60px 0 200px;
    color: #7d7b8d;

    // CONT SX
    .cont-sx {
      width: 65%;
      display: flex;
      flex-direction: column;
      gap: 29px;

      .elem-orizz {
        height: calc((100% / 4) - 40px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .cont-img {
          position: relative;
          height: calc(100% - 80px);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      .cont-sx-centro {
        display: flex;

        gap: 20px;

        .elem-vert {
          display: flex;
          flex-direction: column;

          .cont-img {
            height: calc(100% - 80px);
            position: relative;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }

    // CONT DX
    .cont-dx {
      width: 35%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .elem-vert {
        height: calc((100% - 20px) / 2);

        .cont-img {
          height: calc(100% - 80px);
          position: relative;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
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

.red-layer {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(255, 75, 75, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  letter-spacing: 1.5px;
  cursor: pointer;
}

//common
</style>
