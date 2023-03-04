defmodule DragnCardsWeb.API.V1.DeckController do
  use DragnCardsWeb, :controller
  import Ecto.Query

  alias DragnCards.{Decks.Deck, Decks, Repo}

  def index(conn, _params) do
    decks = Decks.list_decks()
    render(conn, "index.html", decks: decks)
  end

  def new(conn, _params) do
    changeset = Decks.change_deck(%Deck{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"deck" => deck_params}) do
    IO.puts("create 1")
    IO.inspect(deck_params)
    case Decks.create_deck(deck_params) do
      {:ok, deck} ->
        IO.puts("created deck !!!!!!!!!!!!!!!!!!!!!!!")
        IO.inspect(deck)
        conn
        |> json(%{success: %{message: "Deck saved successfully", deck: deck}})

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    deck = Decks.get_deck!(id)
    render(conn, "show.html", deck: deck)
  end

  def get_decks(conn, %{"user_id" => user_id, "plugin_id" => plugin_id}) do
    IO.puts("get_decks")
    IO.inspect(user_id)
    IO.inspect(plugin_id)
    my_decks = if user_id != nil and user_id != "undefined" do
      query = from d in Deck,
        order_by: [desc: :updated_at],
        where: [author_id: ^user_id, plugin_id: ^plugin_id],
        select: d
      Repo.all(query)
    else
      []
    end
    IO.puts("my_decks")
    IO.inspect(my_decks)
    my_decks = Enum.reduce(my_decks, [], fn(deck, acc) ->
      acc ++ [Map.from_struct(deck) |> Map.delete(:__meta__)]
    end)
    IO.puts("get_decks")
    IO.inspect(Enum.at(my_decks,0))
    json(conn, %{my_decks: my_decks})
  end

  def edit(conn, %{"id" => id}) do
    deck = Decks.get_deck!(id)
    changeset = Decks.change_deck(deck)
    render(conn, "edit.html", deck: deck, changeset: changeset)
  end

  def update(conn, %{"id" => id, "deck" => deck_params}) do
    IO.puts("update 1")
    IO.inspect(deck_params)
    deck = Decks.get_deck!(id)

    case Decks.update_deck(deck, deck_params) do
      {:ok, deck} ->
        conn
        |> json(%{success: %{message: "Deck saved successfully", deck: deck}})

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", deck: deck, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    deck = Decks.get_deck!(id)
    case Decks.delete_deck(deck) do
      {:ok, _deck} ->
        conn
        |> json(%{success: %{message: "Deck saved successfully"}})
      {:error, _} ->
        conn
        |> json(%{failed: %{message: "Failed to delete deck"}})
      end
  end
end
