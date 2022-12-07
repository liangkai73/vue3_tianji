import { createApp } from "vue";
import { router } from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(ElementPlus, { zIndex: 3000 });
app.mount("#app");
