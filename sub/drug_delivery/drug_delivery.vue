<template>
	<view class="drugDeliveryContainer">
		<view class="dDTopBox">
			<text>记录时间</text><text>2020-12-21</text>
		</view>
		<view class="dDTopBox">
			<text>药品名称</text><text>药品一号</text>
		</view>
		<view class="leaveType">
			<view class="">
				出库原因<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox" @click="reasonChange">
				<text>{{reasonValue}}</text>
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
		</view>
		<view :class="{notSelected:whetherSelect}">
			<view class="leaveTime" @click="dShowTips">
				<view class="typeName">
					单位<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<input type="" @input="dDNnit" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					数量<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox"  @click="">
					<input type="number" @input="dDNum" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					单价<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="dDPrice"  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="dDCentreBox">
				<text>{{this.isFactory?"合计金额":"成交金额"}}</text><text>{{this.dDmoney}}元</text>
			</view>
			<view class="manager" v-show="!isFactory">
				<view class="">
					经手人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="dDManager" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="leaveTime" v-show="isFactory" @click="dShowTips">
				<view class="typeName">
					供货单位<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<input type="" @input="dDSupplier"  :disabled="whetherSelect" placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					批准人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox"  @click="">
					<input type="number" @input="dDCertifier" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					供货人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="dDprovider" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="leaveReason">
				<view class="">
					备注<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<textarea   @input="dDremarks" :disabled="whetherSelect" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			</view>
		</view>
		<view :class="{leaveSubmit:true,isSubBg:isDDsub}" @click="cSubBtn">
			提交
		</view>
		<view class="setUpTips" v-show="dIsShowTips">
			请先选择出库原因
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
				whetherSelect:true,
				unitVlue:'',
				num:'',
				price:'',
				managerName:'',
				supplierName:'',
				certifierName:'',
				providerName:'',
				remarks:'',
				dIsShowTips:false
			}
		},
		methods: {
			reasonChange(){
			 this.$refs.reason.show()
			},
			dDNnit({detail:{value}}){
				this.unitVlue = value
			},
			dDNum({detail:{value}}){
				this.num = value
			},
			dDPrice({detail:{value}}){
				this.price =value
			},
			dDManager({detail:{value}}){
				this.managerName =value
			},
			dDSupplier({detail:{value}}){
				this.supplierName =value
			},
			dDCertifier({detail:{value}}){
				this.certifierName =value
			},
			dDprovider({detail:{value}}){
				this.providerName =value
			},
			dDremarks({detail:{value}}){
				this.remarks =value
			},
			onCancel(){
				console.log(this)
			},
			onConfirm(e){
				this.reasonValue=e.result
				this.whetherSelect=false
			},
			cSubBtn(){
				
			},
			dShowTips(){
				if(this.dIsShowTips){
					return false
				}else{
					this.reasonValue === '请选择' ? this.dIsShowTips =true : ''
					setTimeout(()=>{
						this.dIsShowTips =false
					},1500)
				}
				
			}
		},
		computed:{
			isFactory(){
				return this.reasonValue === '本厂使用'||this.reasonValue === '请选择' ? true : false
			},
			isDDsub(){
				let {reasonValue,unitVlue,num,price,managerName,supplierName,certifierName,providerName,remarks}=this
				if(reasonValue === '本厂使用' && unitVlue && num && price && supplierName && certifierName && providerName && remarks || reasonValue === '外销' && unitVlue && num && price && managerName && remarks){
					return true
				}
			},
			dDmoney(){
				let {num,price}=this
				return num&&price? num*price : 0
			}
		}
	}
</script>

<style lang="scss" scoped>
.drugDeliveryContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	padding-bottom: 224rpx;
	color: #151515;
	.notSelected{
		color: #979797 !important;
	}
	.dDTopBox{
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
	.dDCentreBox{
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
	.setUpTips{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 320rpx;
		height: 98rpx;
		background: #000000;
		opacity: 0.5;
		border-radius: 10rpx;
		text-align: center;
		font-size: 28rpx;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 98rpx;
		z-index: 99;
	}
}
</style>
