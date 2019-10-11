//data.js
//require the Elasticsearch librray
const elasticsearch = require('elasticsearch');
// instantiate an Elasticsearch client
const client = new elasticsearch.Client({
  hosts: ['http://localhost:9200']
});
// ping the client to be sure Elasticsearch is up
client.ping({
  requestTimeout: 30000,
}, function (error) {
  // at this point, eastic search is down, please check your Elasticsearch service
  if (error) {
    console.error('Elasticsearch cluster is down!');
  } else {
    console.log('Everything is ok');
  }
});

// create a new index called scotch.io-tutorial. If the index has already been created, this function fails safely
client.indices.create({
  index: 'scotch.io-tutorial'
}, function (error, response, status) {
  if (error) {
    console.log(error);
  } else {
    console.log("created a new index", response);
  }
});

// add data to the indec that has already been created
client.index({
  index: 'scotch.io-tutorial',
  id: '1',
  type: 'cities_list',
  body: {
    "Key1": "Content for key one",
    "Key2": "Content for key two",
    "Key3": "Content for key three",
  }
}, function (err, resp, status) {
  console.log(resp);
});