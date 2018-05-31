
json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@poke.image_url)
  json.item_id @poke.item_ids
end


json.items do
  @poke.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url)
    end
  end
end
