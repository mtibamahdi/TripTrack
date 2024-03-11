const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { cities } = require('../../data/cities.json');

exports.handler = async (event) => {
  try {
    const newCity = JSON.parse(event.body);

    const id = uuidv4();

    newCity.id = id;

    const filePath = path.join(process.cwd(), 'data', 'cities.json');

    cities.push(newCity);

    await fs.promises.writeFile(filePath, JSON.stringify({ cities }));

    return {
      statusCode: 200,
      body: JSON.stringify(newCity),
    };
  } catch (err) {
    console.error('Error handling request:', err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
