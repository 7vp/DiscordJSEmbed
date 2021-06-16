client.on('message', message => {
  if (message.content === 'e!hello') { // When Message 'e! hello'
   
    const embed = new MessageEmbed() // Create a new const for the embed
      .setTitle('Excelent title') // Title for the embed
      .setDescription('Such a epic description..') // Description
      .setColor(0xff0000) // Color (Use Hex Color)
      .setFooter('This is an epic footer!'); // Footer
    message.channel.send(embed); // Send the Embed already specified in line 4
  } // Void
}); // Close

// Based on the DOCS. 
// Vicen // @Vicensk
