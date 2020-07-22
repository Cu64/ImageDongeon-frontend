export const grab = async (url, settings = null) => {
	const res = await fetch(url)

	if (res.status > 201) {
		throw new Error('uh oh')
	}

	const json = await res.json()
	return json
}
