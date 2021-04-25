<template>
	<view class="help_the_poorContainer">
		<view class="helpThePoorItem" v-for="(i,index) in helpList" @click="toHelpDetail(i.news_id)" :key="index">
			<view class="titleBox">
				{{i.title}}
			</view>
			<image :src="i.display_img" mode=""></image>
			<view class="timeBox">
				{{i.creatime}}
			</view>
		</view>
		
		<!-- <view class="rankingNoMore">
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
					type:2,
					News_num:10,
					page:1
				},
				helpList:[],
				isLoadMore:true,
				loadStatus:'loading',  //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
			}
		},
		methods: {
			gethelpData(){
				this.$http.post('/Rank/helpPpoor.html',{...this.dataForm})
				.then((res)=>{
					console.log(res)
					
					if(res.code == 200){
						this.helpList.push(...res.data.data)
						console.log(...res.data.data)
						if(res.data.data){
							if(res.data.total <= this.helpList.length){  //判断接口返回数据量小于请求数据量，则表示此为最后一页
								
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
			toHelpDetail(id){
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
		        this.getSaleData()
		  }
		},
		created() {
			this.gethelpData()
		}
	}
</script>

<style lang="scss" scoped>
.help_the_poorContainer{
	padding: 0 30rpx 60rpx;
	.helpThePoorItem{
		padding: 35rpx 0 15rpx;
		border-bottom: 2rpx solid #E4E5E9;
		.titleBox{
			font-size: 30rpx;
			font-weight: bold;
			color: #343434;
			line-height: 40rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		image{
			width: 690rpx;
			height: 388rpx;
			margin: 16rpx auto 10rpx;
			// background-color: #fac;
		}
		.timeBox{
			font-size: 22rpx;
			font-weight: 400;
			color: #979797;
			line-height: 30rpx;
		}
	}
	.rankingNoMore{
		font-size: 24rpx;
		font-weight: 500;
		color: #979797;
		text-align: center;
		margin: 57rpx auto 0;
	}
}
</style>
