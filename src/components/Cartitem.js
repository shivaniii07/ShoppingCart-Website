import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';

const Cartitem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed");
    }


    return (
        <div>
            <div className="border-b border-black p-2 flex flex-row" >
                <div className="w-44 h-44">{
                    <img src={item.image}  className="w-full h-full object-contain" />
                   }
                </div>
                <div className="flex flex-col gap-4 w-[57%]">
                    <h1 className='text-lg text-bold text-black'>{item.title}</h1>
                    <h1 className='text-gray-400 font-normaal max-w-[80vh] mt-6'>
                        {item.description.split(" ").slice(0,13).join(" ") + "..."}</h1>

                    <div  className="flex justify-between items-center">
                        <p className='text-green-600 font-semibold mt-6'>${item.price}</p>
                        <div 
                            onClick={removeFromCart}
                        >
                            <AiFillDelete />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cartitem;