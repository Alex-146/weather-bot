const { Telegraf } = require("telegraf")

const { useHandlers } = require("../core/handlers")

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

useHandlers(bot)

exports.handler = async (event) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    return {
      statusCode: 200,
      body: ""
    }
  }
  catch(error) {
    console.log(error)
    return {
      statusCode: 400,
      body: "This endpoint is meant for bot and telegram communication"
    }
  }
}
