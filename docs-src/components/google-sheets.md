# Google Sheets

[Source](https://github.com/UAB-IT/linear/blob/master/src/js/google-sheet.js)

## Usage

Google Sheets powered tables are used to display **tabular data** that is often updated and owned by another team. There are a few rules the Sheets powered tables have to conform to in order for everything to work as expected.

In Google Sheets, there must not be empty cells. Empty cells are excluded from the JSON response which can cause table cells to be misaligned on the website. Use a placeholder character such as `-`. Also, cells can not span columns or rows.

No table styles or formatting will be used from the Google Sheet. This is to ensure that all tables follow the same style guidelines as the rest of the IT website. In specific cases, conditional styles have been permitted.

The first row of the Google Sheet will not display on the website. Any changes made to the overall number of columns or table headings need to be made by IT Communications.

## Creating the Google Sheet

1. Create a new Google Sheet as normal. Each table on the website will need to be in a sepearte tab in the Google Sheet document. This is very similar to tabs in Excel.
2. Trim any excess rows and columns. While not 100% necessary, this will help keep things more tidy.
3. Publish the Google Sheet to the web. This can be done by going to **File** > **Publish to web**.

## Embedding the Google Sheet

To make the Google Sheet display correctly on the IT website, you'll need to create a skeleton table like the one below:

```html
<table id="SampleGoogleSheetTable">
  <thead>
    <tr>
      <th>Column 1 Heading</th>
      <th>Column 2 Heading</th>
    </tr>
  </thead>
</table>
```

Remember to fill in the table headings and choose an `id` that is unique to the table being embedded. Next, call the `IT_googleSheet` function. The JavaScript should look like the snippet below.

```html
<script>
  jQuery( document ).ready(function() {
    IT_googleSheet(
      'SampleGoogleSheetTable',
      'https://spreadsheets.google.com/feeds/cells/SHEET_ID/TAB_INDEX/public/values?alt=json'
    );
  });
</script>
```

Remember to replace the `id` with the `id` you chose in the html portion. In the URL shown in the code above, replace `SHEET_ID` with the id of the Google Sheet to be embedded. Instructions on how to do this are below. Replace `TAB_INDEX` with a number representing the tab you want to embed. For example, if I want to embed the second tab in the Google Sheet, then my `TAB_INDEX` will be "2".

## Finding the Google Sheet ID

Look at the URL of the Google Sheet when open in the browser. You should see something like this:

```txt
https://docs.google.com/spreadsheets/d/19wc8GJ9faQIce348vwPxyX_rx3qr6hi6oAGfBOPqRFs/edit#gid=1703597193
```

The ID for this Google Sheet is `19wc8GJ9faQIce348vwPxyX_rx3qr6hi6oAGfBOPqRFs`.

## Conditional Formatting

In Google Sheets, there are a few keywords that can give a table cell a "status" class which will apply styling to that cell. **All keywords are case sensitive**.

These keywords are:

* "Active" and "Functional" will apply the `cell-notice` class which will give the cell a green background.
* "Containment" and "Functional with issues" will apply the `cell-caution` class which will give the cell a yellow background
* "Phasing Out" will apply the `cell-caution-alt` class which will give the cell an orange background
* "Down" and "End of Life" will appy the `cell-warning` class which will give the cell a red background

For the colors to display in the Google Sheet, you will need to set up conditional formatting in Google Sheets. Regardless of the conditional formatting settings in your Sheet, the above will still apply to the website.

To change the keywords or add additional keywords, you'll need to edit the `IT_applyConditionalClasses` function in **google-sheet.js**. Please refer to the [contributing guide](https://github.com/UAB-IT/linear/blob/master/.github/CONTRIBUTING.md) before making changes to the website's CSS or JavaScript.
