<template>
	<view class="feedBackContainer">
		<view class="feedBackTime" @click="addImage">
			<text>反馈时间</text><text>{{formData.feedback_time}}</text>
		</view>
		<view class="feedBackContent">
			<view class="problemDescription">
				问题/意见描述 <image class="starImg" src="../../static/my/star.png" mode=""></image>
			</view>
			<textarea :value="formData.describe" @input="inputQuestion" placeholder="请输入问题/意见描述" placeholder-style="tPStyle" />
		</view>
		<view class="feedBackPic">
			<view class="feedBackPicTitle">
				反馈截图
			</view>
			<view class="feedBackPicContainer">
				
				<sunui-upimg @change="getImageInfo"   :url="'http://jx.onlylove.top/CageData/addImg.html'"  @showTip="showTip" :header="formData" :upload_auto="false" ref="upimg"></sunui-upimg>
			</view>
			<!-- <easy-upload
			   :dataList="dataList"
			      :uploadUrl="'http://192.168.0.134/CageData/addImg.html'" 
			      deleteUrl='http://localhost:3000/upload' 
			      :types="types"
				  :uploadCount="4"
			      @successImage="successImage" 
				:formData="formData"
			   >132</easy-upload> -->
		</view>		
		
		<view :class="{feedBackSubmit:true,submitBg:formData.describe}" @click="fbSubmit">
			提交
		</view>
		
	</view>	
</template>

<script>
	
	 import easyUpload from '@/components/easy-upload/easy-upload.vue';
	import {
		mapState
	} from 'vuex'
	
	var _self;
		import sunUiUpimg from '@/components/sunui-upimg/sunui-upimg.vue';
	export default {
		components:{
			easyUpload,
			sunuiUpimg:sunUiUpimg,
			
		},
		data(){
			return {
				auto: false,
				question:'',
				time:'',
				formData:{
					feedback_time:'',
					describe:'',
					uid:'',
					token:''
					
				},
				 dataList: [],
				types: 'image',
					src1: '', // 提交到后台的图片信息
						src: '', // 用来在前端展示的图片，如上面图片中显示的一样
						isSub:false,
				
				            
				
			}
		},
		
		methods: {
			inputQuestion(e){
				this.formData.describe = e.detail.value.trim()
				
			},
			successImage(e){
				console.log(e)
			},
			getImageInfo(e) {
				
				console.log('返回图片信息：',e);
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				this.formData.feedback_time=times
				
			},
			
			fbSubmit(){
				if(!this.formData.describe){
					uni.showToast({
						title: '请填写反馈内容',
						icon: 'none'
					})
					return false
				}
				console.log(1)
				
				console.log(this.isSub)
				this.$refs.upimg.upload(true)
			},
			showTip(res){
				console.log(JSON.parse(res.data))
				if(JSON.parse(res.data).code == 200){
					uni.showToast({
						title: '反馈成功',
						icon: 'none'
					})
					setTimeout(()=>{
						uni.navigateBack({
						    delta: 1
						});
					},1000)
				}
				
			},
			
			
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
			
		},
		created() {
			this.getToday()	
			this.formData.uid=this.userInfo.id
			this.formData.token=this.userInfo.token
			console.log(this.formData)
			
		}
	}
</script>

<style lang="scss" scoped>
	.feedBackContainer{
		height: calc(100vh);
		background-color: #F4F6FA;
		padding-top: 20rpx;
		.feedBackTime{
			width: 100%;
			height: 88rpx;
			line-height: 88rpx;
			padding: 0 30rpx;
			background: #FFFFFF;
			font-size: 30rpx;
			font-weight: 500;
			color: #151515;
			display: flex;
			justify-content: space-between;
		}
		.feedBackContent{
			margin-top: 2rpx;
			background-color: #fff;
			height: 420rpx;
			padding: 26rpx 30rpx 0;
			.problemDescription{
				
				.starImg{
					width: 12rpx;
					height: 12rpx;
					position: relative;
					top: -8rpx;
					right: -10rpx;
					
				}
			}
			textarea{
				height: 260rpx;
				width: calc(100% - 30rpx);
				border: 1rpx solid #D1D2D3;
				margin-top: 16rpx;
				padding: 18rpx 15rpx;
			}
			.tPStyle{
				font-size: 28px;
				font-weight: 500;
				color: #979797;
			}
			
		}
		.feedBackPic{
			// height: 260rpx;
			width: 100%;
			background: #FFFFFF;
			margin-top: 20rpx;
			padding:30rpx ;
			.feedBackPicTitle{
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #151515;
			}
				
			.feedBackPicContainer{
				margin-top: 15rpx;
				.feedBackPicBox{
					width: 140rpx;
					height: 140rpx;
					border: 1rpx solid #D1D2D3;
					position: relative;
					margin-left: 30rpx;
					.cancelPic{
						width: 32rpx;
						height: 32rpx;
						position: absolute;
						top: 0;
						right:0;
					}
					.heng{
						position: relative;
						top: 51%;
						left: 50%;
						transform: translateX(-50%);
						width: 40rpx;
						height: 1rpx;
						border: 1rpx solid #D1D2D3;
					}
					.shu{
						position: relative;
						top: 50%;
						left: 48%;
						transform: translateY(-50%);
						width: 1rpx;
						height: 41rpx;
						border: 1rpx solid #D1D2D3;
					}
				}
					
				.feedBackPicBox:nth-child(1){
					margin-left: 0;
				}
			}
			
		}
		.feedBackSubmit{
			width: 670rpx;
			height: 88rpx;
			background: #D1D2D3;
			border-radius: 44rpx;
			font-size: 34rpx;
			font-weight: 500;
			color: #FFFFFF;
			text-align: center;
			line-height: 88rpx;
			margin: 110rpx auto 0;
		}
		.submitBg{
			background-color: #377BE4;
		}
	}

</style>
