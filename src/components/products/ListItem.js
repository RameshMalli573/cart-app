//import "../index.scss"
import cartIcon from "../../assets/cart.svg"
import { useState } from "react"
import Modal from "../UI/Modal"

const ListItem = ({increaseTotalCartCount,decreaseTotalCartCount, data,updateTitle}) => {


    //modal code
    const[showModal,setShowModal] = useState(false)
    const changeModalState = () => {
        setShowModal(previousState => !previousState)
    }

    //counter = localStorage.getItem("itemCounter" + data.id)
    const increaseCounterByOne = () =>{
        //let tempCounter =  localStorage.getItem("itemCounter" + data.id)
       // tempCounter++
        //localStorage.setItem("itemCounter" + data.id,tempCounter)
        increaseTotalCartCount(data)
    }
    const decreaseCounterByOne = () =>{
        if(data.quantity === 0) {
            return
        }
        //let tempCounter =  localStorage.getItem("itemCounter" + data.id)
        //tempCounter--
        //localStorage.setItem("itemCounter" + data.id,tempCounter)
        //if(tempCounter === 0) localStorage.removeItem("itemCounter" + data.id)
        decreaseTotalCartCount(data)
    }

    //data

    const [image,setImage] = useState("wishlistIconNotClicked.png")


    //wish button change
    const wishButtonCLicked = () => {
        if(image === "wishlistIconNotClicked.png"){
            setImage("wishlistIconClicked.png")
            alert(data.title + " Added to Wishlist")
        }
        else{
            setImage("wishlistIconNotClicked.png")
            alert(data.title + " Removed from wishlist")
        }
    }

    return (
    <>
        <div className= {data.quantity <= 0 ? "item-card-gray transition" : "item-card-green transition"}>
            <img onClick={changeModalState} className={"img-fluid"} src={"assets/" + data.thumbnail} alt="item_img"  ></img>
            
            <div className={"item-card-gray__information"}>
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
            {/* <button className={"wish-button"} onClick={wishButtonCLicked} style = {{padding:"6px" ,width:"40px",marginBottom:"5px"}}>
                <img src={"assets/" + image}  alt ="wishIcon" height="20px"/>
            </button> */}

            {/* <button style={{marginBottom : "5px"}} onClick = {() => updateTitle(data.id)}>Click To Update Title</button> */}

            {/*
            <small className= {"cart-message"}>{message}</small>

            <button className={"cart-add transition"} onClick = {addButtonCLicked}>
            <img src={cartIcon} alt="cartIcon" height="15px"/>
                Add to Cart
            </button>
            */}

            {data.quantity < 1?
                <button className={"cart-add transition"} onClick = {increaseCounterByOne}>
                    <img src={cartIcon} alt="cartIcon" height="15px"/>
                        Add to Cart
                </button> 
                :  
                <div className={"cart-addon"}>
                    <button className = {"button-hover"} onClick={decreaseCounterByOne}><span>-</span></button>
                    <span className={"counter"}>{data.quantity}</span>
                    <button className = {"button-hover"} onClick={increaseCounterByOne}><span>+</span></button>
                </div>        
            }
        </div>
        {showModal && 
        < Modal changeModalState = {changeModalState}>
            {data.description}
        </Modal>
        }
    </>
    )
}


export default ListItem




//button -> style={{backgroundColor:"orange" ,width:"115px", borderRadius:"5px", color:"white", cursor:"pointer",boxShadow:"0px 5px 5px gray", borderColor:"orange",textShadow:"0px 2px 2px gray",}}
//cartImage -> style = {{borderRadius:"7px",width:"20px" ,height:"20px"}}
//itemImage -> style={{borderRadius:"20px",border:"5px solid green",padding:"2px 2px"}}