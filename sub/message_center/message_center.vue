<template>
	<view class="messageCenterContainer">
		<view class="messageItem" v-for="(i,idx) in messageList" :key="idx">
			<view class="messageTitle">
				<text :class="{clickColor:i.read}">{{i.title}}</text><text>{{i.creatime}}</text>
			</view>
			<view :class="{messageContent:true,clickColor:i.read}">
				{{i.content}}
			</view>
			<view class="ViewDetails" @click="toMessageDetail(i.message_id)">
				<text :class="{clickColor:i.read}">查看详情</text><image :src="i.read ? picSrc[0] : picSrc[1]" mode=""></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				picSrc:['../../static/cage/cage_b_zk.png','../../static/daiban/zk.png'],
				messageList:[]
			}
		},
		methods: {
			toMessageDetail(id){
				uni.navigateTo({
					url: '/sub/message_detail/message_detail?id=' + id
				});
			},
			getMessageList(){
				this.$http.post('/Rank/message.html',{uid:this.userInfo.id})
				.then((res)=>{
					console.log(res)
					this.messageList=res.data
					// uni.showToast({
					// 	title: 'message',
					// 	icon: 'none'
					// })
					
				}).catch((err)=>{
					console.log(err)
				})
			},
			 onBackPress(){
				 
				
				 let page = getCurrentPages()[0]
				 console.log(page)
				 console.log(page.$vm)
				 page.$vm.getUnreadData()
			 }
		},
		computed: {
			...mapState({
				userInfo: (state) => state.user.userInfo
			})
		},
		created() {
			this.getMessageList()
		}
	}
</script>

<style lang="scss" scoped>
	.messageCenterContainer{
		min-height: calc(100vh);
		background-color: #F4F6FA;
		padding-top: 10rpx;
		padding: 30rpx;
		
		.messageItem{
			width: 670rpx;
			// height: 300rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			padding: 40rpx 26rpx 0 24rpx;
			margin: 30rpx auto 0;
			.messageTitle{
				display: flex;
				justify-content: space-between;
				text:nth-child(1){
					font-size: 30rpx;
					font-weight: bold;
					color: #151515;
				}
				text:nth-child(2){
					font-size: 24rpx;
					font-weight: 500;
					color: #979797;
				}
			}
			.messageContent{
				margin-top: 32rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #676767;
				line-height: 44rpx;
			}
			.ViewDetails{
				height: 81rpx;
				margin-top: 40rpx;
				padding-top: 27rpx;
				display: flex;
				justify-content: space-between;
				border-top: 2rpx solid #E4E5E9;
				text{
					font-size: 28rpx;
					font-weight: 500;
					color: #343434;
				}
				image{
					width: 12rpx;
					height: 22rpx;
					position: relative;
					top: 8rpx;
				}
			}
		}
		.clickColor{
			color: #979797 !important;
		}
	}

</style>
