const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
require('dotenv/config')

let prefix = process.env.prefix

var comandos = ['escoliose', 'monki', 'ban', 'comandos', 'CoinFlip', 'calado', 'ParOuImpar']
var parametros = ['None', 'flip, ice', 'None, @usuario', 'None', 'cara, coroa', '@usuario', 'par, impar, valor']
var choice;

client.on('ready', () => {
    console.log('Logged as => ' + client.user.tag);
    client.user.setActivity('Minecraft LMAO', { type: 'PLAYING' })

})

client.on("message", async msg => {
    let canal = msg.channel
    let random;
    if (msg.author.id != client.user.id) {
        message = msg.content.split('')
        if (message[0] === prefix) {
            message.splice(0, 1)
            message = message.join('')
            var args = message.trim().split(" ");
            switch (args[0]) {
                case 'escoliose':
                    if (args[1] === 'help') {
                        canal.send('O comando escoliose envia uma certa mensagem proibida em 126 países diferentes')
                        canal.send('Use o comandos para ver seus parâmetros')
                    }
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
                    canal.send(escoliose)
                    break;

                case 'monki':
                    switch (args[1]) {
                        case 'help':
                            canal.send('O comando #monki envia um gif de monki')
                            canal.send('Use o #comandos para ver seus parâmetros')
                            break;
                        case 'flip':
                            canal.send('https://media.tenor.com/images/f8275fe31d37d85cc085d0f0bb79c2d5/tenor.gif')
                            break;
                        case 'ice':
                            canal.send('https://media1.tenor.com/images/7644e771ae17d0221c10bfc0369b9719/tenor.gif?itemid=20254327')
                            break;
                        default:
                            canal.send('Parâmetro não encontrado vadia, use o #comandos para ver os parâmetros disponíveis')
                            break;

                    }
                    break;

                case 'ban':
                    random = Math.floor(Math.random() * 100) + "%"
                    if (args[1] === 'help') {
                        canal.send('O comando ban lhe da uma porcentagem aleátoria de taxa de ban')
                        canal.send('Use o comandos para ver seus parâmetros')
                    } else if (args[1]) {
                        canal.send(`O ${args[1]} tem ${random} de chance de ser banido do servidor`)
                    } else {
                        canal.send(`O ${msg.author.username} tem ${random} de chance de ser banido do servidor`)
                    }
                    break;
                case 'comandos':
                    const commands = new Discord.MessageEmbed()
                        .setColor('##ffa500') // cor do ladinho
                        .setTitle('Lista de Comandos') //titulo
                        .setAuthor('MineBot')
                        .setDescription(`Apresentação dos comandos do bot e seus parâmetros ( Prefixo = ${process.env.prefix} )`)
                        .setThumbnail('https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b0/Impulse_Command_Block_JE3_BE1.png/revision/latest?cb=20191218141255')
                        .addFields(
                            { name: 'Comandos', value: comandos, inline: true },
                            { name: 'Parâmetros', value: parametros, inline: true },
                            { name: 'Help', value: 'Todos os comandos tem o parâmetro help' }
                        )
                        .setImage('https://i0.wp.com/www.i-tecnico.pt/wp-content/uploads/2017/02/Linha-de-comandos-001.png')
                    canal.send(commands)
                    break;
                case 'CoinFlip':
                    switch (args[1]) {
                        case 'cara':
                            canal.send('Então eu escolho coroa :coin:, GL HF')
                            canal.send('https://tenor.com/view/coin-toss-coin-toss-gif-5017733')
                            random = Math.floor(Math.random() * 2)
                            if (random == 1) {
                                setTimeout(function () { canal.send('Caiu cara :coin: , você ganhou! :crown: :clap: '); }, 2000);

                            } else {
                                setTimeout(function () { canal.send('Caiu coroa :coin: , você perdeu! :flushed: :clap: '); }, 2000);
                            }
                            break;
                        case 'coroa':
                            canal.send('Então eu escolho cara :coin:, GL HF')
                            canal.send('https://tenor.com/view/coin-toss-coin-toss-gif-5017733')
                            random = Math.floor(Math.random() * 2)
                            if (random == 1) {
                                setTimeout(function () { canal.send('Caiu coroa :coin: , você ganhou! :flushed: :clap: '); }, 2000);
                            } else {
                                setTimeout(function () { canal.send('Caiu cara :coin: , você perdeu! :flushed: :clap: '); }, 2000);
                            }
                            break;

                        case 'help':
                            canal.send('O comando CointFlip joga uma moeda pro alto e diz se caiu cara ou coroa')
                            canal.send('Use o comandos para ver seus parâmetros')
                            break;
                        default:
                            canal.send('Parâmetro não encontrado vadia, use o comandos para ver os parâmetros disponíveis')
                            break;
                    }
                    break;
                case 'calado':
                    if (args[1] === 'help') {
                        canal.send('O comando calado manda alguém calar a boca')
                        canal.send('Use o comandos para ver seus parâmetros')
                    } else if (args[1]) {
                        canal.send('https://tenor.com/view/rainn-wilson-shh-secret-prank-gif-17131726')
                        canal.send(`Calado ${args[1]}!!!!`)
                    } else {
                        canal.send('https://tenor.com/view/rainn-wilson-shh-secret-prank-gif-17131726')
                        canal.send('Calado quem quer que seja que o cara acima pediu pra calar!!!!!')
                    }
                    break;
                case 'ParOuImpar':
                    let result;
                    let perm;
                    args[2] = Number(args[2])
                    random = Math.floor(Math.random() * 10)
                    if (args[2] >= 0 && args[2] <= 10) {
                        perm = true
                        var total = args[2] + random
                        if (total % 2 == 0) {
                            result = 'par'
                        } else {
                            result = 'impar'
                        }
                    } else {
                        perm = false
                        canal.send('Valor inserido é inválido')
                    }
                    if (perm == true) {
                        switch (args[1]) {
                            case 'par':
                                canal.send('https://tenor.com/view/321shoot-vasudha-pandit-sheeba-chaddha-mirzapur-s2-%E0%A4%97%E0%A5%8B%E0%A4%B2%E0%A5%80%E0%A4%9A%E0%A4%B2%E0%A4%A8%E0%A4%BE-gif-18876677')
                                canal.send(`Eu escolhi ímpar e coloquei o valor ${random}, resultando num total de ${total}, sendo assim ${result}.`)
                                if (result == args[1]) {
                                    canal.send('Você ganhou!! :crown:')
                                } else {
                                    canal.send('Você perdeu!! :flushed:')
                                }
                                break;
                            case 'impar':
                                canal.send('https://tenor.com/view/321shoot-vasudha-pandit-sheeba-chaddha-mirzapur-s2-%E0%A4%97%E0%A5%8B%E0%A4%B2%E0%A5%80%E0%A4%9A%E0%A4%B2%E0%A4%A8%E0%A4%BE-gif-18876677')
                                canal.send(`Eu escolhi par e coloquei o valor ${random}, resultando num total de ${total}, sendo assim ${result}.`)
                                if (result == args[1]) {
                                    canal.send('Você ganhou!! :crown:')
                                } else {
                                    canal.send('Você perdeu!! :flushed:')
                                }
                                break;
                            case 'help':
                                canal.send('O comando ParOuImpar recebe 2 parâmetros, a sua escolha de aposta e o valor a ser jogado.')
                                canal.send('Use o comandos para ver seus parâmetros')
                                break;
                            default:
                                canal.send('Parâmetro não encontrado vadia, use o comandos para ver os parâmetros disponíveis')

                                break;
                        }
                    }
                    break;
                case 'joquempo':
                    
                    choice = ['pedra', 'papel', 'tesoura']
                    random = Math.floor(Math.random() * 3)
                    canal.send('https://tenor.com/view/piedra-papel-tijera-gif-9508217')
                    switch (args[1]) {
                        case 'papel':
                            if(choice[random] === 'pedra'){
                                canal.send('Você ganhou! :crown:')
                            }
                            if(choice[random] === 'papel'){
                                canal.send('Empate! :laughing:')
                            }
                            if(choice[random] === 'tesoura'){
                                canal.send('Você perdeu! :flushed:')
                            }
                            break;
                        case 'pedra':
                            if(choice[random] === 'tesoura'){
                                canal.send('Você ganhou! :crown:')
                            }
                            if(choice[random] === 'pedra'){
                                canal.send('Empate! :laughing:')
                            }
                            if(choice[random] === 'papel'){
                                canal.send('Você perdeu! :flushed:')
                            }
                            break;
                        case 'tesoura':
                            if(choice[random] === 'papel'){
                                canal.send('Você ganhou! :crown:')
                            }
                            if(choice[random] === 'tesoura'){
                                canal.send('Empate! :laughing:')
                            }
                            if(choice[random] === 'pedra'){
                                canal.send('Você perdeu! :flushed:')
                            }
                            break;
                        case 'help':
                            canal.send('O comando joquempo faz um jogo de pedra, papel e tesoura')
                            canal.send('Uso o comando comandos para ver os possiveis parâmetros')
                            break;

                        default:
                            canal.send('Parâmetro não encontrado vadia, use o comandos para ver os parâmetros disponíveis')
                            break;
                    }
                    break;
                default:
                    canal.send('Comando não encontrado vadia, use o comandos para ver os comandos disponíveis')
                    break;
            }
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