const { Telegraf } = require("telegraf")

/**
 * 
 * @param {Telegraf} bot 
 */
function useHandlers(bot) {
  bot.on("text", ctx => {
    ctx.reply(ctx.message.text)
  })
}

module.exports = {
  useHandlers
}
