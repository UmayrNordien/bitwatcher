<template>
  <div>
    <NavBar></NavBar>
    <div class="landing container-fluid d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-md-6 mt-5 col-sm-12">
          <h1 style="color: #ffffff">Welcome to <span>Bit</span> Watcher</h1>
          <div class="eye">
            <div class="up"></div>
            <div class="mid"></div>
            <div class="down"></div>
          </div>
          <h2 class="text-white"><i class="bi bi-eye"></i></h2>
          <p class="text-white">Bit Watcher is a startup news site that provides comprehensive coverage of the latest news
            and developments in the world of Bitcoin, business, and general interest stories.</p>
          <button class="btn btn-outline-warning">Catch Up <i class="bi bi-arrow-down-circle"></i></button>
        </div>
        <div class="col-md-6 col-sm-12 text-center">
          <img id="watcher" src="https://i.postimg.cc/Zq9wWrzs/fotor-2023-4-23-22-33-51.png" width="500px" height="350px"
            alt="Image" class="img-fluid">
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row">

        <!--search-->
        <div class="col-md-12 mb-5">
          <input type="text" list="search-terms" name="search" placeholder="Search..." v-model="search">
          <datalist id="search-terms">
            <option value="twitter"></option>
            <option value="spacex"></option>
            <option value="tesla"></option>
          </datalist>
        </div>

      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-5" v-for="item in filteredbitcoinNews" :key="item">
          <article class="card">
            <div class="temporary_text" v-if="item.urlToImage">
              <img :src="item.urlToImage" :alt="item.title" class="news-image">
            </div>
            <CoinC v-else></CoinC>
            <div class="card_wrapper">
              <div class="card_content">
                <span class="card_title">{{ item.title }}</span>
                <span class="card_subtitle">{{ item.description }}</span>
                <p class="card_description">Author : {{ item.author }}</p>
                <p class="card_description">{{ item.publishedAt }}</p>
                <a :href="item.url" target="_blank" class="btn btn-outline-warning">Read More <i
                    class="bi bi-book"></i></a>
                <ThumbsUp></ThumbsUp>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <FooterC></FooterC>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { mapGetters, mapActions } from 'vuex';

import FooterC from '@/components/FooterC.vue'
import ThumbsUp from './ThumbsUp.vue';
import CoinC from './CoinC.vue';

export default {
  name: 'HelloWorld',

  components: {
    NavBar,
    FooterC,
    ThumbsUp,
    CoinC
  },

  data() {
    return {
      search: ""
    }
  },

  computed: {
    ...mapGetters(["bitcoinNews"]),

    filteredbitcoinNews() {
      if (this.bitcoinNews) {
        return this.bitcoinNews.filter((item) => {
          return item.title.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return [];
      }
    }
  },

  methods: {
    ...mapActions(["fetchBitcoinNews"])
  },

  async created() {
    this.fetchBitcoinNews()
  }
}
</script>

<style scoped>
#watcher {
  border-radius: 20px;
  max-width: 90%;
  height: auto;
  margin-top: 0;
}

@media (max-width: 767.98px) {
  #watcher {
    margin-top: 120px;
  }
}

span {
  color: #f9c317;
}

.landing {
  height: 100vh;
}

.news-image {
  margin-top: 40px;
  max-width: 400px;
  max-height: 150px;
  border-radius: 20px;
  transition: filter .5s ease-in-out;
}

.card:hover .news-image {
  filter: blur(2px);
  transition: filter .5s ease-in-out;
}

.card {
  position: relative;
  width: 350px;
  height: 350px;
  background-color: #252525;
  opacity: 1;
  background: repeating-linear-gradient(45deg, #f9c317, #f9c317 12.5px, #252525 12.5px, #252525 62.5px);
  overflow: hidden;
  border-radius: 20px;
  border: #f9c317 1.8px solid;
  --bs-card-border-color: none !important;
}

.temporary_text {
  font-weight: bold;
  font-size: 24px;
  padding: 6px 12px;
  color: #f8f8f8;
}

.card_title {
  font-weight: bold;
  color: #f9c317 !important;
}

.card_content {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: #ffffff;
  background: #252525;
  border-top-left-radius: 20px;
  transform: translateY(150px);
  transition: transform .25s;
}

.card_content::before {
  content: '';
  position: absolute;
  top: -47px;
  right: -45px;
  width: 100px;
  height: 100px;
  transform: rotate(-175deg);
  border-radius: 50%;
}

.card_title {
  color: #131313;
  line-height: 30px;
}

.card_subtitle {
  display: block;
  font-size: 12px;
  margin-bottom: 10px;
}

.card_description {
  font-size: 14px;
  opacity: 0;
  transition: opacity .5s;
}

.card:hover .card_content {
  transform: translateY(0);
}

.card:hover .card_description {
  opacity: 1;
  transition-delay: .25s;
}

@media (max-width: 991.98px) {
  .card {
    width: 100%;
  }
}

input {
  background-color: transparent;
  border: 1.8px solid #f9c317;
  color: #f9c317 !important;
  border-radius: 5px;
  width: 25%;
  height: 40px;
}

input::placeholder {
  color: #f9c317;
  text-align: center;
}

input:focus {
  outline: 2px dashed #f9c317;
  outline-offset: 2px;
  /* Adjust the distance between the outline and the input element */
}
</style>