module.exports = {
  title: "UABIT CSS Library",
  dest: "docs",
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
        ],
      },
      {
        title: "Components",
        collapsable: false,
        children: [],
      },
    ],
  },
};
