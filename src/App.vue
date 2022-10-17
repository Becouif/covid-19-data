<template>
  <the-header> </the-header>
  <ul>
    <covid-data></covid-data>
  </ul>
</template>

<script>
import TheHeader from './components/Data/TheHeader.vue';
import CovidData from './components/Data/CovidData.vue';
import '@/assets/main.css';

export default {
  components: {
    TheHeader,
    CovidData,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
