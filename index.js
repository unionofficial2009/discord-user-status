const Discord = require("discord.js");
const bot = new Discord.Client();



bot.on("presenceUpdate", (oldMember, newMember) => {
    let userStatus = [];
    let userroles = "";
    let username = newMember.user.username;
    let status = newMember.user.presence.status;
    let guildChannels = newMember.guild.channels;
    let userrolessize = newMember.roles.filter(uroles => uroles.name != "@everyone").size;
    let bicon = newMember.user.displayAvatarURL;
    let bicon2 = bot.user.displayAvatarURL;  
    
      
    
    if(userrolessize == 0){
        
     userroles ="N/A";
        
    let botembed2 = new Discord.RichEmbed()
    .setDescription("Hello maam/sir welcome to UNION.")
    .addField("Instructions", "Please proceed to **#welcome** channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the rules/instructions in the **#welcome** channel to access the channels for specific game.")
    .addField("Need Help?", "Any problem, please DM **@UNION President  @UNION Vice President @UNION Officers @UNION Human Resources**.")
    .setColor("#15f153")
    .setTimestamp()
    .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed2);        
            
    } else {
       
    userroles = newMember.roles.filter(g => g.name != "@everyone").map(u=> `<@&${u.id}>`).join(", ");    
            
    }  
    
    if(oldMember.presence.status == newMember.presence.status && newMember.presence.status == "offline"){
        
        
          
        
        
        let botembed = new Discord.RichEmbed()
        .setDescription(`<@${newMember.user.id}>`)
        .addField("Username", `${newMember.user.username}`)
        .addField("Tag", `${newMember.user.tag}`)
        .addField("ID", `${newMember.user.id}`)
        .addField("Roles", `${userroles}`)
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Status", `${newMember.user.presence.status} (invisible)`)
        .setTimestamp()
        .setFooter("UNION User Status",bicon2);
        
        userStatus.push(username, status);
        guildChannels.find('name', 'user-status')
        .send(botembed)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
   
    } else {
  
    let botembed = new Discord.RichEmbed()
    .setDescription(`<@${newMember.user.id}>`)
    .addField("Username", `${newMember.user.username}`)
    .addField("Tag", `${newMember.user.tag}`)
    .addField("ID", `${newMember.user.id}`)
    .addField("Roles", `${userroles}`)
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Status", `${newMember.user.presence.status}`)
    .setTimestamp()
    .setFooter("UNION User Status",bicon2);    
        
    userStatus.push(username, status);
    guildChannels.find('name', 'user-status')
        .send(botembed)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
        
    }
});
  


bot.login(process.env.BOT_TOKEN);
