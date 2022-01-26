import React from 'react';

export default function PokeCard(props) {
	const imgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.index}.png`
	const pokemonName = props.item.name.charAt(0).toUpperCase() + props.item.name.slice(1)
  	return <div className='pokecard'>
		<img src={imgLink} alt={props.item.name} />
		<h2>{pokemonName}</h2>
		{/* <a href={props.item.url}> more </a> */}
  	</div>;
}
