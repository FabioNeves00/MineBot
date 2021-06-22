const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
require('dotenv/config')

var prefix = '#'

var comandos = ['escoliose', 'monki flip', 'monki ice', 'amogus', 'comandos', 'CoinFlip "sua escolha"' ]

client.on('ready', () => {
    console.log('Logged as => ' + client.user.tag);
    client.user.setActivity('Minecraft LMAO', {type: 'PLAYING'})

})

client.on("message", async msg => {
    let random;
    message = msg.content.split('')
    
    if (message[0] === prefix) {
        message.splice(0, 1)
        message = message.join('')
        switch (message) {
            case 'escoliose':
                const escoliose = new Discord.MessageEmbed()
                    .setColor('#0099ff') // cor do ladinho
                    .setTitle('Escoliose') //titulo
                    .setURL('https://i.imgur.com/15aOQP4.png') // url de click
                    .setAuthor('escoliose?', 'https://i.imgur.com/15aOQP4.png', 'https://i.imgur.com/15aOQP4.png')
                    .setDescription('tens escoliosis?')
                    .setThumbnail('https://i.imgur.com/15aOQP4.png')
                    .addFields(
                        { name: 'Escoliose', value: 'escoliose' },
                        { name: '\u200B', value: '\u200B' },
                        { name: 'escoliose', value: 'escoliose', inline: true }
                    )
                    .setImage('https://i.imgur.com/15aOQP4.png')
                    .setFooter('escoliose', 'https://i.imgur.com/15aOQP4.png');
                msg.channel.send(escoliose)
                break;

            case 'monki flip':
                msg.channel.send('https://media.tenor.com/images/f8275fe31d37d85cc085d0f0bb79c2d5/tenor.gif')
                break;

            case 'monki ice':
                msg.channel.send('https://media1.tenor.com/images/7644e771ae17d0221c10bfc0369b9719/tenor.gif?itemid=20254327')
                break;

            case 'amogus':
                if (msg.member.voice.channel) {
                    const connection = await msg.member.voice.channel.join()
                    connection.play(ytdl('https://www.youtube.com/watch?v=5DlROhT8NgU&ab_channel=OnanjoOnanjo',
                        {
                            filter: 'audioonly',
                            volume: '0.5',
                        })
                    );
                } else {
                    msg.channel.send('Você precisa estar num canal de voz para executar este comando')
                }
                break;
            case 'comandos':
                msg.channel.send(comandos)
                break;
            case 'CoinFlip cara':
                msg.channel.send('Então eu escolho coroa :coin:, GL HF')
                msg.channel.send('https://tenor.com/view/coin-toss-coin-toss-gif-5017733')
                random = Math.floor(Math.random() * 2)
                if(random == 1){
                    setTimeout(function () { msg.channel.send('Caiu cara :coin: , você ganhou! :crown: :clap: '); }, 2000);
                    
                } else {
                    setTimeout(function () { msg.channel.send('Caiu coroa :coin: , você perdeu! :flushed: :clap: '); }, 2000);
                }

                break;
            case 'CoinFlip coroa':
                msg.channel.send('Então eu escolho cara :coin:, GL HF')
                msg.channel.send('https://tenor.com/view/coin-toss-coin-toss-gif-5017733')
                random = Math.floor(Math.random() * 2)
                if (random == 1) {
                    setTimeout(function () { msg.channel.send('Caiu coroa :coin: , você ganhou! :flushed: :clap: '); }, 2000);
                } else {
                    setTimeout(function () { msg.channel.send('Caiu cara :coin: , você perdeu! :flushed: :clap: '); }, 2000);
                }
                break;
            default:
                msg.channel.send('Comando não encontrado vadia')
                break;
        }
    }
})



// client.on('ready', () => {
//     // List servers the bot is connected to
//     console.log("Servers:")
//     client.guilds.forEach((guild) => {
//         console.log(" - " + guild.name)

//         // List all channels
//         guild.channels.forEach((channel) => {
//             console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
//         })
//     })
// })

client.login(process.env.bot_secret_token)