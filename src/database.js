const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  connectToDatabase: () => {
    mongoose.connect(
      process.env.MONGO_URL,
      {},
      error => {
        const message = error
          ? `falha ao conectar no mmongo ${error}`
          : '⚡️ MongoDB connection established successfully'
        console.log(message)
      }
    )
  }
}