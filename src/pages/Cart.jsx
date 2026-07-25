import React from 'react'
import { useCart } from '../context/CartContext'

function Cart() {

    const { cart } = useCart()

    if (cart.length === 0) return <h4>Your Cart is Empty</h4>

    return (
        <section className='cart-main flex gap-2'>
            <table className='max-w-5xl'>
                <thead>
                    <tr>
                        <td className='border border-black text-center'>Image</td>
                        <td className='border border-black text-left'>Product Name</td>
                        <td className='border border-black text-center'>Quantity</td>
                        <td className='border border-black text-center'>Unit Price</td>
                        <td className='border border-black text-center'>Total Price</td>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td className='border border-black text-center flex justify-center items-center m-2'>
                                <img src={item.image1} alt={item.title} className='min-w-[120px] max-h-[120px] object-cover object-top' />
                            </td>
                            <td className='border border-black text-left'>
                                <h4>{item.title}</h4>
                                <button onClick={()=>{ item.id == remove}}>delete</button>
                            </td>
                            <td className='border border-black text-center'>
                                <h4>{item.quantity}</h4>
                            </td>
                            <td className='border border-black text-center'>
                                <h4>{item.price}</h4>
                            </td>
                            <td className='border border-black text-center'>Total Price</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </section>
    )
}

export default Cart