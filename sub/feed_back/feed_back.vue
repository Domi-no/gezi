<template>
	<view class="feedBackContainer">
		<view class="feedBackTime">
			<text>反馈时间</text><text>2020-12-21</text>
		</view>
		<view class="feedBackContent">
			<view class="problemDescription">
				问题/意见描述 <image class="starImg" src="../../static/my/star.png" mode=""></image>
			</view>
			<textarea :value="question" @input="inputQuestion" placeholder="请输入问题/意见描述" placeholder-style="tPStyle" />
		</view>
		<view class="feedBackPic">
			<view class="feedBackPicTitle">
				反馈截图
			</view>
			<view class="feedBackPicContainer">
				<!-- <view class="feedBackPicBox" @click="uploadPictures" v-for="">
					<image class="cancelPic" src="../../static/my/close.png" mode=""></image>
					<view class="heng"></view>
					<view class="shu"></view>
				</view> -->
				<sunui-upimg @change="getImageInfo" :upload_auto="auto" ref="upimg"></sunui-upimg>
			</view>
		</view>		
		<view :class="{feedBackSubmit:true,submitBg:question}">
			提交
		</view>
	</view>
</template>

<script>
	var _self;
		import sunUiUpimg from '@/components/sunui-upimg/sunui-upimg.vue';
	export default {
		components: {
		           'sunui-upimg': sunUiUpimg
		        },
		data(){
			return {
				auto: false,
				question:''
			}
		},
		
		methods: {
			inputQuestion(e){
				this.question = e.detail.value
				
			},
			getImageInfo(e) {
				// 上传图片或者删除图片返回信息
				console.log('返回图片信息：',e);
			}
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
