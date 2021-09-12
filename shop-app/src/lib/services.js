// get api call for categories
export const getCategories = async (url) => {
    const response = await fetch(url).catch(err => {
		return { data: { isError: true, error: err } }
	});
	return response.json();
}