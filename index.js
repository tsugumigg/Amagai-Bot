const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on ('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on ('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('pong!')
    }
})


client.on ('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content.match('忘れました','わすれました','忘れました')) {
    message.channel.send('なんでぇ！？')
  }
})

client.on ('message', message => {
  if (message.author.bot) return;
  if (message.content.match('持ってきます','もってきます','今度','こんど')){
  message.channel.send('確証が欲しいの確証が！！')
}
})

client.on ('message', message => {
  if (message.author.bot) return;
  if (message.content.match('いっしょにやろ','一緒にやろ','おつかれ','ビクロイナイス','対あり','たいあり')){
  message.channel.send('らぁくしょうらぁくしょう！')
}
})

client.on ('message', message => {
  if (message.author.bot) return;
  if (message.content.match('ねぇねぇ','@everyone','@Myoko','@TSMFTX_tsugumi')){
    message.channel.send('うるさいんですけどぉーーー')
}
})

client.on ('message', message => {
  if (message.author.bot) return;
  if (message.isMemberMentioned){
    message.create('うるさいんですけどぉーーー')
  }
})

client.on ('message', message => {
  if (message.author.bot) return;
  if (message.content.match('お疲れさまでした','やめる')){
    message.channel.send('さようなら')
  }
})


client.on ('message', message => {
  if (message.author.bot) return;
  if (message.content.match('@everyone やろ','天谷')){
  message.channel.send('よろしくおねがいしーth')
}
})


/* 足りなかったら上のやつコピペして */


client.login ("token");
