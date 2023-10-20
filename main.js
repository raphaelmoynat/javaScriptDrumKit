
function keyDown(touche) {
    let keyLetter = document.getElementById(touche.key)
    if (keyLetter==null){
        return
    }
    let id = keyLetter.children[0].textContent
    let song = document.getElementById("son"+id)
    song.play()
    keyLetter.classList.add('yellow')
}

function keyUp(touche){
    let keyLetter = document.getElementById(touche.key)
    if (keyLetter==null){
        return
    }
    keyLetter.classList.remove('yellow')
}

document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)










