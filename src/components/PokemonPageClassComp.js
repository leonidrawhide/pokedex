import React, { Component } from 'react';

class PokemonPageClassComp extends Component {
	constructor(props){
		super(props);
		this.state = {
			url: "https://pokeapi.co/api/v2/pokemon/" + this.props.index,
			isLoaded: false,
			error: false,
			pokemonInfo: [],
			skeleton: 'skeleton'
		};
		console.log(this.state)
	}

	componentDidMount() {
		fetch(this.state.url)
			.then((response) => response.json())
			.then((response) => {				
				this.setState({
					isLoaded: true,
					pokemonInfo: response,
					skeleton: ''
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
		const { pokemonInfo, skeleton } = this.state;
		console.log(pokemonInfo)
		const pokemonName = pokemonInfo.name?.charAt(0).toUpperCase() + pokemonInfo.name?.slice(1);
		const imgAndNameClass = 'image-name-wrapper ' + {skeleton}
		const infoClass = 'info-wrapper ' + {skeleton}
		return <div className='pokemon-page'>

			<div className={imgAndNameClass}>
			<h2>{pokemonName}</h2>
				<img src={pokemonInfo.sprites?.other.home.front_default} alt="Картинка покемона" />
			</div>
			<div className={infoClass}>
				<p> Способности:</p>
				<ul>
					{pokemonInfo.abilities?.map((ability) => (
						<li>{ability.ability.name}</li>
					))}
				</ul>
				<p>Рост: {pokemonInfo.height * 10} см </p>
				<p>Вес: {pokemonInfo.weight / 10} кг </p>
				<table>
					<tr>
						<th>Название</th>
						<th>Мощность</th>
					</tr>
						{pokemonInfo.stats?.map((stat) => (
							<tr>
								<th>{stat.stat.name}</th>
								<th>{stat.base_stat}</th>
							</tr>
						))}
				</table>
			</div>
			{/* <div className='table-of-learnset-wrapper'>
				<table class="responsive-table">
					<tr>
						<th>Level</th>
						<th>Move</th>
					</tr>
						{pokemonInfo.moves?.map((move) => (
							<tr>
								<th>{move.version_group_details[0].level_learned_at}</th>
								<th>{move.move.name}</th>
							</tr>
						))}
				</table>
			</div> */}
		</div>;
	}
}

export default PokemonPageClassComp;