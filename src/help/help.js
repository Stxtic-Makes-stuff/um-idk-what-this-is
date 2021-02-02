module.exports ={
    name: 'help',
    description: 'help commmand',
    execute(client, message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#E34234')
    .setTitle('Help')
    .setURL('https://www.youtube.com/channel/UCcKyaalVLOG2fsLE00hObwg')
    .setDescription('Get help about this bot')
    .addFields(
        {name: 'Misc help', value: 'gets miscellaneus help/commands'},
        {name:'Game help', value: 'gets game help/commands!'},
        {name: 'Mod Help', value: 'gets mod help/commands'},
        {name: 'Music Help', value: 'gets music help/commands'}
        .setFooter(' make sure to invite this bot to your server do "$invite"')
    )
        message.channel.send(newEmbed);
    
    }
}