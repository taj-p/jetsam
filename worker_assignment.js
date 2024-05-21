this.onmessage = function(e) {
  // Creating an array with approximately memorySize MB data
  self.hugeArray = new Array(e.data * 1e6 / 4).fill(false);

  postMessage('done');
};
