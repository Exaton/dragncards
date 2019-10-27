defmodule SpadesGame.GameUI do
  @moduledoc """
  One level on top of Game.
  """

  alias SpadesGame.{Game, GameUI, GameOptions}

  @derive Jason.Encoder
  defstruct [:game, :game_name, :options, :created_at, :west, :north, :east, :south]

  @type t :: %GameUI{
          game: Game.t(),
          game_name: String.t(),
          options: GameOptions.t(),
          created_at: DateTime.t(),
          west: nil | integer,
          north: nil | integer,
          east: nil | integer,
          south: nil | integer
        }

  @spec new(String.t(), GameOptions.t()) :: GameUI.t()
  def new(game_name, %GameOptions{} = options) do
    game = Game.new(game_name, options)

    %GameUI{
      game: game,
      game_name: game_name,
      options: options,
      created_at: DateTime.utc_now()
    }
  end

  @spec discard(GameUI.t()) :: GameUI.t()
  def discard(gameui) do
    game = Game.discard(gameui.game)
    %{gameui | game: game}
  end
end
