"use client"

import { MinusIcon,PlusIcon } from "@heroicons/react/24/outline"
import { useCart } from "./CartContext"
export const Cart=()=>{
    const {state,addItem,minusItem}=useCart()
    console.log('state is :',state)
    const cart=state.cart
    const totalAmount=state.totalAmount
    return <div className="flex flex-col items-center gap-2 overflow-y-scroll">
            {cart.map(pro=><div  key={pro?.id} className="w-3/4 flex justify-around">
                {pro?.name}
                <MinusIcon className="h-5 hover:cursor-pointer" onClick={()=>{
                    minusItem(pro)
                }}/>
                <PlusIcon className="h-5 hover:cursor-pointer" onClick={()=>{
                    addItem(pro)
                }}/>
                {pro?.count*pro?.price}
            </div>)}
            <p>Total amount :{totalAmount}$</p>
    </div>
}