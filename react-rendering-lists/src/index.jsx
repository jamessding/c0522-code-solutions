import React from 'react';
import ReactDOM from 'react-dom/client';

function ListPokemon(props) {
  return <li>{props.value}</li>;
}

function PokemonList(props) {
  const pokedex = props.pokedex;
  const listPokemons = pokedex.map(pokemon =>
    <ListPokemon key={pokemon.number} value={pokemon.name} />
  );
  return (
    <ul>
      {listPokemons}
    </ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<PokemonList pokedex={pokedex}/>);
