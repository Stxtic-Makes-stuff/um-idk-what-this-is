module.exports ={
    name: 'help',
    description: 'help commmand',
    execute(client, message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#E34234')
    .setTitle('Game-Help')
    .setURL('https://www.youtube.com/channel/UCcKyaalVLOG2fsLE00hObwg')
    .setDescription('Get help about this bot')
    .addFields(
        {name: 'Snake', value: 'play snake'},
        {name:'minesweeper', value: 'play minesweeper'},
        {name: 'connect4', value: 'play connect4'},
        {name: 'hangman', value: 'play hangman'},
        {name: 'chess', value: 'play chess'},
        {name: 'Warning', value: 'Games are in progress! please do not use!'}


        .setFooter(' make sure to invite this bot to your server do "$invite"')
    )
        message.channel.send(newEmbed);
    
    }
}