# json.partial! "api/stock_buys/stock_buy", stock_buys: @stock_buys

json.array! @stock_buys do |stock|
  json.ticker stock.ticker
  json.shares stock.shares
end