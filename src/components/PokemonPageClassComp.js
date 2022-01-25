import React, { Component } from 'react';

class PokemonPageClassComp extends Component {
	constructor(props){
		super(props);
		this.state = {
			url: "https://pokeapi.co/api/v2/pokemon/" + this.props.index,
			isLoaded: false,
			error: false,
			pokemonInfo: []
		};
		console.log(this.state)
	}

	componentDidMount() {
		fetch(this.state.url)
			.then((response) => response.json())
			.then((response) => {				
				this.setState({
					isLoaded: true,
					pokemonInfo: response
				});
				console.log(response)
				}, 
				(error) => {
				this.setState({
					isLoaded: true,
					error: true
				})
			})
	}

	render() {
		const { pokemonInfo, isLoaded, error, index } = this.state;
		console.log(pokemonInfo)
		return <div>
			<div className='image-wrapper'>
				<img src={pokemonInfo.sprites?.other.home.front_default} alt="Картинка покемона" />
			</div>
			<div className='info-wrapper'>
				<p> Способности:</p>
				<ul>
					{pokemonInfo.abilities?.map((ability) => (
						<li>{ability.ability.name}</li>
					))}
				</ul>
				<p>Рост: {pokemonInfo.height} </p>
			</div>
		</div>;
	}
}

export default PokemonPageClassComp;