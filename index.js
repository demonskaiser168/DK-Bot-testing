const Commando = require('discord.js');
const bot = new Commando.Client();
const TOKEN = "NDg1OTkwNTI3OTU5OTU3NTA0.Dm8qHg.T5yAfu8HoDApKpuEKyCy2OqDjyo";



bot.on('message', function(message)  {

 {
        var chance = Math.floor(Math.random() * 8);
        if ( chance == 1 ){
            message.react("♥");
        }else if ( chance == 2 ){
            message.react("😂");
        }else if ( chance == 3 ){
            message.react("😍");
        }else if ( chance == 4 ){
            message.react("😤");
        }else if ( chance == 5 ){
            message.react("👌");
        }
        else if ( chance == 6 ){
            message.react("💕");
        }else if ( chance == 7 ){
            message.react("💪");
        }
        
        else{
            message.react("😜");
        }
    

          }

    if(message.content == "<@339617934941093899>"){ 
        message.channel.sendMessage("hey Bro " + message.author + ", This is admin server ! Don't tag him !  ");
    }
    else if(message.content == "Hello"){
        message.reply("Hi gey, Good day to you" );
    }
    else if(message.content == "hello"){
        message.reply(" Hi gey, Good day to you");
    }
    else if(message.content == "<@485990527959957504> hello" ){
        message.reply(" Hi My Friends, Good luck for you ");
    }
    else if(message.content == "<@485990527959957504> Hello" ){
        message.reply(" Hi My Friends, Good luck for you ");
    }
 {
       

              }
});

bot.login(TOKEN);