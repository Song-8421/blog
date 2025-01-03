import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "tangPingAFu-Blog",
    description: "躺平阿福的个人笔记博客",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],
        docFooter: {
            prev: "上一章",
            next: "下一章",
        },
        outline: {
            label: "当前目录",
        },
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "文档搜索",
                    },
                    modal: {
                        noResultsText: "展示没有相关内容文档",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "跳转",
                            navigateText: "切换",
                            closeText: "关闭",
                        },
                    },
                },
            },
        },
        lastUpdated: {
            text: "最近更新时间",
            formatOptions: {
                dateStyle: "full",
                timeStyle: "medium",
            },
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
