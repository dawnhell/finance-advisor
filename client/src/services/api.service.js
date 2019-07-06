export function fetchCurrencyData() {
  return fetch(
    'https://rest.coinapi.io/v1/exchanges?apikey=73034021-0EBC-493D-8A00-E0F138111F41', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
}

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
