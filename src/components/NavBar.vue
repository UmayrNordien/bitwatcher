<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><span>Bit</span> Watcher</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link"><i class="bi bi-house"></i> Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link"><i class="bi bi-currency-bitcoin"></i> Bitcoin</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/business" class="nav-link"><i class="bi bi-briefcase"></i> Business</router-link>
            </li>
            <!--General article was giving problems so i removed it-->
            <!-- <li class="nav-item">
              <router-link to="/general" class="nav-link"><i class="bi bi-globe"></i> General</router-link>
            </li> -->
            <li class="nav-item">
              <router-link to="/contact" class="nav-link"><i class="bi bi-phone"></i> Contact</router-link>
            </li>
          </ul>
          <!-- <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
              v-model="search" @input="filterTechCrunch">
          </form> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    filterTechCrunch() {
      this.$store.commit('filterTechCrunch', this.search)
    }
  }
}
</script>

<style scoped>
span {
    color: #f9c317;
}

nav {
  background-color: #1f1f1f !important;
}
</style>