console.log('started shared worker')
self.onconnect = function(event) {
  const port = event.ports[0];

  port.onmessage = function(event) {
    self.hugeArray = new Array(event.data * 1e6 / 4).fill(false);
    console.log('done')
    port.postMessage('done');
  };
};
