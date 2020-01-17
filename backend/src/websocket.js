const socketio = require('socket.io');

const parseStringAsArray = require('../src/utils/parseStringAsArray');
const calculateDistante = require('../src/utils/calculateDistance');

const connections = [];
let io;

exports.setupWebSockect = server => {
  io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query;
    connections.push({
      id: socket.id,
      techs: parseStringAsArray(techs),
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude)
      }
    });
  });
};

exports.findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return (
      calculateDistante(coordinates, connection.coordinates) < 10 &&
      connection.techs.some(item => techs.includes(item))
    );
  });
};

exports.sendMessage = (to, message, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
};
