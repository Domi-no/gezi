<template>
	<view class="reportContainer">
		<view class="report_head">
			<view class="report_head_left">
				<text>所有仓</text><image src="@/static/report/report_zk.png" mode=""></image>
			</view>
			<view class="report_head_right">
				打印报表
			</view>
		</view>
		<view class="report_time">
			
		</view>
		<view class="content">
		 <jpCharts showZ showY="true" v-if="list.length>0" :list="list" :Y="Charts.Y" :X="Charts.X" :keyId="Charts.keyId" :width="Charts.width" :bgColor="Charts.bgColor" :btColor="Charts.btColor" :height="Charts.height" :canClick="Charts.canClick" :x_width="Charts.x_width" :items="items" :proportion="Charts.proportion" :checkedColor="Charts.checkedColor" :scrollLeft="100"></jpCharts>
		</view>
	</view>
</template>

<script>
	import jpCharts from '../../components/jp-charts/index.vue';
	export default {
		components: {
		 jpCharts
		 },
		data() {
		 return {
		 Charts: { //y轴配置 value在list中的键 showY是否一直显示数据 size字大小 units文字后缀
		 Y: {
		 value: 'value',
		 showY: true,
		 size: 20,
		 units: '日'
		 },
		 X: {
		 value: 'keyw',
		 showX: true,
		 size: 20,
		 units: ''
		 },
		 keyId: 'keyw',
		 list: [],
		 items: {},
		 width: 750,
		 height: 350,
		 x_width: 100,
		 proportion: 30, //宽度占比
		 showZ: false, //是否显示线条
		 checkedColor: '#61ccf9',
		 btColor:'#377be4',
		 canClick: true, //不可以点击
		 bgColor: '#fff',
		 scrollLeft: 0
		 },
		 list: [{ keyw: '01',Y:'1', value: 100 }, { keyw: '02', value: 120 }, { keyw: '03', value: 110 }, ],
		 items: {
		 keyw: '03',
		 value: 110
		 }
		 }
		 },
	}
</script>

<style lang="scss">
.reportContainer{
	background-color: #fff;
	.report_head{
		width: 750rpx;
		height: 88rpx;
		padding: 30rpx;
		margin: 1rpx 0;
		display: flex;
		justify-content: space-between;
		border-top: 2rpx solid #f4f6fa;
		.report_head_left{
			font-size: 30rpx;
			font-weight: 500;
			color: #151515;
			image{
				margin-left: 9rpx;
				width: 12rpx;
				height: 22rpx;
			}
		}
		.report_head_right{
			font-size: 24rpx;
			font-weight: 500;
			color: #377be4;
		}
	}
	.report_time{
		height: 88rpx;
		background-color: #fac;
		border-top: 3rpx solid #f4f6fa;
	}
}
</style>
