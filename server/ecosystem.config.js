module.exports = {
  apps: [
    {
      name: "PM2",
      script: "./dist/index.js",
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: "",
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 6003,
      },
      env_test: {
        NODE_ENV: "test",
        PORT: 6003,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 6003,
      },
    },
  ],
  deploy: {
    production: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
    },
  },
};
