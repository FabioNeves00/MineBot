const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
require('dotenv/config');

let prefix = process.env.prefix;


var comandos = ['escoliose', 'monki', 'ban', 'comandos', 'CoinFlip', 'calado', 'ParOuImpar', 'joquempo', 'animal'];
var parametros = ['None', 'flip, ice', 'None, @usuario', 'None', 'cara, coroa', '@usuario', 'par, impar, valor', 'pedra, papel ou tesoura', 'None, cat, dog ou fox'];
var choice;
var cor = '#4CBD49';

client.on('ready', () => {
    console.log('Logged as => ' + client.user.tag);
    client.user.setActivity('Fabo ta testando', { type: 'WATCHING' })

})

client.on("message", async msg => {
    let random;
    if (msg.author.id != client.user.id) {
        message = msg.content.split('')
        if (message[0] === prefix) {
            message.splice(0, 1)
            message = message.join('')
            var args = message.trim().split(" ");
            switch (args[0]) {
                case 'comandos':
                    const commands = new Discord.MessageEmbed()
                        .setColor(cor) // cor do ladinho
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
                    msg.channel.send(commands)
                    break;
                case 'escoliose':
                    escoliose(args[1], msg)
                    break;
                case 'monki':
                    monki(args, msg)
                    break;
                case 'ban':
                    ban(args, msg)
                    break;
                case 'CoinFlip':
                    coin_flip(args, msg)
                    break;
                case 'calado':
                    calado(args, msg)
                    break;
                case 'ParOuImpar':
                    par_ou_impar(args, msg)
                    break;
                case 'joquempo':
                    joquempo(args[1], msg)
                    break;
                case 'animal':
                    animal(args[1], msg)
                    break;
                default:
                    const notFound = new Discord.MessageEmbed()
                        .setColor(cor)
                        .setTitle('Ajuda: Comando não encontrado')
                        .setAuthor('Mine Bot')
                        .addFields(
                            { name: 'Explicação', value: 'Comando não encontrado linda, use o ?comandos para ver os comandos disponíveis' },
                        )
                        .setImage('https://tenor.com/view/quby-chan-confused-huh-what-what-is-it-gif-17010842')
                        .setFooter('Mine Bot');
                    msg.channel.send(notFound)
                    break;
            }
        }
    }
})



function escoliose(arg, msg) {
    if (arg === 'help') {
        const help = new Discord.MessageEmbed()
            .setColor(cor)
            .setTitle('Ajuda: escoliose')
            .setAuthor('Mine Bot')
            .addFields(
                { name: 'Explicação', value: 'Envia uma mensagem proibida em 126 países' },
                { name: 'Parâmetros', value: 'nada', inline: true },
                { name: 'Exemplo', value: '?escoliose' }
            )
            .setImage('http://images.unsplash.com/photo-1474511320723-9a56873867b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cmVkJTIwZm94fHwwfHx8fDE2MjQwNDM5MTA&ixlib=rb-1.2.1&q=80&w=1080')
            .setFooter('Mine Bot');
        msg.channel.send(help)
    }
    const escoliose = new Discord.MessageEmbed()
        .setColor(cor) // cor do ladinho
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
}



async function animal(arg, msg) {
    let api = ['https://aws.random.cat/meow', 'https://random.dog/woof.json', 'https://randomfox.ca/floof/', 'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true']
    if (arg) {
        switch (arg) {
            case 'cat':
                const { file } = await fetch(api[0]).then(response => response.json());
                msg.channel.send(file)
                break;
            case 'dog':
                const { url } = await fetch(api[1]).then(response => response.json());
                msg.channel.send(url)
                break;
            case 'fox':
                const { image } = await fetch(api[2]).then(response => response.json());
                msg.channel.send(image)
                break;
            case 'help':
                const help = new Discord.MessageEmbed()
                    .setColor(cor)
                    .setTitle('Ajuda: animal')
                    .setAuthor('Mine Bot')
                    .addFields(
                        { name: 'Explicação', value: 'Envia uma foto de um gato ou cachorro ou raposa no chat' },
                        { name: 'Parâmetros', value: 'fox, dog, cat, nada', inline: true },
                        { name: 'Exemplo', value: '?animal fox' }
                    )
                    .setImage('http://images.unsplash.com/photo-1474511320723-9a56873867b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cmVkJTIwZm94fHwwfHx8fDE2MjQwNDM5MTA&ixlib=rb-1.2.1&q=80&w=1080')
                    .setFooter('Mine Bot');
                msg.channel.send(help)
                break;
            default:
                const notFound = new Discord.MessageEmbed()
                    .setColor(cor)
                    .setTitle('Ajuda: Parâmetro não encontrado')
                    .setAuthor('Mine Bot')
                    .addFields(
                        { name: 'Explicação', value: 'Parâmetro não encontrado linda, use o parâmetro help para ver os parâmetros disponíveis' },
                    )
                    .setImage('https://tenor.com/view/quby-chan-confused-huh-what-what-is-it-gif-17010842')
                    .setFooter('Mine Bot');
                msg.channel.send(notFound)
                break;
        }
    } else {
        random = Math.floor(Math.random() * api.length)
        console.log(random, api[random]);
        switch (random) {
            case 0:
                const { file } = await fetch(api[random]).then(response => response.json());
                msg.channel.send(file)
                break;
            case 1:
                const { url } = await fetch(api[random]).then(response => response.json());
                msg.channel.send(url)
                break;
            case 2:
                const { image } = await fetch(api[random]).then(response => response.json());
                msg.channel.send(image)
                break;
            case 3:
                const img = await fetch(api[random]).then(response => response.json());
                msg.channel.send(img[0])
                break;
            default:
                break;
        }
    }
}



function joquempo(arg, msg)
{
    choice = ['pedra', 'papel', 'tesoura']
    botBet = choice[Math.floor(Math.random() * 3)]

    if (arg == 'pedra' || arg == 'papel' || arg == 'tesoura' || arg == 'help')
    {
        if (arg == botBet) {
            msg.channel.send('https://tenor.com/view/piedra-papel-tijera-gif-9508217') 
            msg.channel.send(`Eu joguei ${botBet}, empate! :laughing:`)
        }
        else if ((arg == 'pedra' && botBet == 'tesoura') || (arg == 'papel' && botBet == 'pedra') || (arg == 'tesoura' && botBet == 'papel')) {
            msg.channel.send('https://tenor.com/view/piedra-papel-tijera-gif-9508217') 
            msg.channel.send(`Eu joguei ${botBet}, você ganhou! :crown:`)
        }
        else if (arg == 'help')
        {
            const help = new Discord.MessageEmbed()
                .setColor(cor)
                .setTitle('Ajuda: ParOuImpar')
                .setAuthor('Mine Bot')
                .addFields(
                    { name: 'Explicação', value: 'É um 1v1 de pedra, papel ou tesoura contra o bot' },
                    { name: 'Parâmetros', value: 'pedra, papel ou tesoura', inline: true },
                    { name: 'Exemplo', value: '?joquempo pedra' }
                )
                .setImage('https://tenor.com/view/piedra-papel-tijera-gif-9508217')
                .setFooter('Mine Bot');
            msg.channel.send(help)
            break;
        } else {
            msg.channel.send('https://tenor.com/view/piedra-papel-tijera-gif-9508217') 
            msg.channel.send(`Eu joguei ${botBet}, você perdeu! :flushed:`)
        }
    } else {
        const notFound = new Discord.MessageEmbed()
            .setColor(cor)
            .setTitle('Ajuda: Parâmetro não encontrado')
            .setAuthor('Mine Bot')
            .addFields(
                { name: 'Explicação', value: 'Parâmetro não encontrado linda, use o parâmetro help para ver os parâmetros disponíveis' },
            )
            .setImage('https://tenor.com/view/quby-chan-confused-huh-what-what-is-it-gif-17010842')
            .setFooter('Mine Bot');
        msg.channel.send(notFound)
        break;
    }
}



function par_ou_impar(args, msg) {
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
    } else if (args[2]) {
        perm = false
        const notFound = new Discord.MessageEmbed()
            .setColor(cor)
            .setTitle('Ajuda: Valor Inválido')
            .setAuthor('Mine Bot')
            .addFields(
                { name: 'Explicação', value: 'Valor Inválido linda, adicione um valor para poder jogar contra o bot' },
            )
            .setImage('https://tenor.com/view/quby-chan-confused-huh-what-what-is-it-gif-17010842')
            .setFooter('Mine Bot');
        msg.channel.send(notFound)
    }
    if (args[1] === 'help') {
        const help = new Discord.MessageEmbed()
            .setColor(cor)
            .setTitle('Ajuda: ParOuImpar')
            .setAuthor('Mine Bot')
            .addFields(
                { name: 'Explicação', value: 'É um 1v1 de par ou impar contra o bot' },
                { name: 'Parâmetros', value: 'par ou impar, valor', inline: true },
                { name: 'Observação', value: 'É obrigátorio o envio um valor na mensagem, que seja menor que 10 e maior que -1' },
                { name: 'Exemplo', value: '?ParOuImpar par 10' }
            )
            .setImage('https://tenor.com/view/321shoot-vasudha-pandit-sheeba-chaddha-mirzapur-s2-%E0%A4%97%E0%A5%8B%E0%A4%B2%E0%A5%80%E0%A4%9A%E0%A4%B2%E0%A4%A8%E0%A4%BE-gif-18876677')
            .setFooter('Mine Bot');
        msg.channel.send(help)
    }
    if (perm == true) {
        switch (args[1]) {
            case 'par':
                msg.channel.send('https://tenor.com/view/321shoot-vasudha-pandit-sheeba-chaddha-mirzapur-s2-%E0%A4%97%E0%A5%8B%E0%A4%B2%E0%A5%80%E0%A4%9A%E0%A4%B2%E0%A4%A8%E0%A4%BE-gif-18876677')
                msg.channel.send(`Eu escolhi ímpar e coloquei o valor ${random}, resultando num total de ${total}, sendo assim ${result}.`)
                if (result == args[1]) {
                    msg.channel.send('Você ganhou!! :crown:')
                } else {
                    msg.channel.send('Você perdeu!! :flushed:')
                }
                break;
            case 'impar':
                msg.channel.send('https://tenor.com/view/321shoot-vasudha-pandit-sheeba-chaddha-mirzapur-s2-%E0%A4%97%E0%A5%8B%E0%A4%B2%E0%A5%80%E0%A4%9A%E0%A4%B2%E0%A4%A8%E0%A4%BE-gif-18876677')
                msg.channel.send(`Eu escolhi par e coloquei o valor ${random}, resultando num total de ${total}, sendo assim ${result}.`)
                if (result == args[1]) {
                    msg.channel.send('Você ganhou!! :crown:')
                } else {
                    msg.channel.send('Você perdeu!! :flushed:')
                }
                break;
            default:
                const notFound = new Discord.MessageEmbed()
                    .setColor(cor)
                    .setTitle('Ajuda: Parâmetro não encontrado')
                    .setAuthor('Mine Bot')
                    .addFields(
                        { name: 'Explicação', value: 'Parâmetro não encontrado linda, use o parâmetro help para ver os parâmetros disponíveis' },
                    )
                    .setImage('https://tenor.com/view/quby-chan-confused-huh-what-what-is-it-gif-17010842')
                    .setFooter('Mine Bot');
                msg.channel.send(notFound)

                break;
        }
    }
}



function calado(args, msg) {
    if (args[1] === 'help') {
        const help = new Discord.MessageEmbed()
            .setColor(cor)
            .setTitle('Ajuda: calado')
            .setAuthor('Mine Bot')
            .addFields(
                { name: 'Explicação', value: 'Manda alguém ficar calado' },
                { name: 'Parâmetros', value: '@ do usuário, nada', inline: true },
                { name: 'Exemplo', value: '?calado @MineBot#0001' }
            )
            .setImage('https://tenor.com/view/rainn-wilson-shh-secret-prank-gif-17131726')
            .setFooter('Mine Bot');
        msg.channel.send(help)
    } else if (args[1]) {
        msg.channel.send('https://tenor.com/view/rainn-wilson-shh-secret-prank-gif-17131726')
        msg.channel.send(`Calado ${args[1]}!!!!`)
    } else {
        msg.channel.send('https://tenor.com/view/rainn-wilson-shh-secret-prank-gif-17131726')
        msg.channel.send(`Calado quem quer que seja que o ${msg.author.username} pediu pra calar!!!!!`)
    }
}



function coin_flip(args, msg) {
    switch (args[1]) {
        case 'cara':
            msg.channel.send('Então eu escolho coroa :coin:, GL HF')
            msg.channel.send('https://tenor.com/view/coin-toss-coin-toss-gif-5017733')
            random = Math.floor(Math.random() * 2)
            if (random == 1) {
                setTimeout(function () { msg.channel.send('Caiu cara :coin: , você ganhou! :crown: :clap: '); }, 2000);

            } else {
                setTimeout(function () { msg.channel.send('Caiu coroa :coin: , você perdeu! :flushed: :clap: '); }, 2000);
            }
            break;
        case 'coroa':
            msg.channel.send('Então eu escolho cara :coin:, GL HF')
            msg.channel.send('https://tenor.com/view/coin-toss-coin-toss-gif-5017733')
            random = Math.floor(Math.random() * 2)
            if (random == 1) {
                setTimeout(function () { msg.channel.send('Caiu coroa :coin: , você ganhou! :flushed: :clap: '); }, 2000);
            } else {
                setTimeout(function () { msg.channel.send('Caiu cara :coin: , você perdeu! :flushed: :clap: '); }, 2000);
            }
            break;

        case 'help':
            const help = new Discord.MessageEmbed()
                .setColor(cor)
                .setTitle('Ajuda: CoinFlip')
                .setAuthor('Mine Bot')
                .addFields(
                    { name: 'Explicação', value: 'É um 1v1 de cara ou coroa contra o bot' },
                    { name: 'Parâmetros', value: 'cara, coroa', inline: true },
                    { name: 'Exemplo', value: '?CoinFlip coroa' }
                )
                .setImage('https://tenor.com/view/coin-toss-coin-toss-gif-5017733')
                .setFooter('Mine Bot');
            msg.channel.send(help)
            break;
        default:
            const notFound = new Discord.MessageEmbed()
                .setColor(cor)
                .setTitle('Ajuda: Parâmetro não encontrado')
                .setAuthor('Mine Bot')
                .addFields(
                    { name: 'Explicação', value: 'Parâmetro não encontrado linda, use o parâmetro help para ver os parâmetros disponíveis' },
                )
                .setImage('https://tenor.com/view/quby-chan-confused-huh-what-what-is-it-gif-17010842')
                .setFooter('Mine Bot');
            msg.channel.send(notFound)
            break;
    }
}



function ban(args, msg) {
    random = Math.floor(Math.random() * 100) + "%"
    if (args[1] === 'help') {
        const help = new Discord.MessageEmbed()
            .setColor(cor)
            .setTitle('Ajuda: ban')
            .setAuthor('Mine Bot')
            .addFields(
                { name: 'Explicação', value: 'Define uma porcentagem taxa de ban, aleátoria, para o usuário' },
                { name: 'Parâmetros', value: '@ do usuário, nada', inline: true },
                { name: 'Exemplo', value: '?ban @MineBot#0001' }
            )
            .setImage('https://tenor.com/view/elmo-fire-ban-syntheticllama-gif-21044291')
            .setFooter('Mine Bot');
        msg.channel.send(help)
    } else if (args[1]) {
        msg.channel.send(`O ${args[1]} tem ${random} de chance de ser banido do servidor`)
    } else {
        msg.channel.send(`O ${msg.author.username} tem ${random} de chance de ser banido do servidor`)
    }
}



function monki(args, msg) {
    switch (args[1]) {
        case 'help':
            const help = new Discord.MessageEmbed()
                .setColor(cor)
                .setTitle('Ajuda: monki')
                .setAuthor('Mine Bot')
                .addFields(
                    { name: 'Explicação', value: 'Envia um gif de mamaco no chat' },
                    { name: 'Parâmetros', value: 'flip, ice', inline: true },
                    { name: 'Exemplo', value: '?monki flip' }
                )
                .setImage('https://media.tenor.com/images/f8275fe31d37d85cc085d0f0bb79c2d5/tenor.gif')
                .setFooter('Mine Bot');
            msg.channel.send(help)
            break;
        case 'flip':
            msg.channel.send('https://media.tenor.com/images/f8275fe31d37d85cc085d0f0bb79c2d5/tenor.gif')
            break;
        case 'ice':
            msg.channel.send('https://media1.tenor.com/images/7644e771ae17d0221c10bfc0369b9719/tenor.gif?itemid=20254327')
            break;
        default:
            const notFound = new Discord.MessageEmbed()
                .setColor(cor)
                .setTitle('Ajuda: Parâmetro não encontrado')
                .setAuthor('Mine Bot')
                .addFields(
                    { name: 'Explicação', value: 'Parâmetro não encontrado linda, use o parâmetro help para ver os parâmetros disponíveis' },
                )
                .setImage('https://tenor.com/view/quby-chan-confused-huh-what-what-is-it-gif-17010842')
                .setFooter('Mine Bot');
            msg.channel.send(notFound)
            break;

    }
}

client.login(process.env.bot_secret_token)