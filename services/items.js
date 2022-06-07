
export const getItems = async () => {
   const response = await fetch('http://localhost:3000/api/items')
   const data = await response.json()
   return data;
}

export const getItemsId = async () => {
   const response = await fetch('http://localhost:3000/api/items')
   const data = await response.json()
   const idsItem = data.map((item) => item.id)
   return idsItem
}