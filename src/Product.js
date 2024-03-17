// function ProductCard({title,price,image,rating}){

    

//     return(

//         <div className="card">

//             <img src={image}/>
//             <h4>{title}</h4>
//             <center><button><p>${price}</p></button></center>
//             <p>Rating = {rating.rate}</p>



//         </div>


//     )
// }
// export default ProductCard

function Product({id,name,aprice,dmart}){



    return(
        <div>
            <h2>Id = {id}</h2>
            <h2>Name = {name}</h2>
            <h2>Cost = {aprice}</h2>
            <h2>Dmart = {dmart}</h2>
        </div>
    )
}
export default Product