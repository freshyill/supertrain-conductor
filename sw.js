/*
   This is a super basic service worker based on Remy Sharp's "The copy & paste
   guide to your first Service Worker."

   There are four URLs below that correspond to the placeholder pages included
   in the project. Remove them if they don't work for you and add your own.

   Here are some other useful resources to get started with service workers:

   * https://remysharp.com/2016/03/22/the-copy--paste-guide-to-your-first-service-worker
   * https://css-tricks.com/serviceworker-for-offline/
   * https://googlechrome.github.io/samples/service-worker/basic/
   * https://deanhume.com/create-a-really-really-simple-offline-page-using-service-workers/
   * https://gist.github.com/adactio/fbaa3a5952774553f5e7
   * https://serviceworke.rs/
*/

// we'll version our cache (and learn how to delete caches in
// some other post)
const cacheName = 'v1::static';

self.addEventListener('install', e => {
  // once the SW is installed, go ahead and fetch the resources
  // to make this work offline
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        "/blog/",
        "/about/",
        "/contact/"
        /*
          DEAR READER,
          ADD A LIST OF YOUR ASSETS THAT
          YOU WANT TO WORK WHEN OFFLINE
          TO THIS ARRAY OF URLS
        */
      ]).then(() => self.skipWaiting());
    })
  );
});

// when the browser fetches a url, either response with
// the cached object or go ahead and fetch the actual url
self.addEventListener('fetch', event => {
  event.respondWith(
    // ensure we check the *right* cache to match against
    caches.open(cacheName).then(cache => {
      return cache.match(event.request).then(res => {
        return res || fetch(event.request)
      });
    })
  );
});
