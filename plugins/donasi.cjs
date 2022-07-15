let handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [081387089252]
│ • DANA [-]
│ • OVO [083199789390]
│ • GOPAY [-]
│ • SHOPPY PAY [083199789390]
│ • Saweria [https://saweria.co/owneryusuf]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281387089252
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
