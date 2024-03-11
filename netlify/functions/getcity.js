const { cities } = require('../../data/cities.json');

exports.handler = async function (event, context) {
  try {
    const id = event.queryStringParameters.id.toString();
    const city = cities.find((city) => city.id === id);

    if (!city) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'City not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(city),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
