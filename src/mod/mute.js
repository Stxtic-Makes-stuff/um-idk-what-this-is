const ms = require('ms');
module.exports = {
    name: 'Mute',
    description: "Mutes a member",
    execute(client, message, args, Discord){
        const target = message.members.first()
        if(target){
    let mainRole = message.guild.roles.cache.find() (role => role.name='member')
    let muteRole = message.guild.roles.cache.find() (role => role.name='muted')

    let memberTarget = message.guild.members.cache.get(target.id);

    if(!args[1]){
        memberTarget.roles.add(mutedRole.id)
    message.channel.send(`<@${memberTarget.User.id}> has been muted for {ms(ms(args[1]))}`);
    return
    setTimeout(function(){
        memberTarget.roles.add(memberRole.id)
        message.channel.send(`<@${memberTarget.User.id}> has been unmuted`)
    })
    }

    memberTarget.roles.add(mutedRole.id)
    message.channel.send(`<@${memberTarget.User.id}> has been muted`);
        }else{
            message.channel.send('cant find member');
        }
     }
 }
