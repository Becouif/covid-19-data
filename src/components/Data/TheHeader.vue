<template>
  <div class="base-card">
  <h1 class="title"> <span class="virus"><i class="fas fa-viruses"></i></span> {{heading}} </h1>
  </div>
</template>

<script>

export default {

  data() {
    return {
      heading: "Ukraine Covid-19 Data",
    };
  },
  methods: {},
};
</script>

<style scoped>
.title {
    color: #D7402B;
}
.base-card {
   margin: auto;
  max-width: auto;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  
}
.virus{
  color: rgb(205,91,69);
}
</style>