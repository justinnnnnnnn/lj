# == Schema Information
#
# Table name: stonks
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  symbol     :string           not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class StonkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
