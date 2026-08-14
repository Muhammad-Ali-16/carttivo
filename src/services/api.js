const BASE_URL = 'https://6a59fc60ad8332e75f01f6ca.mockapi.io/carttivo/api/v1'

export async function GetAllProducts() {
    const res = await fetch(`${BASE_URL}/products`)
    if (!res.ok) throw new Error('Failed To Fetch Products')
    const data = await res.json()
    return data
}