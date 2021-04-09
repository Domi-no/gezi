<template>
	<view>
		<view class="_news" v-for="(item,idx) in news" :key="idx" @click="toNewsDetailPage(item.news_id)">
			<view class="news_left">
				<view class="news_head">
					{{item.title}}
				</view>
				<view class="news_content">
					{{item.text}}
				</view>
				<text class="news_time">{{item.creatime}}</text>
			</view>
			<view class="news_right">
				<image :src="item.display_img" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			news:{
				type:Array,
				required:true
			}
		},
		data() {
			return {

			};
		},
		methods:{
			toNewsDetailPage(id){
				
				uni.navigateTo({
					url: '/sub/news_detail/news_detail?id='+id
				});
			}
		},
		created(){
			console.log(this.news)
		}
	}
</script>

<style lang="scss">
	._news {
		height: 198rpx;
		border-top: 2rpx solid #e4e5e9;
		padding-top: 30rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;

		.news_left {
			width: 418rpx;
			color: #343434;

			.news_head {
				font-size: 30rpx;
				font-weight: 700;
			}

			.news_content {
				margin-top: 11rpx;
				font-size: 24rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}

			.news_time {
				margin-top: 10rpx;
				font-size: 22rpx;
				color: #979797;
			}
		}

		.news_right {
			image {
				width: 240rpx;
				height: 136rpx;
				border-radius: 10rpx;
				background-color: #fac;

			}
		}
	}
	._news:first-child{
		border-top: 0;
	}
</style>
