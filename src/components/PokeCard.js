import React from 'react';

export default function PokeCard(props) {
	const imgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.index}.png`
  	return <div className='pokecard'>
		<img src={imgLink} alt={props.item.name} />
		<h2>{props.item.name}</h2>
		{/* <a href={props.item.url}> more </a> */}
  	</div>;
}
