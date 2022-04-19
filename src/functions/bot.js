const { Telegraf } = require("telegraf")

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.on("text", ctx => {
  ctx.reply(ctx.message.text)
})

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
