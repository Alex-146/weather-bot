if (process.env.NODE_ENV != "production") {
  require("dotenv").config()
}

const { Telegraf } = require("telegraf")

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.on("text", ctx => {
  ctx.reply(ctx.message.text)
})

async function main() {
  await bot.telegram.deleteWebhook({ drop_pending_updates: true })
  await bot.launch()

  console.log("Bot started")
}

main()
