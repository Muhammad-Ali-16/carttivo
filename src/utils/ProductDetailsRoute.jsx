import PagesLayout from '../components/layout/PagesLayout'
import ProductDetails from '../pages/ProductsDetails'
import { useProductDetails } from '../context/ProductDetailsContext'

function ShopByCategoryRoute() {
    const { selectedProduct } = useProductDetails()

  console.log(selectedProduct)

  return (
    <>
      <PagesLayout title={selectedProduct.title} />
      <ProductDetails />
    </>
  )
}
export default ShopByCategoryRoute