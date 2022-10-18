<template>
  <section id="covidData">
    <div class="loading">
      <base-button @click="loadData">Click here to load data</base-button>
    </div>
    <div></div>
    <p v-if="isLoading" class="loading">
      <BaseSpinner></BaseSpinner>
    </p>
    <div v-else>
      <li v-for="result in results" :key="result.id" class="columns">
        <div class="loading">
          <div class="card column">
            <p>
              <span class="boldfont">City: </span>{{ result.countryname }}
              <br />
            </p>
            <p>
              <span class="boldfont">Province State: </span
              >{{ result.provincestate }}
              <br />
            </p>
            <p>
              <span class="boldfont">Last Update: </span
              >{{ result.lastupdate }} <br />
            </p>
            <p>
              <span class="boldfont">Confirmed Cases: </span
              >{{ result.confirmedcases }} <br />
            </p>
            <p>
              <span class="boldfont">No of Deaths: </span>{{ result.deaths }}
            </p>
            <p>
              <span class="boldfont">Incidence Rate: </span
              >{{ result.incidence }}
            </p>
          </div>
        </div>
      </li>
    </div>
  </section>
</template>

<script>
import BaseSpinner from '../UI/BaseSpinnerLoader.vue';

export default {
  components: {
    BaseSpinner,
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },

  methods: {
    loadData() {
      this.isLoading = true;
      fetch('https://coronavirus.m.pipedream.net/')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const univData = [];
          let newData = data.rawData;
          for (let i = 0; i < newData.length; i++) {
            univData.push({
              provincestate: newData[i].Province_State,
              id: newData[i].Country_Region,
              countryname: newData[i].Country_Region,
              lastupdate: newData[i].Last_Update,
              confirmedcases: newData[i].Confirmed,
              deaths: newData[i].Deaths,
              incidence: newData[i].Incident_Rate,
            });
          }

          this.results = univData;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.bar {
  color: white;
  background-color: #e7e7e7;
}
p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.loading {
  text-align: center;
  margin: 2rem auto;
  color: #eee;
}
#cardgrid {
  display: grid;
  width: 50%;
  grid-template-columns: 1r 2r;
}
.cards {
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
}
.card {
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  padding: 0.5rem;
}

.boldfont {
  font-weight: bold;
}
</style>
