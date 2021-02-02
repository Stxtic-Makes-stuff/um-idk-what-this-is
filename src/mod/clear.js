const { execute } = require("./ban");

module.exports = {
    name: clearInterval,
    description: "clears messages",
    async execute(client, message, args, Discord){
        if(!args[0]) return message.reply("please enter amount of messages to clar 1-99");        
        if(isnon(args[0])) return message.reply("please enter a number 1-99");

        if(args[0] > 100) return message.reply('please enter an amount from 1-99');

        if(args[0] < 100) return message.reply('please enter an amount greater than 1')

        await message.channel.send.fetch({limit: args [0]}).then(messages =>{
            messages.channel.bulkDelete('messages')
        })
        
    }
   
}