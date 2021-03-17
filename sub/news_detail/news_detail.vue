<template>
	<view class="myFont news_detail_container">
		<view class="news_detail_title" >
			{{newsDetails.title}}
		</view>
		<view class="news_detail_time">{{newsDetails.creatime}}</view>
		<view class="news_detail_content" id="news_detail_content" ref="content" v-html="newsDetails.content">
		
		</view>
		<view class="news_detail_image">
			<image :src="newsDetails.display_img" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsId:'',
				newsDetails:''
			}
		},
		methods: {
			getNewsDetails(){
				this.$http.post('/Rank/newsDetails.html',{newsid:this.newsId})
				.then((res)=>{
					console.log(res)
					this.newsDetails =res.data[0]
					// uni.showToast({
					// 	title: 'message',
					// 	icon: 'none'
					// })
					this.$refs.content.appendChild(res.data[0].content)
					// document.querySelector('#news_detail_content').innerHTML= res.data[0].content
					console.log(this.newsDetails)
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		created() {
			this.getNewsDetails()
		},
		onLoad(e){
			this.newsId=e.id
		}
	}
</script>

<style lang="scss" scoped>
.news_detail_container{
	background-color: #fff;
	padding: 26rpx 30rpx;
	.news_detail_title{
		font-size: 36rpx;
		font-weight: bold;
		color: #151515;
		line-height: 46rpx;
	}
	.news_detail_time{
		font-size: 28rpx;
		font-weight: 400;
		color: #979797;
		line-height: 30rpx;
		margin: 17rpx 0 30rpx;
	}
	.news_detail_content{
		font-size: 30rpx;
		font-weight: 500;
		color: #343434;
		line-height: 44rpx;
	}
	.news_detail_image{
		width: 690rpx;
		height: 388rpx;
		margin: 36rpx auto;
		image{
			width: 690rpx;
			height: 388rpx;
			background-color: #fac;
		}
	}
}
</style>
