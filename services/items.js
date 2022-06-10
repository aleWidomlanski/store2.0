
export const getItems = async () => {
   const response = await fetch('https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items')
   const data = await response.json()
   return data;
}

export const getItem = async (id) => {
   const response = await fetch('https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items')
   const data = await response.json()
   const item = data.find((item) => item.id == id)
   return item;
}

export const getItemsParamsId = async () => {
   const response = await fetch('https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items')
   const data = await response.json()
   const idsItem = data.map((item) => {
      return { params: { id: `${item.id}` } }
   })
   return idsItem
}

export const getItemsBestSellers = async () => {
   const response = await fetch('https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items')
   const data = await response.json()
   const bestSellers = data.slice(2, 5)
   return bestSellers;
}