import React from 'react'
import Link from 'next/link'

import SearchBar from '../SearchBar'

const Header = () => {
	return (
		<header className="bg-gray-700 text-white px-4 py-2 flex items-center">
			<div className="text-2xl mr-8">Image Dongeon</div>

			<nav className="site-nav text-white">
				<Link href="/"><a>Home</a></Link>
				<Link href="/posts"><a>Posts</a></Link>
				<Link href="/upload/"><a>Upload</a></Link>
				<Link href="/tags"><a>Tags</a></Link>
				<a href="#">Pools</a>
				<a href="#">Users</a>
				<Link href="/admin"><a>Admin</a></Link>
			</nav>

			<div className="ml-auto">
				<SearchBar />
			</div>
		</header>
	)
}

export default Header
