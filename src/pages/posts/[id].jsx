import React, { useState, useEffect } from 'react'
import { grab } from '../../util/utils'
import Layout from '../../components/Layout/Layout'
import settings from '../../settings'
import Link from 'next/link'

const Posts = ({ data, id }) => {
	return (
		<Layout>
			<div className="container">
				<div className="single-image">
					<div className="single-image__details">
						<h2>Tags</h2>
						{data.tags.map((tag) => (
							<div>
								<Link href="/tags/[name]" as={`/tags/${tag}`}><a>?</a></Link>
								<Link href="/search/[query]" as={`/search/${tag}`}><a> {tag}</a></Link>
							</div>
						))}
						<h2 className="pt-5">Data</h2>
						ID: {data.post_id}
						<br />
						Height: {data.height}px
						<br />
						Width: {data.width}px
						<br />
						Posted on:
						{' ' + new Date(data.post_time * 1000).toLocaleString()}
						<br />
						Rating: {data.rating}
					</div>
					<div className="single-image__image">
						<img
							style={{maxHeight: '85vh'}}
							src={`${settings.API_URL}images/${id}`}
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export async function getServerSideProps({ res, err, params }) {
	const data = await grab(`${settings.API_URL}posts/${params.id}`)

	return {
		props: { data: data, id: params.id },
	}
}

export default Posts
