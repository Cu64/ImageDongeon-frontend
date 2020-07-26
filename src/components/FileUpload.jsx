import React, {useState} from 'react'
import settings from '../settings'
import Router from 'next/router'

const FileUpload = () => {
    const [file, setFile] = useState('')

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }    

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', file)
    
        fetch(`${settings.API_URL}posts/upload?tags=&rating=safe`, {
          method: 'POST',
          body: formData.get('image')
        }).then(() => {
          setFile('')
          Router.replace(Router.pathname, Router.asPath)
        })
    }

	return (
        <div className="text-center">
            <div className="mx-auto w-1/2 border-solid border-2 border-blue-300">
                <p className="text-3xl">Upload</p>
                <form onSubmit={handleFormSubmit}>
                    <input type="file" onChange={handleFileChange} required="yes" />
                    <button className="bg-transparent bg-blue-300 text-white hover:text-white my-2 py-1 px-4 border rounded-full">
                        Submit
                    </button>
                </form>
            </div>
        </div>
	)
}

export default FileUpload