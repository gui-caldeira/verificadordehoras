function carregar()
{
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#30a9b1'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#dd9353'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#20343b'
    }
}

