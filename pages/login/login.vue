<template>
	<view class="loginContainer">
		<view class="logoImg">
			<image src="../../static/login/logo.png" mode=""></image>
		</view>
		<view class="accountNumberBox">
			<view class="phone">
				<image src="../../static/login/phone.png" mode=""></image><input type="number" value="" @input="phoneNumber" placeholder="请输入手机号码" placeholder-class="placeStyle"/>
			</view>
			<view class="password">
				<image src="../../static/login/password.png" mode=""></image><input type="text" value="" @input="passWordChange" placeholder="请输入密码" placeholder-class="placeStyle"/>
			</view>
			<view class="forgetPassword">
				<text></text>
				<text @click="forgetPassword">忘记密码</text>
			</view>
		</view>
		<view class="login" @click="login">
			登录
		</view>
		<view :class="{loginTips:true,hide:cForget}" v-show="cForget">
			如果忘记密码，请联系管理员重置密码
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cForget:false
			}
		},
		methods: {
			forgetPassword(){
				if(this.cForget=true){
					return false
				}else{
					this.cForget=true
					
				}
				
			},
			// ^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$
			phoneNumber({detail:{value}}){
				console.log(value)
			},
			passWordChange({detail:{value}}){
				console.log(value)
			},
			login(){
				console.log(this.cForget)
			}
		},
		watch:{
			cForget(){
				this.cForget ? setTimeout(()=>{this.cForget=false},2000):''
			}
		}
	}
</script>

<style lang="scss" scoped>
.loginContainer{
	padding-top: 220rpx;
	.logoImg{
		width: 170rpx;
		height: 170rpx;
		background: #377BE4;
		border-radius: 20rpx;
		margin: 0 auto 0;
		image{
			width: 117rpx;
			height: 109rpx;
			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
	}
	.accountNumberBox{
		width: 550rpx;
		margin: 170rpx auto 0;
		
		input{
			height: 88rpx;
			padding: 0 0 0 40rpx;
			border-bottom: 2rpx solid #E4E5E9;
		}
		.phone{
			position: relative;	
			image{
				width: 22rpx;
				height: 32rpx;
			}
		}
		.password{
			position: relative;
			margin-top: 30rpx;
			image{
				width: 27rpx;
				height: 32rpx;
			}
		}
		image{
			position: absolute;
			top: 27rpx;
		}
		.placeStyle{
			font-size: 28rpx;
			font-weight: 500;
			color: #979797;
		}
		.forgetPassword{
			display: flex;
			justify-content: space-between;
			margin-top: 16rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #377BE4;
		}
	}
	.login{
		width: 550rpx;
		height: 88rpx;
		background: #FFFFFF;
		border: 2rpx solid #377BE4;
		border-radius: 44rpx;
		font-size: 34rpx;
		font-weight: 500;
		color: #377BE4;
		text-align: center;
		line-height: 88rpx;
		margin: 326rpx auto 0;
	}
	.loginTips{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 99;
		width: 360rpx;
		height: 110rpx;
		padding: 20rpx 60rpx 0;
		text-align: center;
		background: #000000;
		opacity: 0.5;
		border-radius: 10rpx;
		font-size: 24rpx;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 36rpx;
	}
	.hide {animation:hide 2s linear both;}  
	@keyframes hide {0% {opacity:1;}100% {opacity:0;}}
}

</style>
