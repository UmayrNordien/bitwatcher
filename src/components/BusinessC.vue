<template>
  <!--search-->
  <div class="col-md-12 mb-5">
    <input type="text" list="search-terms" name="search" placeholder="Search..." v-model="search">
    <datalist id="search-terms">
      <option value="twitter"></option>
      <option value="spacex"></option>
      <option value="tesla"></option>
    </datalist>
  </div>

  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 mb-5" v-for="item in filteredUSBusiness" :key="item">
        <article class="card">
          <template v-if="item.urlToImage">
            <div class="temporary_text">
              <img :src="item.urlToImage" :alt="item.title" class="news-image">          
            </div>
          </template>
          <template v-else>
            <CoinC />
          </template>
          <div class="card_wrapper">
            <div class="card_content">
              <span class="card_title">{{ item.title }}</span>
              <span class="card_subtitle">{{ item.description }}</span>
              <p class="card_description">Author : {{ item.author }}</p>
              <p class="card_description">{{ item.publishedAt }}</p>
              <a :href="item.url" target="_blank" class="btn btn-outline-warning">Read More</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CoinC from './CoinC.vue';

export default {
  components: {
    CoinC,
  },
  data() {
    return {
      search: ""
    }
  },
  computed: {
    ...mapGetters(["USBusiness"]),

    filteredUSBusiness() {
      if (this.USBusiness) {
        return this.USBusiness.filter((item) => {
          return item.title.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return [];
      }
    }
  },

  methods: {
    ...mapActions(["fetchUSBusiness"])
  },
  async created() {
    this.fetchUSBusiness()
  }
}
</script>


<style scoped>
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
  margin-top: 50px;
  position: relative;
  width: 350px;
  height: 350px;
  background-color: #252525;
  opacity: 1;
  background: repeating-linear-gradient( 45deg, #f9c317, #f9c317 12.5px, #252525 12.5px, #252525 62.5px );
  overflow: hidden;
  border-radius: 20px;
}

.temporary_text {
  font-weight: bold;
  font-size: 24px;
  padding: 6px 12px;
  color: #f8f8f8;
}

.card_title {
  font-weight: bold;
  color:#f9c317 !important;
}

.card_content {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color:#ffffff;
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
  margin-top: 150px;
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