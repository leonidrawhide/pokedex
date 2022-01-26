import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokeCard from './PokeCard';
import Pagination from './Pagination';

export default class PokeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: [],
			currentItems: [],
			currentPage: null,
			totalPages: null
		};
	}

	componentDidMount() {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=898")
			.then((response) => response.json())
			.then((response) => {				
				this.setState({
					isLoaded: true,
					items: response.results
				});
				}, 
				(error) => {
				this.setState({
					isLoaded: true,
					error: true
				})
			})
	}

	onPageChanged = data => {
		const { items } = this.state;
		const { currentPage, totalPages, pageLimit } = data;
		const offset = (currentPage - 1) * pageLimit;
		const currentItems = items.slice(offset, offset + pageLimit);
	
		this.setState({ currentPage, currentItems, totalPages });
	  }

	render() {
		const {error, isLoaded, items, currentItems, currentPage} = this.state;
    	const totalItems = items.length;

   		if (totalItems === 0) return null;
		if (error) {
			return <p>{error.message}</p>
		} else if (!isLoaded) {
			return <p>Loading...</p>
		} else {
			return ( 
				<div className='pokelist'>
					{currentItems.map((item, index) => (
						<Link to={{
							pathname: '' + (index + 1 + ((currentPage - 1) * 12))
							}} 	
						>
							{/* <div key={'' + (index + 1 + ((currentPage - 1) * 12))}> */}
								<PokeCard item={item} index={index + 1 + ((currentPage - 1)*12)}/>
							{/* </div> */}
						</Link>
					))}
					<Pagination totalRecords={totalItems} pageLimit={12} pageNeighbours={1} onPageChanged={this.onPageChanged} />
				</div>
			)
		}
  	}
}
