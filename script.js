let input = document.getElementById("ip");
let btn = document.getElementById("btn");
let output = document.getElementById("output")

btn.addEventListener("click" , PromiseChaining)
function PromiseChaining(){
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(input.value);
    }, 2000);
  });

  promise1
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return result;
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result * 2);
        }, 1000);
      });
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return result;
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result - 3);
        }, 1000);
      });
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return result;
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result / 2);
        }, 1000);
      });
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return result;
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result + 10);
        }, 1000);
      });
    })
    .then((result) => {
      output.textContent = `Final Result: ${result}`;
    })
    .catch((error) => {
      console.error(error);
    });
}
