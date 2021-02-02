module.exports ={
    name: 'misc-help',
    description: 'makes embed',
    execute(client, message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setTitle('misc help')
    .setURL('https://www.youtube.com/channel/UCcKyaalVLOG2fsLE00hObwg')
    .setDescription('Get help about this bot')
    .addFields(
        {name: 'corona', value: 'gets covid-19 stats'},
        {name:'user-info', value: 'gets user info'},
        {name: 'ping', value: 'gets bots ping'},
        {name: 'bot-info', value: 'gets bot info'},
        {name: 'image', value: 'gets image from google'},
        {name: 'WZcheck', value: 'gets warzone stats'},
        {name: 'CWcheck', value: 'gets warzone stats'},
        {name: 'Bo4check', value: 'gets warzone stats'},
        {name: 'Invite', value: 'gets invite'}
        .setFooter(' make sure to invite this bot to your server do "$invite"')
    )
        message.channel.send(newEmbed);
    
    }
}





