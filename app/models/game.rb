class Game < ApplicationRecord

  validates :title, {
      length: { minimum: 10,  maximum: 50 },
      presence: true,
      uniqueness: true
  }
  validates :description, length: { minimum: 30 }, presence: true
  validates :last_name,  presence: true

  has_many :purchases

end
