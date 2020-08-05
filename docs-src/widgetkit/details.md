# Details

![Details example](/linear/details.png)

<p style="text-align: center;">
<a href="https://github.com/UAB-IT/linear/blob/master/src/scss/05-widgetkit/_details.scss" target="_blank">source</a>
</p>

The details component is used to display a list of details or features about a topic. They are displayed in two columns with a variable number of rows. Each item gets a simple illustration, title, and description.

The easiest way to create a new details component is to duplicate an existing one. However, if you need to create the component from scratch, follow the directions below.

## Creating details from scratch

This component is created in widgetkit. To create a new details component go to "Components" > "Widgetkit" and select "new". The follow these steps:

1. Use the "Grid" widgetkit
2. Add each item with a title and description
3. Select an illustration for each item from the "secondary illustrations" folder
4. Go to Settings

In "Layout" use these settings

- Behavior: Match Height
- Gutter: Medium
- Phone portrait: 1
- Phone landscape: Inherit
- Tablet: 2
- Desktop: Inherit
- Large screens: Inherit
- Panel: blank
- Animation: none

In "Media" use these settings

- Show media: Yes
- Image width: Auto
- Image height: 100
- Alignment: Left
- Column width: 40%
- Border: None
- Overlay: None
- Animation: None

In "Content" use these settings

- Show title: Yes
- Show content: Yes
- Show social buttons: No
- Title size: h4
- Alignment: Left
- Show link: No
- Show badge: No

In "General" use these settings

- Link target: No
- Date format: Medium
- HTML Class: `wk-details`
