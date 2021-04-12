let request = new Object();
import store from '@/store/index.js'
// import config from '@/utils/config.js'
import {
	sessionType,
	getSession,
} from '@/utils/session'



// 获取userInfo的token信息
let methods = ["post", "del", "put", "get"]
methods.forEach(method => {
	request[method] = (url, params, extra = {}) =>
		new Promise((resolve, reject) => {
			let userInfo = getSession(sessionType.USER_INFO)
			console.log(store.state.user.userInfo.token,'用户信息');
			let {
				title = "请稍后..",
					showLoading = true,
					showErrorToast = true,
					headers = {
						// "content-type": "application/x-www-form-urlencoded",
						token: userInfo.token||store.state.user.userInfo.token||''
						// token: '6220489c2a49a927a70834ced97f95b3'
					}
			} = extra;
			
			// 显示全屏loading
			showLoading &&
				uni.showLoading({
					title,
					mask: true
				});

			// 开始发送请求
			// http://192.168.0.100
			// http://jx.onlylove.top
			uni.request({
					url: 'http://jx.onlylove.top/' + url,
					header: headers,
					data: {
						uid:userInfo.id||store.state.user.userInfo.id||'',
						...params,
					},
					method
				})
				.then(chunk => {
					uni.hideLoading();

					let [err, res] = chunk;
					console.log(chunk)
					if (res.data) {
						let {
							code,
							msg
						} = res.data;

						// 未登录/重新登录/Token过期
						if (code == 402||code == 401) {
							uni.showToast({
								title: res.data.message ,
								icon: 'none'
							})
							// toast("未登录或已过期");
							store.dispatch("SET_USER_INFO", "");
							uni.setStorageSync("timUserSign", "");
							 return uni.navigateTo({
								url: "/pages/login/login"
							});
						}else{
							
						}
						resolve(res.data);
					} else {
						toast("请求失败，请重试", "error");
						reject(err);
					}
				});
		});
});

export default request;
