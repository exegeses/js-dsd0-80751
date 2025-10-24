const marcas = 
        [
            'Hermès','Zara','Boss',
            'Aeropostale','Kingin','Tomy',
            'Gola', 'Abercrombie', 'Topman',
            'H&M', 'Hollister', 'American Eagle',
            'Asos', 'Urban Outfitters', 'Old Navy',
            'Uniqlo'
        ]

// Ubicamos elementos dentro del DOM
const rotador = document.querySelector('#rotador')
    const anterior  = rotador.children[0]
    const span  = rotador.children[1]
    const siguiente = rotador.children[2]

// estado inicial: Ver el nombre de una marca en el span
let indice = 7
span.textContent = marcas[indice]

// control
anterior.onclick = () => 
                    {
                        indice --
                        if( indice < 0 ){
                            indice = marcas.length - 1
                        }
                        span.textContent = marcas[indice]
                    }
siguiente.onclick = () => 
                    {
                        indice ++
                        if( indice > marcas.length - 1 ){
                            indice = 0
                        }
                        span.textContent = marcas[indice]
                    }                    