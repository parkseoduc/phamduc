export default function Product(props){
    const p = props.product ;
    return(
        <div className="Product">
            <h2>{p.name}</h2>
            <p> Giá {p.price}$</p>
            <p> {p.description} </p>
            <button type="button">Add to cart</button>

        </div>
    )
}