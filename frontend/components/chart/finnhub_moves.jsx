import { ApiClient, MyFirstApi } from 'finnhub';
 
const api_key = ApiClient.instance.authentications['api_key'];
const finnhubClient = new MyFirstApi()
 
// Stock candles
finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
    console.log(data)
});
 
//Company News
finnhubClient.companyNews("AAPL", "2020-01-01", "2020-05-01", (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data)
    }
});