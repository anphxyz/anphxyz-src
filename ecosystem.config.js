module.exports = {
    apps: [
      {
        name: "Media Processor",
        script: "./server.js",
        error_file: `./logs/error-.log`,
        out_file: `./logs/combined-.log`,
        watch: ['application/api/*', 'application/index.js'],
        env: {//pm2 start ecosystem.config.js
          "PORT": 4000,
          "NODE_ENV": "development"
        }
      }
    ]
  }