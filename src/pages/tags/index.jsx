import React from 'react'
import Layout from '../../components/Layout/Layout'
import Link from 'next/link'
import settings from '../../settings'
import { grab } from '../../util/utils'

const index = ({ data }) => {
    const renderItems = () => (
        data.tags.map(item => (
            <ul className="list-none">
                <li><Link href={`/tags/[name]`} as={`/tags/${item}`}><a>{item}</a></Link></li>
            </ul>
        )
    ))

    return(
        <Layout>
            <div className="container">
                <h1>Tags</h1>
                {renderItems()}
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ res, err, params }) {
	const data = await grab(`${settings.API_URL}tags/all`)

	return {
		props: { data: data},
	}
}

export default index