<template>
	<view class="preventionCureContainer">
		<view class="preventionCureItem" v-for="(item,idx) in 10" :key="idx">
			<view class="preventionCureImgBox">
				<image src="" mode=""></image>
			</view>
			<view class="preventionCureContentBox">
				<view class="preventionCureTitle">
					安全生产责任重于泰山
				</view>
				<view class="preventionCureContent">
					和平鸽是和平、友谊、团结和圣洁的象征。世界很多城市和广场上，都会...
				</view>
				<view class="preventionCureTime">
					2020-12-4
				</view>
			</view>
		</view>
		
		<view class="noMore">
			已经到底了~. ~
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
	.preventionCureContainer{
		padding: 0 30rpx 60rpx;
		.preventionCureItem{
			height: 198rpx;
			display: flex;
			justify-content: space-between;
			padding-top: 37rpx;
			border-bottom: 2rpx solid #E4E5E9;
			.preventionCureImgBox{
				image{
					width: 240rpx;
					height: 136rpx;
					border-radius: 10rpx;
					overflow: hidden;
					background-color: #afc;
				}
			}
			.preventionCureContentBox{
				width: 417rpx;
				.preventionCureTitle{
					line-height: 1;
					font-size: 30rpx;
					font-weight: bold;
					color: #343434;
				}
				.preventionCureContent{
					
					font-size: 24rpx;
					font-weight: 500;
					color: #343434;
					line-height: 36rpx;
					margin: 4rpx 0;
				}
				.preventionCureTime{
					
					font-size: 22rpx;
					font-weight: 400;
					color: #979797;
					line-height: 30rpx;
				}
			}
		}
		.noMore{
			text-align: center;
			font-size: 24rpx;
			font-weight: 500;
			color: #979797;
			margin-top: 49rpx;
		}
	}

</style>
