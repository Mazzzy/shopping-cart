// get api call for fetching data by given url
export const getApiDataByUrl = async (url) => {
    const response = await fetch(url).catch(err => {
		return { data: { isError: true, error: err } }
	});
	return response.json();
}