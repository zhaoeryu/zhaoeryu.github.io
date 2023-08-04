import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'EuBackend',
    description: '使用EuBackend快速构建web应用程序',
    head: [
      ['link', { rel: 'icon', href: 'logo.png' }]
    ],
    theme: defaultTheme({
        logo: 'logo.png',
        notFound: [
            '您访问的页面不存在',
        ],
        backToHome: '返回首页',
        navbar: [
            {
                text: 'Vue2',
                link: '/vue2/',
            },
            // {
            //     text: 'Vue3',
            //     link: '/vue3',
            // },
            // {
            //     text: 'React',
            //     link: '/react',
            // },
            // {
            //     text: '小程序',
            //     link: '/miniapp',
            // },
            {
                text: '生态系统',
                children: [
                    {
                        text: '项目',
                        children: [
                            {
                                text: 'eu-backend-vue2',
                                link: '/first/second/'
                            },
                            {
                                text: 'eu-backend-vue3',
                                link: '/first/second/second.md'
                            },
                            {
                                text: 'eu-backend-react',
                                link: '/first/second/second.md'
                            },
                            {
                                text: 'eu-backend-miniapp',
                                link: '/first/second/second.md'
                            },
                        ]
                    },
                    {
                        text: '帮助',
                        children: [
                            {
                                text: '我要提问',
                                link: 'https://gitee.com/zhaoeryu/eu-backend-web/issues'
                            },
                            {
                                text: '常见问题',
                                link: '/vue2/other/faq',
                                activeMatch: '/vue2/other/faq',
                            },
                        ]
                    }
                ],
            },
            {
                text: 'Github',
                link: 'https://github.com/zhaoeryu',
            },
            {
                text: 'Gitee',
                link: 'https://gitee.com/zhaoeryu',
            },
        ],
        sidebar: {
            '/vue2/': [
                {
                    text: '文档',
                    children: [
                        '/vue2/',
                        '/vue2/doc/kslj',
                        '/vue2/doc/hjbs',
                        '/vue2/doc/hdsc',
                        '/vue2/doc/qdsc',
                        '/vue2/doc/zjwd',
                        '/vue2/doc/cjjc',
                        '/vue2/doc/gxrz',
                    ],
                },
                {
                    text: '其他',
                    children: [
                        '/vue2/other/faq',
                        '/vue2/other/donate'
                    ]
                },
           ],
            // '/vue3/': [
            //     {
            //         text: '文档',
            //         children: [
            //             '/vue3/',
            //             '/vue2/doc/kslj',
            //             '/vue2/doc/hjbs',
            //             '/vue2/doc/hdsc',
            //             '/vue2/doc/qdsc',
            //             '/vue2/doc/zjwd',
            //             '/vue2/doc/cjjc',
            //             '/vue2/doc/gxrz',
            //         ]
            //     },
            //     {
            //         text: '其他',
            //         children: [
            //             'other/faq',
            //             '/vue2/other/donate'
            //         ]
            //     }
            // ]
        }
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
