import React, { Component } from 'react';

class PokemonPageClassComp extends Component {
	constructor(props){
		super(props);
		this.state = {
			url: "https://pokeapi.co/api/v2/pokemon/" + this.props.index,
			isLoaded: false,
			error: false,
			pokemonInfo: [],
			skeleton: 'skeleton',
			imgIndex: 2
		};
		this.handleClick = this.handleClick.bind(this);
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

	handleClick(index) {
		console.log(index)
		this.setState(prevState => ({
			imgIndex: index
		}))
	}

	render() {
		const { pokemonInfo, skeleton, imgIndex } = this.state;

		console.log(pokemonInfo)
		const pokemonName = pokemonInfo.name?.charAt(0).toUpperCase() + pokemonInfo.name?.slice(1);
		const imgAndNameClass = 'main-wrapper ' + skeleton
		const infoClass = 'info-wrapper ' + skeleton
		const spriteLinkArr = []
		for (let index in pokemonInfo.sprites) {
			if (typeof pokemonInfo.sprites[index] === 'string') {
				spriteLinkArr.unshift(pokemonInfo.sprites[index])
			} else if (index === 'other') {
				for (let innerIndex in pokemonInfo.sprites[index]) {
					for (let anotherInnerIndex in pokemonInfo.sprites[index][innerIndex]) {
						if (typeof pokemonInfo.sprites[index][innerIndex][anotherInnerIndex] === 'string') spriteLinkArr.unshift(pokemonInfo.sprites[index][innerIndex][anotherInnerIndex])
					}
				}
			}
		}
		
		return <div className='pokemon-page'>

			<div className={imgAndNameClass}>
				<h2>{pokemonName}</h2>
				<div className='image-wrapper'>
					<img src={spriteLinkArr[imgIndex]} alt="Картинка покемона" />
				</div>
				<div className='sprites-wrapper'>

					{spriteLinkArr.map((sprite, index) => (
						<img src={sprite} alt="picture of a pokemon" className='sprite' onClick={() => this.handleClick(index)} />
					))}
				</div>
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
		</div>;
	}
}

export default PokemonPageClassComp;