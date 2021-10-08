import {
	sessionType,
	getSession,
	setSession
} from '@/utils/session'

const types = {
	SET_USER_INFO: 'SET_USER_INFO',
	SET_USER_WECHATCODE: 'SET_USER_WECHATCODE',
};



const common = {
	state: {
		userInfo: getSession(sessionType.USER_INFO) || null, // 用户信息
		// appid: config.appid,
		// appid: "wxdc7ae2495e1a883c",
		// openUrl: config.openUrl,
		wechatCode: '' // 微信code
	},
	getters: {},
	mutations: {
		[types.SET_USER_INFO](state, payload) {
			// console.log(payload);
			state.userInfo = payload
			// console.log(state.userInfo)
			setSession(sessionType.USER_INFO, payload)
		},
		// 设置微信code
		[types.SET_USER_WECHATCODE](state, payload) {
			state.wechatCode = payload
		}
	},
	actions: {
		handleUserInfo({
			commit
		}, payload) {
			return new Promise((resolve, reject) => {
				// console.log(222, payload);
				commit(types.SET_USER_INFO, payload);
				resolve()
			})
		}
	}
};

export default common;
