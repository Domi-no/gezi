<template>
	<view class="scan_code_container">
		<view class="scan_code_Top">
			<view class="">
				<text>当前仓号</text><text>{{scanCodeData.type_name}}</text>
			</view>
			<view class="">
				<text>日期</text><text>2020-12-12</text>
			</view>
		</view>
		<view class="scan_code_wNBox">
			<view :class="{ scan_code_wNItem:true,currentClass:item.cage_id === cage_id}" v-for="(item,index) in scanCodeData.array" @click="currentBox(index,item)" :key="index">
				<view class="scan_codeHeader">
					<image src="../../static/home/scancode.png" mode=""></image><view>{{item.blockName}}</view>
				</view>
				<view class="scan_codeDetailsBox">
						<view class="">
							<text>种鸽</text><text class="scNum">{{item.pigeon}}</text>
						</view>
						<view class="">
							<text>鸽蛋</text><text class="scNum">{{item.egg}}</text>
						</view>
						<view class="" style="margin-top: 6rpx;">
							<text>乳鸽</text><text class="scNum">{{item.squab}}</text>
						</view>
						<view class="" style="margin-top: 6rpx;">
							<text>童鸽</text><text class="scNum">{{item.child}}</text>
						</view>	
						<view class="" style="margin-top: 6rpx;">
							<text>青年鸽</text><text class="scNum">{{item.youth}}</text>
						</view>	
				</view>
			</view>
			
		</view>
		<view :class="{scan_code_btn:true,scan_code_sub:isSub}" @click="toRecordPage">
			确认
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
				cage_id:'',
				id:'',
				scanCodeData:{},
				today:'',
				isSub:false,
				queryData:'',
			}
		},
		methods: {
			currentBox(idx,item){
				this.cage_id=item.cage_id
				this.queryData=item
				console.log(this.cage_id)
				this.isSub=true
			},
			toRecordPage(){
				console.log(this.cage_id)
				// return false
				
				if(this.queryData.type_name==='生产仓'){
					uni.navigateTo({
						url:'/sub/production_records/production_records?query=' + JSON.stringify(this.queryData)
					})
				}else{
					uni.navigateTo({
						url:'/sub/production_warehouse_change/production_warehouse_change?query=' + JSON.stringify(this.queryData)
					})
				}
				
			},
			getScanCodeData(){
				this.$http.post('/Rank/ScanCode.html',{uid:this.userInfo.id,cages:'125,126'})
				.then((res)=>{
					if(res.code == 200){
						
						console.log(res)
						this.scanCodeData = res.data
						
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
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				 this.today=times
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
			this.id = id
			this.getToday()
			this.getScanCodeData()
		}
	}
</script>

<style lang="scss" scoped>
.scan_code_container{
	background-color:#F4F6FA;
	min-height: calc(100vh - 88rpx);
	.scan_code_Top{
		view{
			height: 88rpx;
			border-top: 2rpx solid #F4F6FA;
			display: flex;
			justify-content: space-between;
			line-height: 88rpx;
			padding: 0 30rpx;
			font-size: 30rpx;
			color: #151515;
			font-weight: 500;
			background-color: #fff;
			text:nth-child(2){
				font-size: 28rpx;
				color: #343434;
			}
		}
	}
	.scan_code_wNBox{
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.scan_code_wNItem{
			width: 320rpx;
			// height: 160rpx;
			padding-bottom: 10rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 1rpx 6rpx 0rpx rgba(0, 0, 0, 0.1);
			border-radius: 10rpx;
			margin-top: 30rpx;
			
			
		}
		.currentClass{
			width: 320rpx;
			// height: 160rpx;
			padding-bottom: 10rpx;
			background: #FFFFFF;
			box-shadow: 3rpx 4rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);
			border-radius: 10rpx;
			margin-top: 30rpx;
		}
		.scan_codeHeader{
			display: flex;
			padding: 16rpx 14rpx;
			height: 40rpx;
			image{
				width: 40rpx;
				height: 40rpx;
			}
			view{
				padding: 0;
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				margin-left: 11rpx;
			}
		}
		.scan_codeDetailsBox{
			box-sizing: border-box;
			margin-top: 25rpx;
			display: flex;
			flex-wrap: wrap;
			padding-left: 30rpx;
			view{
				width: 140rpx;
				display: flex;
				text:nth-child(1){
					min-width: 80rpx;
					text-align: right;
					font-size: 24rpx;
					font-weight: 500;
					color: #676767;
				}
			}
			.scNum{
				color: #377BE4;
				margin-left: 11rpx;
				font-size: 28rpx;
				// min-width: 40rpx;
			}
		}
	}
	.scan_code_btn{
		width: 670rpx;
		height: 88rpx;
		background: #D1D2D3;
		border-radius: 44px;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
		text-align: center;
		line-height: 88rpx;
		position: absolute;
		bottom: 130rpx;
		left: 50%;
		transform: translateX(-50%);
	}
	.scan_code_sub{
		background: #377BE4;
	}
}
</style>
