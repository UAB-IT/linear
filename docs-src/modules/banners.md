# Banners

![Caption example](/linear/banner.png)

<p style="text-align: center;">
<a href="https://github.com/UAB-IT/linear/blob/master/src/scss/07-central/_banner.scss" target="_blank">source</a>
</p>

Banners are used as headers for each page. Each topic has its own unique banner. Detail pages inherit the banner from their parent topic page.

1. The page title
2. An image
3. Breadcrumbs

The page title and breadcrumbs are added automatically and the image is controlled by Joomla's module system.

## Adding a banner to a new topic page

1. Create an image that is **1600px x 300px**
2. Upload the image to the banners folder in Joomla
3. Go to "Extensions" > "Modules" > "New"
4. Insert the image with a blank alt attribute
5. Select "Banner" as its position
6. Under "Menu Assignment" select "Only on the pages selected"
7. Select the newly created topic page
8. Under "Advanced" add `banner-image` to the "Module Class Suffix" box, be sure to **include a space at the beginning**

Note that the topic page will need to have been added to the appropriate menu before these steps.

## Adding a banner to a new details page

1. Determine what topic this new page falls under
2. Go to "Extensions" > "Modules"
3. Find the banner used for this topic
4. Under "Menu Assignment" select the newly created details page
