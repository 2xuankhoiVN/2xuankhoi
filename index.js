const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'emerald.magmanode.com',
        port: 27608,
        username: 'Herobrine',
        auth: 'offline', // Cần nằm bên trong dấu ngoặc kép
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
    });

    // Event listener for when the bot disconnects
    bot.on('end', () => {
        console.log('Bot đã ngắt kết nối, khởi động lại bot...'); // Log to console
        setTimeout(createBot, 1000); // Recreate the bot after 1 second
    });

    // Event listener for when an error occurs
    bot.on('error', err => {
        console.error('Có lỗi xảy ra:', err);
        setTimeout(createBot, 1000); // Recreate the bot after 1 second
    });

    // Event listener for when the bot gets kicked
    bot.on('kicked', reason => {
        console.log('Bot đã bị kick với lý do:', reason);
        setTimeout(createBot, 1000); // Recreate the bot after 1 second
    });
}

// Start the bot for the first time
createBot();
