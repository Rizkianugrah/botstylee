let handler = async (m, { 
conn 
}) => {
    let user = db.data.users[m.sender]
    let wm = global.wm
    let __timers = (new Date - user.lastgrab)
    let _timers = (10800000 - __timers)
    let timers = clockString(_timers) 
    
    if (user.stamina < 20) return m.reply('Stamina anda tidak cukup untuk bekerja\nharap isi stamina anda dengan _#eat_')
    if (user.lastgrab > 10800000) throw m.reply('Kamu masih kelelahan untuk bekerja\nHarap tunggu ${timers} lagi untuk kerja taxy')

let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
.trim()

let rbrb1 = (randomaku1 * 1000)
let rbrb2 = (randomaku2 * 10) 

baba1 = `${rbrb1}`
baba2 = `${rbrb2}`

beni = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🚕


✔️ Mendapatkan orderan....
`

beni2 = `
🚶🚕⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Mengantar ke tujuan....
`

beni3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🚕⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Sampai di tujuan....
`

beni4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🚕⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️ 🚶  


➕ 💹Menerima gaji....
`

hsl = `
*—[ Hasil Taxy ]—*

 ➕ 💹 Uang = [ ${baba1} ]
 ➕ ✨ Exp = [ ${baba2} ] 		 
 ➕ 📦 Order Selesai = +1

Dan stamina anda berkurang -20
${wm}
`
user.money += rbrb1
user.exp += rbrb2
user.stamina -= 20
	
setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${beni4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${beni3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${beni2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${beni}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('🔍Mencari pelanggan 🚕.....')
                     }, 0) 
  user.lastgrab = new Date * 1
}
handler.help = ['taxy']
handler.tags = ['rpg']
handler.command = /^(taxy|taxi|taki|taksi)$/i
handler.register = true
module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
