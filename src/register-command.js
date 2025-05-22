const { REST, Routes } = require('discord.js');
const { token, clientId, guildId } = require('./config.json');

const commands = [
  {
    name: 'start-daily',
    description: 'Trigger the daily news + check-in message.',
  }
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Registering slash command...');
    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    );
    console.log('✅ Slash command registered successfully!');
  } catch (err) {
    console.error('❌ Error:', err);
  }
})();
