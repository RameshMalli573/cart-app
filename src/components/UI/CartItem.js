const CartItem = ({data}) => {
    return (
        <div className="checkout-modal_list-item">
            {/* <div className="img-fluid">
                <img src = {"assets/" + data.thumbnail} className = "img-fluid" alt = {data.title}/>
            </div> */}
            <div className="information">
                <div>
                    <h4>{data.title}</h4>
                    <div className="pricing">
                        <small>
                            <strike> {data.price} </strike>
                        </small>
                        <span>{data.discountedPrice}</span>
                    </div>
                </div>
                <div className="cart-addon cart-addon__modal">
                    <button>-</button>
                    <span className="counter">{data.quantity}</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem