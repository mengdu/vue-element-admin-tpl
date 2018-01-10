const child_process = require('child_process')

const exec = child_process.exec
const spawn = child_process.spawn


var bat = spawn('node', ['aaa'])

bat.stdout.on('data', (data) => {
  console.log(`stdout: ${data.toString()}`);
});

bat.stderr.on('data', (data) => {
  console.log(`stderr: ${data.toString()}`);
});
