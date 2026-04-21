const { spawn } = require('child_process');
const path = require('path');

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const server = spawn(npm, ['start'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true,
});

server.on('exit', (code) => {
  process.exit(code);
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
