// Using HTTP - standard library
const http = require('node:http');

const postData = {
    "event_source": "web",
    "event_source_id": "D5GPFGJC77UAODHQ17N0",
    "data": [
        {
            "event": "Lead",
            "event_time": 1777457192,
            "user": {
                "email": "048d1ec243563f37a2587202d42d71cf532c91b8d5b43f9354a3fd4ca0f66f0b",
                "phone": "c29818eebc2fea44e31967dc37bccb2898dbab7aedb18778ed7ff0e5c3090a8d",
                "external_id": null
            },
            "properties": {
                "currency": "NGN",
                "content_type": null
            },
            "page": {
                "url": "https://bodyshop.ju.mp/",
                "referrer": null
            }
        }
    ]
};

const options = {
  hostname: 'business-api.tiktok.com',
  protocol: 'https',
  port: 80,
  path: '/open_api/v1.3/event/track/',
  method: 'POST',
  headers: {
    'Access-Token': '<<ACCESS TOKEN>>',
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, (res) => {
  console.log('STATUS:', res.statusCode);
  console.log('HEADERS:', res.headers);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log('BODY:', chunk);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error('problem with request:', e.message);
});

req.write(postData);
req.end();

// Using Axios
const axios = require('axios');

axios.post(
'https://business-api.tiktok.com/open_api/v1.3/event/track/',
{
    "event_source": "web",
    "event_source_id": "D5GPFGJC77UAODHQ17N0",
    "data": [
        {
            "event": "Lead",
            "event_time": 1777457192,
            "user": {
                "email": "048d1ec243563f37a2587202d42d71cf532c91b8d5b43f9354a3fd4ca0f66f0b",
                "phone": "c29818eebc2fea44e31967dc37bccb2898dbab7aedb18778ed7ff0e5c3090a8d",
                "external_id": null
            },
            "properties": {
                "currency": "NGN",
                "content_type": null
            },
            "page": {
                "url": "https://bodyshop.ju.mp/",
                "referrer": null
            }
        }
    ]
},
{
    headers: {
        'Access-Token': '<<ACCESS TOKEN>>',
        'Content-Type': 'application/json'
    }
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
