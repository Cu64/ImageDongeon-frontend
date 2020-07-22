import '../../styles/main.scss'
import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
	return (
		<>
			<Header></Header>

			<main className="mt-10 mx-auto container">{children}</main>
		</>
	)
}

export default Layout
