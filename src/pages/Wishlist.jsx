import { useWishlist } from '../context/WishlistContext'

function Wishlist() {
    const { wishlist, toggleWishlist } = useWishlist()

    if (wishlist.length === 0) {
        return <div>Your wishlist is empty.</div>
    }

    return (
        <div>
            {wishlist.map((item) => (
                <div key={item.id}>
                  <img src={item.image1} alt="" className='w-20' />
                    <p>${item.price}</p>
                    <button onClick={() => toggleWishlist(item)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Wishlist