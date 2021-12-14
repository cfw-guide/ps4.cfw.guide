module.exports = {
  search: 'Search',
  
  locales: {
    lang: 'en-US',
    title: 'PS4 Guide',
    description: 'A very much incomplete PS4 modding guide, from stock to jailbroken.',
  },
  
  themeConfig: {
  	selectLanguageName: "English",
  	backToHome: "Take me home",
  	contributorsText: "Contributors",
  	editLinkText: "Edit this page",
  	lastUpdatedText: "Last Updated",
  	openInNewWindow: "Open in new window",
  	selectLanguageAriaLabel: "Select language",
  	toggleDarkMode: "Toggle dark mode",
  	toggleSidebar: "Toggle sidebar",
    
    discordNoticeText: 'For support in English, ask for help on the <a href="https://discord.com/invite/2ApmZKs" target="_blank">SCE Party</a> Discord Server.',
      
    navbar: require('./navbar'),
    sidebar: require('./sidebar'),
  }
};