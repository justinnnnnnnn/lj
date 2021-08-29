json.extract! user, :username, :id, :buying_power

json.stock_buys user.stock_buys do |stock_buy|
  json.id stock_buy.id
  json.ticker stock_buy.ticker
  json.owner_id stock_buy.owner_id
  json.shares stock_buy.shares
end