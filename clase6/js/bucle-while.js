const marcas = 
            [
                'Hermès','Zara','Boss',
                'Aeropostale','Kingin','Tomy',
                'Gola', 'Abercrombie', 'Topman',
                'H&M', 'Hollister', 'American Eagle',
                'Asos', 'Urban Outfitters', 'Old Navy',
                'Uniqlo'
            ]
/* Recorrer un array con un bucle while() */
let n = 0
while( n < marcas.length ){
    document.write( marcas[n], '<br>' )
    n++
}