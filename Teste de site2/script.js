function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'baby_boy.png')
            }else if (idade > 10 && idade <= 18){
                //jovem
                img.setAttribute('src', 'young_boy.png')
            }else if (idade > 18 && idade <= 60){
                //adulto
                img.setAttribute('src', 'boy.png')
            }else {
                //idoso
                img.setAttribute('src', 'old_boy.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'baby_girl.png')
            }else if (idade > 10 && idade <= 18){
                //jovem
                img.setAttribute('src', 'young_girl.png')
            }else if (idade > 18 && idade <= 60){
                //adulto
                img.setAttribute('src', 'girl.png')
            }else {
                //idoso
                img.setAttribute('src', 'old_girl.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}