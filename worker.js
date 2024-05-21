var worker;

document.getElementById('workerThreadBtn').addEventListener('click', () => {
  worker = new Worker('worker_assignment.js');

  let memorySize = document.getElementById('memorySize').value;

  console.log('worker assigning', memorySize)

  worker.postMessage(memorySize);

  worker.onmessage = function(e) {
    console.log('Worker thread memory assigned');
  };
});
