const Discord = require('discord.js');


exports.run = function(client, message) {
    const help = new Discord.RichEmbed()
      .setDescription('Komutlar')
      .setColor('#40FF00')
      .addField('>ping','Botun pingini gösterir')
      .addField('>reboot','Botu yeniden başlatır (Yanlızca yetkili kişiler yapabilir.)')
      .addField('>botinfo','Bot hakkında bilgi verir.')
      .addField('>serverinfo','Server hakkında bilgi verir.')
      .addField('>avatarım','Avatarınızı gönderir')
      .addField('>8ball',"Barış Demirciden Çalıntı Değildir :face_palm: : 8ball oynar")
      .addField('>oyunseç','Belirlenmiş oyunları seçip sizi oyun seçmekten kurtarır.');
      
    message.channel.send(help);

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['help','HELP'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'help', //adını belirledik (kullanmak için gereken komut)
  description: 'Bot yardımı', //açıklaması
  usage: 'help' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz