const axios = require('axios');
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
  async index(request, response) {
    const devs = await Dev.find({});
    return response.json(devs);
  },
  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;
    let dev = await Dev.findOne({ github_username });
    if (!dev) {
      const resp = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { name = login, avatar_url, bio } = resp.data;
      const techsArray = parseStringAsArray(techs);
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };
      dev = await Dev.create({
        name,
        avatar_url,
        github_username,
        bio,
        techs: techsArray,
        location
      });
      const sendSocketMessageTo = findConnections(
        {
          latitude,
          longitude
        },
        techsArray
      );
      sendMessage(sendSocketMessageTo, 'new-dev', dev);
    }
    return response.json(dev);
  }
};
