#! /usr/bin/env node

// Read what directory we are in
const fs = require('fs');

// Directory we are currently in and gives the content of a file
fs.readFile(__dirname + '/info.json', 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    return data
  }
})




