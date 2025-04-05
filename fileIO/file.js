const fs = require('fs');
const path = require('path');

// basic file operations
const orders = 'orders.json';
const users = 'users.json';
const filePath = path.join(__dirname, 'data', orders);
const filePath2 = path.join(__dirname, 'data', users);

// read file
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     data = JSON.parse(data);
// });

// read file with async await
async function readFileAsync() {
    const ordersData = await fs.promises.readFile(filePath, 'utf8');
    const usersData = await fs.promises.readFile(filePath2, 'utf8');
    const orders = JSON.parse(ordersData).orders;
    const users = JSON.parse(usersData).users;

    // concatenate data
    const user = users.find(user => user.id === 1);
    if (user) {
        const userWithOrders = {
            ...user,
            orders: orders.filter(order => order.userId === user.id)
        };
        console.log(userWithOrders);
    } else {
        console.log('User with id = 1 not found.');
    }


    console.log(user);
    console.log(finalData);
}
readFileAsync();


