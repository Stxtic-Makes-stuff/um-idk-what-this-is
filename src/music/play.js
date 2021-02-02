const ytdl = require(ytdl-core);
const ytSearch = require('yt-search');
const { execute } = require('./ban');

module.exports ={
    name: "play",
    description: 'music',
    execute(client, message, args, Discord){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('you need to be in a voice channel to listen to music')
        const permissions = voiceChannel.permessionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('you do not have the correct permissions to execute this command');
        if(!permissions.has('SPEAK')) return message.channel.send('you do not have the correct permissions to execute this command')
        if(!args.length) return message.channel.send('you need to send the second arguement')

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }

        const video = await videoFinder(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'})
            connection.play(stream, {seek: 0,volume: 1 })
            .on('finish', () =>{
                voiceChannel.leave();
            });

            await message.reply(':thhumbsup: Now Playing ***${video.title)***');
        }else{
                message.channel.send('no results found try again');
            }
        

        
    }

}