var f1 = new Promise((resolve, reject) => {
  resolve("Promise 1");
});

var f2 = new Promise((resolve, reject) => {
  reject(err);
});

var f3 = new Promise((resolve, reject) => {
  resolve("Promise 3");
});

var fArray = [f1, f2, f3];

var promiseExecution = async () => {
  for (var promise of fArray) {
    try {
      const message = await promise;
      console.log(message);
    } catch (error) {
      console.log(error.message);
    }
  }
};
promiseExecution();

function promiseSequence(array, input) {
  return array.reduce(
    (previousValue, currentValue) => previousValue.then(currentValue),
    Promise.resolve(input)
  );
}

function p1(a) {
  return new Promise((resolve) => {
    resolve(a * 2);
  });
}

function p2(a) {
  return new Promise((resolve) => {
    resolve(a * 2);
  });
}

function p3(a) {
  return new Promise((resolve) => {
    resolve(a * 2);
  });
}

function p4(a) {
  return new Promise((resolve) => {
    resolve(a * 2);
  });
}

var pArray = [p1, p2, p3, p4];

promiseSequence(pArray, 4).then(console.log);
