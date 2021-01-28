import React, { useState } from 'react';
import styles from './users.module.css';

type PaginatorPropsType = {
	totalUsersCount: number,
	pageSize: number,
	currentPage: number,
	onPageChanged: (pageNumber: number) => void
}

const Paginator:React.FC<PaginatorPropsType> = (props: PaginatorPropsType, {portionSize = 10}) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	} 

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rigthPortionPageNumber = portionNumber * portionSize;

	return (
		<div>
			{portionNumber > 1 && 
			<button onClick={() => {setPortionNumber(portionNumber - 1)}}>Previous</button>}
			{pages
			.filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
			.map(p => {
				return <span className={props.currentPage === p ? styles.selectedPage : ""}
					onClick={() => { props.onPageChanged(p) }}>{`${p} `}</span>
			})}
			{portionNumber < portionCount &&
			<button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
		</div>
	)
}

export default Paginator;