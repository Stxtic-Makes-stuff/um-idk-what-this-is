module.exports = {
    name: 'unmute',
    description: "unMutes a member",
    execute(client, message, args, Discord){
        const target = message.members.first()
        if(target){
    let mainRole = message.guild.roles.cache.find() (role => role.name='member')
    let muteRole = message.guild.roles.cache.find() (role => role.name='muted')

    let memberTarget = message.guild.members.cache.get(target.id);


    memberTarget.roles.remove(mutedRole.id)
    message.channel.send(`<@${memberTarget.User.id}> has been muted`)
        }else{
            message.channel.send('cant find member');
        }
     }
 }
