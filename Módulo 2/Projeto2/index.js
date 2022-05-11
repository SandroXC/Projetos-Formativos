import("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    nome: "Bulbasaur",
    altura: "0.7 m",
    peso: "6.9 kg",
    categoria: "Seed",
    habilidade: "Overgrow",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },

  {
    id: 2,
    nome: "Charmander",
    altura: "0.6 m",
    peso: "8.5 kg",
    categoria: "Lizard",
    habilidade: "Blaze",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
  },

  {
    id: 3,
    nome: "Squirtle",
    altura: "0.5 m",
    peso: "9.0 kg",
    categoria: "Tiny Turtle",
    habilidade: "Torrent",
    descricao:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
  },
];

let pokemon = undefined;

//Rotas
app.get("/", (req, res) => {
  res.render("index", { pokedex, pokemon });
});

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.lenght + 1;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  pokemon = pokedex.find((pokemon) => pokemon.id === id);
  res.redirect("/#cadastro");
});

app.post("/update/:id", (req, res) => {
  const id = +req.params.id - 1;
  const newPokemon = req.body;
  newPokemon.id = id + 1;
  pokedex[id] = newPokemon;
  pokemon = undefined;
  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const id = +req.params.id - 1;
  delete pokedex[id];
  res.redirect("/#cards");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000/")
);
