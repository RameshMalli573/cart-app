import { useState } from "react";
import Header from "./components/layout/Header";
import SubHeader from "./components/layout/SubHeader";
import Products from "./components/products/Products";

import "./index.scss"

const App = () => {

  const[uniqueItems,setUniqueItems] = useState([])
  const[totalCount,setTotalCount] = useState(0)
  const[totalPrice,setTotalPrice] = useState(0)

  const incraseTotalCountByOne = (data) => {
    let index = uniqueItems.findIndex(i => i.id === data.id)
    let newUniqueItems = [...uniqueItems]
    if(index === -1){
      newUniqueItems.push(data)
    }
    else{
      newUniqueItems[index] = data;
    }
    setUniqueItems(newUniqueItems)
    let totalCost = 0
    newUniqueItems.map(item => {
        totalCost += (item.discountedPrice * item.quantity)
    })

    setTotalPrice(totalCost)
    setTotalCount(totalCount + 1);

  }

  const decraseTotalCountByOne = (data) => {
    let index = uniqueItems.findIndex(i => i.id === data.id)
    let newUniqueItems = [...uniqueItems]
    if(data.quantity === 0){
      newUniqueItems.splice(index,1)
    }
    else{
      newUniqueItems[index] = data;
    }
    let totalCost = 0
    newUniqueItems.map(item => {
        totalCost += (item.discountedPrice * item.quantity)
    })

    setTotalPrice(totalCost)
    setTotalCount(totalCount - 1);
    setUniqueItems(newUniqueItems)
  }

  
  return (
    <div>
      <Header totalCount={totalCount} items = {uniqueItems} totalPrice = {totalPrice}></Header>
      <SubHeader></SubHeader>
      <Products incraseTotalCountByOne = {incraseTotalCountByOne} decraseTotalCountByOne = {decraseTotalCountByOne} ></Products>
    </div>
  )
}

export default App;
