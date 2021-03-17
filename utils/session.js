export const sessionType = {
	USER_INFO: 'USER_INFO'
};

export const getSession = (type) => {
	let data = {}
	uni.getStorage({
		key: type,
		success: (res) => {
			console.log(res);
			data =JSON.parse(res.data)
			
		}
	})
	return data
};

export const setSession = (type, data) => {
	uni.setStorage({
		key: type,
		data:JSON.stringify(data)
	})
};

export const removeSession = (type) => {
	uni.removeStorage(type)
};
