import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import naive from "naive-ui";

// styles
import "./assets/main.css";
import "virtual:windi.css";

const app = createApp(App);

app.use(createPinia());
app.use(naive);
app.use(router);

app.mount("#app");