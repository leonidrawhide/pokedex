import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonPageClassComp from './PokemonPageClassComp';

export default function PokemonPage() {
	const {id} = useParams();
  	return < PokemonPageClassComp index={id}/>
}