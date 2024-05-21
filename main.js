document.getElementById('mainThreadBtn').addEventListener('click', () => {
  // Getting user input
  let memorySize = document.getElementById('memorySize').value;

  console.log('assigning', memorySize)

  // Creating an array with approximately memorySize MB data
  window.hugeArray = new Array(memorySize * 1e6 / 4).fill(false);
});
