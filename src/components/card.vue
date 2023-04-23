<template>
    <NavBar></NavBar>
    <div class="landing container-fluid d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-md-6 mt-5 col-sm-12">
          <h1 class="text-warning">Welcome Bit Watcher</h1>
          <div class="eye">
              <div class="up"></div>
              <div class="mid"></div>
              <div class="down"></div>
          </div>
          <h2 class="text-white">Lorem</h2>
          <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non magna non tortor gravida hendrerit. Nulla facilisi.</p>
          <button class="btn btn-outline-warning">Learn More</button>
        </div>
        <div class="col-md-6 col-sm-12 text-center">
          <!--https://i.postimg.cc/cL5Y8XH0/izzy-gerosa-xni-TNHp4-UVE-unsplash-removebg-preview.png-->
          <img src="https://i.postimg.cc/cL5Y8XH0/izzy-gerosa-xni-TNHp4-UVE-unsplash-removebg-preview.png" width="500px" height="350px" alt="Image" class="img-fluid">
        </div>
      </div>
    </div>
  
    <div class="card-container">
      <article class="card" v-for="item in wsj" :key="item">
    <div class="temporary_text">
      <img :src="item.urlToImage" :alt="item.title">
    </div>
    <div class="card_wrapper">
      <div class="card_content">
        <span class="card_title">{{ item.title }}</span>
        <span class="card_subtitle">{{ item.description }}</span>
        <p class="card_description">{{ item.author }}</p>
        <p class="card_description">{{ item.publishedAt }}</p>
        <a :href="item.url" target="_blank" class="btn btn-outline-warning">Read More</a>
      </div>
    </div>
  </article>
    </div>
    <FooterC></FooterC>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  import { mapGetters, mapActions } from 'vuex';
  
  import FooterC from '@/components/FooterC.vue'
  
  export default {
    name: 'HelloWorld',
  
    components: {
      NavBar,
      FooterC
    },
  
    computed: {
      ...mapGetters(["wsj"])
    },
    methods: {
      ...mapActions(["fetchWSJ"])
    },
    created(){
      this.fetchWSJ()
    }
  }
  </script>
  
  <style scoped>
  .landing {
    height: 100vh;
  }
  
  .card {
      margin: 0 auto;
      position: relative;
      width: 100%;
      height: 400px;
      margin-bottom: 20px;
      color: #2e2d31;
      background-color: #252525;
      background-color: #252525;
      opacity: 1;
      background: repeating-linear-gradient( 45deg, #f9c317, #f9c317 12.5px, #252525 12.5px, #252525 62.5px );
      border-radius: 20px;
    }
  
  .card {
    --bs-card-border-color: none;
  }
  
  .card-container {
      margin: 20px auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 20px;
      justify-content: center;
      align-items: center;
    }
  
  .temporary_text {
    font-weight: bold;
    font-size: 24px;
    padding: 6px 12px;
    color: #f8f8f8;
  }
  
  .card_title {
    color:#f9c317 !important;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.5;
  }
  
  .card-wrapper {
    height: 100%;
  }
  
  .card_content {
    color: #ffffff;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 20px;
    background: #252525;
    border-top-left-radius: 20px;
    transform: translateY(150px);
    transition: transform .25s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }
  
  .card_subtitle {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
  
  .card_description {
    font-size: 0.9rem;
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
  
  .card img {
    width: 100%;
    height: auto;
    border-radius: 40px;
    object-fit: cover;
    margin-top: 5px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  
  @media screen and (max-width: 768px) {
    .card-container {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
  @media screen and (max-width: 308px) {
    .card-container {
  margin-left: 40px;  }
  }
  
  @media screen and (max-width: 480px) {
    .card_title {
      font-size: 1rem;
    }
    .card_subtitle {
      font-size: 0.7rem;
    }
    .card_description {
      font-size: 0.8rem;
    }
  }
  </style>