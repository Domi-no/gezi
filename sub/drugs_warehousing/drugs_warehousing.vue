<template>
	<view class="drugWarehousingContainer">
		<view class="dWTopBox">
			<text>记录时间</text><text>{{queryData.time||queryData.record_time}}</text>
		</view>
		<view class="dWTopBox">
			<text>药品名称</text><text>{{queryData.drugs_name}}</text>
		</view>
		
		<view :class="{notSelected:whetherSelect}" @click="">
			<view class="manager" >
				<view class="">
					生产厂家<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="productionChange" :value="outFormData.production" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="manager" style="border: 0;">
				<view class="">
					生产批号<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="batch_numberChange" :value="outFormData.batch_number" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
		</view>
		<view :class="{notSelected:whetherSelect}">
			<view class="leaveTime" @click="">
				<view class="typeName">
					单位<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<input type="" @input="unitChange" :value="outFormData.unit" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					数量<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox"  @click="">
					<input type="number" @input="numberChange" :value="outFormData.number" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					单价<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="unit_priceChange" :value="outFormData.unit_price" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="dWCentreBox">
				<text>{{"合计金额"}}</text><text>{{this.price}}元</text>
			</view>
			
			<view class="leaveTime"  @click="dShowTips">
				<view class="typeName">
					供货单位<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<input type="" @input="supplierChange"  :value="outFormData.supplier" :disabled="whetherSelect" placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					批准人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox"  @click="">
					<input type="number" @input="approvedChange" :value="outFormData.approved" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					接货人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="receiverChange" :value="outFormData.receiver" :disabled="whetherSelect"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="leaveReason">
				<view class="">
					备注<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<textarea   @input="remarksChange" :value="outFormData.remarks" :disabled="whetherSelect" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
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
		     @confirm="out_reasonChange"
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
				reasonOptions:[],
				reasonValue:'请选择',
				starSrc:['../../static/daiban/star.png','../../static/daiban/n_s_star.png'],
				whetherSelect:false,
				unitVlue:'',
				num:'',
				
				managerName:'',
				supplierName:'',
				certifierName:'',
				providerName:'',
				remarks:'',
				
				queryData:'',
				// ---
				
				dIsShowTips:false,
				outFormData:{
					production:'',
					batch_number:'',
					unit:'',
					number:'',
					unit_price:'',
					supplier:'',
					approved:'',
					receiver:'',
					remarks:''
				}
			}
		},
		methods: {
			out_reasonShow(e){
				this.$refs.reason.show()
				
			 console.log(e)
			},
			out_reasonChange(e){
				
				console.log(e)
				this.outFormData.out_reason=e.result
				// this.whetherSelect=false
				
			},
			
			unitChange({detail:{value}}){
				this.outFormData.unit = value
			},
			numberChange({detail:{value}}){
				this.outFormData.number = parseInt(value.trim())
			},
			unit_priceChange({detail:{value}}){
				this.outFormData.unit_price =parseInt(value.trim())
			},
			productionChange({detail:{value}}){
				this.outFormData.production =value
			},
			supplierChange({detail:{value}}){
				this.outFormData.supplier =value
			},
			batch_numberChange({detail:{value}}){
				this.outFormData.batch_number =value
			},
			approvedChange({detail:{value}}){
				this.outFormData.approved =value
			},
			receiverChange({detail:{value}}){
				this.outFormData.receiver =value
			},
			remarksChange({detail:{value}}){
				this.outFormData.remarks=value
			},
			onCancel(){
				console.log(this)
			},
			
			cSubBtn(){
				if(!this.isDDsub){
					return false
				}
				this.$http.post('/Vaccin/Delivery.html',{type:1,uid:this.userInfo.id,log_id:this.queryData.log_id,record_time:this.queryData.time||this.queryData.record_time,drugs_name:this.queryData.drugs_name,category:this.queryData.category,...this.outFormData})
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
							uni.showToast({
								title: res.message,
								icon: 'none'
							})
						}
					}).catch((err) => {
						
					})
			},
			dShowTips(){
				if(this.outFormData.out_reason !== '请选择'){
					return false
				}
				if(this.dIsShowTips){
					return false
				}else{
					this.reasonValue === '请选择' ? this.dIsShowTips =true : ''
					setTimeout(()=>{
						this.dIsShowTips =false
					},1500)
				}
				
			},
			getDrugDeliveryReasonData(){
				this.$http.post('/Vaccin/cause.html')
				.then((res) => {
						console.log(res)
						res.data.forEach((item,index)=>{
							console.log(item)
							this.reasonOptions.push({name:item,id:index})
						})
						console.log(this.reasonOptions)
					}).catch((err) => {
						
					})
			}
		},
		computed:{
			isFactory(){
				return this.outFormData.out_reason === '本厂使用' || this.outFormData.out_reason === '请选择' ? true : false
			},
			
			isDDsub(){
				let {production,batch_number,unit,unit_price,number,supplier,approved,receiver}=this.outFormData
				if(production && batch_number && unit && unit_price && number && this.price && supplier && approved && receiver ){
					return true
				}
			},
			price(){
				const {number,unit_price}=this.outFormData
				return number&&unit_price? number * unit_price : 0
			},
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
		},
		
		created() {
			this.getDrugDeliveryReasonData()
		},
		onLoad({query}) {
			this.queryData= JSON.parse(query)
			console.log(JSON.parse(query))
		}
	}
</script>

<style lang="scss" scoped>
.drugWarehousingContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	padding-bottom: 224rpx;
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
}
</style>
