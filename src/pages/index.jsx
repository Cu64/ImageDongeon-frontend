import React from 'react'
import Layout from '../components/Layout/Layout'
import settings from '../settings'
import { grab } from '../util/utils'

const index = ({ data }) => {
	return ( 
	<Layout>
		<div className="container text-center">
			<h1 className="">Welcome to the dongeon</h1>
			{data.featured_post &&
			<img
				className="mx-auto object-center"
				style={{maxHeight: '80vh'}}
				src={`${settings.API_URL}images/${data.featured_post}`}
			/>
			}
		</div>
	</Layout>
	)
}

export async function getServerSideProps({ res, err, params }) {
	const data = await grab(`${settings.API_URL}settings/featured_post`)

	return {
		props: { data: data },
	}
}

export default index
