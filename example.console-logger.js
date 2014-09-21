### #connect

```js
emitter.on("connect", function() {
  console.log("connected to docker api");
});
```

### #disconnect

```js
emitter.on("disconnect", function() {
  console.log("disconnected to docker api; reconnecting");
});
```

### #_message

```js
emitter.on("_message", function(message) {
  console.log("got a message from docker: %j", message);
});
```

### #create

```js
emitter.on("create", function(message) {
  console.log("container created: %j", message);
});
```

### #start

```js
emitter.on("start", function(message) {
  console.log("container started: %j", message);
});
```

### #stop

```js
emitter.on("stop", function(message) {
  console.log("container stopped: %j", message);
});
```

### #die

```js
emitter.on("die", function(message) {
  console.log("container died: %j", message);
});
```

### #destroy

```js
emitter.on("destroy", function(message) {
  console.log("container destroyed: %j", message);
});
```
