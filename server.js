var net = require('net'),
  count = 0;

var server = net.createServer(function(stream) {
  console.log("Stream connected");

  stream.setEncoding('utf8');

  stream.on('connect', function() {
    stream.write("Hello!\r\n");
  });

  stream.on('data', function(data) {
    data = data.replace(/[\r\n]/ig, "");
    console.log("remote said: " + data);
    stream.write("you said: " + data + "\r\n");
  });

  stream.on('end', function() {
    stream.write("Bye!");
    stream.end();

    console.log("Stream closed");
  });
});

server.listen(9100);
console.log("TCP listening on port 9100");