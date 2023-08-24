import React, { useState, useEffect } from 'react';
import './App.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
      });
  };

  return (
    <div className="App">
      <h1>Pokémon List</h1>
      <button onClick={fetchPokemon}>Fetch Pokémon</button>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <span className="bullet"></span>
            <span className="name">{capitalizeFirstLetter(pokemon.name)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
