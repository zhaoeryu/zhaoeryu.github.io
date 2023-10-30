import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import Navbar from "./config/navbar"
import Sidebar from "./config/sidebar"

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'EuBackend',
    description: '基于SpringBoot开发的轻量级快速开发平台🔥🔥🔥',
    head: [
      ['link', { rel: 'icon', href: 'logo.png' }]
    ],
    theme: defaultTheme({
        logo: 'logo.png',
        notFound: [
            '您访问的页面不存在',
        ],
        backToHome: '返回首页',
        contributors: false,

        // repo: 'https://github.com/zhaoeryu/zhaoeryu.github.io',
        // repoLabel: '在Github上编辑此页',
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'zhaoeryu/zhaoeryu.github.io',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',

        editLink: true,
        editLinkText: '帮助我们改善此页面！',
        lastUpdated: false,
        lastUpdatedText: '更新日期',

        navbar: Navbar,
        sidebar: Sidebar
    }),
    plugins: [
        searchPlugin({
            // 配置项
            locales: {
                '/': {
                    placeholder: '搜索文档',
                }
            },
            maxSuggestions: 10,
            // https://www.toptal.com/developers/keycode
            hotKeys: ['Meta', '/'],
        }),
        // https://plugin-md-enhance.vuejs.press/zh/guide/mermaid.html#%E9%85%8D%E7%BD%AE
        mdEnhancePlugin({
            mermaid: true
        })
    ],
})
