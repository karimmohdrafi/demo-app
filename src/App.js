// import { useEffect, useState } from "react";
// import ProductCard from "./Product"

// import './App.css'

// function App() {
//   var [products, updateProducts] = useState([])

//   useEffect(
//     () => {
//       getProducts()

//     }, []
//   )
//   async function getProducts() {
//     var res = await fetch("https://fakestoreapi.com/products")
//     let productlist = await res.json()

//     updateProducts(productlist)


//   }



//   if (products.length == 0) {
//     return (<h1>Fetch data</h1>)
//   }
//   return (
//     <>
//       <div className="product-list">
//         {
//           products.map((p) => <ProductCard {...p} key={p.id}></ProductCard>)

//         }
//       </div>
//     </>
//   )
// }
// export default App



import Product from "./Product"

function App(){
  var prod1 = {
    id: 1,
    name: "Realme 11 Pro+",
    aprice: 27000,
    dmart: 30000
  }
  var prod2 = {
    id: 2,
    name: "OnePlus 11R",
    aprice: 47000,
    dmart: 50000
  }
  
  return(
    <>
    <Product {...prod1} />
    
    <Product {...prod2}/>
    </>
  )
}
 
export default App
