<template>
	<view class="myFont nl_container">
		<view class="newsListItem" v-for="(item,idx) in newsList" :key="idx" @click="toNewsDetailPage(item.news_id)">
			
			<view class="newsListContentBox">
				<view class="newsListTitle">
					{{item.title}}
				</view>
				<view class="newsListContent">
					{{item.text}}
				</view>
				<view class="newsListTime">
					{{item.creatime}}
				</view>
			</view>
			<view class="newsListImgBox">
				<image :src="item.display_img" mode=""></image>
			</view>
		</view>
		<view v-show="isLoadMore">
		      <uni-load-more :status="loadStatus" ></uni-load-more>
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				newsList:[],
				loadStatus:'loading',  //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
				isLoadMore:false,  //是否加载中
			}
		},
		methods: {
			getListNews(){
				this.$http.post('/Rank/news.html',{News:'listNews'})
				.then((res)=>{
					console.log(res)
					this.newsList.push(...res.data.data)
					if(res.data.data){
						if(res.data.total <= this.newsList.length){  //判断接口返回数据量小于请求数据量，则表示此为最后一页
							
						      this.isLoadMore=true                                        
						      this.loadStatus='已经到底了~. ~'
						}else{
						      this.isLoadMore=false
							  console.log(2)
						}
					}else{
						 this.isLoadMore=true
						 // this.loadStatus='已经到底了~. ~'
					}
					
					
					
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
		onReachBottom(){  //上拉触底函数
		          if(!this.isLoadMore){  //此处判断，上锁，防止重复请求
		                this.isLoadMore=true
		                this.saleData.page+=1
		                this.getSaleData()
		          }
		},
		created() {
			this.getListNews()
		},
		onLoad(){
		
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
					// background-color: #afc;
				}
			}
			.newsListContentBox{
				width: 417rpx;
				
				
				.newsListTitle{
					line-height: 1;
					font-size: 30rpx;
					font-weight: bold;
					color: #343434;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.newsListContent{
					min-height: 70rpx;
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
