import React from 'react'
import produit from "./produit"
console.log(produit)
const Pro = () => {
  return (
    <div>
      <div>
     <img src={produit.Image} alt="coffee"/>
    <h1>
    {produit.name} 
     </h1> 
   <h2>
   {produit.price}
   </h2>
 <h3>
 {produit.description}
 </h3>
   </div>
      
    </div>
  )
}

export default Pro




// return (
//   
// )