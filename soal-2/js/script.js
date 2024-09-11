const oldRequest = new Request('https://api.myquran.com/v1/sholat/jadwal/1204/2023/10/23')

let dataApi = fetch(oldRequest)

console.log(dataApi)
