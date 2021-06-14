client.on('message', message => {
  if (message.content === 'e!hello') {
   
    const embed = new MessageEmbed()
      .setTitle('Excelent title')
      .setDescription('Such a epic description..')
      .setColor(0xff0000)
      .setFooter('This is an epic footer!');
    message.channel.send(embed);
  }
});
// Based on the DOCS. 
// Kickeado // @kickeadoh
