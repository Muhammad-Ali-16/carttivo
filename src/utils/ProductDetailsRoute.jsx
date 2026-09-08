import { useParams } from 'react-router'
import PagesLayout from '../components/layout/PagesLayout'
import ProductDetails from '../pages/ProductsDetails'

function ShopByCategoryRoute() {
  const { selectedProduct } = useParams()

  return (
    <>
      <PagesLayout title={selectedProduct.title} />
      <ProductDetails/>
    </>
  )
}
export default ShopByCategoryRoute