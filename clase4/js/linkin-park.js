// Ubicamos elementos dentro del DOM
// imagen ampliada
const ampliada = document.querySelector('#hero img')
//miniaturas
const minis = document.querySelector('#minis')
    btnUno = minis.children[0]
    btnDos = minis.children[1]
    btnTres = minis.children[2]
    btnCuatro = minis.children[3]
    btnCinco = minis.children[4]
    btnSeis = minis.children[5]

function cambiarImagen( imagen )
{
   //ampliada.src = 'imgs/'+imagen+'.jpg'
   ampliada.src = `imgs/${imagen}.jpg`
}

//controles
btnUno.onclick = function()
                 {
                     cambiarImagen('mike-shinoda')
                    //ampliada.src = 'imgs/mike-shinoda.jpg'
                 }
btnDos.onclick = function()
                 {
                     cambiarImagen('joe-han')
                    //ampliada.src = 'imgs/joe-han.jpg'
                 }
btnTres.onclick = function()
                 {
                     cambiarImagen('chester-benington')
                    //ampliada.src = 'imgs/chester-benington.jpg'
                 }
btnCuatro.onclick = function()
                 {
                    cambiarImagen('brad-delson')
                    //ampliada.src = 'imgs/brad-delson.jpg'
                 }
btnCinco.onclick = function()
                 {
                     cambiarImagen('rob-bourdon')
                    //ampliada.src = 'imgs/rob-bourdon.jpg'
                 }
btnSeis.onclick = function()
                 {
                     cambiarImagen('dave-phoenix-farrell')
                    //ampliada.src = 'imgs/dave-phoenix-farrell.jpg'
                 }

