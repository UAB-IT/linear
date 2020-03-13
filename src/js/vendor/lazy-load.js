/** Echo JS
 * Simple lazy loader
 * https://ultimatecourses.com/blog/echo-js-simple-javascript-image-lazy-loading
 *
 * Original concept by Todd Motto <https://github.com/toddmotto>
 * Modified with option to add classes by Matt McAdams
-------------------------------------------------------------------------- */

function IT_echo () {
  'use strict'

  /* Images for echoing */
  const SRC_STORE = []
  const CLASS_STORE = []

  class EchoImage {
    constructor (elem) {
      this.elem = elem
      this.render()
      this.listen()
    }

    init () {
      SRC_STORE.push(this.elem)
    }

    render () {
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', echoImages, false)
      } else {
        window.onload = echoImages
      }
    }

    listen () {
      window.onscroll = echoImages
    }
  }

  class EchoClass {
    constructor (elem) {
      this.elem = elem
      this.render()
      this.listen()
    }

    init () {
      CLASS_STORE.push(this.elem)
    }

    render () {
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', echoClasses, false)
      } else {
        window.onload = echoClasses
      }
    }

    listen () {
      window.onscroll = echoClasses
    }
  }

  /* Element in viewport logic */
  function scrolledIntoView (element) {
    const COORDS = element.getBoundingClientRect()
    return ((COORDS.top >= 0 && COORDS.left >= 0 && COORDS.top) <= (window.innerHeight || document.documentElement.clientHeight))
  }

  /* Changing src attr logic */
  function echoSrc (img, callback) {
    img.src = img.getAttribute('data-echo-src')
    if (callback) { callback() }
  }

  /* Changing class attr logic */
  function echoClassName (elem, callback) {
    elem.className += ' ' + elem.getAttribute('data-echo-class')
    if (callback) { callback() }
  }

  /* Remove loaded item from array */
  function removeEcho (element, store, index) {
    if (store.indexOf(element) !== -1) {
      store.splice(index, 1)
    }
  }

  /* Echo the images and callbacks */
  function echoImages () {
    for (let i = 0; i < SRC_STORE.length; i++) {
      const SELF = SRC_STORE[i]
      if (scrolledIntoView(SELF)) {
        echoSrc(SELF, removeEcho(SELF, SRC_STORE, i))
      }
    }
  }

  /* Echo the images and callbacks */
  function echoClasses () {
    for (let i = 0; i < CLASS_STORE.length; i++) {
      const SELF = CLASS_STORE[i]
      if (scrolledIntoView(SELF)) {
        echoClassName(SELF, removeEcho(SELF, CLASS_STORE, i))
      }
    }
  }

  /* Initiate the plugin */
  const LAZY_IMAGES = document.querySelectorAll('[data-echo-src]')
  for (let i = 0; i < LAZY_IMAGES.length; i++) {
    new EchoImage(LAZY_IMAGES[i]).init()
  }

  /* Initiate the plugin */
  const LAZY_CLASSES = document.querySelectorAll('[data-echo-class]')
  for (let i = 0; i < LAZY_CLASSES.length; i++) {
    new EchoClass(LAZY_CLASSES[i]).init()
  }
}
