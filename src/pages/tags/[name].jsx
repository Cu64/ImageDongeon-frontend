import React, { useState, useEffect } from 'react'
import Error from 'next/error'
import Head from 'next/head'
import { grab } from '../../util/utils'

import Layout from '../../components/Layout/Layout'

import settings from '../../settings'

const Posts = ({ data }) => {
	return (
		<Layout>
			<div className="container">
                <h2>{data.name}</h2>
                Tag ID: {data.tag_id}
                <br />
                Description: {data.description}
            </div>
		</Layout>
	)
}

export async function getServerSideProps({ res, err, params }) {
	const data = await grab(`${settings.API_URL}tags/${params.name}`)

	return {
		props: { data: data },
	}
}

export default Posts
