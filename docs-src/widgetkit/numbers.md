# Numbers

![Numbers example](/linear/numbers.png)

The numbers component ca be used to display three numerical statistics about of topic. A great example of this component in action is listing specs for the Cheaha supercomputer.

```html
<hr/>
<h2 class="u-txt-c wk-header">By the Numbers</h2>
<p>[widgetkit id="XX"]</p>
<hr/>
```

Replace `XX` in the code above with the correct widgetkit number.

The easiest way to create a new numbers component is to duplicate an existing one. However, if you need to create the component from scratch, follow the directions below.

## Settings

This component is created in widgetkit. To create a new details component go to "Components" > "Widgetkit" and select "new". The follow these steps:

1. Use the "Grid" widgetkit
2. The title for each item should be the number
3. Add a paragraph in the "Content" section with the description of the number
4. It is recommended to use exactly 3 stats, but you may be able to display up to 6. It will depend on page design.
4. Go to Settings

In "Layout" use these settings

- Behavior: Match Height
- Gutter: Default
- Phone portrait: 1
- Phone landscape: Inherit
- Tablet: 3
- Desktop: Inherit
- Large screens: Inherit
- Animation: None

None of the settings in the media tab should matter since this component does not use media.

In "Content" use these settings

- Show title: Yes
- Show content: Yes
- Show social buttons: No
- Title size: Default
- Alignment: Center
- Show link: No
- Show badge: No


In "General" use these settings

- Open all links in a new window: No
- HTML Class: `wk-numbers`
