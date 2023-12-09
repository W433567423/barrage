import {createSSRApp} from "vue";
import App from "./App.vue";
// 引入组件样式
import {registryVant} from "@/config";

export function createApp() {
    const app = createSSRApp(App);
    registryVant(app)
    return {
        app,
    };
}
