const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { v4: uuidv4 } = require('uuid');

dotenv.config()

const { model, Schema } = mongoose

const schema = new Schema({
        _id: {
          type: String,
          default: () => uuidv4()
        },
        client_message:{
            type: Array
        }
})

module.exports = model('tarefa-claravista', schema, 'tarefa-claravista')