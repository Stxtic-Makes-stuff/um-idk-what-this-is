const discord = reequier('discord.js')

module.exports ={
    name: 'ticketend',
    description: 'ends ticket',
    execute(client, message, args, Discord){
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("only a mod/admin can end a ticket")

if(!message.member.hasPermission("ADMINISTRATOR")) message.channel.delete()
    }
}