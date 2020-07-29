import React, {useState} from 'react'
import settings from '../settings'

const Danbooru = () => {
	const [input, setInput] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		if (input.trim()) {
            fetch(`${settings.API_URL}import/danbooru/${input.trim()}`, {
                method: 'POST',
                redirect: 'follow'
            })
			setInput(input.trim())
		}
	}

	return (
        <div className="container">
            <p className="text-3xl">Import post from Danbooru</p>
		    <div className="bg-white border">
		    	<form onSubmit={(e) => handleSubmit(e)}>
		    		<input className="py-2 px-2 ml-auto w-full text-black h-6" type="text" onChange={(e) => setInput(e.currentTarget.value)} placeholder="Post ID to import" />
		    	</form>
		    </div>
        </div>
	)
}

export default Danbooru
