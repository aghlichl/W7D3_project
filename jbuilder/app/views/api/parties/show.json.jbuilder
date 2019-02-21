json.extract! @party, :name, :location

json.guests do
  json.array! @party.guests, partial: 'api/guests/guest', as: :guest
end 