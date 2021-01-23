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
- Supports GET and POST

## Usage
- Example in jQuery AJAX:
```js
const corsProxyURL = 'https://cors-proxy.itake.cz';

// GET
const url = encodeURIComponent('https://jsonplaceholder.typicode.com/todos/1');
$.getJSON(`${corsProxyURL}/${url}`).done((resp) => {
    console.log(resp);
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
});
```
