
var emitter = new DockerEvents({
  docker: new Dockerode(options),
});
start

emitter.start();


emitter.on("connect", function() {
  console.log("connected to docker api");
});

emitter.on("disconnect", function() {
  console.log("disconnected to docker api; reconnecting");
});

emitter.on("_message", function(message) {
  console.log("got a message from docker: %j", message);
});
```

emitter.on("create", function(message) {
  console.log("container created: %j", message);
});


emitter.on("start", function(message) {
  console.log("container started: %j", message);
});

emitter.on("stop", function(message) {
  console.log("container stopped: %j", message);
});

emitter.on("die", function(message) {
  console.log("container died: %j", message);
});

emitter.on("destroy", function(message) {
  console.log("container destroyed: %j", message);
});
