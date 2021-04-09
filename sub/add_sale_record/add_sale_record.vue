<template>
	<view class="addSaleRecordContainer">
		<view class="saleTopBox">
			<view class=""style="padding: 0 30rpx;">
				<view class="saleNumBox">
					<text>可销售数量</text>
					<view class="" @click="warehousePopupShow">
						生产仓 <image src="../../static/my/zk.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="" style="position: relative;">
				<scroll-view class="saleCageBox"  scroll-x="true" @scroll="touchStart" ref="scrollBox" >
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_p.png" mode=""></image><text>种鸽</text>
						</view>
						<text class="sCCageNum pinkNum">{{warehouseList.preSaleData.pigeon||0}}</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_b.png" mode=""></image><text>鸽蛋</text>
						</view>
						<text class="sCCageNum pinkNum">{{warehouseList.preSaleData.egg||0}}</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_g.png" mode=""></image><text>乳鸽</text>
						</view>
						<text class="sCCageNum pinkNum">{{warehouseList.preSaleData.squab||0}}</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_o.png" mode=""></image><text>童鸽</text>
						</view>
						<text class="sCCageNum pinkNum">{{warehouseList.preSaleData.child||0}}</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_qng.png" mode=""></image><text>青年鸽</text>
						</view>
						<text class="sCCageNum pinkNum">{{warehouseList.preSaleData.youth||0}}</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_fb.png" mode=""></image><text>粪便</text>
						</view>
						<text class="sCCageNum pinkNum">{{warehouseList.preSaleData.dung||0}}</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_fl.png" mode=""></image><text>废料</text>
						</view>
						<text class="sCCageNum pinkNum">{{warehouseList.preSaleData.waste||0}}</text>
					</view>
				</scroll-view>
				<view class="lineBox">
					<view class="" style="position: relative;">
						<view class="line" id="line" :style="'position: absolute;left:' + leftValue +'%;'">
							
						</view>
						
					</view>
				</view>
			</view>
			
		</view>
		<view class="fWTopBox" style="margin-top: 20rpx;">
			<text>记录时间</text><text>{{saleForm.record_time}}</text>
		</view>
		<view>
			<view class="leaveTime">
				<view class="typeName">
					单位<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<input type="" @input="unitChange" :value="saleForm.unit"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					货物名称<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox"  @click="goodsNamePopupShow">
					<text>{{goods_type||'请选择'}}</text>
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					规格<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="specsPopupShow">
					<text>{{saleForm.specs}}</text><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					数量<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="numberChange" :value="saleForm.number"   placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>

			<view class="leaveReason">
				<view class="">
					备注<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<textarea   @input="remarksChange" :value="saleForm.remarks"  placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			</view>
		</view>
		<view class="leaveTime" style="margin-top: 20rpx;">
			<view class="typeName">
				单价<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
			</view>
			<view class="choiceBox" @click="">
				<input type="number" @input="unit_priceChange"  :value="saleForm.unit_price"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="typeName">
				客户<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
			</view>
			<view class="choiceBox"  @click="">
				<input type="" @input="customerChange" :value="saleForm.customer"   placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="typeName">
				收款方式<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
			</view>
			<view class="choiceBox"  @click="payMethodPopupShow">
				<text>{{saleForm.pay_method}}</text>
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
		<lb-picker ref="warehouse" :props="myProps" :list="warehouseList.list" radius="20rpx" confirm-color="#377BE4" @confirm='typeNameChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="goodsName"  :list="goodsNameList" radius="20rpx" confirm-color="#377BE4" @confirm='goodsNameChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="payMethod"  :list="payMethodList" radius="20rpx" confirm-color="#377BE4" @confirm='payMethodChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="specs"  :list="specsList" radius="20rpx" confirm-color="#377BE4" @confirm='specsChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	import LbPicker from '@/components/lb-picker';
	import {
		mapState
	} from 'vuex'
	export default {
		components:{
		        wPicker,
				LbPicker
		},
		data() {
			return {
				defaultProps:{"label":"name","value":"id"},
				isSub:false,
				visible:false,
				reasonOptions:[{name:'本厂使用',id:1},{name:'外销',id:2}],
				starSrc:['../../static/daiban/star.png','../../static/daiban/n_s_star.png'],
				whetherSelect:false,
				myProps:{
					 label: 'type_name',
					 value: 'block_type',
				},
				leftValue:'',
				warehouseList:{},
				goodsNameList:[],
				payMethodList:[],
				specsList:[],
				block_type:'生产仓',
				goods_type:'',
				saleForm:{
					record_time:'',
					goods_name:'',
					specs:'请选择',
					unit:'',
					unit_price:'',
					number:'',
					price:'',
					customer:'',
					pay_method:'请选择',
					remarks:''
				},
				preSaleData:[],
				
			}
		},
		methods: {
			warehousePopupShow(){
			 this.$refs.warehouse.show()
			},
			typeNameChange(e){
				this.block_type=e.item.type_name
				this.getPreSaleData()
				console.log(e)
			},
			goodsNamePopupShow(){
				 this.$refs.goodsName.show()
			},
			goodsNameChange(e){
				console.log(e)
				this.goods_type=e.item.label
				this.saleForm.goods_name=e.item.value
			},
			payMethodPopupShow(){
				 this.$refs.payMethod.show()
			},
			payMethodChange(e){
				console.log(e)
				this.saleForm.pay_method=e.value
			},
			specsPopupShow(){
				 this.$refs.specs.show()
			},
			specsChange(e){
				console.log(e)
				this.saleForm.specs=e.value
			},
			unitChange({detail:{value}}){
				this.saleForm.unit=value
			},
			numberChange({detail:{value}}){
				this.saleForm.number=value
			},
			remarksChange({detail:{value}}){
				this.saleForm.remarks=value
			},
			unit_priceChange({detail:{value}}){
				this.saleForm.unit_price=value
			},
			customerChange({detail:{value}}){
				this.saleForm.customer=value
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				 this.saleForm.record_time=times	
			},
			getPreSaleData(){
				const {block_type} = this
				const uid =this.userInfo.id
				this.$http.post('/Sale/preSale.html', {uid,block_type})
				.then((res) => {
						console.log(res)
						this.preSaleData=res.data
					}).catch((err) => {
						
				})
			},
			getSaleNameData(){
				const uid =this.userInfo.id
				this.$http.post('/Sale/SaleName.html',{uid})
				.then(({data:{goodsName,payMethod,specs}}) => {
						Object.keys(goodsName).forEach((item,i)=>{
							console.log(item,i,goodsName[item])
							this.goodsNameList.push({label:goodsName[item],value:item})
						})
						// this.goodsNameList = goodsName
						this.payMethodList = payMethod
						this.specsList = specs
						console.log(this.goodsNameList)
					}).catch((err) => {
						
				})
			},
			onCancel(){
				console.log(this)
			},
			onConfirm(e){
				this.reasonValue=e.result
				
			},
			cSubBtn(){
				if(!this.isfWsub){
					return false
				}
				const uid =this.userInfo.id
				this.$http.post('/Sale/sale.html',{uid,...this.saleForm,price:this.fWmoney})
				.then((res) => {
						console.log(res)
						if(res.code == 200){
							uni.showToast({
								title: '提交成功',
								icon: 'none'
							})
							setTimeout(()=>{
								uni.navigateBack({
								    delta: 1
								});
							},1000)
						}else{
							// uni.showToast({
							// 	title: res.message,
							// 	icon: 'none'
							// })
						}
					}).catch((err) => {
						
				})
			},
			touchStart(e){
				
				 console.log()
				this.leftValue = e.detail.scrollLeft * 0.24
				
			},
		},
		computed:{
			isfWsub(){
				
				const {record_time,goods_name,specs,unit,unit_price,number,customer,pay_method,remarks}=this.saleForm
				if( goods_name !== '请选择' && specs !== '请选择' && pay_method !== '请选择' && record_time && unit && unit_price && number && this.fWmoney && customer && remarks ){
					return true
				}
			},
			fWmoney(){
				let {number,unit_price}=this.saleForm
				return number&&unit_price? number*unit_price : 0
			},
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
		},
		created() {
			this.getToday()
			this.getPreSaleData()
			this.getSaleNameData()
		},
		onLoad({query}) {
			console.log(query)
			this.warehouseList=JSON.parse(query)
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
			// overflow-y: scroll;
			// position: relative;
			overflow: hidden;
			flex-wrap: nowrap;
			
			
			.sCItem{
				width: 180rpx;
				height: 180rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #151515;
				display: inline-block;
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
		.lineBox{
			width: 90rpx;
			height: 4rpx;
			background: #E4E5E9;
			border-radius: 2rpx;
			position: absolute;
			bottom: 18rpx;
			left: 50%;
			transform: translateX(-50%);
			.line{
				width: 40rpx;
				height: 4rpx;
				background: #676767;
				border-radius: 2rpx;
				position: absolute;
				
			}
		}
		scroll-view{
			
				white-space: nowrap;
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
