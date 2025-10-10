const ampliada = document.querySelector('#hero img')

const minis = document.querySelector('#minis')

btnUno = minis.children[0]
btnDos = minis.children[1]
btnTres = minis.children[2]
btnCuatro = minis.children[3]
btnCinco = minis.children[4]
btnSeis = minis.children[5]

btnUno.onclick = function() 
    {
        ampliada.src = 'imgs/mike-shinoda.jpg'
    }
btnDos.onclick = function() 
    {
        ampliada.src = 'imgs/joe-han.jpg'
    }
btnTres.onclick = function() 
    {
        ampliada.src = 'imgs/chester-benington.jpg'
    }
btnCuatro.onclick = function() 
    {
        ampliada.src = 'imgs/brad-delson.jpg'
    }
btnCinco.onclick = function() 
    {
        ampliada.src = 'imgs/rob-bourdon.jpg'
    }
btnSeis.onclick = function() 
    {
        ampliada.src = 'imgs/dave-phoenix-farrell.jpg'
    }