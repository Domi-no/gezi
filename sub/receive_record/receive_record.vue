<template>
	<view class="sterilizeRecordcontainer">
		<view class="sterilizeBox">
			<view class="sterilizeOption">
				<text>领取时间</text><text>{{dataForm.date}}</text>
			</view>
			<view class="sterilizeOption" >
				<view class="">
					发放人<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice choiceInput">
					<input type="text" :value="dataForm.issuer" @input="issuerChange" placeholder="请输入" placeholder-style="color:#979797" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption" @click="choiceWarehouseNumber">
				<view class="">
					仓号<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice">
					{{block_value||'请选择'}}<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption" >
				<view class="">
					重量<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice choiceInput">
					<input type="number" :value="dataForm.number" @input="numberChange" placeholder="请输入" placeholder-style="color:#979797"/><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption" @click="choiceFoods">
				<view class="">
					饲料名称<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice">
					{{foodName||'请选择'}}<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			
			
		</view>
		<view class="sterilizeRemarks">
			<view class="">
				备注
			</view>
			<textarea :value="dataForm.remarks"  @input="remarksChange"  placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
		</view>
		<view :class="{submitSterilizeRecord:true,blueBg:rRisSub}" @click="rRSub">
			提交
		</view>
		<lb-picker ref="sRbox" mode="multiSelector" :props="myProps" :list="sRWarehouseList" :level="2" radius="20rpx" confirm-color="#377BE4" @confirm='sRBoxValue'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		 <lb-picker ref="food" :list="list" radius="20rpx" :props="myPropsB" confirm-color="#377BE4"  @confirm='foodValue'>
		 			 <view slot="confirm-text" >完成</view>
		 </lb-picker>
	</view>
</template>

<script>
	import LbPicker from '@/components/lb-picker'
	import {
		mapState
	} from 'vuex'
	export default {
		 components: {
		      LbPicker
		    },
		data() {
			return {
				list: [],
				myProps: {
				     label: 'name',
				     value: 'id',
				},
				myPropsB:{
					label: 'grain_name',
					value: 'grain_id',
				},
				sRWarehouseList:[],
				dataForm:{
					block_id:'',
					grain_id:'',
					issuer:'',
					number:'',
					remarks:'',
					date:'',
				},
				block_value:'',
				foodName:'',
			}
		},
		methods: {
			choiceWarehouseNumber(){
				this.$refs.sRbox.show()
			},
			choiceFoods(){
				this.$refs.food.show()
			},
			issuerChange({detail:{value}}){
				console.log(value)
				this.dataForm.issuer=value.trim()
			},
			numberChange({detail:{value}}){
				console.log(value)
				this.dataForm.number=parseInt(value.trim())
			},
			remarksChange({detail:{value}}){
				console.log(value)
				this.dataForm.remarks=value.trim()
			},
			warehouseValue(e){
				console.log(e.item[1].label)
				this.dataForm.block_id=e.item[1].label.id
				this.block_value=e.item[1].label.name
			},
			foodValue(e){
				console.log(e.item)
				this.foodName=e.item.grain_name
				this.dataForm.grain_id=e.item.grain_id
			},
			getFixBoxData(){
				this.$http.post('/Grain/fixBlock.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
						
						Object.keys(res.data).forEach((value, index)=>{
							console.log(value, index,res.data[value]);
							this.sRWarehouseList.push({name:value,children:res.data[value]})
						});
						console.log(this.sRWarehouseList)
					}).catch((err) => {
						
					})
			},
			getAllFoods(){
				this.$http.post('/Grain/grainName.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
						this.list=res.data
						
					}).catch((err) => {
						
					})
			},
			sRBoxValue(e){
				console.log(e.item[1])
				this.dataForm.block_id=e.item[1].id
				this.block_value = e.item[1].name
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				 this.dataForm.date=times
			},
			rRSub(){
				if(!this.rRisSub){
					return false
				}
				this.$http.post('/Grain/receive.html', {uid: this.userInfo.id,...this.dataForm})
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
					
			}
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			rRisSub(){
				const {remarks,number,block_id,issuer,grain_id}=this.dataForm
				console.log(remarks , number , block_id , issuer , grain_id)
				return remarks && number && block_id && issuer && grain_id ? true : false 
			}
			
		},
		created() {
			this.getFixBoxData()
			this.getAllFoods()
			this.getToday()
		}
	}
</script>

<style lang="scss" scoped>
.sterilizeRecordcontainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	.sterilizeBox{
		background-color: #fff;
		
		.sterilizeOption{
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 88rpx;
			background: #FFFFFF;
			line-height: 88rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #151515;
			padding: 0 30rpx;
			border-bottom: 1rpx solid #F4F6FA;
			.choice{
				font-size: 28rpx;
				font-weight: 500;
				color: #979797;
			}
		}
		.sterilizeOption:last-child{
			border-bottom: 0;
		}
		
	}
	.sterilizeRemarks{
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
	.submitSterilizeRecord{
		width: 670rpx;
		height: 88rpx;
		background: #D1D2D3;
		border-radius: 44rpx;
		margin: 100rpx auto 0;
		line-height: 88rpx;
		text-align: center;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
	.blueBg{
		background-color:#377BE4;
	}
	.star{
		width: 12rpx;
		height: 12rpx;
		position: relative;
		top: -12rpx;
		left: 8rpx;
	}
	.zk{
		width: 12rpx;
		height: 22rpx;
		margin-left: 17rpx;
	}
	.choiceInput{
		display: flex;
		line-height: 88rpx;
		input{
			width: 83rpx;
			margin: auto 16rpx auto 0;
			font-size: 28rpx;
			font-weight: 500;
			color: #979797;
			text-align: center;
		}
		image{
			margin: auto 0;
		}
	}
			
}
</style>
