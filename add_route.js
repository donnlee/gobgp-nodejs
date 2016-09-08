var Gobgp = require('gobgp');
//var gobgp = new Gobgp('<gobgpd address>:50051');
var gobgp = new Gobgp('localhost:50051');

gobgp.addPath({family: 'ipv4-unicast'}, '10.0.0.0/32');

console.log('Added route.');
