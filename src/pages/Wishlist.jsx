import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="empty-wishlist h-[40vh] flex flex-col items-center justify-center gap-3 text-black/60">
        <i className="bi bi-heart text-4xl"></i>
        <h4 className="text-lg font-medium">Your wishlist is empty.</h4>
      </div>
    );
  }

  return (
    <section className="wishlist-main p-4 bg-(--bg-primary)">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="wishlist-item relative flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white/90 text-red-500 hover:bg-red-50 shadow cursor-pointer transition"
              onClick={() => toggleWishlist(item)}
              aria-label="Remove from wishlist"
            >
              <i className="bi bi-trash3 text-sm"></i>
            </button>

            <div className="w-full aspect-square overflow-hidden bg-gray-100">
              <img
                src={item.image1}
                alt={item.title || ""}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-3 flex flex-col gap-1">
              {item.title && (
                <h4 className="text-sm font-medium text-gray-800 line-clamp-1">
                  {item.title}
                </h4>
              )}
              <p className="text-sm font-semibold text-gray-900">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wishlist;
