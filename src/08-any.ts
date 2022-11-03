(()=>{
  let myDinamicVar: any; // 'any' te permite poner datos de todo tipo
  myDinamicVar ='asc'
  myDinamicVar = 21341
  myDinamicVar = true
  myDinamicVar = "Hola"
  const rta = (myDinamicVar as string);
  console.log(rta)
})()
