if (process.env.NODE_ENV != "production") {
  require("dotenv").config()
}

const { Telegraf } = require("telegraf")
const { useHandlers } = require("./handlers")

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

useHandlers(bot)

async function main() {
  await bot.telegram.deleteWebhook({ drop_pending_updates: true })
  await bot.launch()
  console.log("Bot is running")
}

main()
