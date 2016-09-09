// Need to add in batches of 500K routes,
// else gobgp crashes.

var Gobgp = require('gobgp');
//var gobgp = new Gobgp('<gobgpd address>:50051');
var gobgp = new Gobgp('localhost:50051');

var counter = 0;
var octet2;
var i;
var j;

// For 1 million routes: octet2 <= 15
for (octet2 = 0; octet2 <= 7; octet2++) {
  for (i = 0; i <= 255; i++) {
    for (j = 0; j <= 255; j++) {
      //route = '10.0.' + i + '.' + j + '/32';
      route = '10.' + octet2 + '.' + i + '.' + j + '/32';
      console.log(route);
      gobgp.addPath({family: 'ipv4-unicast'}, route);
      //gobgp.addPath({family: 'ipv4-unicast'}, '10.0.0.0/32');
      counter++;
    }
  }
}
console.log(counter + ' routes added.');

