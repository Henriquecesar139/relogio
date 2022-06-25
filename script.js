function horario() {
  hora = new Date()
  horas = hora.getHours()
  minutos = hora.getMinutes()
  segundos = hora.getSeconds()

  document.getElementById("hora").innerText = horas + ": " + minutos + " : " + segundos;

  document.getElementById("data").innerText = hora.getDate() + ' / ' + hora.getMonth()

}



timer = setInterval(horario, 1000)
