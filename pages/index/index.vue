<template>
	<view class="myFont container">
		<view class="header">
			<view class="title">
				智慧养鸽
			</view>
		</view>
		<scroll-view scroll-y="true" class="tabPage">
			<home v-if="id=== 1"></home>
			<cage v-else-if="id === 2"></cage>
			<wait v-else-if="id === 4"></wait>
			<my v-else-if="id === 5"></my>
		</scroll-view>
		<view class="tabBar">
			<view class="" @click="change(1)">
				首页
			</view>
			<view class="" @click="change(2)" >
				鸽笼
			</view>
				<image class="scan" src="" mode="" @click="change(3)"></image>
			<view class="" @click="change(4)">
				待办
			</view>
			<view class="" @click="change(5)">
				我的
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 1,
				tablist: [{
						id: 1,
						name: '首页'
					},
					{
						id: 2,
						name: '鸽笼'
					},
					{
						id:3,
						name:''
					},
					{
						id: 4,
						name: '待办'
					},
					{
						id: 5,
						name: '我的'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			change(id) {
				id === 3 ? uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				}) : this.id = id
			}
		}
	}
</script>

<style lang="less">
	.container {
		background-color: #f4f6fa;
		.header {
			height: 88rpx;
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			font-size: 35rpx;
			background-color: #FFFFFF;
			z-index: 10;
			.title{
				position: absolute;
				left: 30rpx;
				bottom: 1rpx;
				color: #151515;
			}
		}

		.tabPage {
			height: 100vh;
			padding: 88rpx 0 110rpx 0;
		}

		.tabBar {
			width: 100%;
			height: 96rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			justify-content: space-around;
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #fac;

			.scan {
				width: 88rpx;
				height: 88rpx;
				position: absolute;
				left: 331rpx;
				bottom: 22rpx;
			}
		}
	}
</style>
