function fakeAjax(url, cb) {
  var fakeResponses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text",
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;
  console.log("Requesting: " + url);
  setTimeout(function () {
    cb(fakeResponses[url]);
  }, randomDelay);
}

function getFile(file) {
  fakeAjax(file, function (text) {
    delayedFile(file, text);
  });
}

function delayedFile(file, text) {
  if (!delayOutput[file]) {
    delayOutput[file] = text;
  }

  var files = ["file1", "file2", "file3"];

  for (var i = 0; i < files.length; i++) {
    if (files[i] in delayOutput) {
      if (delayOutput[files[i]] !== true) {
        console.log(delayOutput[files[i]]);
        delayOutput[files[i]] = true;
      }
    } else {
      return false;
    }
  }
  console.log("Complete!");
}

var delayOutput = {};

getFile("file1");
getFile("file2");
getFile("file3");
