/* XMLHttpRequest (XHR) and fetch() API are both used for asynchronous HTTP requests in JavaScript (AJAX). fetch() offers a cleaner syntax, promise-based approach, and more modern feature set compared to XHR. However, there are some differences:

XMLHttpRequest event callbacks, while fetch() utilizes promise chaining.
fetch() provides more flexibility in headers and request bodies.
fetch() support cleaner error handling with catch().
Handling caching with XMLHttpRequest is difficult but caching is supported by fetch() by default in the options.cache object (cache value of second parameter) to fetch() or Request().
fetch() requires an AbortController for cancelation, while for XMLHttpRequest, it provides abort() property.
XMLHttpRequest has good support for progress tracking, which fetch() lacks.
XMLHttpRequest is only available in the browser and not natively supported in Node.js environments. On the other hand fetch() is part of the JavaScript language and is supported on all modern JavaScript runtimes.
These days fetch() is preferred for its cleaner syntax and modern features. */

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.responseType = 'json';
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.response);
  }
};
xhr.send();


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.text())
  .then((data) => console.log(data));
