import React, { useEffect, useState } from 'react';
import { CollectionItem } from 'components';

import './CollectionPreview.styles.scss';

const CollectionPreview = () => {
	const [collection, setCollection] = useState([]);

	useEffect(() => {
		// Symulate API connection
		(async () => {
			await fetch(`./items.json`, {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			})
				.then((response) => response.json())
				.then((messages) => {
					setCollection(messages);
				});
		})();
	}, []);

	return (
		<div className='collection'>
			<h1>PRODUKTY</h1>
			<div className='collection-container'>
				{collection.map((item) => {
					return <CollectionItem key={item.id} item={item} />;
				})}
			</div>
		</div>
	);
};

export default CollectionPreview;
