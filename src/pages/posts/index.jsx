import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout/Layout'
import settings from '../../settings'
import { searchPosts } from '../../util/utils'

function RenderItems(data) {
	if (data.data.success == false) {
		return (
			<h1>No post found</h1>
		)
	} else {
		return (
			data.data.map(item => (
				<div>
                	<Link href="/posts/[id]" as={`/posts/${item.post_id}`}>
                    	<a>
                        	<img title={`Post #${item.post_id}
Tags: ${item.tags.join(" ")}
Size: ${item.width}x${item.height}
Posted on: ${new Date(item.post_time * 1000).toLocaleString()}
Rating: ${item.rating}`} src={`${settings.API_URL}thumbs/${item.post_id}`} />
                    	</a>
                	</Link>
            	</div>
			))
		)
	}
}

const index = ({ data }) => {
	return ( 
	<Layout>
		<div className="container">
			<div className="grid grid-cols-5 gap-4">
				<RenderItems data={data} />
			</div>
		</div>
	</Layout>
	)
}

export async function getServerSideProps({ res, err }) {
	const data = await searchPosts(`${settings.API_URL}posts/all`)
	
	return {
		props: { data: data },
	}
}

export default index
