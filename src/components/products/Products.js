import ListItem from "./ListItem"
import axios from "axios"
import { useEffect ,useState} from "react"
import Loader from "../UI/Loader"



const Products = ({decraseTotalCountByOne , incraseTotalCountByOne}) => {

    const [items,setItems] = useState([
        {
            id : 1,
            price : 450,
            discountedPrice : 350,
            title : "Item1",
            thumbnail : "place_holder.png",
        },
        {
            id : 2,
            price : 200,
            discountedPrice : 150,
            title : "Item2",
            thumbnail : "place_holder.png",
        },
        {
            id : 3,
            price : 203,
            discountedPrice : 130,
            title : "Item3",
            thumbnail : "place_holder.png",
        },
        {
            id : 4,
            price : 290,
            discountedPrice : 150,
            title : "Item4",
            thumbnail : "place_holder.png",
        },
        {
            id : 5,
            price : 120,
            discountedPrice : 90,
            title : "Item5",
            thumbnail : "place_holder.png",
        },
        {
            id : 6,
            price : 2000,
            discountedPrice : 365,
            title : "Item6",
            thumbnail : "place_holder.png",
        },
        {
            id : 7,
            price : 2030,
            discountedPrice : 1500,
            title : "Item7",
            thumbnail : "place_holder.png",
        },
        {
            id : 8,
            price : 2500,
            discountedPrice : 1590,
            title : "Item8",
            thumbnail : "place_holder.png",
        },
        {
            id : 9,
            price : 3200,
            discountedPrice : 2150,
            title : "Item9",
            thumbnail : "place_holder.png",
        },
        {
            id : 10,
            price : 300,
            discountedPrice : 210,
            title : "Item10",
            thumbnail : "place_holder.png",
        }
    ])
    const [loader,setLoader] = useState(true)

    //functions for changing total cart value
    const increaseTotalCartCount = (data) => {
        let index = items.findIndex(i => i.id === data.id)
        let newItems = [...items]
        newItems[index].quantity += 1
        setItems(newItems)
        incraseTotalCountByOne(newItems[index])
    }
    const decreaseTotalCartCount = (data) => {
        let index = items.findIndex(i => i.id === data.id)
        let newItems = [...items]
        if(newItems[index].quantity > 0){
            newItems[index].quantity -= 1
            setItems(newItems)
            decraseTotalCountByOne(newItems[index])
        }
    }


    //getting data from firebase
    useEffect(() => {
        axios.get('https://react-project-f2471-default-rtdb.firebaseio.com/items.json')
        .then(response => {
            const newData = response.data.map((item,index) => {
                return {
                    ...item,
                    quantity : 0,
                    id : index
                }
            })
            setItems(newData)
            setLoader(false)
        })
        // .catch(error => {
        //     console.log(error)
        // })
       setLoader(false)

    },[])

    const updateTitle = (itemId) => {
        console.log(itemId)
        let updatedTitle = "Updated Title For Item #" + itemId

        axios.patch(`https://react-project-f2471-default-rtdb.firebaseio.com/items/${itemId}.json`,{
            title : updatedTitle
        })

        // axios.get('https://react-project-f2471-default-rtdb.firebaseio.com/items.json')
        // .then(response => {
        //     const newData = response.data.map((item,index) => {
        //         return {
        //             ...item,
        //             id : index
        //         }
        //     })
        //     setItems(newData)
        // })

        let data = [...items]
        let index = data.findIndex(item => item.id === itemId)
        data[index]["title"] = updatedTitle

        setItems(data)

    }
    return <>
    <div className={"product-list"}>
        <div className={'product-list--wrapper'}>
            {
                items.map(item => {
                    return <ListItem increaseTotalCartCount = {increaseTotalCartCount} decreaseTotalCartCount = {decreaseTotalCartCount} updateTitle = {updateTitle} data = {item} key = {item.id}/>
                })
            }
        </div>
    </div>
    {loader && <Loader/>}
    </>
}

export default Products