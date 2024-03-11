const fs = require('fs');
const path = require('path');
const { cities } = require('../../data/cities.json');

exports.handler = async (event) => {
  try {
    const id = event.queryStringParameters.id;

    const index = cities.findIndex((city) => city.id === id);

    if (index === -1) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'City not found' }),
      };
    }

    cities.splice(index, 1);

    const filePath = path.join(process.cwd(), 'data', 'cities.json');

    await fs.promises.writeFile(filePath, JSON.stringify({ cities }));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'City deleted successfully' }),
    };
  } catch (err) {
    console.error('Error handling request:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
