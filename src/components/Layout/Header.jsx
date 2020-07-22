import React from 'react'

import SearchBar from '../SearchBar'

const Header = () => {
	return (
		<header className="bg-gray-700 text-white px-4 py-2 flex items-center">
			<div className="text-2xl mr-8">Image Dongeon</div>

			<nav className="site-nav text-white">
				<a href="/">Home</a>
				<a href="/posts">Posts</a>
				<a href="#">Upload</a>
				<a href="#">Tags</a>
				<a href="#">Pools</a>
				<a href="#">Users</a>
			</nav>

			<div className="ml-auto">
				<SearchBar />
			</div>
		</header>
	)
}

export default Header
