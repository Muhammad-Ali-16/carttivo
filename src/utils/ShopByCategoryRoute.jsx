import { useParams } from 'react-router'
import PagesLayout from '../components/layout/PagesLayout'
import FillteredCategory from '../pages/FillteredCategory'

function ShopByCategoryRoute() {
  const { category } = useParams()

  return (
    <>
      <PagesLayout title={category} />
      <FillteredCategory/>
    </>
  )
}
export default ShopByCategoryRoute