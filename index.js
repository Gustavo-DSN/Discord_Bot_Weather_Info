require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const axios = require("axios");

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.once("ready", () => {
	console.log(`Bot logado como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
	if (message.content.startsWith("!tempo")) {
		const cidade = message.content.split("!tempo ")[1];

		if (!cidade)
			return message.reply(
				"Por favor, informe uma cidade. Ex: !tempo São Paulo"
			);

		try {
			const response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${process.env.WEATHER_API_KEY}&units=metric&lang=pt_br`
			);
			const dados = response.data;

			const clima = `🌡️ Temperatura em ${dados.name}: ${dados.main.temp}°C\n☁️ Condição: ${dados.weather[0].description}`;
			message.reply(clima);
		} catch (error) {
			message.reply("Não consegui encontrar a cidade informada 😕");
		}
	}
});

client.login(process.env.DISCORD_TOKEN);
