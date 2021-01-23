# Twitter API Proxy
This API is used to make requests to CORS restricted servers

## Production
- https://corse-proxy.itake.cz/

## Development
- You'll need to have Node.js installed
```bash
git clone https://github.com/nvbach91/cors-proxy.git
cd cors-proxy
npm install
npm start
```
- the local server will be running at http://localhost:3000/

## Features
- CORS enabled - you can make AJAX calls from browsers to this API
- Supports GET, POST, PUT, PATCH and DELETE

## Documentation
- `GET /:url`
  - param `url: URL:String required`
- `GET /get`
  - query `url: URL:String required`
- `POST /`
  - payload `{ url: URL:String required, data: JSON:String optional }`
- `PUT /`
  - payload `{ url: URL:String required, data: JSON:String optional }`
- `PATCH /`
  - payload `{ url: URL:String required, data: JSON:String optional }`
- `DELETE /`
  - payload `{ url: URL:String required }`


## Usage
- Example in jQuery AJAX:
```js
const corsProxyURL = 'https://cors-proxy.itake.cz';
const encodedGetURL = encodeURIComponent('https://jsonplaceholder.typicode.com/todos/1');

// GET param (if this doesn't work then use GET query)
$.getJSON(`${corsProxyURL}/${encodedGetURL}`).done((resp) => {
    console.log(resp);
}).fail((resp) => {
    console.error(resp.responseText || resp.responseJSON);
});

// GET query
$.getJSON(`${corsProxyURL}/get?url=${encodedGetURL}`).done((resp) => {
    console.log(resp);
}).fail((resp) => {
    console.error(resp.responseText || resp.responseJSON);
});

// POST
$.ajax({
    method: 'POST',
    url: corsProxyURL,
    data: {
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    },
}).done((resp) => {
    console.log(resp);
}).fail((resp) => {
    console.error(resp.responseText || resp.responseJSON);
});

// PUT
$.ajax({
    method: 'PUT',
    url: corsProxyURL,
    data: {
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        data: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    },
}).done((resp) => {
    console.log(resp);
}).fail((resp) => {
    console.error(resp.responseText || resp.responseJSON);
});

// PATCH
$.ajax({
    method: 'PATCH',
    url: corsProxyURL,
    data: {
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        data: JSON.stringify({
            title: 'foo',
        })
    },
}).done((resp) => {
    console.log(resp);
}).fail((resp) => {
    console.error(resp.responseText || resp.responseJSON);
});

// DELETE
$.ajax({
    method: 'DELETE',
    url: corsProxyURL,
    data: {
        url: 'https://jsonplaceholder.typicode.com/posts/1',
    },
}).done((resp) => {
    console.log(resp);
}).fail((resp) => {
    console.error(resp.responseText || resp.responseJSON);
});
```
