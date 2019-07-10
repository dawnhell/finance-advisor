const  iex = require( 'iexcloud_api_wrapper' );
const fs = require('fs');
const path = require('path');
const RFRegression = require('ml-random-forest').RandomForestRegression;

let dataset = []
const quote = async (sym) => {
  const quoteData = await iex.quote(sym);
  console.log(quoteData)
  // fs.writeFile(path.join(__dirname + '/data/TSLA_daily.json'), JSON.stringify(quoteData))
  return quoteData
};

// quote("TSLA");

const readFile = JSON.parse(fs.readFileSync(path.join(__dirname + '/data/TSLA_daily.json'), 'utf-8'));

readFile.map(stock => {
  dataset.push([stock.close, stock.open, stock.high, stock.low, stock.volume, stock.uOpen, stock.uHigh, stock.uClose, stock.uLow, stock.uVolume, stock.change, stock.changePercent, stock.changeOverTime])
});

const trainingSet = new Array(dataset.length);
const predictions = new Array(dataset.length);

for (let i = 0; i < dataset.length; i += 1) {
  trainingSet[i] = dataset[i].slice(1, 12);
  predictions[i] = dataset[i][0];
}

const options = {
  seed: 3,
  maxFeatures: 11,
  replacement: false,
  nEstimators: 200
};

const model = JSON.parse(fs.readFileSync(path.join(__dirname + '/data/model.json'), 'utf-8'))
const regression = new RFRegression(options/*, model*/);

regression.train(trainingSet, predictions);
const result = regression.predict(trainingSet);

console.log(result)

// RFRegression.load(model.baseModel)
const current = quote("TSLA")

const res = regression.predict([[current.open, current.high, current.low, current.volume, current.uOpen, current.uHigh, current.uClose, current.uLow, current.uVolume, current.change, current.changePercent, current.changeOverTime]]);

console.log(res);
