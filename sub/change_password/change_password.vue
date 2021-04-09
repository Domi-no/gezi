<template>
	<view class="changePasswordContainer">
		<view class="changePasswordBox">
			<input type="" :value="passwordForm.old_password" @input="oldPasswordValue" placeholder="原密码" placeholder-class="co" />
			<input class="newPassword" type="text"  :value="passwordForm.password" placeholder="新密码" placeholder-class="co" maxlength="20" @input="verifyPassword"/>
		</view>
		<view class="passwordToolTips"><text v-show="isShowT">*请输入8-20个字符，不可以是纯数字</text></view>
		<view :class="{confirm:true,confirmBg:isClick}" @click="cConfirmBtn">
			确认
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import store from '@/store/index.js'
	// import config from '@/utils/config.js'
	import {
		sessionType,
		getSession,
	} from '@/utils/session'
	export default {
		data() {
			return {
				
				passwordForm:{
					
					password:'',
					old_password:'',
				},
				isShowT:false,
				isClick:false
			}
		},
		methods: {
			verifyPassword(e){
				// /^.*[^\d].*$/
				if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(e.detail.value)){
					this.isShowT = false
					this.isClick = true
				}else{
					this.isShowT = true
					this.isClick = false
				}
				console.log(e.detail.value.charAt(e.detail.value.length-1))
				console.log(e.detail.value,e.detail.value.substr(0, e.detail.value.length - 1))
				this.passwordForm.password = e.detail.value
				console.log(this.passwordForm)
			},
			oldPasswordValue({detail:{value}}){
				this.passwordForm.old_password =value
			},
			cConfirmBtn(){
				this.isClick ? console.log('确认') :''
				this.$http.post('/Login/SetPassword.html',{...this.passwordForm,uid:this.userInfo.id,})
				.then((res)=>{
					console.log(res)
					uni.showToast({
						title: res.message,
						icon: 'none'
					})
					if(res.code == 200){
						console.log(2)
						
						console.log(1)
						setTimeout(()=>{
							store.dispatch("SET_USER_INFO", "");
							uni.setStorageSync("timUserSign", "");
							uni.navigateTo({
								url: "/pages/login/login"
							});
						},500)
					}
					
					
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			})
		}
	}
</script>

<style lang="scss" scoped>
.changePasswordContainer{
	height: calc(100vh);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	.changePasswordBox{
		width: 100%;
		height: 220rpx;
		background: #FFFFFF;
		padding-left: 30rpx;
		input{
			height: 109rpx;
		}
		
		.co{
		color: #979797!important;
		font-size: 30rpx;
		}
		.newPassword{
			border-top: 2rpx solid #E4E5E9;
		}
	}
	.passwordToolTips{
		height: 24rpx;
		margin-top: 14rpx;
		padding-left: 30rpx;
		text{
			font-size: 24rpx;
			font-weight: 500;
			color: #E64329;
		}
	}
	.confirm{
		width: 670rpx;
		height: 88rpx;
		background: #D1D2D3;
		border-radius: 44rpx;
		text-align: center;
		line-height: 88rpx;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
		margin: 152rpx auto 0;
	}
	.confirmBg{
		background-color:#377BE4;
	}
}
</style>
