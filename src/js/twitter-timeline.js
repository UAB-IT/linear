/** @function IT_twitter
  * Creates a twitter feed
  * @param {string} container - ID of the HTML element that will contain the feed
  * @param {number} limit - Max number to tweets to display
  * @param {boolean} dev - True to print console logs
-------------------------------------------------------------------------- */

function IT_twitter (
  container,
  limit,
  dev = false
) {
  const PARENT = document.getElementById(container)
  if (dev) { console.log('Twitter feed parent', PARENT) }
  const FEED = document.createElement('a')
  FEED.classList.add('twitter-timeline')
  FEED.setAttribute('data-dnt', 'true')
  FEED.setAttribute('data-height', '2000')
  FEED.setAttribute('data-theme', 'light')
  FEED.setAttribute('data-tweet-limit', limit)
  FEED.setAttribute('data-chrome', 'noheader nofooter')
  FEED.setAttribute('href', 'https://twitter.com/UABIT?ref_src=twsrc%5Etfw')
  FEED.innerHTML = 'Tweets by UABIT'

  if (dev) { console.log('FEED', FEED) }
  PARENT.appendChild(FEED)
  const SCRIPT = document.createElement('script')
  SCRIPT.src = 'https://platform.twitter.com/widgets.js'
  if (dev) { console.log('script', SCRIPT) }
  document.head.appendChild(SCRIPT)
}
