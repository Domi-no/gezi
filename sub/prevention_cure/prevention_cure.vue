<template>
	<view class="preventionCureContainer">
		<view class="preventionCureItem" v-for="(item,idx) in PCList" :key="idx" @click="toPreventionCure(item.news_id)">
			<view class="preventionCureImgBox">
				<image src="" mode=""></image>
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
		
		<view class="noMore">
			已经到底了~. ~
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
				PCList:[]
			}
		},
		methods: {
			getPreventionCure(){
				this.$http.post('/Rank/helpPpoor.html',{...this.dataForm})
				.then((res)=>{
					console.log(res)
					this.PCList=res.data.data
					
					// uni.showToast({
					// 	title: 'message',
					// 	icon: 'none'
					// })
					
					
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
					background-color: #afc;
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
