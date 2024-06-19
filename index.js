const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'emerald.magmanode.com',
        username: 'Herobrine',
        auth: 'offline',
        port: 27608,
    });

    // Function to pause execution for a given amount of milliseconds
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // Event listener for when the bot spawns in the world
    bot.on('spawn', async () => {
        bot.chat('/login toibingu123'); // Send login command
        await sleep(4000); // Wait for 4 seconds to ensure login is processed
        console.log('Đã nhập mk'); // Log to console

        
    // Event listener for when the bot disconnects
    bot.on('end', () => {
        console.log('Bot đã ngắt kết nối, khởi động lại bot...'); // Log to console
        setTimeout(createBot, 1000); // Recreate the bot after 1 second
    });
}

// Start the bot for the first time
createBot();
