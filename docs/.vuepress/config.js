const { localePath, locales, themeConfigLocales, searchLocales } = require("./i18n")
const path = require("path")
const fs = require("fs")

module.exports = {
  locales: locales,
  
  themeConfig: {
    repo: 'cfw-guide/ps4.cfw.guide',
    adTagOne: 'waldo-tag-',
    adTagTwo: 'waldo-tag-',
    selectLanguageText: '<i class="fas fa-globe"/>',
    locales: themeConfigLocales,
  },

	plugins: [
		[
			"@vuepress/plugin-search", {
				locales: searchLocales,
			}
		],
	],

  theme: path.resolve(__dirname, './vuepress-theme'),
  extendsMarkdown: (md) => {
      md.use(require('markdown-it-include'))
  },
  
  head: [
    [ 'link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
  ],

	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
}
