import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '文档标题',
    description: '这是我的第一个 VuePress 站点',
    head: [['link', { rel: 'icon', href: 'logo.png' }]],
    theme: defaultTheme({
        logo: 'logo.png',
        navbar: [
            {
                text: '第一层',
                link: '/first/',
            },
            {
                text: '贡献指南',
                link: '/contributing',
            },
            {
                text: 'Github',
                link: 'https://github.com/zhaoeryu',
            },
            {
                text: 'Gitee',
                link: 'https://gitee.com/zhaoeryu',
            },
            // NavbarItem
            // {
            //     text: '第一层',
            //     children: ['/first/', '/first/first.md'],
            // },
            // NavbarGroup
            // {
            //     text: '第二层',
            //     children: [
            //         {
            //             text: 'Always active',
            //             link: '/first/second/',
            //             // 该元素将一直处于激活状态
            //             activeMatch: '/first/second/',
            //         },
            //         {
            //             text: 'Active on /foo/',
            //             link: '/first/second/second.md',
            //             // 该元素在当前路由路径是 /foo/ 开头时激活
            //             // 支持正则表达式
            //             activeMatch: '/first/second/second.md',
            //         },
            //     ],
            // }
        ],
    }),
    plugins: [
        searchPlugin({
            // 配置项
            locales: {
                '/': {
                    placeholder: '搜索文档',
                }
            },
        }),
    ],
})