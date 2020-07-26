import { NULL } from "node-sass"

export const grab = async(url, settings = null) => {
    const res = await fetch(url)

    if (res.status > 201) {
		throw new Error("Senpai? It seems like there's something going wrong in the backend.")
	}

    const json = await res.json()
    return json
}


export const uploadPost = async(url, tags = [], rating = 'safe') => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "image/jpeg");

    var file = "<file contents here>";

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: file,
        redirect: 'follow'
    };

    fetch(`${url}?tags=${tags.join("+")}&rating=${rating}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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