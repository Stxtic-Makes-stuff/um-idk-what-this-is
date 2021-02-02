
module.exports ={
    name: 'leave',
    description: 'leaves lol',
async(client, message, args, Discord){
    const voiceChannel = message.member.voice.channel;

    if(!voiceChannel) return message.channel.send('you need to be in a voice channel to stop the music!')
    await message.channel.send('leaving channel :smiling_face_with_tear:')
}

}