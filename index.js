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


client.on ('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content.match('うるさい','だまれ','黙れ')) {
    message.channel.send('動物園へお帰りください')
  })
  

client.on ('message', message => {
  if (message.author.bot) return;
  if (message.content.match('ホスト','茶番','ちゃばん','ほすと')){
  message.channel.send('ええっ！？三谷ホストだったの！？')
}
})
  
  
client.on ('message', message => {
  if (message.author.bot) return;
  if (message.content.match('ホスト','茶番','ちゃばん','ほすと')){
  message.channel.send('ええっ！？三谷ホストだったの！？')
}
})

  
client.on ('message', message => {
  if (message.author.bot) return;
  if (message.content.match('おもんない','つまらない','泣く','なく')){
  message.channel.send('ほら気持ち切り替えて！')
}


client.on ('message', message => {
  if (message.author.bot) return;
  if (message.content.match('絶対やる？','ぜったいやる？','待って','やるから待って')){
  message.channel.send('いったかんな！？')
}
})





















})client.login ("token");
