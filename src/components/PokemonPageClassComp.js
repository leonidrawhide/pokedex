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
				<table>
					<tr>
						<th className='pokemon-table-header'>
							Информация о покемоне
						</th>
					</tr>
					<tr>
						<th>Рост:</th>
						<td>{pokemonInfo.height * 10} см</td>
					</tr>
					<tr>
						<th>Вес:</th>
						<td> {pokemonInfo.weight / 10} кг</td>
					</tr>
					<tr >
						<th>Способности:</th>
					</tr>
					
					{pokemonInfo.abilities?.map((ability) => (
						<tr><td>{ability.ability.name}</td></tr>
					))}
					
				</table>
				<table>
					<tr>
						<th className='pokemon-table-header'>
							Показатели:
						</th>
					</tr>
					<tr>
						<th>Название</th>
						<th>Мощность</th>
					</tr>
						{pokemonInfo.stats?.map((stat) => (
							<tr>
								<td>{stat.stat.name}</td>
								<td>{stat.base_stat}</td>
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