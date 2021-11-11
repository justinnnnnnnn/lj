class MarketHour
  attr_reader :today, :ticker_name

  def self.get_today
    todays_date = Date.today.to_s.split("-")
    yr = todays_date[0].to_i
    month = todays_date[1].to_i
    day = todays_date[2].to_i
    Date.new(yr, month, day)
  end

  def initialize
    @today = MarketHour.get_today
    @the_time = get_todays_time
    @most_recent_day = most_recent_market_day
  end

  def get_todays_time
    todays_date = Date.today.to_s.split("-")
    yr = todays_date[0].to_i
    month = todays_date[1].to_i
    day = todays_date[2].to_i
    Time.local(yr, month, day).to_i
  end

  def most_recent_market_day
    market_day = @today
    p @the_time
    if Time.now.dst?
      if Time.now.to_i % 86400 < 48600
        market_day -= 1
      end
    else
      if Time.now.to_i % 86400 < 52200
        market_day -= 1
      end
    end
    return market_day if market_day?(market_day)
    until market_day?(market_day)
      market_day -= 1
    end
    return market_day
  end

  def market_day?(date)
    return false if date.wday < 1 || date.wday > 5 || is_holiday?(date, date.year)
    true
  end

  def is_holiday?(date, year)
    holiday = Holiday.new(year)
    return true if holiday.holidays.has_value?(date)
    false
  end

  def get_market_open
    date_to_parse = @most_recent_day.to_s.split("-")
    yr = date_to_parse[0].to_i
    month = date_to_parse[1].to_i
    day = date_to_parse[2].to_i
    time_obj = Time.utc(yr, month, day)
    epoch_time = time_obj.to_i
    epoch = Time.now.dst? ? epoch_time + 48600 : epoch_time + 52200
  end

  def get_market_close
    date_to_parse = @most_recent_day.to_s.split("-")
    yr = date_to_parse[0].to_i
    month = date_to_parse[1].to_i
    day = date_to_parse[2].to_i
    time_obj = Time.utc(yr, month, day)
    epoch_time = time_obj.to_i
    epoch = Time.now.dst? ? epoch_time + 48600 + 23400 : epoch_time + 52200 + 23400
  end
  
  # def get_prices
  #   uri = URI("https://finnhub.io/api/v1/stock/candle?symbol=#{ticker_name}&resolution=5&from=#{get_market_open}&to=#{get_market_close}&token=c1skd2iad3i9o8uantdg")
  #   @prices = Net::HTTP.get(uri).split(":")[1].split("[")[1].split("]")[0].split(",")
  # end

  def return_market_open_and_close
    market_range = [get_market_open, get_market_close]
  end

  # def my_local_market_open #debug tool
  #   p "#{most_recent_market_day}" + ": Date of open"
  #   p "#{Time.at(get_market_open)}" + ": Time of Open"
  #   p "#{Time.at(get_market_close)}" + ": Time Of Close"
  #   p "#{get_market_open}" + ": UTC of Open"
  #   p "#{get_market_close}" + ": UTC Of Close"
  # end
end
