import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';



const app = createApp(App)
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faUserSecret);


// add component for UI card and button 
app.component('base-card', BaseCard);
app.component('base-button', BaseButton)

/* add font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
