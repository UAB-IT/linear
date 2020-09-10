(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{353:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"google-sheets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-sheets"}},[t._v("#")]),t._v(" Google Sheets")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/UAB-IT/linear/blob/master/src/js/google-sheet.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("Google Sheets powered tables are used to display "),a("strong",[t._v("tabular data")]),t._v(" that is often updated and owned by another team. There are a few rules the Sheets powered tables have to conform to in order for everything to work as expected.")]),t._v(" "),a("p",[t._v("In Google Sheets, there must not be empty cells. Empty cells are excluded from the JSON response which can cause table cells to be misaligned on the website. Use a placeholder character such as "),a("code",[t._v("-")]),t._v(". Also, cells can not span columns or rows.")]),t._v(" "),a("p",[t._v("No table styles or formatting will be used from the Google Sheet. This is to ensure that all tables follow the same style guidelines as the rest of the IT website. In specific cases, conditional styles have been permitted.")]),t._v(" "),a("p",[t._v("The first row of the Google Sheet will not display on the website. Any changes made to the overall number of columns or table headings need to be made by IT Communications.")]),t._v(" "),a("h2",{attrs:{id:"creating-the-google-sheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-google-sheet"}},[t._v("#")]),t._v(" Creating the Google Sheet")]),t._v(" "),a("ol",[a("li",[t._v("Create a new Google Sheet as normal. Each table on the website will need to be in a sepearte tab in the Google Sheet document. This is very similar to tabs in Excel.")]),t._v(" "),a("li",[t._v("Trim any excess rows and columns. While not 100% necessary, this will help keep things more tidy.")]),t._v(" "),a("li",[t._v("Publish the Google Sheet to the web. This can be done by going to "),a("strong",[t._v("File")]),t._v(" > "),a("strong",[t._v("Publish to web")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"embedding-the-google-sheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#embedding-the-google-sheet"}},[t._v("#")]),t._v(" Embedding the Google Sheet")]),t._v(" "),a("p",[t._v("To make the Google Sheet display correctly on the IT website, you'll need to create a skeleton table like the one below:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("SampleGoogleSheetTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("thead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Column 1 Heading"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Column 2 Heading"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("thead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Remember to fill in the table headings and choose an "),a("code",[t._v("id")]),t._v(" that is unique to the table being embedded. Next, call the "),a("code",[t._v("IT_googleSheet")]),t._v(" function. The JavaScript should look like the snippet below.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" document "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ready")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("IT_googleSheet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SampleGoogleSheetTable'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://spreadsheets.google.com/feeds/cells/SHEET_ID/TAB_INDEX/public/values?alt=json'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Remember to replace the "),a("code",[t._v("id")]),t._v(" with the "),a("code",[t._v("id")]),t._v(" you chose in the html portion. In the URL shown in the code above, replace "),a("code",[t._v("SHEET_ID")]),t._v(" with the id of the Google Sheet to be embedded. Instructions on how to do this are below. Replace "),a("code",[t._v("TAB_INDEX")]),t._v(" with a number representing the tab you want to embed. For example, if I want to embed the second tab in the Google Sheet, then my "),a("code",[t._v("TAB_INDEX")]),t._v(' will be "2".')]),t._v(" "),a("h2",{attrs:{id:"finding-the-google-sheet-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-google-sheet-id"}},[t._v("#")]),t._v(" Finding the Google Sheet ID")]),t._v(" "),a("p",[t._v("Look at the URL of the Google Sheet when open in the browser. You should see something like this:")]),t._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://docs.google.com/spreadsheets/d/19wc8GJ9faQIce348vwPxyX_rx3qr6hi6oAGfBOPqRFs/edit#gid=1703597193\n")])])]),a("p",[t._v("The ID for this Google Sheet is "),a("code",[t._v("19wc8GJ9faQIce348vwPxyX_rx3qr6hi6oAGfBOPqRFs")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"conditional-formatting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conditional-formatting"}},[t._v("#")]),t._v(" Conditional Formatting")]),t._v(" "),a("p",[t._v('In Google Sheets, there are a few keywords that can give a table cell a "status" class which will apply styling to that cell. '),a("strong",[t._v("All keywords are case sensitive")]),t._v(".")]),t._v(" "),a("p",[t._v("These keywords are:")]),t._v(" "),a("ul",[a("li",[t._v('"Active" and "Functional" will apply the '),a("code",[t._v("cell-notice")]),t._v(" class which will give the cell a green background.")]),t._v(" "),a("li",[t._v('"Containment" and "Functional with issues" will apply the '),a("code",[t._v("cell-caution")]),t._v(" class which will give the cell a yellow background")]),t._v(" "),a("li",[t._v('"Phasing Out" will apply the '),a("code",[t._v("cell-caution-alt")]),t._v(" class which will give the cell an orange background")]),t._v(" "),a("li",[t._v('"Down" and "End of Life" will appy the '),a("code",[t._v("cell-warning")]),t._v(" class which will give the cell a red background")])]),t._v(" "),a("p",[t._v("For the colors to display in the Google Sheet, you will need to set up conditional formatting in Google Sheets. Regardless of the conditional formatting settings in your Sheet, the above will still apply to the website.")]),t._v(" "),a("p",[t._v("To change the keywords or add additional keywords, you'll need to edit the "),a("code",[t._v("IT_applyConditionalClasses")]),t._v(" function in "),a("strong",[t._v("google-sheet.js")]),t._v(". Please refer to the "),a("a",{attrs:{href:"https://github.com/UAB-IT/linear/blob/master/.github/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("contributing guide"),a("OutboundLink")],1),t._v(" before making changes to the website's CSS or JavaScript.")])])}),[],!1,null,null,null);e.default=n.exports}}]);