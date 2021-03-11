<template>
	<view class="addSaleRecordContainer">
		<view class="saleTopBox">
			<view class=""style="padding: 0 30rpx;">
				<view class="saleNumBox">
					<text>可销售数量</text>
					<view class="">
						生产仓 <image src="../../static/my/zk.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="saleCageBox">
				<view class="sCItem">
					<view class="">
						<image src="../../static/daiban/ht_p.png" mode=""></image><text>种鸽</text>
					</view>
					<text class="sCCageNum pinkNum">598</text>
				</view>
				<view class="sCItem">
					<view class="">
						<image src="../../static/daiban/ht_b.png" mode=""></image><text>鸽蛋</text>
					</view>
					<text class="sCCageNum pinkNum">25,468</text>
				</view>
				<view class="sCItem">
					<view class="">
						<image src="../../static/daiban/ht_g.png" mode=""></image><text>乳鸽</text>
					</view>
					<text class="sCCageNum pinkNum">598</text>
				</view>
				<view class="sCItem">
					<view class="">
						<image src="../../static/daiban/ht_o.png" mode=""></image><text>童鸽</text>
					</view>
					<text class="sCCageNum pinkNum">598</text>
				</view>
			</view>
			
		</view>
		<view class="fWTopBox" style="margin-top: 20rpx;">
			<text>记录时间</text><text>2020-12-21</text>
		</view>
		<view>
			<view class="leaveTime">
				<view class="typeName">
					单位<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<input type="" @input="fWNnit" :value="unitVlue" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					货物名称<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox"  @click="">
					<input type="number" @input="fWNum" :value="num" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					规格<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="fWPrice" :value="price" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					数量<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="fWPrice" :value="price" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>

			<view class="leaveReason">
				<view class="">
					备注<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<textarea   @input="fWremarks" :value="remarks" :disabled="whetherSelect" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			</view>
		</view>
		<view class="leaveTime" style="margin-top: 20rpx;">
			<view class="typeName">
				单价<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
			</view>
			<view class="choiceBox" @click="">
				<input type="" @input="fWSupplier"  :value="supplierName" :disabled="whetherSelect" placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="typeName">
				客户<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
			</view>
			<view class="choiceBox"  @click="">
				<input type="number" @input="fWCertifier" :value="certifierName" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="typeName">
				收款方式<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
			</view>
			<view class="choiceBox"  @click="">
				<input type="number" @input="fWCertifier" :value="certifierName" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			
		</view>
		<view class="fWCentreBox">
			<text>合计金额</text><text>{{this.fWmoney}}元</text>
		</view>
		<view :class="{leaveSubmit:true,isSubBg:isfWsub}" @click="cSubBtn">
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
			fWNnit({detail:{value}}){
				 setTimeout(() => {
				       this.unitVlue = value.trim()
				    }, 0)
				
			},
			fWNum({detail:{value}}){
				this.num = value.trim()
			},
			fWPrice({detail:{value}}){
				this.price =value.trim()
			},
			fWManager({detail:{value}}){
				this.managerName =value.trim()
			},
			fWSupplier({detail:{value}}){
				this.supplierName =value.trim()
			},
			fWCertifier({detail:{value}}){
				this.certifierName =value.trim()
			},
			fWprovider({detail:{value}}){
				this.providerName =value.trim()
			},
			fWremarks({detail:{value}}){
				this.remarks =value.trim()
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
			isfWsub(){
				let {reasonValue,unitVlue,num,price,supplierName,certifierName,remarks}=this
				if( unitVlue && num && price && supplierName && certifierName && remarks ){
					return true
				}
			},
			fWmoney(){
				let {num,price}=this
				return num&&price? num*price : 0
			}
		}
	}
</script>

<style lang="scss" scoped>
.addSaleRecordContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-bottom: 138rpx;
	color: #151515;
	.saleTopBox{
		background: #FFFFFF;
		// padding: 0 30rpx;
		border-top: 2rpx solid #F4F6FA;
		.saleNumBox{
			height: 90rpx;
			display: flex;
			justify-content: space-between;
			line-height: 90rpx;
			border-bottom: 2rpx solid #F4F6FA;
			
			text{
				font-size: 30rpx;
				font-weight: bold;
				color: #151515;
			}
			view{
				font-size: 28rpx;
				font-weight: 500;
				color: #343434;
				
				image{
					width: 12rpx;
					height: 22rpx;
					margin-left: 16rpx;
				}
			}
		}
		.saleCageBox{
			height: 180rpx;
			display: flex;
			.sCItem{
				width: 180rpx;
				height: 180rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #151515;
				
				text-align: center;
				view{
					padding: 30rpx 0 0 30rpx;
					display: flex;
					image{
						width: 40rpx;
						height: 40rpx;
					}
					text{
						margin-left: 12rpx;
					}
				}
				.sCCageNum{
					display: block;
					font-size: 36rpx;
					font-weight: 400;
					margin-top: 14rpx;
					
				}
				
				.pinkNum{
					font-size: 36rpx;
					font-weight: 400;
					color: #E86F60;
					
					
				}
			}
		}
		
	}
	.notSelected{
		color: #979797 !important;
	}
	.fWTopBox{
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
	.fWCentreBox{
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
		// height: 140rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
		padding: 26rpx 30rpx 26rpx;
		
	}
	.manager{
		// height: 140rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		font-weight: 500;
		border-top:2rpx solid #F4F6FA ;
		padding: 26rpx 30rpx 26rpx;
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
			// line-height: 44rpx;
			// text-align: inherit;
			padding-bottom: 20rpx;
		}
		
	}
	.leaveTime{
		// height: 408rpx;
		background: #FFFFFF;
		// margin-top: 20rpx;
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
