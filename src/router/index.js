import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name: '布局框架',
        path: '/',
        component: () => import('../layouts/BasicLayout.vue'),
        children: [
            // 重定向首页
            {
              path: '/',
              redirect:"find"
            },
            {
                // 首页
                name: '发现',
                path: '/find',
                component: () => import('../pages/find/Find.vue'),
            },
            {
                name: '我的',
                path: '/my',
                component: () => import('../pages/my/My.vue'),
            }, {
                name: '播客',
                path: '/podcast',
                component: () => import('../pages/podcast/Podcast.vue'),
            }
        ]
    },
    {
        name: "登录",
        path: "/login",
        component: () => import('../pages/Login.vue')
    }
];


const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router