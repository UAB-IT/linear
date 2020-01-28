function IT_twitter(container, limit, debug=false) {
  let parent = document.getElementById(container);
  if (debug) {console.log("parent", parent);}

  let feed = document.createElement("a");
  feed.classList.add('twitter-timeline');
  feed.setAttribute("data-dnt", "true");
  feed.setAttribute("data-height", "2000");
  feed.setAttribute("data-theme", "light");
  feed.setAttribute("data-tweet-limit", limit);
  feed.setAttribute("data-chrome", "noheader nofooter");
  feed.setAttribute("href", "https://twitter.com/UABIT?ref_src=twsrc%5Etfw");
  feed.innerHTML = "Tweets by UABIT";
  parent.appendChild(feed);
  if (debug) {console.log("feed", feed);}

  let script = document.createElement('script');
  script.src = 'https://platform.twitter.com/widgets.js';
  document.head.appendChild(script);
  if (debug) {console.log("script", script);}
}
