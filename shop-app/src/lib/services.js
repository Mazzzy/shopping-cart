// get api call for fetching data by given url
export const getApiDataByUrl = async (url) => {
    const response = await fetch(url).catch(err => {
		return { data: { isError: true, error: err } }
	});
	return response.json();
}

// post data by url
export const postApiDataByUrl = async (url, data) => {
	const response = await fetch(url, { 
		method: "POST",
		headers: {
	  		"Content-Type": "application/json",
		},
		body: JSON.stringify(data)
	}).catch(err => {
		return { data: { isError: true, error: err } }
	});
	return response.json();
}