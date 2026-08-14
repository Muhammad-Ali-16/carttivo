import React from 'react'
import { useCart } from '../context/CartContext'

function Cart() {

    const { cart, removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useCart()

    if (cart.length === 0) return (
        <h4 className='text-center text-gray-500 text-lg py-12'>Your Cart is Empty</h4>
    )

    return (
        <section className='cart-main flex gap-2 p-4 max-w-7xl'>
        <div className="max-w-5xl w-full overflow-x-auto">
            <table className='w-full border-collapse shadow-sm rounded-lg'>
                <thead>
                    <tr className='bg-gray-100 text-sm'>
                        <td className='border border-gray-300 text-center font-semibold py-3 px-2'>Image</td>
                        <td className='border border-gray-300 text-left font-semibold py-3 px-4'>Product Name</td>
                        <td className='border border-gray-300 text-center font-semibold py-3 px-2'>Quantity</td>
                        <td className='border border-gray-300 text-center font-semibold py-3 px-2'>Unit Price</td>
                        <td className='border border-gray-300 text-center font-semibold py-3 px-2'>Total Price</td>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id} className='hover:bg-gray-50 transition-colors text-sm'>
                            <td className='border border-gray-300 text-center align-middle p-2'>
                                <div className='flex justify-center items-center'>
                                    <img
                                        src={item.image1}
                                        alt={item.title}
                                        className='min-w-[100px] max-h-[100px] object-cover object-top rounded-md'
                                    />
                                </div>
                            </td>
                            <td className='border border-gray-300 text-left px-4'>
                                <h4 className='font-medium text-gray-800'>{item.title}</h4>
                            </td>
                            <td className='border border-gray-300 text-center px-2 py-3'>
                                <h4 className='font-semibold mb-2'>{item.quantity}</h4>
                                <div className='flex justify-center items-center gap-3'>
                                    <button
                                        className={`w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition ${item.quantity === 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                        onClick={() => decreaseCartQuantity(item.id)}
                                    >
                                        <i className="bi bi-dash"></i>
                                    </button>
                                    <button
                                        className='w-7 h-7 flex items-center justify-center rounded-full text-red-500 hover:bg-red-50 transition cursor-pointer'
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                    <button
                                        className={`w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition ${item.quantity === item.stock ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                        onClick={() => increaseCartQuantity(item.id)}
                                    >
                                        <i className="bi bi-plus"></i>
                                    </button>
                                </div>
                            </td>
                            <td className='border border-gray-300 text-center px-2'>
                                <h4 className='text-gray-700'>${item.price}</h4>
                            </td>
                            <td className='border border-gray-300 text-center px-2 font-semibold text-gray-900'>
                                ${(item.price * item.quantity).toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </section>
    )
}

export default Cart