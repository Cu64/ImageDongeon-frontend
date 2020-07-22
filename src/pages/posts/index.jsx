import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout/Layout'
import settings from '../../settings'
import { grab } from '../../util/utils'

const index = ({ data }) => {
    const renderItems = () => (
        data.map(item => (
            <div>
                <Link href={`/posts/${item.id}`}>
                    <a>
                        <img src={`${settings.API_URL}images/${item.id}`} />
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