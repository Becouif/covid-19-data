<template>
  <section id="covidData">
    <base-card>
      <base-button @click="loadData">Click Here to load Data</base-button>
    </base-card>
    <div>
        <li>
            <p>
                <span> {{countryName}} </span>
            </p>
        </li>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return{
      results: [],
      isLoading: false,
      countryName: '',
    }
  },
  methods: {
    loadData(){
      this.isLoading = true;
      fetch('https://coronavirus.m.pipedream.net/').then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        this.isLoading = false;
        const results = [];
        results .push({

        })
        console.log(data.rawData[3978].Confirmed)
      })
    }
  }
}
</script>