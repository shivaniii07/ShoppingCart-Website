import React, { useEffect, useState } from 'react'
import Cartitem from '../components/Cartitem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {

const {cart} = useSelector((state) => state);
const[totalAmount, setTotalAmount] = useState(0);

useEffect(() =>{
  setTotalAmount(cart.reduce((acc , curr)=> acc + curr.price , 0))
},[cart])

  return (
    <div className="pt-6 z-10 bg-slate-50 mt-20">
        {
            cart.length > 0 ?
            (<div className="w-3/4 m-auto  flex flex-row justify-between">
                 <div className=" w-[48%] p-2 h-30%">

                {
                    cart.map((item,index) => {
                        return <Cartitem key = {item.id} item = {item} itemIndex = {index}/>
                    })
                }
                </div>

             <div className="w-[48%]  p-4 flex flex-col justify-between">
                <div className="flex flex-col">
                    <div className='font-bold uppercase text-green-800'>Your Cart</div>
                    <div  className="text-2xl text-green-900 font-semibold uppercase">Summary</div>
                    <p  className="font-semibold mt-2">
                        <span>Total Items:{cart.length}</span>
                    </p>
                </div>

                <div className='w-full'>
                    <p>Total Amount:<span className='font-semibold'>${totalAmount}</span></p>
                    <button className="bg-green-600 text-white font-bold py-2 px-6 rounded">
                        CheckOut Now
                    </button>
                </div>
             </div>





            </div>):
            (<div  className="flex flex-col justify-center gap-3 items-center h-screen w-full">
                <h1 className="font-bold text-2xl"> Cart Is Empty</h1>
                <Link to = "/">
                 <button className="bg-green-600 py-2 px-4 rounded-md transition-all duration-200
                  hover:text-gray-200 hover:bg-green-800 font-semibold">
                    Shop Now
                 </button>
                </Link>
                </div>)
        }

    </div>
  )
}

export default Cart;