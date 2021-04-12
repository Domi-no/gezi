<template>
	<view class="pigeon_skillContainer">
		<view class="helpThePoorItem" v-for="(item,index) in pigeonList" :key="index" @click="toPigeonSkillDetail(item.news_id)">
			<view class="titleBox" >
				{{item.title}}
			</view>
			<image :src="item.display_img" mode=""></image>
			<view class="timeBox">
				{{item.creatime}}
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
					type:3,
					News_num:10,
					page:1
				},
				pigeonList:[]
			}
		},
		methods: {
			getPigeonSkill(){
				this.$http.post('/Rank/helpPpoor.html',{...this.dataForm})
				.then((res)=>{
					console.log(res)
					this.pigeonList=res.data.data
					
					// uni.showToast({
					// 	title: 'message',
					// 	icon: 'none'
					// })
					
					
				}).catch((err)=>{
					console.log(err)
				})
			},
			toPigeonSkillDetail(id){
				console.log(id)
				uni.navigateTo({
					url: '/sub/news_detail/news_detail?id='+id
				});
			}
		},
		created() {
			this.getPigeonSkill()
		}
	}
</script>

<style lang="scss" scoped>
.pigeon_skillContainer{
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
