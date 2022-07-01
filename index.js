const axios = require('axios');

// To get all data
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });

//add new data
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Shanawaz',
    body: 'This is my first post',
    userId: 10,
    id: 101

}).then((res) => {
    console.log(`Status: ${res.status}`);
    console.log('Body: ', res.data);
}
).catch((err) => {
    console.error(err);
}
);

// delete data
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }
).catch((err) => {
    console.error(err);
}
);

// update data
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Shanawaz',
    body: 'This is my first post',
    userId: 10,
    id: 101
    
}).then((res) => {
    console.log(`Status: ${res.status}`);
    console.log('Body: ', res.data);
}
).catch((err) => {
    console.error(err);
}
);
