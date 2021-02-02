module.exports ={
    name: 'mod-help',
    description: 'makes embed',
    execute(client, message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#E34234')
    .setTitle('mod-help')
    .setURL('https://www.youtube.com/channel/UCcKyaalVLOG2fsLE00hObwg')
    .setDescription('Get help about this bot')
    .addFields(
        {name: 'mute', value: 'mutes user'},
        {name:'ban', value: 'bans user'},
        {name: 'unban', value: 'unban user'},
        {name: 'clear', value: 'clears messages'},
        {name: 'kick', value: 'kicks user'},
        {name: 'slowmode', value: 'enables slow mode'},
        {name: 'ticket', value: 'creates ticket'},
        {name: 'ticketend', value: 'ends ticket'},
        {name: 'unmute', value: 'unmutes user'}

        .setFooter(' make sure to invite this bot to your server do "$invite"')
    )
        message.channel.send(newEmbed);
    
    }
}