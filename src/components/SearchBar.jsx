import React, {useState} from 'react'
import Router from 'next/router'

const SearchBar = () => {
	const [input, setInput] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		if (input.trim()) {
			Router.push(
				`/search/[query]`,
				`/search/${encodeURIComponent(input.trim().replace(/ /g, '+'))}`
			)
			setInput(input.trim())
		}
	}

	return (
		<div className="bg-white border">
			<form onSubmit={(e) => handleSubmit(e)}>
				<input className="py-2 px-2 ml-auto text-black h-6" type="text" onChange={(e) => setInput(e.currentTarget.value)} placeholder="Search..." />
				<button type="submit" className="mx-2 align-middle">
					<svg fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
						<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
					</svg>
				</button>
			</form>
		</div>
	)
}

export default SearchBar
