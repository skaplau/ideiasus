const express = require('express')
const payload = require('payload')

require('dotenv').config()
const app = express()

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  app.listen(process.env.PORT || 3000)
}

start()
