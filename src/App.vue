<template>
  <the-header> </the-header>
  <covid-data></covid-data>
</template>

<script>
import TheHeader from "./components/Data/TheHeader.vue";
import CovidData from './components/Data/CovidData.vue';
export default {
  components: {
    TheHeader,
    CovidData
  },
};
</script>
