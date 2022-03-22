module.exports = {
  apps : [{
    name: "abkmtest",
    script: "./node_modules/.bin/keystone dev",
    env: {
      "NODE_ENV": "development",
      "NODE_OPTIONS": "-r esm -r dotenv/config",
      "DISABLE_LOGGING": "true",
    },
  }],
}