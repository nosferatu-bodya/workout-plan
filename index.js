
if(localStorage.getItem('str')) {
    importStr(localStorage.getItem('str'))
}

document.querySelector('.export').addEventListener('click', () => {
    const str = toOneStr()
    navigator.clipboard.writeText(str)
    localStorage.setItem('str', str)

    alert('copied to clipboard')
})

document.querySelector('.import').addEventListener('click', () => {
    const textarea = document.querySelector('.input-str');
    const str = textarea.value
    importStr(str)
    textarea.value = ''
})

function toOneStr() {
    const textareas = document.querySelectorAll('.day textarea')
    const contents = []
    textareas.forEach(t => contents.push(t.value))
    const str = contents.join('|')
    return str
}

function importStr(str) {
    const contents = str.split('|')
    const textareas = document.querySelectorAll('.day textarea')
    textareas.forEach((t, i) => {
        t.value = contents[i]
    })
}