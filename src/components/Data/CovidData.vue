<template>
  <section id="covidData">
    <div class="loading">
      <base-button @click="loadData">Click Here to load Data</base-button>
    </div>

    <p v-if="isLoading" class="loading">Loading <i class="fas fa-spinner"></i></p>
    <div v-else>
      <li v-for="result in results" :key="result.id">
        <p class="loading">
          <span class="boldfont">City: </span>{{ result.cityName }} <br />
          <span class="boldfont">Last Update: </span>{{ result.lastUpdate }}
          <br />
          <span class="boldfont">Confirmed Cases: </span
          >{{ result.confirmedCases }} <br />
          <span class="boldfont">No of Deaths: </span>{{ result.death }}
        </p>
      </li>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  methods: {
    loadData() {
      this.isLoading = true;
      fetch("https://coronavirus.m.pipedream.net/")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const results = [];

          results.push(
            {
              id: 'Cherkasy',
              cityName: data.rawData[3954].Province_State,
              lastUpdate: data.rawData[3954].Last_Update,
              confirmedCases: data.rawData[3954].Confirmed,
              death: data.rawData[3954].Deaths
            },
            {
              id: 'Chernihiv',
              cityName: data.rawData[3955].Province_State,
              lastUpdate: data.rawData[3955].Last_Update,
              confirmedCases: data.rawData[3955].Confirmed,
              death: data.rawData[3955].Deaths
            },
            {
              id: 'Chernivtsi',
              cityName: data.rawData[3956].Province_State,
              lastUpdate: data.rawData[3956].Last_Update,
              confirmedCases: data.rawData[3956].Confirmed,
              death: data.rawData[3956].Deaths
            },
            {
              id: 'Crimea Republic',
              cityName: data.rawData[3957].Province_State,
              lastUpdate : data.rawData[3957].Last_Update,
              confirmedCases: data.rawData[3957].Confirmed,
              death: data.rawData[3957].Confirmed
            },
            {
              id: 'Dnipropetrovsk',
              cityName: data.rawData[3958].Province_State,
              lastUpdate: data.rawData[3958].Last_Update,
              confirmedCases: data.rawData[3958].Confirmed,
              death: data.rawData[3958].Deaths
            },
            {
              id: 'Donetsk Oblast',
              cityName: data.rawData[3959].Province_State,
              lastUpdate: data.rawData[3959].Last_Update,
              confirmedCases: data.rawData[3959].Confirmed,
              death: data.rawData[3959].Deaths
            },
            {
              id: "Ivano-Frankivsk",
              cityName: data.rawData[3960].Province_State,
              lastUpdate: data.rawData[3960].Last_Update,
              confirmedCases: data.rawData[3960].Confirmed,
              death: data.rawData[3960].Deaths,
            },
            {
              id: 'Kharkiv',
              cityName: data.rawData[3961].Province_State,
              lastUpdate: data.rawData[3961].Last_Update,
              confirmedCases: data.rawData[3961].Confirmed,
              death: data.rawData[3961].Deaths
            },
            {
              id: 'Kherson',
              cityName: data.rawData[3962].Province_State,
              lastUpdate: data.rawData[3962].Last_Update,
              confirmedCases: data.rawData[3962].Confirmed,
              death: data.rawData[3962].Deaths
            },
            {
              id: 'Khmelnytskyi',
              cityName: data.rawData[3963].Province_State,
              lastUpdate: data.rawData[3963].Last_Update,
              confirmedCases: data.rawData[3963].Confirmed,
              death: data.rawData[3963].Deaths
            },
            {
              id: "Kiev",
              cityName: data.rawData[3965].Province_State,
              lastUpdate: data.rawData[3965].Last_Update,
              confirmedCases: data.rawData[3965].Confirmed,
              death: data.rawData[3965].Deaths,
            },
            {
              id: 'Luhansk',
              cityName: data.rawData[3967].Province_State,
              lastUpdate: data.rawData[3967].Last_Update,
              confirmedCases: data.rawData[3967].Confirmed,
              death: data.rawData[3967].Deaths
            },
            {
              id: "Lviv",
              cityName: data.rawData[3968].Province_State,
              lastUpdate: data.rawData[3968].Last_Update,
              confirmedCases: data.rawData[3968].Confirmed,
              death: data.rawData[3968].Deaths,
            },
            {
              id: 'Mykolaiv',
              cityName: data.rawData[3969].Province_State,
              lastUpdate: data.rawData[3969].Last_Update,
              confirmedCases: data.rawData[3969].Confirmed,
              death: data.rawData[3969].Deaths
            },
            {
              id: "Odessa",
              cityName: data.rawData[3970].Province_State,
              lastUpdate: data.rawData[3970].Last_Update,
              confirmedCases: data.rawData[3970].Confirmed,
              death: data.rawData[3970].Deaths,
            },
            {
              id: 'Poltava',
              cityName: data.rawData[3971].Province_State,
              lastUpdate: data.rawData[3971].Last_Update,
              confirmedCases: data.rawData[3971].Confirmed,
              death: data.rawData[3971].Deaths
            },
            {
              id: 'Rivne',
              cityName: data.rawData[3972].Province_State,
              lastUpdate: data.rawData[3972].Last_Update,
              confirmedCases: data.rawData[3972].Confirmed,
              death: data.rawData[3972].Deaths
            },
            {
              id: 'Sumy',
              cityName: data.rawData[3974].Province_State,
              lastUpdate: data.rawData[3974].Last_Update,
              confirmedCases: data.rawData[3974].Confirmed,
              death: data.rawData[3974].Deaths,
            },
             {
              id: "Ternopil",
              cityName: data.rawData[3975].Province_State,
              lastUpdate: data.rawData[3975].Last_Update,
              confirmedCases: data.rawData[3975].Confirmed,
              death: data.rawData[3975].Deaths,
            },
            {
              id: 'Vinnytsia',
              cityName: data.rawData[3976].Province_State,
              lastUpdate: data.rawData[3976].Last_Update,
              confirmedCases: data.rawData[3976].Confirmed,
              death: data.rawData[3976].Deaths
            },
            {
              id: 'Volyn',
              cityName: data.rawData[3977].Province_State,
              lastUpdate: data.rawData[3977].Last_Update,
              confirmedCases: data.rawData[3977].Confirmed,
              death: data.rawData[3977].Deaths
            },
            {
              id: "Zakarpattia",
              cityName: data.rawData[3978].Province_State,
              lastUpdate: data.rawData[3978].Last_Update,
              confirmedCases: data.rawData[3978].Confirmed,
              death: data.rawData[3978].Deaths,
            },
            
           
            
            {
              id: "Zaporizhia",
              cityName: data.rawData[3979].Province_State,
              lastUpdate: data.rawData[3979].Last_Update,
              confirmedCases: data.rawData[3979].Confirmed,
              death: data.rawData[3979].Deaths,
            },
            {
              id: 'Zhytomyr',
              cityName: data.rawData[3980].Province_State,
              lastUpdate: data.rawData[3980].Last_Update,
              confirmedCases: data.rawData[3980].Confirmed,
              death: data.rawData[3980].Deaths
            },
            
          );
          this.results = results;
          this.isLoading = false;
          console.log(this.results);
        });
    },
  },
};
</script>

<style scoped>
/* li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
} */

p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.loading {
  text-align: center;
  margin: 2rem auto;
}

.boldfont {
  font-weight: bold;
}
</style>
