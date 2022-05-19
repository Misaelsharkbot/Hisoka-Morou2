/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['51977783315']
global.premium = ['']
global.packname = '꧁⃟🇵🇪᭄͢✞Misael✞᭄͢🇵🇪⃟꧂'
global.author = ''
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ 𝐄𝐱𝐢𝐭𝐨',
    admin: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐬𝐚𝐝𝐨 𝐩𝐨𝐫 𝐮𝐧 𝐚𝐝𝐦𝐢𝐧!',
    botAdmin: '𝐄𝐥 𝐛𝐨𝐭 𝐝𝐞𝐛𝐞 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧 𝐩𝐚𝐫𝐚 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨',
    owner: '𝐄𝐬 𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐨 𝐩𝐨𝐫 𝐞𝐥 𝐩𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨',
    group: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐨 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬!',
    private: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐨 𝐞𝐧 𝐩𝐫𝐢𝐯',
    bot: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐨 𝐩𝐨𝐫 𝐞𝐥 𝐛𝐨𝐭',
    wait: '𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨...',
    endLimit: '𝐒𝐮 𝐥í𝐦𝐢𝐭𝐞 𝐝𝐢𝐚𝐫𝐢𝐨 𝐡𝐚 𝐞𝐱𝐩𝐢𝐫𝐚𝐝𝐨, 𝐞𝐥 𝐥í𝐦𝐢𝐭𝐞 𝐬𝐞 𝐫𝐞𝐬𝐭𝐚𝐛𝐥𝐞𝐜𝐞𝐫á 𝐜𝐚𝐝𝐚 𝟏𝟐 𝐡𝐨𝐫𝐚𝐬𝐋𝐢𝐦𝐢𝐭 𝐇𝐚𝐫𝐢𝐚𝐧 𝐀𝐧𝐝𝐚 𝐓𝐞𝐥𝐚𝐡 𝐇𝐚𝐛𝐢𝐬, 𝐋𝐢𝐦𝐢𝐭 𝐀𝐤𝐚𝐧 𝐃𝐢𝐫𝐞𝐬𝐞𝐭 𝐒𝐞𝐭𝐢𝐚𝐩 𝐉𝐚𝐦 𝟏𝟐',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
