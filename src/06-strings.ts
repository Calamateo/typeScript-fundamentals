(()=>{
  let productTitle = 'My amazing product';
  productTitle = 'My awesome product';
  console.log('productTitle', productTitle);

  let description = 'My awesome product description';
  console.log("description", description);

  let isNew: boolean = true;
  let productPrice = 100;
  const summary = `
  title: ${productTitle}
  description: ${description}
  price: ${productPrice}
  isNew: ${isNew}
  `;
  console.log(summary);
}) ();
