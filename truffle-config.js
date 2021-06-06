module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Port that ganoche is running on
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}