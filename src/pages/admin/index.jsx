import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout/Layout'
import Modal from '../../components/Modal'
import settings from '../../settings'
import { grab } from '../../util/utils'
const index = ({ data }) => {
    return(
        <Layout>
            <div className="container">
                <div className="grid grid-cols-12 col-gap-20">
                    <div class="col-span-3">
                        <button className="w-full bg-red hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full">Reset all settings</button>
                    </div>
                    <div className="text-left col-span-9">
                        <h2>Settings? Gone. The database that this operates on? Might be gone.</h2>
                    </div>
                    <div class="col-span-3">
                        <button className="w-full bg-red hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full">Delete all posts</button>
                    </div>
                    <div className="text-left col-span-9">
                        <h2>Delete all posts in the system. (Might delete half of the universe)</h2>
                    </div>
                    <div class="col-span-3">
                        <button className="w-full bg-red hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full">Clear thumbnail cache</button>
                    </div>
                    <div className="text-left col-span-9">
                        <h2>Clear the thumbnail cache. (API's CPU usage go brrrr)</h2>
                    </div>
                </div>
            </div>
            <Modal />
        </Layout>
)}
export default index