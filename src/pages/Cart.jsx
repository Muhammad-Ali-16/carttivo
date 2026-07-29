import React from 'react'
import { useCart } from '../context/CartContext'

function Cart() {

    const { cart, removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useCart()

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
                            </td>
                            <td className='border border-black text-center'>
                                <h4>{item.quantity}</h4>
                                <button
                                    className={` ${item.quantity === 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                    onClick={() => decreaseCartQuantity(item.id)}
                                >
                                    <i class="bi bi-dash"></i>
                                </button>
                                <button
                                className=' cursor-pointer'
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <i class="bi bi-trash3"></i>
                                </button>
                                <button
                                    className={` ${item.quantity === item.stock ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                    onClick={() => increaseCartQuantity(item.id)}
                                >
                                    <i class="bi bi-plus"></i>
                                </button>
                            </td>
                            <td className='border border-black text-center'>
                                <h4>${item.price}</h4>
                            </td>
                            <td className='border border-black text-center'>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </section>
    )
}

export default Cart