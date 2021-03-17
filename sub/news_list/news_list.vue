<template>
	<view class="myFont nl_container">
		<view class="newsListItem" v-for="(item,idx) in newsList" :key="idx" @click="toNewsDetailPage(item.news_id)">
			
			<view class="newsListContentBox">
				<view class="newsListTitle">
					{{item.title}}
				</view>
				<view class="newsListContent">
					{{item.content}}
				</view>
				<view class="newsListTime">
					{{item.creatime}}
				</view>
			</view>
			<view class="newsListImgBox">
				<image :src="item.display_img" mode=""></image>
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
			getListNews(){
				this.$http.post('/Rank/news.html',{News:'listNews'})
				.then((res)=>{
					console.log(res)
					this.newsList =res.data.data
					// uni.showToast({
					// 	title: 'message',
					// 	icon: 'none'
					// })
					
					
				}).catch((err)=>{
					console.log(err)
				})
			},
			toNewsDetailPage(id){
				console.log(id)
				uni.navigateTo({
					url: '/sub/news_detail/news_detail?id='+id
				});
			}
		},
		created() {
			this.getListNews()
		},
		onLoad(e){
			console.log(JSON.parse(e.query))
			// this.newsList =JSON.parse(e.query)
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
					margin-top: 11rpx;
					font-size: 24rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
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
