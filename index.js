const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {

    console.log("Bot online")
    client.user.setActivity("Watching Rule\'s")
})


client.on('message', message => {
  if (message.content === '!r1') {
    const embed =  new Discord.MessageEmbed()
    .setTitle('1.Be respectful')
    .setDescription('You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.')
    .setColor('#5C428E')

    message.channel.send(embed)
  }
});

client.on('message', message => {
  if (message.content === '!r2') {
    const embed = new Discord.MessageEmbed()
    .setTitle('2.No Inappropriate Language')
    .setDescription('The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.')
    .setColor('#5C428E')

    message.channel.send(embed)
  }
});

client.on('message', message => {
  if (message.content === '!r3') {
    const embed = new Discord.MessageEmbed()
    .setTitle('3. No spamming')
    .setDescription('Don\'t send a lot of small messages right after each other. Do not disrupt chat by spamming.')
    .setColor('#5C428E')

    message.channel.send(embed)
  }
});

client.on('message', message => {
  if (message.content === '!r4') {
    const embed = new Discord.MessageEmbed()
    .setTitle('4. No pornographic/adult/other NSFW material')
    .setDescription('This is a community server and not meant to share this kind of material.')
    .setColor('#5C428E')

    message.channel.send(embed)
  }
});

client.on('message', message => {
  if (message.content === '!r5') {
    const embed = new Discord.MessageEmbed()
    .setTitle('5. No offensive names and profile pictures')
    .setDescription('You will be asked to change your name or picture if the staff deems them inappropriate.')
    .setColor('#5C428E')

    message.channel.send(embed)
  }
});

client.on('message', message => {
  if (message.content === '!r6') {
    const embed = new Discord.MessageEmbed()
    .setTitle('6 Server Raiding')
    .setDescription('Raiding or mentions of raiding are not allowed.')
    .setColor('#5C428E')

    message.channel.send(embed)
  }
});
client.on('message', message => {
  if (message.content === '!r7') {
    const embed = new Discord.MessageEmbed()
    .setTitle('7. Direct & Indirect Threats')
    .setDescription('Threats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.')
    .setColor('#5C428E')

    message.channel.send(embed)
  }
});

client.on('message', message => {
  if (message.content === '!r8') {
    const embed = new Discord.MessageEmbed()
    .setTitle('8. Follow the Discord Community Guidelines')
    .setURL('https://discordapp.com/guidelines')
    .setDescription('You Must follow discord guidlines or you will be banned')
    .setColor('#5C428E')
    message.channel.send(embed)
  }
});

client.on('message', message => {
  if (message.content === '!rmore') {
    const embed = new Discord.MessageEmbed()
    .setTitle('Visit our rule\'s channel')
    .setURL('https://discord.com/channels/848617811379224596/852241835144380437')
    .setDescription('For more rule\'s ')
    .setColor('#5C428E')

    message.channel.send(embed)
  }
});

client.on('message', message => {
  if (message.content === '!rhelp') {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Help commands')
    .addField('!r1 to !r8', 'Rule\'s commands', true)

    .addField('!rmore', 'for more rules', true)
    .setColor('#5C428E')

    message.channel.send(embed)
  }
});

client.login('Your_bot_token')
