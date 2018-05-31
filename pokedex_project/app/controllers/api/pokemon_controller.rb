class Api::PokemonController < ApplicationController
  def index
    @pokes = Pokemon.all
    # render :index
  end

  def show
    @poke = Pokemon.find(params[:id])
    # render :show
  end
end
