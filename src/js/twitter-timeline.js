/* @function IT_twitter
 * Creates a twitter feed
 * @param {string} container - ID of the HTML element that will contain the feed
 * @param {number} limit - Max number to tweets to display
 * @param {boolean} dev - True to print console logs
-------------------------------------------------------------------------- */

function IT_twitter(
  container,
  limit,
  dev=false
){
  const PARENT = document.getElementById(container);
  if (dev) { console.log("Twitter feed parent", PARENT); }
  let feed = document.createElement("a");
    feed.classList.add('twitter-timeline');
    feed.setAttribute("data-dnt", "true");
    feed.setAttribute("data-height", "2000");
    feed.setAttribute("data-theme", "light");
    feed.setAttribute("data-tweet-limit", limit);
    feed.setAttribute("data-chrome", "noheader nofooter");
    feed.setAttribute("href", "https://twitter.com/UABIT?ref_src=twsrc%5Etfw");
    feed.innerHTML = "Tweets by UABIT";
  if (dev) { console.log("feed", feed); }
  PARENT.appendChild(feed);
  let script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
  if (dev) { console.log("script", script); }
  document.head.appendChild(script);
}
