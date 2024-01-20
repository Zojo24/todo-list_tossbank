const baseURL =
	'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'

export const customFetch = async (endpoint, options = {}) => {
	const defaultHeaders = {
		'content-type': 'application/json',
		apikey: 'KDT7_GrZ1eYBo',
		username: 'KDT7_ChoiHongJoo'
	}
	const finalOptions = {
		headers: { ...defaultHeaders, ...options.headers },
		...options
	}
	try {
		const response = await fetch(`${baseURL}${endpoint}`, finalOptions)
		if (!response.ok) {
			throw new Error(
				`Server responded with ${response.status}: ${response.statusText}`
			)
		}
		return await response.json()
	} catch (error) {
		console.error('Error in customFetch:', error)
		throw error
	}
}
