<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #252525;
  opacity: 1;
  background-image: radial-gradient(#141414 1.4500000000000002px, #252525 1.4500000000000002px);
  background-size: 29px 29px;
  cursor: cell;
}

a {
  text-decoration: none !important;
  cursor: crosshair !important;
}

button {
  cursor: crosshair !important;
}

/* Custom scrollbar styles */
::-webkit-scrollbar-track {
  display: none;
}

::-webkit-scrollbar-thumb {
  background-color: #252525;
  opacity: 1;
  background: repeating-linear-gradient( 45deg, #f9c317, #f9c317 12.5px, #252525 12.5px, #252525 62.5px );  border-radius: 20px;
}
</style>
