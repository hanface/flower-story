const connection = require('./connection')

function getFlowers(db = connection) {
  return db('flowers')
}

module.exports = {
  getFlowers,
}
