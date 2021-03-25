<template>
	<view class="tFContainer">
		<view class="dWTopBox">
			<text>记录时间</text><text>{{tfDataForm.record_time}}</text>
		</view>
		<view class="dWTopBox">
			<text>种类</text><text>{{tfDataForm.death}}</text>
		</view>
			
		<view class="leaveTime">
			<view class="typeName">
				死亡数量<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox" @click="">
				<input type="" @input="deathChange"  :value="tfDataForm.death_number" placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="typeName">
				已处理<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox"  @click="">
				<input type="number" @input="handle_numberChange" :value="tfDataForm.handle_number"   placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			
		</view>
		<view class="leaveReason">
			<view class="">
				备注
			</view>
			<textarea   @input="submit_remarksChange" :value="tfDataForm.submit_remarks"  placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
		</view>
	
		<view :class="{leaveSubmit:true,isSubBg:isSub}" @click="cSubBtn">
			提交
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
				tfDataForm:{
					
				},
				isdWsub:false,
				dataName:'',
				record_time:'',
				
			}
		},
		methods: {
			deathChange({detail:{value}}){
				this.tfDataForm.death_number=parseInt(value.trim())
			},
			handle_numberChange({detail:{value}}){
				this.tfDataForm.handle_number=parseInt(value.trim())
				this.tfDataForm.handle_number > this.tfDataForm.death_numbe ?  this.tfDataForm.handle_number = this.tfDataForm.death_numbe : this.tfDataForm.handle_number
			},
			submit_remarksChange({detail:{value}}){
				this.tfDataForm.submit_remarks =value
			},
			
			cSubBtn(){
				let pages = getCurrentPages();
				let prevPage = pages[ pages.length - 2 ];
				switch(this.tfDataForm.death){
					case '种鸽' :
					prevPage.$vm.breedingPigeonData= this.tfDataForm;
					break;
					case '臭蛋' :
					prevPage.$vm.badEggData= this.tfDataForm;
					break;
					case '乳鸽' :
					prevPage.$vm.squabData= this.tfDataForm;
					break;
					case '童鸽' :
					prevPage.$vm.childPigeonData= this.tfDataForm;
					break;
					case '青年鸽' :
					prevPage.$vm.youngPigeonData= this.tfDataForm;
					break;
				}
				console.log(this.tfDataForm)
				this.$http.post('/Sale/defusing.html', {uid: this.userInfo.id,...this.tfDataForm})
				.then((res) => {
						console.log(res)
						if(res.code == 200){
							// uni.showToast({
							// 	title:'提交成功',
							// 	icon: 'none'
							// })
							uni.navigateBack({
							    delta: 1
							});
						}
						
					}).catch((err) => {
						
				})
				
			
			}
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			isSub(){
				return this.tfDataForm.death_number && this.tfDataForm.handle_number && this.tfDataForm.submit_remarks ? true : false
			}
			
		},
		onLoad({query}) {
			
			this.tfDataForm=JSON.parse(query)
		}
	}
</script>

<style lang="scss" scoped>
.tFContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	padding-bottom: 224rpx;
	color: #151515;
	.notSelected{
		color: #979797 !important;
	}
	.dWTopBox{
		height: 88rpx;
		width: 100%;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
		display: flex;
		justify-content: space-between;
		line-height: 88rpx;
		padding: 0 30rpx;
		background-color: #fff;
		border-bottom: 2rpx solid #F4F6FA;
		text:nth-child(2){
			font-size: 28rpx;
			color: #343434;
		}
	}
	.dWCentreBox{
		height: 88rpx;
		width: 100%;
		font-size: 30rpx;
		font-weight: 500;
		
		display: flex;
		justify-content: space-between;
		line-height: 88rpx;
		padding: 0 30rpx;
		background-color: #fff;
		border-top: 2rpx solid #F4F6FA;
		text:nth-child(2){
			font-size: 28rpx;
			// color: #343434;
		}
	}
	.leaveType{
		height: 140rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
		padding: 26rpx 30rpx 0;
		
	}
	.manager{
		height: 140rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		font-weight: 500;
		border-top:2rpx solid #F4F6FA ;
		padding: 26rpx 30rpx 0;
	}
	.typeName{
		margin-top: 30rpx;
	}
	.choiceBox{
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		font-weight: 500;
		color: #979797;
		margin-top: 16rpx;
		height: 44rpx;
		input{
			height: 44rpx;
		}
		
	}
	.leaveTime{
		// height: 408rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		padding: 10rpx 30rpx 26rpx;
	}
	.leaveReason{
		height: 320rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		font-size: 30rpx;
		font-weight: 500;
		
		padding: 26rpx 30rpx 0;
		textarea{
			width: 660rpx;
			height: 172rpx;
			border: 1rpx solid #D1D2D3;
			margin-top: 14rpx;
			padding: 19rpx 15rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #979797;
			line-height: 42rpx;
		}
	}
	.leaveSubmit{
		width: 670rpx;
		height: 88rpx;
		background: #D1D2D3;
		border-radius: 44rpx;
		text-align: center;
		line-height: 88rpx;
		margin: 100rpx auto;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
	.isSubBg{
		background-color: #377BE4;
	}
	.star{
		width: 12rpx;
		height: 12rpx;
		position: relative;
		top: -12rpx;
		left: 12rpx;
	}
	.zk{
		width: 12rpx;
		height: 22rpx;
		position: relative;
		top: 8rpx;
	}
	.typePop{
		width: 100%;
		height: 918rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 0px 0px;
		.typePopTitle{
			font-size: 30rpx;
			font-weight: 500;
			color: #377BE4;
			padding: 43rpx 30rpx 25rpx;
		}
		.leavePopname{
			border-top: 2rpx solid #E4E5E9;
			padding-left: 30rpx;
			.radioStyle{
				height: 100rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				
			}
			.leave_line{
				width: 680rpx;
				height: 2rpx;
				background: #E4E5E9;
				margin-left: 40rpx;
			}
		}
	}
}
</style>
