import {Button} from "vant";
import type {App} from "vue";
import 'vant/lib/index.css';

/**
 * DONE
 * @description:  注册vant的全局组件
 * @author: tutu
 * @time: 2023/12/9 17:09
 */
export const registryVant = (app: App<Element>) => {
    app.use(Button)
}
