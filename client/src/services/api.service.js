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

export function fetchTeslaStockData() {
  return fetch(`http://localhost:5000/tesla_stocks`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}

export function fetchPredictedData(data) {
  return fetch(`http://localhost:5000/predict_next?data=${JSON.stringify(data)}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
