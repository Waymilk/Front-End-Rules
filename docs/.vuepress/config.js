module.exports = {
    title: '前端开发规范',
    description: '网站描述',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav: [
            {
              text: '前端规范',
              items: [
                  { text: 'HTML规范', link: '/html/整体结构' },
                  { text: 'CSS规范', link: 'css/命名规范' },
                  { text: 'JS规范', link: '/javascript/命名规范' }
              ]
            }
        ],
        sidebar: [
          {
            title: "HTML规范",
            collapsable: true,
            children: [
                ['html/整体结构', '整体结构'],
                ['html/代码格式', '代码格式'],
                ['html/内容语义', '内容语义']
            ]
        },
        {
          title: "CSS规范",
          collapsable: true,
          children: [
              ['css/命名规范', '命名规范'],
              ['css/书写规范', '书写规范']
          ]
        },
        {
          title: "Javascript规范",
          collapsable: true,
          children: [
              ['javascript/命名规范', '命名规范'],
              ['javascript/注释规范', '注释规范'],
              ['javascript/开发规范', '开发规范'],
              ['javascript/关于代码', '关于代码']
          ]
        }
      ]
    },
    markdown: { // 为每个代码块显示行号
      lineNumbers: false
  },
};