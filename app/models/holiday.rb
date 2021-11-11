class Holiday

  attr_reader :year, :holidays

  def initialize(year)
    @year = year
    @holidays = {
      new_years_day:    new_years_day,
      mlk_day:          mlk_day,
      washington_bday:  washington_bday,   
      good_friday:      good_friday,
      memorial_day:     memorial_day,
      junteenth:        junteenth,
      fourth_of_july:   fourth_of_july,
      labor_day:        labor_day,
      thanksgiving:     thanksgiving,
      # fake:             Date.today,
      # fake2:            Date.today - 1,
      christmas:        christmas,
    }
  end


  def place_on_weekday(date)
    the_day = date
    until valid_weekday?(the_day)
      the_day -= 1 if the_day.saturday?
      the_day += 1 if the_day.sunday?
    end
    the_day
  end

  def which_date_in_month(which_weekday_number, desired_weekday, month, year)
    date = Date.new(year, month, 1)
    weekday_number = 0
    until weekday_number == which_weekday_number
      weekday_number += 1 if date.send("#{desired_weekday}?")
      break if weekday_number == which_weekday_number
      date += 1
    end
    date
  end

  def valid_weekday?(date)
    return false if date.wday < 1 || date.wday > 5
    true
  end

  def new_years_day
    new_years = Date.new(year, 1, 1)
    place_on_weekday(new_years)
  end

  def mlk_day
    which_date_in_month(3, "monday", 1, year)
  end

  def washington_bday
    which_date_in_month(3, "monday", 2, year)
  end

  def good_friday
    future_lunar_easter_rules = {
      2021 =>	Date.new(year, 4, 2 ),
      2022 =>	Date.new(year, 4, 15),
      2023 =>	Date.new(year, 4, 7 ),
      2024 =>	Date.new(year, 3, 29),
      2025 =>	Date.new(year, 4, 18),
      2026 =>	Date.new(year, 4, 3	),
      2027 =>	Date.new(year, 3, 26),
      2028 =>	Date.new(year, 4, 14),
      2029 =>	Date.new(year, 3, 30),
      2030 =>	Date.new(year, 4, 19),
      2031 =>	Date.new(year, 4, 11),
      2032 =>	Date.new(year, 3, 26),
      2033 =>	Date.new(year, 4, 1 )
    }
    future_lunar_easter_rules[year]
  end

  def memorial_day
    date = Date.new(year, 5, 31)
    last_monday_in_may = false
    until last_monday_in_may
      if date.monday?
        break
      else
        date -= 1
      end
    end
    date
  end

  def junteenth
    juneteen = Date.new(year, 6, 19)
    place_on_weekday(juneteen)
  end

  def fourth_of_july
    independence_day = Date.new(year, 7, 4)
    place_on_weekday(independence_day)
  end

  def labor_day
    which_date_in_month(1, "monday", 9, year)
  end

  def thanksgiving
    which_date_in_month(4, "thursday", 11, year)
  end

  def christmas
    xmas = Date.new(year, 12, 25)
    place_on_weekday(xmas)
  end

end
