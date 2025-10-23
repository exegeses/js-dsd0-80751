const n = 10
const PI = 3.141592
const fruta = 'manzana'
const b = true
const fecha = new Date()
const fn = function foo(){}
const nulo = null
// tipos de datos
console.log( typeof(n) )
console.log( typeof(PI) )
    console.log( 'es entero?', Number.isInteger(n) )
    console.log( 'es entero?', Number.isInteger(PI) )
console.log( typeof(fruta) )    
console.log( typeof(b) )    
console.log( typeof(fecha) )    
console.log( typeof(fn) )    
console.log( typeof(nulo) )    
console.log( typeof(indefinido) )    
/*
    Tipos de datos
        number
        string
        boolean
        object
        function
        undefined
*/
//const miArray = new Array()
const miArray = []
console.log( typeof(miArray) )

const marcas = [
                'Hermès','Zara','Boss',
                'Aeropostale','Kingin','Tomy',
                'Gola', 'Abercrombie', 'Topman',
                'H&M', 'Hollister', 'American Eagle',
                'Asos', 'Urban Outfitters', 'Old Navy',
                'Uniqlo'
               ]
console.log( typeof(marcas) )
console.log( marcas )