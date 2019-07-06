export function fetchStockData(stock) {
  return fetch(`http://localhost:5000/getstockdata/?stock=${stock}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
