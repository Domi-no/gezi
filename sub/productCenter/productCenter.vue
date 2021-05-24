<template>
	<view class="productCenterContainer">
		<view class="productItem" v-for="(i,idx) in productCenterList" :key="idx" @click="toProductCenterDetail(i.news_id)">
			<view class="productItemTitle">
				{{i.title}}
			</view>
			<view class="productItemText">
				{{i.text}}
			</view>
			<image class="img" :src="i.display_img" mode="">
				
			</image>
		</view>
		<!-- <view  class="noMore">已经到底了~. ~</view> -->
		<view v-show="isLoadMore">
		      <uni-load-more :status="loadStatus" ></uni-load-more>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				productCenterList:[],
				dataForm:{
					type:5,
					News_num:10,
					page:1
				},
				isLoadMore:true,
				loadStatus:'loading',  //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
			}
		},
		methods: {
			getProductCenterData(){
				// this.productCenterList=[]
				this.$http.post('/Rank/helpPpoor.html',{...this.dataForm})
				.then((res)=>{
					console.log(res)
					// this.productCenterList=res.data.data
					
					// uni.showToast({
					// 	title: 'message',
					// 	icon: 'none'
					// })
					if(res.code == 200){
						this.productCenterList.push(...res.data.data)
						console.log(...res.data.data)
						if(res.data.data){
							if(res.data.total <= this.productCenterList.length){  //判断接口返回数据量小于请求数据量，则表示此为最后一页
								
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
			toProductCenterDetail(id){
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
		        this.getProductCenterData()
		  }
		},
		created() {
			this.getProductCenterData()
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
	 /*  #ifdef  MP-WEIXIN */
	 min-height: calc(100vh);
	 /*  #endif  */
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
			 overflow: hidden;
			 text-overflow: ellipsis;
			 white-space: nowrap;
		 }
		 .productItemText{
			 font-size: 28rpx;
			 font-weight: 500;
			 color: #343434;
			 line-height: 42rpx;
			 margin-top: 32rpx;
			 display: -webkit-box;
			 -webkit-box-orient: vertical;
			 -webkit-line-clamp: 3;
			 overflow: hidden;
		 }
	 }
	 .noMore{
		 font-size: 24rpx;
		 font-weight: 500;
		 color: #979797;
		 text-align: center;
		 margin: 57rpx auto 0;
	 }
	 .img{
		 width: 630rpx;
		 height: 352rpx;
		 // background-color: #000000;
		 margin-top: 22rpx;
	 }
 }
</style>
