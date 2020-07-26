import React from 'react'
import Layout from '../../components/Layout/Layout'
import FileUpload from '../../components/FileUpload'

const index = ({ data }) => {
	return ( 
	<Layout>
		<div className="container">
            <FileUpload />
        </div>
	</Layout>
	)
}

export default index
