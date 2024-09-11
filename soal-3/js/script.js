const jadwalSholat = {
status :true,
data :{"id":"1204","lokasi":"KAB. BOGOR","daerah":"JAWA BARAT",
kordinat :{"lat":-6.480247222222222,"lon":106.82325,"lintang":"6\u00b0 28' 48.89\" S","bujur":"106\u00b0 49' 23.7\" E"},
jadwal :{"tanggal":"Senin, 23/10/2023","imsak":"04:02","subuh":"04:12","terbit":"05:25","dhuha":"05:53","dzuhur":"11:41","ashar":"14:50","maghrib":"17:49","isya":"18:59","date":"2023-10-23"}}

}

document.getElementById('tanggal').innerHTML = jadwalSholat.data.jadwal.tanggal

document.getElementById('jadwalImsak').innerHTML = jadwalSholat.data.jadwal.imsak
document.getElementById('jadwalShubuh').innerHTML = jadwalSholat.data.jadwal.subuh
document.getElementById('jadwalTerbit').innerHTML = jadwalSholat.data.jadwal.terbit
document.getElementById('jadwalDhuha').innerHTML = jadwalSholat.data.jadwal.dhuha
document.getElementById('jadwalDzuhur').innerHTML = jadwalSholat.data.jadwal.dzuhur
document.getElementById('jadwalAshar').innerHTML = jadwalSholat.data.jadwal.ashar
document.getElementById('jadwalMaghrib').innerHTML = jadwalSholat.data.jadwal.maghrib
document.getElementById('jadwalIsya').innerHTML = jadwalSholat.data.jadwal.isya
