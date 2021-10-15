<template>
	<view class="clockInContainer"  v-if="clockInfo.userInfo">
		<view class="informationCard" v-if="clockInfo.userInfo">
			<view class="information_left">
				<view class="avatar">
					<image :src="clockInfo.userInfo.avatar" mode=""></image>
				</view>
				<view class="name">
					<view class="">
						{{clockInfo.userInfo.user_name}}
					</view>
					<text>{{clockInfo.userInfo.name}}</text>
				</view>
			</view>
			<!-- <text class="cRule" @click="rulesClick">考勤规则</text> -->
		</view>
		<view class="" style="padding: 41rpx 30rpx 0;" v-if="clockInfo.Punch">
			<view class="clockDetail">
				<view class="circle">
					
				</view>
				<view class="" style="margin-left: 13rpx;position: relative;top: -32rpx;">
					<view class="clock_time">
						上班时间&nbsp;&nbsp;&nbsp;{{this.clockInfo.Punch['上午']['上班']['上班时间']}}
					</view>
					<view :class="{clock_img:true,clockColor:clockInfo.Punch['上午']['上班']['打卡状态'] !== '已打卡'}">
						<image :src="clockInfo.Punch['上午']['上班']['打卡状态'] === '未打卡' ? picSrc[1] :clockInfo.Punch['上午']['上班']['打卡状态'] === '已打卡'? picSrc[0] : picSrc[2]  " mode="" :class="{wdkImg:clockInfo.Punch['上午']['上班']['打卡状态'] === '未打卡'}"></image>
						{{this.clockInfo.Punch['上午']['上班']['打卡状态'] === '迟到' ? '已打卡' :this.clockInfo.Punch['上午']['上班']['打卡状态'] }}&nbsp;&nbsp;&nbsp;{{this.clockInfo.Punch['上午']['上班']['上班打卡']}}
					</view>
				</view>
				
			</view>
			<view class="clockDetail">
				<view class="circle">
					
				</view>
				<view class="" style="margin-left: 13rpx;position: relative;top: -32rpx;">
					<view class="clock_time">
						下班时间&nbsp;&nbsp;&nbsp;{{this.clockInfo.Punch['上午']['下班']['下班时间']}}
					</view>
					<view :class="{clock_img:true,clockColor:clockInfo.Punch['上午']['下班']['打卡状态'] !== '已打卡'}">
						<image :src="clockInfo.Punch['上午']['下班']['打卡状态'] === '未打卡' ? picSrc[1] :clockInfo.Punch['上午']['下班']['打卡状态'] === '已打卡'? picSrc[0] : picSrc[2]  " mode="" :class="{wdkImg:clockInfo.Punch['上午']['下班']['打卡状态'] === '未打卡'}"></image>
						{{this.clockInfo.Punch['上午']['下班']['打卡状态']=== '迟到' ? '已打卡' :this.clockInfo.Punch['上午']['下班']['打卡状态']}}&nbsp;&nbsp;&nbsp;{{this.clockInfo.Punch['上午']['下班']['下班打卡']}}
					</view>
				</view>
				
			</view>
			<view class="clockDetail">
				<view class="circle">
					
				</view>
				<view class="" style="margin-left: 13rpx;position: relative;top: -32rpx;">
					<view class="clock_time">
						上班时间&nbsp;&nbsp;&nbsp;{{this.clockInfo.Punch['下午']['上班']['上班时间']}}
					</view>
					<view :class="{clock_img:true,clockColor:clockInfo.Punch['下午']['上班']['打卡状态'] !== '已打卡'}">
						<image :src="clockInfo.Punch['下午']['上班']['打卡状态'] === '未打卡' ? picSrc[1] :clockInfo.Punch['下午']['上班']['打卡状态'] === '已打卡'? picSrc[0] : picSrc[2]  " mode="" :class="{wdkImg:clockInfo.Punch['下午']['上班']['打卡状态'] === '未打卡'}"></image>
						{{clockInfo.Punch['下午']['上班']['打卡状态']=== '迟到' ? '已打卡' :this.clockInfo.Punch['下午']['上班']['打卡状态']}}&nbsp;&nbsp;&nbsp;{{this.clockInfo.Punch['下午']['上班']['上班打卡']}}
					</view>
				</view>
				 
			</view>
			<view class="clockDetail">
				<view class="circle">
					
				</view>
				<view class="" style="margin-left: 13rpx;position: relative;top: -32rpx;">
					<view class="clock_time">
						下班时间&nbsp;&nbsp;&nbsp;{{this.clockInfo.Punch['下午']['下班']['下班时间']}}
					</view>
					<view :class="{clock_img:true,clockColor:clockInfo.Punch['下午']['下班']['打卡状态'] !== '已打卡'}">
						<image :src="clockInfo.Punch['下午']['下班']['打卡状态'] === '未打卡' ? picSrc[1] :clockInfo.Punch['下午']['下班']['打卡状态'] === '已打卡'? picSrc[0] : picSrc[2]  " mode="" :class="{wdkImg:clockInfo.Punch['下午']['下班']['打卡状态'] === '未打卡'}"></image>
						{{this.clockInfo.Punch['下午']['下班']['打卡状态']=== '迟到' ? '已打卡' :this.clockInfo.Punch['下午']['下班']['打卡状态']}}&nbsp;&nbsp;&nbsp;{{this.clockInfo.Punch['下午']['下班']['下班打卡']}}
					</view>
				</view>
				
			</view>
		</view>
		<view class="clockBtn" @click="getClockData" v-if="clockInfo.Punch">
			<view class="oClockBtn">
				<view class="iClockBtn">
					<view class="" >
						{{clockInfo.Punch.text}}
					</view>
					<text>{{clock_in_time}}</text>
				</view>
			</view>
		</view>
		<view :class="{wifiClock:true,clockColor:!clockInfo.Punch.entry}">
			<image v-if="clockInfo.Punch.entry"  src="../../static/daiban/zdwz.png" mode=""></image><image v-else src="../../static/daiban/wdk.png" style="width:24rpx;height:24rpx;" mode=""></image>{{clockInfo.Punch.entry?'已进入':'未进入'}}打卡范围：{{clockInfo.userInfo.firm_name}}
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				picSrc:['../../static/daiban/ydk.png','../../static/daiban/wdk.png','../../static/daiban/dkcs.png','../../static/daiban/zdwz.png'],
				clockInfo:{},
				dataForm:{
					lat:'',
					lng:''
				},
				clock_in_time:'',
				timer:'',
				icClick:false,
			}
		},
		methods: {
			getLocation(callBack){
				// console.log(1)
				uni.showLoading({
					title:'请稍后..',
					mask: true
				});
				
				uni.getLocation({
					// type: 'gcj02',
					success:(res)=> {
						console.log(res)
						this.dataForm.lat=res.latitude
						this.dataForm.lng=res.longitude
						console.log(this.dataForm)
						
						uni.hideLoading();
						callBack && callBack()
						
					},
					
					fail:(res)=>{
						console.log(res)
						uni.showToast({
							title: '获取位置失败',
							icon: 'none'
						})
						setTimeout(()=>{
							uni.navigateBack({
							    delta: 1
							});
						},1000)
					}
				})
				console.log(22)
				
			},
			
			getClockData(){
				if(this.icClick){
					return false
				}
				this.icClick=true
				this.$http.post('/Punch/clock.html', {uid: this.userInfo.id,...this.dataForm})
				.then((res) => {
						console.log(res)
						if(res.code == 200){
							uni.showToast({
								title: '打卡成功',
								icon: 'none',
								 duration: 2000,
							})
							setTimeout(()=>{
								this.getClockInfoData()
							},500)
							
						}else{
							uni.showToast({
								title: res.message,
								icon: 'none',
								  duration: 2000
							})
						}
					this.icClick = false
					}).catch((err) => {
						
					})
					
			},
			getClockInfoData(){
				this.$http.post('/Punch/clockInfo.html', {uid: this.userInfo.id,...this.dataForm})
				.then((res) => {
						console.log(res)
						
						if(res.code == 200){
							this.clockInfo=res.data
						}else{
							uni.showToast({
								title: res.message,
								icon: 'none'
							})
							setTimeout(()=>{
								uni.navigateBack({
								    delta: 1
								});
							},1000)
						}
					}).catch((err) => {
						
					})
			},
			getTime(){
				let time = new Date();
				  var hour = time.getHours();
				  var minutes = time.getMinutes();
				  var seconds = time.getSeconds();
				 let times = (hour < 10? '0' : '')+ hour+ (minutes < 10 ? ":0" : ":") + minutes + (seconds < 10 ? ":0" : ":") + seconds;
				 this.clock_in_time=times
				// const that =this
				this.timer= setTimeout(()=>{
					
					this.getTime()
					
				},1000)
			},
			rulesClick(){
			
			}
			
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
			
		},
		onLoad() {
			this.getTime()
		},
		created() {	
			this.getLocation(this.getClockInfoData)
			// this.getClockData()
		},
		onUnload(){
			
			clearTimeout(this.timer)
		}
		
	}
</script>

<style lang="scss" scoped>
.clockInContainer{
	min-height: calc(100vh);
	background-color: #F4F6FA;
	.informationCard{
		width: 100%;
		height: 120rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		border-top: 2rpx solid #F4F6FA;
		.information_left{
			display: flex;
			margin: auto 0;
			.avatar{
				width: 87rpx;
				height: 88rpx;
				border-radius: 50%;
				// background-color: #fac;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.name{
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				margin-left: 20rpx;
				text{
					font-size: 24rpx;
					font-weight: 500;
					color: #979797;
				}
			}
		}
		.cRule{
			line-height: 120rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #377BE4;
		}
	}
	.clockDetail{
		height: 90rpx;
		position: relative;	
		// padding-left: 33rpx;
		border-left: 2rpx solid #E4E5E9;
		display: flex;
		margin-top: 40rpx;
		.clock_time{
			font-size: 24rpx;
			font-weight: 500;
			color: #151515;
			// line-height: 22rpx;
		}
		.clock_img{
			font-size: 24rpx;
			font-weight: 500;
			color: #17631E;
			margin-top: 20rpx;
			image{
				width: 20rpx;
				height: 26rpx;
				margin-right: 13rpx;
			}
		}
		.wdkImg{
			width: 22rpx !important;
			height: 22rpx !important;
			position: relative;
			top: 3rpx;
		}
		.circle{
			width: 20rpx;
			height: 20rpx;
			position: relative;
			top: -26rpx;
			left: -10rpx;
			background: #F4F6FA;
			border: 2rpx solid #377BE4;
			border-radius: 50%;
		}
		.clockColor{
			color: #E64329;
		}
		
	}
	.clockColor{
		color: #E64329;
	}
	.clockBtn{
		width: 290rpx;
		height: 290rpx;
		background:rgba(55, 123, 228, 0.1);
		border-radius: 50%;
		margin: 30rpx auto 0;
		.oClockBtn{
			width: 250rpx;
			height: 250rpx;
			background: rgba(55, 123, 228, 0.25);
			border-radius: 50%;
			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			.iClockBtn{
				width: 220rpx;
				height: 220rpx;
				background:rgba(55, 123, 228, 1);
				border-radius: 50%;
				position: relative;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				text-align: center;
				font-size: 36rpx;
				font-weight: 500;
				color: #FFFFFF;
				padding-top: 56rpx;
				text{
					display: block;
					font-size: 30rpx;
					margin-top: 25rpx;
				}
			}
		}
	}
	.wifiClock{
		height: 32rpx;
		margin: 62rpx auto 0;
		text-align: center;
		image{
			width: 26rpx;
			height: 32rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #151515;
			margin-right: 11rpx;
		}
	}
}
</style>
