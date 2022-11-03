(()=>{
  let userId: string|number;
  userId = 'asfcasc';
  userId = 14124;

  function greeting(myText: string|number){
    if(typeof myText === 'string'){
      console.log("greeting text",(myText));
    } else {
      console.log("greeting number",myText)
    }
  }
  greeting('sacfsa');
  greeting(3134);
})()
