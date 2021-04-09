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
			<cage v-else-if="id === 1"></cage>
			<wait v-else-if="id === 3"></wait>
			<my v-else-if="id === 4"></my>
		</scroll-view>
		<view class="tabBar">
			<view class="" v-for="(item,idx) in tabIcon" @click="change(idx)" :key="idx">
				<view class="">
					<view class="scan" v-if="idx===2" @click="change(idx)">
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
				]
			}
		},
		onLoad() {
		},
		methods: {
			change(id) {
				id === 2 ? uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				}) : this.id = id
				
			}
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
		onLoad() {
			// if(!this.userInfo.token){
			// 	uni.navigateTo({
			// 		url: "/pages/login/login"
			// 	});
			// }
		}
	}
</script>

<style lang="less">
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
