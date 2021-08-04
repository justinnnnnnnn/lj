import * as StonkAPI from "../util/stonk_api_util";

export const RECEIVE_STONK = "RECEIVE_STONK";
export const RECEIVE_STONK_DATA = "RECEIVE_STONK_DATA";
export const RECEIVE_STONK_NEWS = "RECEIVE_STONK_NEWS";
export const RECEIVE_STONK_BIO = "RECEIVE_STONK_BIO"

export const receiveStonk = (stonk, symbol) => ({
  type: RECEIVE_STONK,
  stonk,
  symbol
});

export const receiveStonkData = (data, symbol) => ({
  type: RECEIVE_STONK_DATA,
  data,
  symbol
});

export const receiveStonkNews = (news, symbol) => ({
  type: RECEIVE_STONK_NEWS,
  news,
  symbol
});

export const receiveStonkBio = (bio, symbol) => ({
  type: RECEIVE_STONK_BIO,
  bio,
  symbol
})

export const fetchStonk = (symbol) => (dispatch) =>
  StonkAPI.fetchStonk(symbol).then((stonk) =>
    dispatch(receiveStonk(stonk, symbol))
  );

export const fetchStonkInfo = (symbol) => (dispatch) =>
  StonkAPI.fetchStonkInfo(symbol).then((stonk) =>
    dispatch(receiveStonk(stonk, symbol))
  );

export const fetchStonkData = (symbol, fromDate, toDate) => (dispatch) =>
  StonkAPI.fetchStonkData(symbol, fromDate, toDate).then((stonk) => 
    dispatch(receiveStonkData(stonk, symbol))
  );
// export const fetchStonkData = (symbol, fromDate, toDate) => (dispatch) =>
//   StonkAPI.fetchStonkData(symbol, fromDate, toDate).then((stonk) => {
//     dispatch(receiveStonkData(stonk, symbol))
//     return stonk
//   });

export const fetchStonkNews = (symbol, fromDate, toDate) => (dispatch) =>
  StonkAPI.fetchStonkNews(symbol, fromDate, toDate).then((stonk) =>
    dispatch(receiveStonkNews(stonk, symbol))
  );

export const fetchStonkBio = (symbol) => (dispatch) =>
  StonkAPI.fetchStonkBio(symbol).then((stonk) =>
    dispatch(receiveStonkBio(stonk, symbol))
  );
