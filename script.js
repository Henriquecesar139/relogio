function horario() {
  data = new Date()
  horas = data.getHours()
  minutos = data.getMinutes()
  segundos = data.getSeconds()
  dia = data.getDate()
  mes = data.getMonth()
  ano = data.getFullYear()

  if (segundos < 10) {segundos = '0' + segundos}
  if (minutos < 10) {minutos = '0' + minutos} 
  if (horas < 10) {horas = '0' + horas} 
  if (dia < 10) {dia = '0' + dia}
  if (mes < 10) {mes = '0' + mes}

  document.getElementById("hora").innerText = horas + ": " + minutos + " : " + segundos;

  document.getElementById("data").innerText = dia + ' / ' + mes + ' / ' + ano

}

timer = setInterval(horario, 1000)
