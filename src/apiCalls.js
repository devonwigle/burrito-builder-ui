export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => errorCheck(response))
}
const errorCheck = (response) => {
  if (!response.ok) {
    throw new Error("Could not retrieve orders")
  } else {
    return response.json()
  }
}