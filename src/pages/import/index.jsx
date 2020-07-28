import React from 'react'
import Layout from '../../components/Layout/Layout'
import Gelbooru from '../../components/Gelbooru'

const index = ({ data }) => {
	return ( 
	<Layout>
		<div className="container">
            <Gelbooru />
        </div>
	</Layout>
	)
}

export default index
