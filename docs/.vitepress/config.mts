import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "导航",
    description: "",
    base: "/nav/",
    themeConfig: {
        logo: "/logo.png",
        outline: {
            level: 'deep', // 显示2-6级标题
            label: '目录' // 文字显示
        },
    }
})
