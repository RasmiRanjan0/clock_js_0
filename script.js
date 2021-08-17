 //1
 setInterval(setClock, 1000)

 //2
 const hourHand = document.querySelector('[data-hour-hand]')
 const minuteHand = document.querySelector('[data-minute-hand]')
 const secondHand = document.querySelector('[data-second-hand]')

//1
 function setClock() {
     const currentDate = new Date()
     const secondsRatio = currentDate.getSeconds() / 60
     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
     //4
     setRotation(secondHand, secondsRatio)
     setRotation(minuteHand, minutesRatio)
     setRotation(hourHand, hoursRatio)
 }

 //3
 function setRotation(element, rotationRatio) {
     element.style.setProperty('--rotation', rotationRatio * 360)
 }

 //5
 setClock()