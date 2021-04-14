import React from 'react';
import { Header } from 'components';

const PageWrapper = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default PageWrapper;
