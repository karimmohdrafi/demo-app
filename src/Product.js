function ProductCard({title,price,image,rating, description}){

    // props={
    //     name:
    // }

    return(

        <div className="card">

            <img src={image}/>
            <h4>{title}</h4>
            <p>{description}</p>
            <center><button><p>${price}</p></button></center>
            <p>Rating = {rating.rate}</p>



        </div>


    )
}
export default ProductCard