module.exports = {
  title: "UABIT CSS Library",
  dest: "docs",
  base: "/linear/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "GitHub", link: "https://github.com/UAB-IT/linear" },
    ],
    sidebar: [
      "/",
      {
        title: "Principals",
        collapsable: false,
        children: [
          "/principals/organization",
          "/principals/typography",
          "/principals/color",
          "/principals/space",
          "/principals/inclusive-design"
        ],
      },
      {
        title: "Components",
        collapsable: false,
        children: [
          "/components/blockquotes",
          "/components/buttons",
          "/components/callouts",
          "/components/images",
          "/components/table-of-contents",
          "/components/video"
        ],
      },
      {
        title: "Modules",
        collapsable: false,
        children: [
          "/modules/areas"
        ],
      },
    ],
  },
};
