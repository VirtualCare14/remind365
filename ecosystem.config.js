module.exports = {
  apps: [
    {
      name: 'remind365',
      script: './start.js',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time_stamp: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};
