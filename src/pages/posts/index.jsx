import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout/Layout'
import settings from '../../settings'
import { grab } from '../../util/utils'

const index = ({ data }) => {
    const renderItems = () => (
        data.map(item => (
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
        )
    ))

    return(
        <Layout>
            <div className="container">
                <div className="grid grid-cols-5 gap-4">
                    {renderItems()}
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ res, err, params }) {
	const data = await grab(`${settings.API_URL}posts/all`)

	return {
		props: { data: data},
	}
}

export default index