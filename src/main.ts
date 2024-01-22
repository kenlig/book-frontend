import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import { ElLoading } from "element-plus";
import registerSvgIcon from "@/icons/index";
import "element-plus/es/components/message-box/style/index";
import "element-plus/es/components/message/style/index";
import "@/assets/styles/index.scss";

const app = createApp(App);
app.config.globalProperties.$ELEMENT = { size: "medium" };
app.use(ElLoading);
app.use(router);
app.use(store);
registerSvgIcon(app);
router.isReady().then(() => {
  return app.mount("#app");
});
app.config.errorHandler = (err) => {
  console.warn(`errorHandler: ${err}`);
};

export default app;
