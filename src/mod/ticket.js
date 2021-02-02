const require = require('discord.js')

module.exports ={
    name: 'ticket',
    Description: 'creates a ticket',
    execute(client, message, args, Discord){

        const user = message.author.id
        const name = "ticket" + user;

        if(message.guild.channels.cache.fin(ch => ch.name == name)){
            message.channel.send("you already have an open ticket!")
        } else{
            message.guild.channels.create(name).then((chane) =>{
channel.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGE: false,
    VIEW_CHANNEL: false
})
            })
            channel.updateOverwrite(user, {
                SEND_MESSAGE: true,
                VIEW_CHANNEL: ftrue
            })
            message.channel.send("I have created a ticket for you!");
            chan.send("Support will be here soon!").the((m)=>{
                m.pin()
            })

        }
    }
}