const Discord = require("discord.js");
const bot = new Discord.Client();


let userStatus = [];
bot.on("presenceUpdate", (oldMember, newMember) => {
    let username = newMember.user.username;
    let status = newMember.user.presence.status;
    // get a reference to all channels in the user's guild
    let guildChannels = newMember.guild.channels;
    let guildroles = newMember.guild.roles;
    
    
  let bicon = newMember.user.displayAvatarURL;
  let bicon2 = bot.user.displayAvatarURL;  
  
  let usergames ="";
        
  //let akusergames = usergames.find(`name`, "AK - Member");
  //let dnusergames = usergames.find(`name`, "DN - Member");
  //let gcusergames = usergames.find(`name`, "GC - Member");
  //let rousergames = usergames.find(`name`, "RO - Member");
  
  //if(akusergames) return usergames = usergames + "Aura Kingdom, ";
  //if(dnusergames) return usergames = usergames + "Dragon Nest, ";
  //if(gcusergames) return usergames = usergames + "Grand Chase, ";
  //if(rousergames) return usergames = usergames + "Ragnarok, ";
  
  if(usergames == ""){ 
  return usergames = usergames + "N/A, ";  
  }
    
    
    if(oldMember.presence.status == newMember.presence.status && newMember.presence.status == "offline"){
        
        
        
        let botembed = new Discord.RichEmbed()
        .setDescription(`<@${newMember.user.id}>`)
        .addField("Username", `${newMember.user.username}`)
        .addField("Tag", `${newMember.user.tag}`)
        .addField("ID", `${newMember.user.id}`)
        .addField("Games", `N/A`)
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
    .addField("Games", `N/A`)
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
