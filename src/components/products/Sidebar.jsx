import { useProductFilters } from '../../hooks/useProductFilters'
import Accordion from './accordion'

function Sidebar() {

    const { resetFilter, filterMinPrice, filterMaxPrice } = useProductFilters()

    return (
        <div className="side-bar h-fit lg:sticky top-26 lg:max-w-xs w-full bg-white shadow-md shadow-[#68676726] p-6">

            <div className="sider-bar-top flex justify-between flex-row">
                <h6 className="text-sm font-semibold mb-3">Filter</h6>
                <button className="text-sm text-red-600 cursor-pointer font-semibold mb-3" onClick={() => resetFilter()}>Reset</button>
            </div>

            <Accordion />

            {filterMinPrice > filterMaxPrice && (
                <p className="text-xs text-red-600 mt-2">Min price is greater than max price.</p>
            )}
        </div>
    )
}

export default Sidebar