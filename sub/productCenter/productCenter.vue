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
			}
		},
		methods: {
			getProductCenterData(){
				this.$http.post('/Rank/helpPpoor.html',{...this.dataForm})
				.then((res)=>{
					console.log(res)
					this.productCenterList=res.data.data
					
					// uni.showToast({
					// 	title: 'message',
					// 	icon: 'none'
					// })
					
					
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
	 .img{
		 width: 630rpx;
		 height: 352rpx;
		 // background-color: #000000;
		 margin-top: 22rpx;
	 }
 }
</style>
