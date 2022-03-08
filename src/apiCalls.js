export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => errorCheck(response))
}

export const postOrder = (newOrder) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newOrder),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to post order")
    }
    return response.json()
  })
}

const errorCheck = (response) => {
  if (!response.ok) {
    throw new Error("Could not retrieve orders")
  } else {
    return response.json()
  }
}