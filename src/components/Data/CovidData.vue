<template>
  <section id="covidData">
    <base-card>
      <base-button @click="loadData">Click Here to load Data</base-button>
    </base-card>
    <div>
      <li>
        <p>
          <span> {{ countryName }} </span>
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
      countryName: "",
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
          this.isLoading = false;
          const results = [];
         
          results.push( 
            {
              id: 'Zakarpattia',
              cityName: data.rawData[3978].Province_State,
              lastUpdate: data.rawData[3978].Last_Update,
              confirmedCases: data.rawData[3978].Confirmed,
              death: data.rawData[3978].Deaths,
            },
            {
              id: 'Lviv',
              cityName: data.rawData[3968].Province_State,
              lastUpdate: data.rawData[3968].Last_Update,
              confirmedCases: data.rawData[3968].Confirmed,
              death: data.rawData[3968].Deaths,
            },
            {
              id: 'Ternopil',
              cityName: data.rawData[3975].Province_State,
              lastUpdate: data.rawData[3975].Last_Update,
              confirmedCases: data.rawData[3975].Confirmed,
              death: data.rawData[3975].Deaths,
            },
            {
              id: 'Ivano-Frankivsk',
              cityName: data.rawData[3960].Province_State,
              lastUpdate: data.rawData[3960].Last_Update,
              confirmedCases: data.rawData[3960].Confirmed,
              death: data.rawData[3960].Deaths,
            },
            {
              id: 'Zaporizhia',
              cityName: data.rawData[3979].Province_State,
              lastUpdate: data.rawData[3979].Last_Update,
              confirmedCases: data.rawData[3979].Confirmed,
              death: data.rawData[3979].Deaths,
            },
            {
              id: 'Kiev',
              cityName: data.rawData[3965].Province_State,
              lastUpdate: data.rawData[3965].Last_Update,
              confirmedCases: data.rawData[3965].Confirmed,
              death: data.rawData[3965].Deaths,
            },
            {
              id: 'Odessa',
              cityName: data.rawData[3970].Province_State,
              lastUpdate: data.rawData[3970].Last_Update,
              confirmedCases: data.rawData[3970].Confirmed,
              death: data.rawData[3970].Deaths,
            },
            
          );
         this.results = results;

          
          console.log(this.results);
        });
    },
  },
};
</script>
