<template>
	<view class="leaveContainer">
		<view class="leaveType">
			<view class="">
				请假类型<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox" @click="open">
				<text>{{baseValue}}</text>
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
		</view>
		<view class="leaveTime">
			<view class="typeName">
				开始时间<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox" @click="leaveSTime">
				<text>{{leaveStartTime}}</text>
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="typeName">
				结束时间<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox"  @click="leaveETime">
				<text>{{leaveEndTime}}</text>
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="typeName">
				时长(天)<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox">
				<input type="number" @input="dayChange" :value="howlong"  placeholder="请假时长" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><text></text>
			</view>
		</view>
		<view class="leaveReason">
			<view class="">
				请假类型<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<textarea :value="reasonContent"  @input="reasonChange"  placeholder="请输入请假事由" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
		</view>
		<view :class="{leaveSubmit:true,isSubBg:isSub}" @click="cSubBtn">
			提交
		</view>
		<uni-popup ref="popup"  type="share">
			<view class="typePop">
				<view class="typePopTitle">
					请假类型
				</view>
				<view class="leavePopname">
					<evan-radio class="radioStyle"  v-model="baseValue" label="年假">年假</evan-radio>
					<view class="leave_line"></view>
					<evan-radio class="radioStyle" v-model="baseValue" label="事假">事假</evan-radio>
					<view class="leave_line"></view>
					<evan-radio class="radioStyle" v-model="baseValue" label="病假">病假</evan-radio>
					<view class="leave_line"></view>
					<evan-radio class="radioStyle" v-model="baseValue" label="调休假">调休假</evan-radio>
					<view class="leave_line"></view>
					<evan-radio class="radioStyle" v-model="baseValue" label="产假">产假</evan-radio>
					<view class="leave_line"></view>
					<evan-radio class="radioStyle" v-model="baseValue" label="陪产假">陪产假</evan-radio>
					<view class="leave_line"></view>
					<evan-radio class="radioStyle" v-model="baseValue" label="婚假">婚假</evan-radio>
					<view class="leave_line"></view>
					<evan-radio class="radioStyle" v-model="baseValue" label="其它">其它</evan-radio>
				</view>
			</view>
		</uni-popup>
		<w-picker
				:visible.sync="visible"
				mode="date" 
				startYear="2017" 
				endYear="2029"
				value=""
				:current="true"
				fields="minute"
				@confirm="onConfirm($event,'date')"
				@cancel="onCancel"
				:disabled-after="false"
				ref="date1" 
		></w-picker>
		<w-picker
				:visible.sync="visible2"
				mode="date" 
				startYear="2017" 
				endYear="2029"
				value=""
				:current="true"
				fields="minute"
				@confirm="onConfirm($event,'date')"
				@cancel="onCancel"
				:disabled-after="false"
				ref="date2" 
		></w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components:{
		        wPicker
		},
		data() {
			return {
				 baseValue:'请选择',
				 visible:false,
				 visible2:false,
				 leaveStartTime:'请选择',
				 leaveEndTime:'请选择',
				 reasonContent:'',
				 howlong:''
				 
			}
		},
		methods: {
			open(){
			 // 通过组件定义的ref调用uni-popup方法
			 this.$refs.popup.open()
			},
			leaveSTime(){
			 this.$refs.date1.show()
			},
			leaveETime(){
			 this.$refs.date2.show()
			},
			onCancel(){
				
			},
			onConfirm({result}){
				console.log(result)
				console.log(this.visible,this.visible2)
				this.visible ? this.leaveStartTime = result : this.leaveEndTime = result
			},
			cSubBtn(){
				console.log(this.isSub)
			},
			reasonChange({detail:{value}}){
				
				this.reasonContent=value
			},
			dayChange({detail:{value}}){
				this.howlong=value
			}
		},
		computed:{
			isSub(){
				if(this.baseValue === '请选择' || this.leaveStartTime === '请选择' || !this.howlong|| this.leaveEndTime === '请选择' || !this.reasonContent.trim()){
					console.log(this.baseValue,this.leaveStartTime,this.howlong,this.leaveEndTime,this.reasonContent)
					return false
				}else{
					return true
				}
				
				
			}
		}
		
	}
</script>

<style lang="scss" scoped>
.leaveContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	.leaveType{
		height: 140rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
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
		height: 408rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		padding: 10rpx 30rpx 0;
	}
	.leaveReason{
		height: 320rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
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
		margin: 100rpx auto 0;
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
