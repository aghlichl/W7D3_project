

json.array! @guests do |guest| 
  if (40..50).include?(guest.age) 
    json.extract! guest, :name, :age, :favorite_color
  end
end