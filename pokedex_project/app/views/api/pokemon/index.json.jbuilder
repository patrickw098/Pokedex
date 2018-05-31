
# @pokes.each do |pokemon|
#   json.set! pokemon.id do
#     json.id pokemon.id
#     json.name pokemon.name
#     json.image_url pokemon.image_url
#   end
# end

@pokes.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url asset_path(poke.image_url)
  end
end
