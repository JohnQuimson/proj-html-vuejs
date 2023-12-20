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
        <div class="elem-orizz">1</div>
        <div class="cont-sx-centro">
          <div class="elem-vert">2</div>
          <div class="elem-vert">3</div>
        </div>
        <div class="elem-orizz">4</div>
      </div>
      <div class="cont-dx">
        <div class="elem-vert">5</div>
        <div class="elem-vert">6</div>
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
    color: white;
    width: 60%;
    display: flex;
    height: 100vh;
    gap: 20px;

    .cont-sx {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .elem-orizz {
        border: 1px solid white;
        height: 20%;
      }

      .cont-sx-centro {
        display: flex;
        flex: 1;
        gap: 20px;

        .elem-vert {
          border: 2px solid white;
          width: 50%;
        }
      }
    }

    .cont-dx {
      border: 1px solid white;
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .elem-vert {
        border: 1px solid white;
        height: 50%;
      }
    }
  }
}

//common
</style>
