<template>
  <div class="base-card">
    <h1 class="title">
      <span class="virus"><i class="fas fa-viruses"></i></span> {{ heading }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: 'Covid-19 Data',
    };
  },
  methods: {},
};
</script>

<style scoped>
.title {
  color: #eee;
}
.base-card {
  margin: auto;
  max-width: auto;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
}
.virus {
  color: #eb0c00;

  /* color: rgb(205, 91, 69); */
}
</style>
