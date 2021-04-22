<template>
	<view class="messageDetailContainer">
		<view class="m_d_title">
			{{messageDeatil.title}}
		</view>
		<view class="m_d_time">
			{{messageDeatil.creatime}}
		</view>
		<view class="m_d_content">
			{{messageDeatil.content}}
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
				message_id:'',
				messageDeatil:{}
			}
		},
		methods: {
			getMessageDetail(){
				this.$http.post('/Rank/msgDetails.html',{uid:this.userInfo.id,message_id:this.message_id})
				.then((res)=>{
					if(res.code == 200){
						console.log(res.data)
						this.messageDeatil=res.data
					}else{
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}
					
					
					
				}).catch((err)=>{
					console.log(err)
				})
			},
		},
		computed: {
			...mapState({
				userInfo: (state) => state.user.userInfo
			})
		},
		created() {
			
		},
		onLoad({id}) {
			this.message_id =id 
			console.log(this.message_id)
			this.getMessageDetail()
		}
	}
</script>

<style lang="scss" scoped>
.messageDetailContainer{
	padding: 26rpx 31rpx;
	.m_d_title{
		font-size: 36rpx;
		font-weight: bold;
		color: #151515;
	}
	.m_d_time{
		margin-top: 27rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #979797;
	}
	.m_d_content{
		margin-top: 32rpx;
		font-size: 30rpx;
		font-weight: 500;
		color: #343434;
	}
}
</style>
