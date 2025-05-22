const { Client, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const makeWebhookURL = '🔗-Your-Make-webhook-URL';

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'start-daily') {
    try {
      await interaction.reply('📡 Starting your daily check-in + updates...');

      await fetch(makeWebhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          command: interaction.commandName,
          channel_id: interaction.channelId
        })
      });

      console.log('📤 Sent start-daily command to Make');
    } catch (err) {
      console.error('❌ Error forwarding to Make:', err);
      await interaction.followUp({ content: 'Something went wrong.', ephemeral: true });
    }
  }
});

client.login(token);
