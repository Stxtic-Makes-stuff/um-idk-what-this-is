module.exports ={
    name: 'kick',
descriptions: "kicks member",
execute(client, message, args, Discord){
const member = members.mention.user.first()
if(member){
    const memberTarger = message.guild.members.cache.get(member.id);
    memberTarger.kick();
    message.channel.send('user has been kicked')
}else{
    messages.channel.send('you couldnt kick that member')

}
}
}
