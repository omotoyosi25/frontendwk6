// length of String
const song = document.querySelector('h2')
let note = song.textContent
const lists = document.querySelectorAll('ol li')


// length of String
lists[0].innerText = `String length: ${note.length}`

// uppercase
lists[1].innerText = `change to uppercase: ${note.toUpperCase()}`

// lowercase
lists[2].innerText = `change to lowerCase: ${note.toLowerCase()}`

// indexof
lists[3].innerText = `Dog index is: ${note.indexOf('dog')}`
lists[4].innerText = `Dogs index is: ${note.indexOf('dogs')}`
lists[5].innerText = `First index of 'e' is: ${note.indexOf('e')}`
lists[7].innerText = `Next index of 'e' is: ${note.indexOf('e', 3)}`
lists[8].innerText = `Next index of 'e' is: ${note.indexOf('e', 29)}`

// lastIndexOf
lists[6].innerText = `The last index of "e" is: ${note.lastIndexOf('e')}`

// split
lists[9].innerHTML = `Remove all the spaces on this text: [${note.split(' ')}]`

// Slice
lists[10].innerHTML = `"${note.slice(note.indexOf('q'), note.indexOf('j'))}`

// replace
lists[11].innerText = `Replace quick with slow: ${note.replace('quick', 'slow')}`

// replaceAll
lists[12].innerText = `Replace all 'o' with 'x': ${note.replaceAll('o', 'x')}`

// chart
lists[13].innerText = `The character at 20 is: ${note.charAt(20)}`

// repeat
lists[14].innerHTML = `Repeat 'for' 4x: ${'fox '.repeat(4)}`
lists[15].innerHTML = `Repeat 'quick' 4x: ${note.slice (note.indexOf('q'), note.indexOf('k')+1).repeat(4)}`

// includes
lists[16].innerHTML = `Does our note contain fox: ${note.includes('fox')}`
lists[17].innerHTML = `Does our note contain goat: ${note.includes('goat')}`

// startsWith
lists[18].innerHTML = `Does it start with 'The': ${note.startsWith
('The')}`

// endswith
lists[19].innerHTML = `Does it end with 'e': ${note.endsWith
('e')}`
lists[20].innerHTML = `Does it end with 'dog': ${note.endsWith
('dog')}`




