<template>
	<view class="myFont container">
		
		<view :class="{header:true,indexHidden:id === 4}" >
			<!-- #ifdef APP-PLUS||H5 -->
			<view class="title">
				智慧养鸽
			</view>
			<!-- #endif -->
			
			
			<!-- #ifdef MP-WEIXIN -->
			<view class="mpTitle">
				智慧养鸽
			</view>
			<!-- #endif -->
			
			
		</view>
	
		<scroll-view scroll-y="true" class="tabPage">
			<home v-if="id=== 0"></home>
			<cage v-else-if="id === 1" :calendarList="calendarList"></cage>
			<wait v-else-if="id === 3"></wait>
			<my v-else-if="id === 4" :unread="unread" :type="type" :user="user"></my>
		</scroll-view>
		<view class="tabBar">
			<view class="" v-for="(item,idx) in tabIcon" @click="change(idx)" :key="idx">
				<view class="">
					<view class="scan" v-if="idx===2" >
						<image  class="scanImg" src="../../static/home/saoma.png" mode="" ></image>
					</view>
					<image v-else :src="id===idx?tabIcon[idx].c_icon:tabIcon[idx].icon" mode=""></image>
					{{item.name||''}}
				</view>
			</view>
		</view>	
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import uSwiper from '@/uview-ui/components/u-swiper/u-swiper.vue';
	
	export default {
	
		data() {
			return {
				id: 0,
				tabIcon: [{
						icon: '../../static/home/sy.png',
						c_icon: '../../static/home/o_sy.png',
						name: '首页'
					},
					{
						icon: '../../static/home/gl.png',
						c_icon: '../../static/home/0_gl.png',
						name: '鸽笼'
					},
					{
					
					},
					{
						icon: '../../static/home/db.png',
						c_icon: '../../static/home/o_db.png',
						name: '待办'
					},
					{
						icon: '../../static/home/wd.png',
						c_icon: '../../static/home/o_wd.png',
						name: '我的'
					}
				],
				unread:0,
				calendarList:[],
				time:'',
				type:'',
				user:{},
			}
		},
		onLoad() {
		},
		methods: {
			change(id) {
				id === 2 ? uni.scanCode({
					success: function(res) {
						console.log(res)
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						
						if(res.result){
							uni.navigateTo({
								url:'../../sub/scan_code/scan_code?id=' + res.result
							})
						}else{
							uni.showToast({
								title: '二维码错误',
								icon: 'none'
							})
						}
						
					},
					fail:function(res){
						console.log(res)
					}
				}) : this.id = id
				
				
				
			},
			
			getUnreadData(){
				this.$http.post('/Login/unread.html',{uid:this.userInfo.id})
				.then((res)=>{
					if(res.code == 200){
						
						this.unread=res.data.unread
						
					}else{
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}
					
					
					
				}).catch((err)=>{
					console.log(err)
				})
			},
			getClockTypeData(){
				this.$http.post('/Punch/clockType.html',{uid:this.userInfo.id})
				.then((res)=>{
					if(res.code == 200){
						
						
						this.type=res.data.type
						
					}else{
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}
					
					
					
				}).catch((err)=>{
					console.log(err)
				})
			},
			getCalendarData(){
				this.$http.post('/CageData/calendar.html',{uid:this.userInfo.id,time:this.time})
				.then((res)=>{
					
					this.calendarList=res.data
					
				}).catch((err)=>{
					console.log(err)
				})
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				 this.time=times
				
				
			},
			getuserInfo(){
				this.$http.post('/Punch/userInfo.html',{uid:this.userInfo.id})
				.then((res)=>{
					if(res.code == 200){
						
						
						this.user=res.data
						console.log(user)
						
					}else{
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}
					
					
					
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
		onLoad() {
			this.getToday()
			// #ifdef  MP-WEIXIN
			if(!this.userInfo.token){
				uni.navigateTo({
					url: "/pages/login/login"
				});
			}
			// #endif
			this.getUnreadData()
			this.getCalendarData()
			this.getClockTypeData()
			this.getuserInfo()
		},
		onShow() {
			
			if(this.id === 4){
				this.getUnreadData()
				this.getClockTypeData()
				this.getuserInfo()
			}
			if(this.id === 1){
				this.getCalendarData()
			}
		},
		created() {
			// this.id=0
		}
		
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: #f4f6fa;
		font-weight: 500;
		.header {
			height: 88rpx;
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			font-size: 35rpx;
			background-color: #FFFFFF;
			z-index: 10;
			.title {
				position: absolute;
				left: 30rpx;
				bottom: 1rpx;
				color: #151515;
			}
			.mpTitle {
				line-height: 128rpx;
				color: #151515;
				text-align: center;
			}
		}
		.tabPage {
			height: 100vh;
			padding: 0 0 90rpx 0;
		}
		.tabBar {
			width: 100%;
			height: 96rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			justify-content: space-around;
			border-top:1rpx solid #f4f6fa ;
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #fff;
			view {
				position: relative;
				width: 50rpx;
				height: 72rpx;
				text-align: center;
				font-size: 22rpx;
				line-height: 30rpx;
				image {
					width: 36rpx;
					height: 38rpx;
				}
			}
			.scan {
				width: 88rpx;
				height: 88rpx;
				border-radius: 50%;
				position: absolute;
				left: -19rpx;
				top: -28rpx;
				background-color: #216FE8;
				z-index: 20;
				.scanImg{
					width: 40rpx;
					height: 40rpx;
					position: relative;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
		.indexHidden{
			display: none;
		}
	}
</style>
