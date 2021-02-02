module.exports ={
    name: 'help',
    description: 'help commmand',
    execute(client, message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#E34234')
    .setTitle('Music Help')
    .setURL('https://www.youtube.com/channel/UCcKyaalVLOG2fsLE00hObwg')
    .setDescription('Get help about this bot')
    .addFields(
        {name: 'play', value: 'plays requested song'},
        {name:'leave leaves channel', value: 'gets game help/commands!'}
    
        .setFooter(' make sure to invite this bot to your server do "$invite"')
    )
        message.channel.send(newEmbed);
    
    }
}