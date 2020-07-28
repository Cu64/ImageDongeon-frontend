import React, {useState} from 'react'
import settings from '../settings'

const SearchBar = () => {

    var getParams = function(url) {
        var params = {}
        var parser = document.createElement('a')
        parser.href = url
        var query = parser.search.substring(1)
        var vars = query.split('&')
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=')
            params[pair[0]] = decodeURIComponent(pair[1])
        }
        return params
    }

	const [input, setInput] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		if (input.trim()) {
            fetch(`${settings.API_URL}import/gelbooru/${getParams(input.trim()).id}`, {
                method: 'POST',
                redirect: 'follow'
            })
			setInput(input.trim())
		}
	}

	return (
        <div className="container">
            <p className="text-3xl">Import post from Gelbooru</p>
		    <div className="bg-white border">
		    	<form onSubmit={(e) => handleSubmit(e)}>
		    		<input className="py-2 px-2 ml-auto text-black h-6" type="text" onChange={(e) => setInput(e.currentTarget.value)} placeholder="Post link to import" />
		    		<button type="submit" className="mx-2 align-middle">
		    		</button>
		    	</form>
		    </div>
        </div>
	)
}

export default SearchBar
