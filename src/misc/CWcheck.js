require('dotenv').config();
const cod_api = require('call-of-duty-api')();

module.exports = {
    name: 'CWcheck',
    description: 'okay lol',
    async execute(client, message, args, Discord){
        if(!args[0]) return message.channel.send('Please enter a username');
        if(!args[1]) return message.channel.send('Please enter a platform');

        let username = process.env.COD_USERNAME;    
        let password = process.env.COD_PASSWORD

        try{
            await cod_api.login(username, password);
            let data = await cod_api.CWmp(args[0], args[1]);

            const embed = new Discord.MessageEmbed()
            .setColor('#00a0e1')
            .setTitle('COD Cold War Stats')
            .setDescription('COD stats')
            .addFields(
                {name: 'Games Played', value: data.Lifetime.all.properties.totalGamesPlayed, inline: true},
                {name: 'Wins', value: data.Lifetime.all.properties.wins, inline: true},
                {name: 'Losses', value: data.Lifetime.all.properties.losses, inline: true},
                {name: 'KD Ratio', value: data.Lifetime.all.properties.kdratio, inline: true},
                {name: 'Kills', value: data.Lifetime.all.properties.kills, inline: true},
                {name: 'Deaths', value: data.Lifetime.all.properties.deaths, inline: true},
                {name: 'Longest Kill Streak', value: data.Lifetime.all.properties.longestKillstreak},
                {name: 'Total Time Plated', value: (parseFloat(data.Lifetime.all.properties.timePlayedTotal / 3600).toFixed(2))+ "Hours"}

            )
            .setFooter('COD stats by Stxtic')

            message.channel.send(embed)

            console.log(data.lifetime.all.properties)
            }catch(error){
                
            }
        }
    }



