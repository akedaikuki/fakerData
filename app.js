const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();


app.get('/users', (req, res) => {
function generateCustomers() {
    const users = [];
    // 自動產生 10筆 假資料
    for (let i = 0; i < 10; i++) {
        const userData = {
            id: i+1,
            natureImageUrl: faker.image.nature(640, 480, true),
            avatarUrl: faker.image.avatar(),
            name: faker.name.fullName(),
            birthdate: faker.date.birthdate({ min: 1970, max: 2010, mode: 'year' }),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            
          address: {
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode(),
        },
            jobTitle: faker.name.jobTitle(),
            company: faker.company.bsAdjective(),
          };
          users.push(userData);
          
    }
    res.json(users);
}
// 如果你要用json的話，就需要export
module.exports = generateCustomers();
});


app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
  });