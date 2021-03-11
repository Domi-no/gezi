<template>
	<view class="vaccineUseFeedBackContainer">
		<view class="dWTopBox">
			<text>记录时间</text><text>2020-12-21</text>
		</view>
		
		<view class="leaveType">
			<view class="">
				仓号<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox" @click="reasonChange">
				<text>{{reasonValue}}</text>
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
		</view>
		
		<view :class="{notSelected:whetherSelect}">
			<view class="leaveTime">
				<view class="typeName">
					疫苗名称<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<text>请选择</text>
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					使用原因<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox"  @click="">
					<input type="number" @input="dWNum" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					生产厂家<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="dWPrice"  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					生产日期<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input=""  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					批号<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input=""  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			
			
			<view class="leaveTime">
				<view class="typeName">
					用苗时间<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<text>请选择</text>
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					接种数量<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input=""  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="leaveTime">
				<view class="typeName">
					免疫方法<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<input type="number" @input=""  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					免疫计量<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input=""  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					免疫人员<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input=""  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					饲养员<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input=""  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					免疫工作负责人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input=""  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					接种单位负责人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input=""  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="leaveReason">
				<view class="">
					备注
				</view>
				<textarea   @input="dWremarks" :disabled="whetherSelect" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			</view>
			<view class="leaveReason">
				<view class="">
					备注<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<textarea   @input="dWremarks" :disabled="whetherSelect" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			</view>
		</view>
		<view :class="{leaveSubmit:true,isSubBg:isdWsub}" @click="cSubBtn">
			提交
		</view>
		<w-picker
		     :visible.sync="visible"
		     mode="selector"
		     value="本厂使用"
			default-type="name"
			:default-props="defaultProps"
		     :options="reasonOptions"
		     @confirm="onConfirm($event,'selector')"
		     @cancel="onCancel"
		     ref="reason" 
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
				defaultProps:{"label":"name","value":"id"},
				isSub:false,
				visible:false,
				reasonOptions:[{name:'本厂使用',id:1},{name:'外销',id:2}],
				reasonValue:'请选择',
				starSrc:['../../static/daiban/star.png','../../static/daiban/n_s_star.png'],
				whetherSelect:false,
				unitVlue:'',
				num:'',
				price:'',
				managerName:'',
				supplierName:'',
				certifierName:'',
				providerName:'',
				remarks:'',
				
			}
		},
		methods: {
			reasonChange(){
			 this.$refs.reason.show()
			},
			dWNnit({detail:{value}}){
				this.unitVlue = value
			},
			dWNum({detail:{value}}){
				this.num = value
			},
			dWPrice({detail:{value}}){
				this.price =value
			},
			dWManager({detail:{value}}){
				this.managerName =value
			},
			dWSupplier({detail:{value}}){
				this.supplierName =value
			},
			dWCertifier({detail:{value}}){
				this.certifierName =value
			},
			dWprovider({detail:{value}}){
				this.providerName =value
			},
			dWremarks({detail:{value}}){
				this.remarks =value
			},
			onCancel(){
				console.log(this)
			},
			onConfirm(e){
				this.reasonValue=e.result
				
			},
			cSubBtn(){
				
			}
		},
		computed:{
			isdWsub(){
				let {reasonValue,unitVlue,num,price,managerName,supplierName,certifierName,providerName,remarks}=this
				if(reasonValue !== '请选择' && unitVlue && num && price && supplierName && certifierName && providerName && remarks ){
					return true
				}
			},
			dWmoney(){
				let {num,price}=this
				return num&&price? num*price : 0
			}
		}
	}
</script>

<style lang="scss" scoped>
.vaccineUseFeedBackContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	padding-bottom: 189rpx;
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
		padding: 10rpx 30rpx 24rpx;
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
