const fetch = require('node-fetch');

async function main(args) {
  const res = await fetch('http://143.198.108.130')
  //const res = await fetch('http://10.124.0.2')
  return res.json()
}

module.exports.main = main;
