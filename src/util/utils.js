import { NULL } from "node-sass"

export const grab = async(url, settings = null) => {
    const res = await fetch(url)

    if (res.status > 201) {
		throw new Error("Senpai? It seems like there's something going wrong in the backend.")
	}

    const json = await res.json()
    return json
}


export const searchPosts = async(url) => {
    const res = await fetch(url, {
        method: 'GET',
        redirect: 'follow'
    })

    if (res.status > 201) {
		throw new Error("Senpai? It seems like there's something going wrong in the backend.")
    }
    try {
        const json = await res.json()
        return json
    } catch (e) {
        return res.text
    }
}