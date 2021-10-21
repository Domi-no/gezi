let request = new Object();
import store from '@/store/index.js'
// import config from '@/utils/config.js'
import {
	sessionType,
	getSession,
} from '@/utils/session'



// 获取userInfo的token信息
let methods = ["post", "del", "put", "get"]
var isDownload = false 
methods.forEach(method => {
	request[method] = (url, params, extra = {}) =>
		new Promise((resolve, reject) => {
			let userInfo = getSession(sessionType.USER_INFO)
			let versionNumber = uni.getStorageSync('versionNumber');
			// console.log(store.state.user.userInfo.token,'用户信息');
			let {
				title = "请稍后..",
					showLoading = true,
					showErrorToast = true,
					headers = {
						// "content-type": "application/x-www-form-urlencoded",
						token: userInfo.token || store.state.user.userInfo.token || '',
						// token: '6220489c2a49a927a70834ced97f95b3'
						// #ifdef H5 || APP-PLUS
						'AppOrWeChat': '200',
						Version: versionNumber,
						// Version: '1.0.0',
						// #endif
						// #ifdef MP-WEIXIN
						'AppOrWeChat': '300'
						// #endif
					}
			} = extra;
			// setRequestHeader('type',200)
			// 显示全屏loading
			showLoading &&
				uni.showLoading({
					title,
					mask: true
				});
			console.log(userInfo.token, store.state.user.userInfo.token, 'TOKEN')
			// 开始发送请求
			// 线上地址
			// http://47.95.0.20:666/
			// 测试服地址
			// https://jx.onlylove.top/
			uni.request({
					url: 'http://47.95.0.20:666/' + url,
					header: headers,
					data: {
						uid: userInfo.id || store.state.user.userInfo.id || '',
						...params,
					},
					method
				})
				.then(chunk => {
					uni.hideLoading();

					let [err, res] = chunk;
					// console.log(chunk)
					if (res.data) {
						let {
							code,
							msg
						} = res.data;
						if (code == 406) {
							// console.log(code,res.data)
							if(!isDownload){
								isDownload=true
								setTimeout(() => {
									// plus.runtime.openURL(res.data.data.downloadUrl)
									let dtask = plus.downloader.createDownload(res.data.data.downloadUrl, {},
										function(d, status) {
											// 下载完成  
											if (status == 200) {
												plus.runtime.install(plus.io
													.convertLocalFileSystemURL(d
													.filename), {}, {},
													function(error) {
														uni.showToast({
															title: '安装失败',
															duration: 1500
														});
													})
											} else {
												uni.showToast({
													title: '更新失败',
													duration: 1500
												});
											}
										});
									dtask.start();
									var prg = 0;
									var showLoading = plus.nativeUI.showWaiting("正在下载");
									dtask.addEventListener('statechanged', function(task,status) {
									// 给下载任务设置一个监听 并根据状态 做操作
									switch (task.state) {
									case 1:
									showLoading.setTitle("正在下载");
									break;
									case 2:
									showLoading.setTitle("已连接到服务器");
									break;
									case 3:
									prg = parseInt(
									(parseFloat(task.downloadedSize) /
									parseFloat(task.totalSize)) *
									100
									);
									showLoading.setTitle("版本更新,正在下载" + prg + "% ");
									break;
									case 4:
									plus.nativeUI.closeWaiting();
									//下载完成
									break;
									}
									});
									isDownload=false
								}, 1000)
							}
							

						}
						console.log(res.data)
						// 未登录/重新登录/Token过期
						if (code == 402 || code == 401) {
							uni.showToast({
								title: '登录状态已失效',
								icon: 'none'
							})
							// toast("未登录或已过期");

							store.dispatch("SET_USER_INFO", "");
							uni.setStorageSync("storage_key", "");
							uni.setStorageSync("timUserSign", "");
							return uni.navigateTo({
								url: "/pages/login/login"
							});
						} else {

						}
						resolve(res.data);
					} else {
						uni.showToast({
							title: "请求失败，请重试",
							icon: 'none'
						})
						// toast("请求失败，请重试", "error");
						// reject(err);

					}
				});
		});
});

export default request;
