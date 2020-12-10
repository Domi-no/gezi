<template>
	<view class="content">
		<view class="header">
			<view class="title">
				智慧养鸽
			</view>
		</view>
		<scroll-view scroll-y="true" class="tabPage">
			<home v-if="id=== 1">1</home>
			<cates v-else-if="id === 2">2</cates>
			<cart v-else-if="id===3">3</cart>
			<my v-else-if="id===4">4</my>
		</scroll-view>
		<view class="tabBar">
			<view class="tab" v-for="(item,index) in tablist" :key='item.id' @click="change(item.id)">
					<view class="">
						123
					</view>
					{{item.name}}
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
				}) : this.code = id
			}
		}
	}
</script>

<style lang="less">
	.content {
		background-color: #f4f6fa;

		.header {
			height: 88rpx;
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			font-size: 35rpx;
			background-color: #FFFFFF;
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
			justify-content: space-between;
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #fac;

			.tab {
				text-align: center;
				display: inline-block;
				width: 120rpx;
				// margin: 0 30rpx;
			}
		}
	}
</style>
