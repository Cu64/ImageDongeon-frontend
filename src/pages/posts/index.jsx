import React from 'react'
import Layout from '../../components/Layout/Layout'
import settings from '../../settings'
import { grab } from '../../util/utils'

const index = ({ data }) => {
    const renderItems = () => (
        data.map(item => (
            <div>
                <a href={`/posts/${item.id}`}>
                    <img src={`${settings.API_URL}images/${item.id}`} />
                </a>
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