const ListItem = () =>{
    const data = {
        price : 450,
        discountedPrice : 350,
        title : "Title Of Item",
        thumbnail : "place_holder.png"
    }
    const wishlistButton = {
        image : globalWishImage.image
    }
    return (<div className={"item-card  transition"}>
        <img className={"img-fluid"} src={"assets/" + data.thumbnail} alt="item_img"  ></img>
        <div className={"item-card__information"}>
            <div className={"pricing"}>
                <small>
                    <strike> {data.price} </strike>
                </small>
                <span>{data.discountedPrice}</span>
            </div>
            <div className={"title"}>
                <h3>{data.title}</h3>
            </div>
        </div>
        <button className={"wish-button"} style = {{padding:"6px" ,width:"40px",marginBottom:"5px"}}>
            <img src={"assets/" + wishlistButton.image} onClick={wishButtonCLicked} alt="wishIcon" height="20px"/>
        </button>
        <button className={"cart-add transition"} onClick = {clicked}>
        <img src={cartIcon} alt="cartIcon" height="15px"/>
            Add to Cart
        </button>
    </div>
    )
}