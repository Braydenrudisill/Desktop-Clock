console.log("from script.js")

function startTime() {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  var ampm = "null"
  if (h >= 12){
    ampm="pm"
    if(h!=12) h-=12
  }
  else ampm="am"
  document.getElementById('timer').innerText =
  h + ":" + m + ":"+s+ " " + ampm

  var t = setTimeout(startTime, 1000)
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
  return i
}
startTime()
