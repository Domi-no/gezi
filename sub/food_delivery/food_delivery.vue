<template>
	<view class="drugDeliveryContainer">
		<view class="fDTopBox">
			<text>记录时间</text><text>2020-12-21</text>
		</view>
		<view class="fDTopBox">
			<text>物品名称</text><text>小麦</text>
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
			<view class="" style="margin-top: 20rpx;" v-show="isFactory" @click="fDShowTips">
				<view class="fDCentreBox">
					<text>玉米</text>
					<view class="" style="display: flex;">
						<input type="number" :value="corn" @input="fDCorn" placeholder="请输入" :disabled="whetherSelect" placeholder-style="font-size:26rpx"/><text>公斤</text>
					</view>
				</view>
				<view class="fDCentreBox">
					<text>豌豆</text>
					<view class="" style="display: flex;">
						<input type="number" :value="peas" @input="fDPeas" placeholder="请输入" :disabled="whetherSelect" placeholder-style="font-size:26rpx"/><text>公斤</text>
					</view>
				</view>
				
				<view class="fDCentreBox">
					<text>高粱</text>
					<view class="" style="display: flex;">
						<input type="number" :value="sorghum" @input="fDSorghum" placeholder="请输入" :disabled="whetherSelect" placeholder-style="font-size:26rpx"/><text>公斤</text>
					</view>
				</view>
				<view class="fDCentreBox">
					<text>小麦</text>
					<view class="" style="display: flex;">
						<input type="number" :value="wheat" @input="fDWheat" placeholder="请输入" :disabled="whetherSelect" placeholder-style="font-size:26rpx"/><text>公斤</text>
					</view>
				</view>
				<view class="fDCentreBox">
					<text>保健砂</text>
					<view class="" style="display: flex;">
						<input type="number" :value="healthCareSand" @input="fDHealthCareSand" placeholder="请输入" :disabled="whetherSelect" placeholder-style="font-size:26rpx"/><text>公斤</text>
					</view>
				</view>
				<view class="fDCentreBox">
					<text>配方原粮</text>
					<view class="" style="display: flex;">
						<input type="number" :value="formula" @input="fDFormula" placeholder="请输入" :disabled="whetherSelect" placeholder-style="font-size:26rpx"/><text>公斤</text>
					</view>
				</view>
				<view class="fDCentreBox">
					<text>颗粒饲料</text>
					<view class="" style="display: flex;">
						<input type="number" :value="forage" @input="fDForage" placeholder="请输入" :disabled="whetherSelect" placeholder-style="font-size:26rpx"/><text>公斤</text>
					</view>
				</view>
			</view>
			<!--  -->
				<view class="" v-show="isOutsideFactory">
					<view class="leaveTime">
						<view class="typeName">
							单位<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
						</view>
						<view class="choiceBox" @click="">
							<input type="" @input="fDNnit" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
							<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
						</view>
						<view class="typeName">
							数量<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
						</view>
						<view class="choiceBox"  @click="">
							<input type="number" @input="fDNum" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
							<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
						</view>
						<view class="typeName">
							单价<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
						</view>
						<view class="choiceBox">
							<input type="number" @input="fDPrice"  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
						</view>
					</view>
					<view class="fDCentreBox">
						<text>成交金额</text><text>{{this.fDmoney}}元</text>
					</view>
					<view class="manager" >
						<view class="">
							经手人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
						</view>
						<view class="choiceBox">
							<input type="" @input="fDManager" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
							<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="leaveTime" v-show="isFactory" @click="fDShowTips">
					<view class="typeName">
						使用地点<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox" @click="">
						<input type="" @input="fDPlace"  :value="place" :disabled="whetherSelect" placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					<view class="typeName">
						批准人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox"  @click="">
						<input type="" @input="fDBCCertifier" :value="bCCertifier" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					
				</view>
				<view class="leaveTime borrowBox" v-show="isBorrow">
					<view class="typeName">
						还回时间<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					
					<view class="choiceBox" @click="">
						<input type="" @input="fDreturnTime" :value="returnTime" :disabled="whetherSelect" placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					<view class="typeName">
						借用单位<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox"  @click="">
						<input type="" @input="fDborrowingNnit" :value="borrowingNnit" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					<view class="typeName">
						经手人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox"  @click="">
						<input type="" @input="fDbManager" :value="bManager" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					<view class="typeName">
						审批人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox"  @click="">
						<input type="" @input="fDbApprover" :value="bApprover" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					
				</view>
			<!--  -->
			<view class="leaveReason">
				<view class="">
					备注<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<textarea   @input="fDremarks" :disabled="whetherSelect" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			</view>
		</view>
		<view :class="{leaveSubmit:true,isSubBg:isfDsub}" @click="cSubBtn">
			提交
		</view>
		<view class="setUpTips" v-show="fIsShowTips">
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
				reasonOptions:[{name:'本厂使用',id:1},{name:'外销',id:2},{name:'外厂借用',id:3}],
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
				corn:'',
				peas:'',
				sorghum:'',
				wheat:'',
				healthCareSand:'',
				formula:'',
				forage:'',
				place:'',
				bCCertifier:'',
				returnTime:'',
				borrowingNnit:'',
				bManager:'',
				bApprover:'',
				isOutsideFactory:false,
				isBorrow:false,
				isFactory:true,
				fIsShowTips:false
			}
		},
		methods: {
			reasonChange(){
			 this.$refs.reason.show()
			},
			fDNnit({detail:{value}}){
				this.unitVlue = value.trim()
			},
			fDNum({detail:{value}}){
				this.num = value.trim()
			},
			fDPrice({detail:{value}}){
				this.price = value.trim()
			},
			fDManager({detail:{value}}){
				this.managerName = value.trim()
			},
			fDSupplier({detail:{value}}){
				this.supplierName = value.trim()
			},
			fDCertifier({detail:{value}}){
				this.certifierName = value.trim()
			},
			fDprovider({detail:{value}}){
				this.providerName = value.trim()
			},
			fDremarks({detail:{value}}){
				this.remarks = value.trim()
			},
			fDCorn({detail:{value}}){
				this.corn = value.trim()
			},
			fDPeas({detail:{value}}){
				this.peas = value.trim()
			},
			fDSorghum({detail:{value}}){
				this.sorghum = value.trim()
			},
			fDWheat({detail:{value}}){
				this.wheat = value.trim()
			},
			fDHealthCareSand({detail:{value}}){
				this.healthCareSand = value.trim()
			},
			fDFormula({detail:{value}}){
				this.formula = value.trim()
			},
			fDForage({detail:{value}}){
				this.forage = value.trim()
			},
			fDPlace({detail:{value}}){
				this.place = value.trim()
			},
			fDBCCertifier({detail:{value}}){
				this.bCCertifier = value.trim()
			},
			
			fDreturnTime({detail:{value}}){
				this.returnTime = value.trim()
			},
			fDborrowingNnit({detail:{value}}){
				this.borrowingNnit = value.trim()
			},
			fDbManager({detail:{value}}){
				this.bManager = value.trim()
			},
			fDbApprover({detail:{value}}){
				this.bApprover = value.trim()
			},
			onCancel(){
				console.log(this)
			},
			onConfirm({result}){
				
				switch(result){
					case '外销':
					this.isOutsideFactory = true;
					this.isBorrow = this.isFactory = false;
					break;
					case '本厂使用':
					this.isFactory = true;
					this.isBorrow = this.isOutsideFactory = false;
					
					break;
					case '外厂借用':
					this.isBorrow=true;
					this.isFactory = this.isOutsideFactory = false;
					break;
				}
				
				this.reasonValue = result
				this.whetherSelect = false
				
				
			},
			cSubBtn(){
				
			},
			fDShowTips(){
				if(this.fIsShowTips){
					return false
				}else{
					this.reasonValue === '请选择' ? this.fIsShowTips =true : ''
					setTimeout(()=>{
						this.fIsShowTips =false
					},1500)
				}
				
			}
			
		},
		computed:{
			
			
			isfDsub(){
				let {corn,peas,sorghum,wheat,healthCareSand,formula,forage,place,bCCertifier,returnTime,borrowingNnit,bManager,bApprover,reasonValue,unitVlue,num,price,managerName,supplierName,certifierName,providerName,remarks}=this
				if(reasonValue === '本厂使用' && corn && peas && sorghum && wheat && healthCareSand && formula && forage && place && bCCertifier && remarks || reasonValue === '外销' && unitVlue && num && price && managerName && remarks ||reasonValue === '外厂借用' && returnTime && borrowingNnit && bManager && bApprover && remarks){
					return true
				}
			},
			fDmoney(){
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
	.fDTopBox{
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
		input{
			width: 92rpx;
			height: 40rpx;
			margin: auto 14rpx auto 0;
			line-height: 40rpx;
			text-align: center;
			padding-top: 10rpx;
		}
	}
	.fDCentreBox{
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
		input{
			width: 92rpx;
			height: 36rpx;
			margin: auto 14rpx auto 0;
			
			text-align: center;
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
