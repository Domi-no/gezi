<template>
	<view class="myFont nl_container">
		<view class="newsListItem" v-for="(item,idx) in 10" :key="idx">
			
			<view class="newsListContentBox">
				<view class="newsListTitle">
					安全生产责任重于泰山
				</view>
				<view class="newsListContent">
					和平鸽是和平、友谊、团结和圣洁的象征。世界很多城市和广场上，都会...
				</view>
				<view class="newsListTime">
					2020-12-4
				</view>
			</view>
			<view class="newsListImgBox">
				<image src="" mode=""></image>
			</view>
		</view>
		<view class="news_list_bt">
			已经到底了~.~
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		methods: {
			
		},
		onLoad(e){
			console.log(JSON.parse(e.query))
			this.newsList =JSON.parse(e.query)
		}
	}
</script>

<style lang="scss" scoped>
	.nl_container{
		padding: 0 30rpx 60rpx;
		.newsListItem{
			height: 198rpx;
			display: flex;
			justify-content: space-between;
			padding-top: 37rpx;
			border-bottom: 2rpx solid #E4E5E9;
			.newsListImgBox{
				image{
					width: 240rpx;
					height: 136rpx;
					border-radius: 10rpx;
					overflow: hidden;
					background-color: #afc;
				}
			}
			.newsListContentBox{
				width: 417rpx;
				.newsListTitle{
					line-height: 1;
					font-size: 30rpx;
					font-weight: bold;
					color: #343434;
				}
				.newsListContent{
					
					font-size: 24rpx;
					font-weight: 500;
					color: #343434;
					line-height: 36rpx;
					margin: 4rpx 0;
				}
				.newsListTime{
					
					font-size: 22rpx;
					font-weight: 400;
					color: #979797;
					line-height: 30rpx;
				}
			}
		}
		.news_list_bt{
			margin-top: 49rpx;
			text-align: center;
			font-size: 24rpx;
			font-weight: 500;
			color: #979797;
		}
	}

</style>
