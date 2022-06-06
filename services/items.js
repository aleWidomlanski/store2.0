
export const getItem = async () => {
   const response = await fetch('http://localhost:3000/api/items')
   const data = await response.json()
   return data;
}