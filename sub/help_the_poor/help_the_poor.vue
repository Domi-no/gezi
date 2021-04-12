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
		
		<view class="rankingNoMore">
			已经到底了~. ~
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
				helpList:[]
			}
		},
		methods: {
			gethelpData(){
				this.$http.post('/Rank/helpPpoor.html',{...this.dataForm})
				.then((res)=>{
					console.log(res)
					this.helpList=res.data.data
					console.log(this.helpList)
					// uni.showToast({
					// 	title: 'message',
					// 	icon: 'none'
					// })
					
					
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
