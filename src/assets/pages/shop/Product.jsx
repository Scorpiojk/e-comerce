const Product = (props) => {
    const {sku,productName,price,productImage,stock} = props.data;
  return (
    <div className="product">
        <img src={productImage} />
        <div className="description">
            <p>{sku}</p>
            <p><b>{productName}</b></p>
            <p>$ {price}</p>
            <p>{stock}</p>
        </div>
        <button className="addToCartBttn" onClick={alert("Gracias por tu compra")}>Agregar al carrito</button>    
    </div>
  )
}

export default Product