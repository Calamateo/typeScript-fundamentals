(()=>{
  let prices = [1,2,3,4,42,44] //se declara como un array de solo numeros
  prices.push(123)
  console.log(prices)

  let products = ['213','casc','cascf'] // se declara como un array de solo String
  console.log(products)

  let mixed: (number|string|boolean) [] = [1,2,3,4,"casfca",'sdfasd',true,false]
  console.log(mixed)
  mixed.map(item => console.log(item))
})()
