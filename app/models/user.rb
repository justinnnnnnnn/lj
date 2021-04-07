class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 1, maximum: 30, allow_nil: true}
  
  # function to calculate portfolio balance
  after_initialize :ensure_session_token
  attr_reader :password
  
  def self.find_by_credentials(user, password)
    user = User.find_by(username: user)
      if user && user.is_password?(password)
        user
      else
        nil
      end
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(password) == password
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end

