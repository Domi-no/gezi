<template>
	<view class="myFont">
		<view class="">
			<view class="cpt-mask" @click="$emit('pigeonCageClose')" >
			</view>
		</view>
		<view class="pickerView">
			<view class="uni-padding-wrap">
				<text @click="$emit('pigeonCageClose')">取消</text><text>完成</text>
			</view>
			<picker-view v-if="visible" :indicator-style="indicatorStyle" indicator-class="itemStyle">
				<picker-view-column>
					<view class="item" v-for="(item,index) in pNum" :key="index">{{item}}</view>
				</picker-view-column>
			</picker-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		
			return {
				title: 'picker-view',
				pNum:[1,2,3,4,5,6,7,8],
				visible: true,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`
			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	
	.cpt-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000000;
		opacity: 0.4;
		z-index: 1;
	}
	.pickerView{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 441rpx;
		z-index: 20;
		border-radius: 20rpx 20rpx 0 0;
		background-color: #fff;
		padding: 0 30rpx;
		.uni-padding-wrap{
			height: 77rpx;
			display: flex;
			justify-content: space-between;
			padding-top: 49rpx;
			font-size: 30rpx;
			color: #377be4;
		}
		picker-view {
		    width: 100%;
		    height: 337rpx;
		    margin-top:20rpx;
			
		}
		.item {
		    line-height: 100rpx;
		    text-align: center;
		}
		/deep/ .itemStyle{
			height: 80rpx;
			width: 200rpx;
			margin-left: 245rpx;
			border-top: 2rpx solid #377be4;
			border-bottom: 2rpx solid #377be4;
		}
	}
	
</style>
