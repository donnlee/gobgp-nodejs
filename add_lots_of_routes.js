var Gobgp = require('gobgp');
//var gobgp = new Gobgp('<gobgpd address>:50051');
var gobgp = new Gobgp('localhost:50051');

var counter = 0;
var i;

//for (i = 0; i <= 255; i++) {
for (i = 0; i <= 1; i++) {
  for (j = 0; j <= 255; j++) {
    route = '10.0.' + i + '.' + j + '/32';
    console.log(route);
    gobgp.addPath({family: 'ipv4-unicast'}, route);
    //gobgp.addPath({family: 'ipv4-unicast'}, '10.0.0.0/32');
    counter++;
  }
}
console.log(counter + ' routes added.');

