// querySelector
const para = document.querySelector('p')
const span = document.querySelector('p span')
const span2 = document.querySelector('h2 span')
const list = document.querySelector('ol :nth-child(3)')


let today = 'wednesday'
let myName = 'Abibat'


span.textContent = today
span2.textContent = myName
list.textContent = 'wheat'

// querySelectorAll
const paragraph = document.querySelectorAll('section p')
paragraph[0].textContent = 'capital of Nigeria Abuja'
paragraph[1].textContent = 'Nigeria is '
paragraph[2].textContent = 'The color of Nigeria flag is green and white'
paragraph[3].textContent = 'Nigeria culture is beautiful'

// getElementById

const hen = document.getElementById('hen')
hen.style.textTransform = 'upperCase'

const fowl = document.querySelectorAll('#hen')[0]
fowl.style.color = 'crimson'

// getElementByClassName
const ils = document.getElementsByClassName('you')
ils[0].innerText = 'eba'
ils[1].innerText = 'wheat'
ils[2].innerText = 'bread and beans'

// getElementByTag
const collection = document.getElementsByTagName('p')
collection[1].style.textDecoration = 'line-through'
collection[3].style.textDecoration = 'line-through'


