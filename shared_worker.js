var worker;

document.getElementById('sharedWorkerThreadBtn').addEventListener('click', () => {
  worker = new SharedWorker('shared_worker_assignment.js');

  let memorySize = document.getElementById('memorySize').value;

  worker.port.start();

  console.log('worker assigning', memorySize)

  worker.port.postMessage(memorySize);

  worker.port.onmessage = function(e) {
    console.log('Worker thread memory assigned');
  };
});
