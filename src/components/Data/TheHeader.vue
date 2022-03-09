<template>
  <base-card>
  <h1 class="title">{{heading}} </h1>
  </base-card>
</template>

<script>

export default {

  data() {
    return {
      heading: "Covid-19 Data",
    };
  },
  methods: {},
};
</script>

<style scoped>
.title {
    color: #360032;
}
</style>