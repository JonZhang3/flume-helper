import Vue from 'vue';
import VueRouter from 'vue-router';

import Configs from "@/pages/Configs";
import NewConfig from "@/pages/configs/NewConfig";
import EditConfig from "@/pages/configs/EditConfig";
import ViewConfig from "@/pages/configs/ViewConfig";

import Plugins from "@/pages/Plugins";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'configs',
        component: Configs
    },
    {
        path: '/configs/new',
        name: 'new-configs',
        component: NewConfig,
        meta: {
            parent() {
                return '/'
            }
        }
    },
    {
        path: '/configs/edit/:configId',
        name: 'edit-configs',
        component: EditConfig,
        meta: {
            parent() {
                return "/";
            }
        }
    },
    {
        path: '/configs/view/:configId',
        name: 'view-config',
        component: ViewConfig,
        meta: {
            parent() {
                return "/";
            }
        }
    },
    {
        path: '/plugins',
        name: 'plugins',
        component: Plugins
    }
];

export default new VueRouter({
    mode: 'history',
    // base: '/login',
    routes
})
