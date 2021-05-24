<template>
	<view class="drugDeliveryContainer">
		<view class="fDTopBox">
			<text>记录时间</text><text>{{queryData.time}}</text>
		</view>
		<view class="fDTopBox">
			<text>物品名称</text><text>{{queryData.grain_name}}</text>
		</view>
		<view class="leaveType">
			<view class="">
				出库原因<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox" @click="reasonChange">
				<text>{{fDdataForm.reason||'请选择'}}</text>
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
		</view>
		<view :class="{notSelected:whetherSelect}">
			
			<!--  -->
				<view class="" v-show="isOutsideFactory">
					<view class="leaveTime">
						<view class="typeName">
							单位<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
						</view>
						<view class="choiceBox" @click="">
							<input type="" @input="unitChange" :value="fDdataForm.unit" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
							<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
						</view>
						<view class="typeName">
							数量<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
						</view>
						<view class="choiceBox"  @click="">
							<input type="number" @input="numberChange"  :value="fDdataForm.number" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
							<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
						</view>
						<view class="typeName">
							单价<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
						</view>
						<view class="choiceBox">
							<input type="number" @input="unit_priceChange" :value="fDdataForm.unit_price"  :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
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
							<input type="" @input="managerChange" :value="fDdataForm.manager" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
							<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="leaveTime" v-show="isFactory" @click="fDShowTips">
					<view class="typeName">
						使用地点<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox" @click="">
						<input type="" @input="supplierChange"  :value="fDdataForm.supplier" :disabled="fDdataForm.reason === ''" placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					<view class="typeName">
						批准人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox"  @click="">
						<input type="" @input="examinerChange" :value="fDdataForm.examiner" :disabled="fDdataForm.reason === ''"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					
				</view>
				<view class="leaveTime borrowBox" v-show="isBorrow">
					<view class="typeName">
						还回时间<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					
					<view class="choiceBox" @click="">
						<input type="" @input="return_timeChange" :value="fDdataForm.return_time" :disabled="whetherSelect" placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					<view class="typeName">
						借用单位<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox"  @click="">
						<input type="" @input="borrowingChange" :value="fDdataForm.borrowing" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					<view class="typeName">
						经手人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox"  @click="">
						<input type="" @input="managerChange" :value="fDdataForm.manager" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					<view class="typeName">
						审批人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox"  @click="">
						<input type="" @input="examinerChange" :value="fDdataForm.examiner" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
					
				</view>
			<!--  -->
			<view class="leaveReason">
				<view class="">
					备注<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<textarea   @input="remarksChange" :value="fDdataForm.remarks" :disabled="fDdataForm.reason===''" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
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
	import {
		mapState
	} from 'vuex'
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
				fIsShowTips:false,
				
				// ----
				queryData:'',
				fDdataForm:{
					type:2,
					unit:'',
					unit_price:'',
					number:'',
					price:'',
					supplier:'',
					examiner:'',
					remarks:'',
					reason:'',
					return_time:'',
					borrowing:'',
					manager:'',
					
				},
			}
		},
		methods: {
			reasonChange(){
			 this.$refs.reason.show()
			},
			unitChange({detail:{value}}){
				this.fDdataForm.unit = parseInt(value.trim())
			},
			numberChange({detail:{value}}){
				this.fDdataForm.number = parseInt(value.trim())
			},
			unit_priceChange({detail:{value}}){
				this.fDdataForm.unit_price = parseInt(value.trim())
			},
			supplierChange({detail:{value}}){
				this.fDdataForm.supplier = value.trim()
			},
			examinerChange({detail:{value}}){
				this.fDdataForm.examiner = value.trim()
			},
			remarksChange({detail:{value}}){
				this.fDdataForm.remarks = value.trim()
			},
			// 
			managerChange({detail:{value}}){
				this.fDdataForm.manager = value.trim()
			},
			borrowingChange({detail:{value}}){
				this.fDdataForm.borrowing = value.trim()
			},
			return_timeChange({detail:{value}}){
				this.fDdataForm.return_time = value.trim()
			},
			
			placeChange({detail:{value}}){
				this.fDdataForm.place = value.trim()
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
				
				this.fDdataForm.reason = result
				this.whetherSelect = false
				
				
			},
			cSubBtn(){
				if(!this.isfDsub){
					return false
				}
				const {time:record_time,grain_name}=this.queryData
				this.$http.post('/Grain/beLaidUp.html', {uid: this.userInfo.id,record_time,grain_name,...this.fDdataForm})
				.then((res) => {
						console.log(res)
					
						if(res.code == 200){
							uni.showToast({
								title:'提交成功',
								icon: 'none'
							})
							setTimeout(()=>{
								uni.navigateBack({
								    delta: 1
								});
							},1000)
						}else{
							uni.showToast({
								title:res.message,
								icon: 'none'
							})
						}
					}).catch((err) => {
						
				})
			},
			fDShowTips(){
				
				if(!this.fDdataForm.reason){
					uni.showToast({
						title:'请先选择出库原因',
						icon: 'none'
					})
				}
				
			}
			
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
			isfDsub(){
				this.fDdataForm.price=this.fDmoney
				let {unit,unit_price,number,price,supplier,remarks,examiner,reason,return_time,borrowing,manager}=this.fDdataForm
				if(reason === '本厂使用' && examiner && remarks && supplier || reason === '外销' && unit && number && unit_price && manager && remarks ||reason === '外厂借用' && return_time && borrowing && manager && examiner && remarks){
					return true
				}
			},
			fDmoney(){
				let {number,unit_price}=this.fDdataForm
				
				return number&&unit_price? number*unit_price : 0
			}
		},
		onLoad({query}) {
			this.queryData=JSON.parse(query)
			console.log(this.queryData)
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
	/*  #ifdef  MP-WEIXIN */
	min-height: calc(100vh);
	/*  #endif  */
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
