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
          "/components/grid",
          "/components/images",
          "/components/section",
          "/components/tables",
          "/components/table-of-contents",
          "/components/video"
        ],
      },
      {
        title: "Widgetkit",
        collapsable: false,
        children: [
          "/widgetkit/details",
          "/widgetkit/features",
          "/widgetkit/gallery"
        ],
      },
      {
        title: "Modules",
        collapsable: false,
        children: [
          "/modules/areas",
          "/modules/banners",
          "/modules/menus"
        ],
      },
    ],
  },
};
