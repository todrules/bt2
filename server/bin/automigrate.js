const server = require('../server.js');

const ds = server['datasources']['pg'];
const lbTables = ['Company', 'EntityType', 'TransactionType', 'Employee', 'Entity', 'Transaction'];

ds.automigrate(lbTables, function (er) {
  if (er) { throw er; }
  console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});
