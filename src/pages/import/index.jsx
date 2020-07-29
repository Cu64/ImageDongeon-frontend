import React from 'react'
import Layout from '../../components/Layout/Layout'
import Gelbooru from '../../components/Gelbooru'
import Danbooru from '../../components/Danbooru'

const index = ({ data }) => {
	return ( 
	<Layout>
		<div className="container">
            <Gelbooru />
			<Danbooru />
        </div>
	</Layout>
	)
}

export default index
