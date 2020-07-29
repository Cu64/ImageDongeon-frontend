import React from 'react'
import Layout from '../../components/Layout/Layout'
import settings from '../../settings'

function resetAllSettings() {
    fetch(`${settings.API_URL}settings/reset`, {
        method: 'DELETE',
        redirect: 'follow'
    })
}

function deleteAllPosts() {
    fetch(`${settings.API_URL}posts/deleteall`, {
        method: 'DELETE',
        redirect: 'follow'
    })
}

function clearThumbnailCache() {
    fetch(`${settings.API_URL}thumbs/deleteall`, {
        method: 'DELETE',
        redirect: 'follow'
    })
}

const index = ({ data }) => {
    return(
        <Layout>
            <div className="container">
                <div className="grid grid-cols-12 col-gap-20">
                    <div className="col-span-3">
                        <button onClick={resetAllSettings()} className="w-full bg-red hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full">Reset all settings</button>
                    </div>
                    <div className="text-left col-span-9">
                        <h2>Settings? Gone. The database that this operates on? Might be gone.</h2>
                    </div>
                    <div className="col-span-3">
                        <button onClick={deleteAllPosts()} className="w-full bg-red hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full">Delete all posts</button>
                    </div>
                    <div className="text-left col-span-9">
                        <h2>Delete all posts in the system. (Might delete half of the universe)</h2>
                    </div>
                    <div className="col-span-3">
                        <button onClick={clearThumbnailCache()} className="w-full bg-red hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full">Clear thumbnail cache</button>
                    </div>
                    <div className="text-left col-span-9">
                        <h2>Clear the thumbnail cache. (API's CPU usage go brrrr)</h2>
                    </div>
                </div>
            </div>
        </Layout>
)}
export default index