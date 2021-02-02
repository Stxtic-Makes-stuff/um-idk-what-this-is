const { id } = require("common-tags");

module.exports = {
    name: 'ban',
    description: "this bans a member lol",
    execute(client, message, args, Discord){
        const members = members.mentions.user.first();
        if(member){
            const memberTarger = message.guild.members.cache.get('member.id');
            member.targer.ban();
            message.channel.send("user has been banned lol")
        }else{
            
message.channel.send('you cant ban that member')
            
        }
     }
 }
