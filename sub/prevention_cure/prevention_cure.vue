<template>
	<view class="preventionCureContainer">
		<view class="preventionCureItem" v-for="(item,idx) in PCList" :key="idx" @click="toPreventionCure(item.news_id)">
			<view class="preventionCureImgBox">
				<image :src="item.display_img" mode=""></image>
			</view>
			<view class="preventionCureContentBox">
				<view class="preventionCureTitle">
					{{item.title}}
				</view>
				<view class="preventionCureContent">
					{{item.text}}
				</view>
				<view class="preventionCureTime">
					{{item.creatime}}
				</view>
			</view>
		</view>
		
		<!-- <view class="noMore">
			已经到底了~. ~
		</view> -->
		<view v-show="isLoadMore">
		      <uni-load-more :status="loadStatus" ></uni-load-more>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataForm:{
					type:4,
					News_num:10,
					page:1
				},
				PCList:[],
				isLoadMore:true,
				loadStatus:'loading',  //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
			}
		},
		methods: {
			getPreventionCure(){
				this.$http.post('/Rank/helpPpoor.html',{...this.dataForm})
				.then((res)=>{
					console.log(res)
					
					// uni.showToast({
					// 	title: 'message',
					// 	icon: 'none'
					// })
					if(res.code == 200){
						this.PCList.push(...res.data.data)
						console.log(...res.data.data)
						if(res.data.data){
							if(res.data.total <= this.PCList.length){  //判断接口返回数据量小于请求数据量，则表示此为最后一页
								
							      this.isLoadMore=true                                             
							      this.loadStatus='已经到底了~. ~'
							}else{
							      this.isLoadMore=false
								  console.log(2)
							}
						}
					}else{
						 this.isLoadMore=true
						 // this.loadStatus='已经到底了~. ~'
					}
					
				}).catch((err)=>{
					console.log(err)
				})
			},
			toPreventionCure(id){
				console.log(id)
				uni.navigateTo({
					url: '/sub/news_detail/news_detail?id='+id
				});
			}
		},
		onReachBottom(){  //上拉触底函数
		  if(!this.isLoadMore){  //此处判断，上锁，防止重复请求
		        this.isLoadMore=true
				console.log(this.dataForm.page,'PAGE1')
		        this.dataForm.page += 1
				console.log(this.dataForm.page,'PAGE')
		        this.getPreventionCure()
		  }
		},
		created() {
			this.getPreventionCure()
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
					// background-color: #afc;
				}
			}
			.preventionCureContentBox{
				width: 417rpx;
				.preventionCureTitle{
					// min-width: 100%;
					line-height: 1;
					font-size: 30rpx;
					font-weight: bold;
					color: #343434;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.preventionCureContent{
					
					font-size: 24rpx;
					font-weight: 500;
					color: #343434;
					line-height: 36rpx;
					margin: 4rpx 0;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
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
