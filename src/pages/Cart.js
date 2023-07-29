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
    <div>
        {
            cart.length > 0 ?
            (<div>
                {
                    cart.map((item,index) => {
                        return <Cartitem key = {item.id} item = {item} itemIndex = {index}/>
                    })
                }

             <div>
                <div>
                    <div>Your Cart</div>
                    <div>Summary</div>
                    <p>
                        <span>Total Items:{cart.length}</span>
                    </p>
                </div>

                <div>
                    <p>Total Amount:${totalAmount}</p>
                    <button>
                        CheckOut Now
                    </button>
                </div>
             </div>





            </div>):
            (<div>
                <h1> Cart Is Empty</h1>
                <Link to = "/">
                 <button>
                    Shop Now
                 </button>
                </Link>
                </div>)
        }

    </div>
  )
}

export default Cart;