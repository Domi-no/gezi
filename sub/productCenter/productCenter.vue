<template>
	<view class="productCenterContainer">
		<view class="productItem">
			<view class="productItemTitle">
				原生态鸽子蛋
			</view>
			<view class="productItemText">
				鸽子蛋怎么吃？中医药学认为，鸽蛋味甘、咸，性平，具有补肝肾、益精气、丰肌肤诸功效。鸽蛋"久患虚赢者，食之有益。"
			</view>
			<image class="img" src="" mode="">
				
			</image>
		</view>
		<view class="productItem">
			<view class="productItemTitle">
				原生态鸽子蛋
			</view>
			<view class="productItemText">
				鸽子蛋怎么吃？中医药学认为，鸽蛋味甘、咸，性平，具有补肝肾、益精气、丰肌肤诸功效。鸽蛋"久患虚赢者，食之有益。"
			</view>
			<image class="img" src="" mode="">
				
			</image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
 .productCenterContainer{
	 width: 100%;
	 min-height:calc(100vh - 80rpx);
	 background-color: #F4F6FA;
	 padding-top: 1rpx;
	 padding-bottom: 30rpx;
	 .productItem{
		 width: 690rpx;
		 // height: 620rpx;
		 padding: 33rpx 31rpx 35rpx;
		 margin: 30rpx auto 0;
		 background-color: #fff;
		 border-radius: 20rpx;
		 .productItemTitle{
			 font-size: 34rpx;
			 font-weight: bold;
			 color: #151515;
		 }
		 .productItemText{
			 font-size: 28rpx;
			 font-weight: 500;
			 color: #343434;
			 line-height: 42rpx;
			 margin-top: 32rpx;
		 }
	 }
	 .img{
		 width: 630rpx;
		 height: 352rpx;
		 background-color: #000000;
		 margin-top: 22rpx;
	 }
 }
</style>
