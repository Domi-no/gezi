<template>
	<view class="myFont recordsContainer">
		<view class="records_top">
			<view class="records_top_i"  @click="pRWPopup">
				<text class="records_top_i_left">仓号</text>
				<view class="records_top_i_right">
					<text class="records_top_i_right_text">{{groupNumber}}</text>
					<image src="../../static/report/report_zk.png" mode=""></image>
				</view>
			</view>
			<view class="records_top_i" @click="gelongShow">
				<text class="records_top_i_left">鸽笼编号</text>
				<view class="records_top_i_right">
					<text class="records_top_i_right_text">{{ warehouseNumber}}</text>
					<image src="../../static/report/report_zk.png" mode=""></image>
				</view>
			</view>
			<view class="records_top_i">
				<text class="records_top_i_left">日期</text><text class="records_top_i_right">{{time}}</text>
			</view>
		</view>
		<view class="" v-if=" warehouseNumber!=='请选择' ">
			<view class="records_breedingPigeon">
				<view class="records_breedingPigeon_item">
					<view class="records_breedingPigeon_item_left">
						<image src="../../static/daiban/ht_p.png" mode=""></image>
						<view class="records_breedingPigeon_item_left_t">
							<view class="">
								<text>种鸽</text><text>{{recordsData['种鸽'].text}}</text>
							</view>
							<view class="">
								当前存栏{{recordsData['种鸽'].num}}只
							</view>
						</view>
					</view>
					<view class="records_breedingPigeon_item_right" @click="toChangeRecords('种鸽',recordsData['种鸽'])">
						修改
					</view>
				</view>
			</view>
			<view class="records_breedingPigeon">
				<view class="records_breedingPigeon_item">
					<view class="records_breedingPigeon_item_left">
						<image src="../../static/daiban/ht_b.png" mode=""></image>
						<view class="records_breedingPigeon_item_left_t">
							<view class="">
								<text>鸽蛋</text><text>{{recordsData['鸽蛋'].text}}</text>
							</view>
							<view class="">
								当前存栏{{recordsData['鸽蛋'].num}}只
							</view>
						</view>
					</view>
					<view class="records_breedingPigeon_item_right" @click="toChangeRecords('鸽蛋',recordsData['鸽蛋'])">
						修改
					</view>
				</view>
			</view>
			<view class="records_breedingPigeon">
				<view class="records_breedingPigeon_item">
					<view class="records_breedingPigeon_item_left">
						<image src="../../static/daiban/ht_g.png" mode=""></image>
						<view class="records_breedingPigeon_item_left_t">
							<view class="">
								<text>乳鸽</text><text>{{recordsData['乳鸽'].text}}</text>
							</view>
							<view class="">
								当前存栏{{recordsData['乳鸽'].num}}只
							</view>
						</view>
					</view>
					<view class="records_breedingPigeon_item_right" @click="toChangeRecords('乳鸽',recordsData['乳鸽'])">
						修改
					</view>
				</view>
			</view>
			<view class="records_breedingPigeon">
				<view class="records_breedingPigeon_item">
					<view class="records_breedingPigeon_item_left">
						<image src="../../static/daiban/ht_o.png" mode=""></image>
						<view class="records_breedingPigeon_item_left_t">
							<view class="">
								<text>童鸽</text><text>{{recordsData['童鸽'].text}}</text>
							</view>
							<view class="">
								当前存栏{{recordsData['童鸽'].num}}只
							</view>
						</view>
					</view>
					<view class="records_breedingPigeon_item_right" @click="toChangeRecords('童鸽',recordsData['童鸽'])">
						修改
					</view>
				</view>
			</view>
		</view>
		<lb-picker ref="pRWarehouseChange"   :list="list"  :props="myProps" radius="20rpx" confirm-color="#377BE4"  @confirm='pRWarehouseChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="gelong" :list="gelongList" radius="20rpx" :props="myProps" confirm-color="#377BE4" @confirm='gelongChange' @show="gelongPopupShow">
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<!-- pickerView -->
		<!-- <my-pickerView v-show="pCShow" :pickerShow="pCShow" @pigeonCageClose="pigeonCageClose"></my-pickerView> -->
		<!-- dialog -->
		<!-- <my-dialog @closeModify="closeM"></my-dialog> -->
		<!-- <my-alert-dialog v-show="show" @closeM="closeM"></my-alert-dialog> -->
		<!-- <my-submit-dialog v-show="show" @closeM="closeM"></my-submit-dialog> -->
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
				show: false,
				visible: false,
				selector: [{
						label: "一"
					},
					{
						label: "二"
					},
					{
						label: "三"
					}
				],
				defaultIndex: [0],
				inpData:0,
				pCShow:false,
				id:0,
				pRWList:[1,2,3,4],
				list:[],
				myProps: {
				     label: 'name',
				     value: 'cage_id',
				   },
				groupNumber:'请选择',
				warehouseNumber:'请选择',
				cage_id:'',
				gelongList:[],
				recordsData:{},
				isShow:false,
				time:'',
				queryData:'',
				pQueryData:'',
				
			};
		},
		methods: {
			gelongPopupShow(){
				console.log('弹框显示',new Date().getTime())
				
				setTimeout(()=>{
					uni.hideLoading();
				},400)
			},
			// dialog
			closeM() {
				this.show = false
			},
			onBlur(e){	
			},
			saveRecord(){
				this.show=true
			},
			pRWPopup(){
				if(this.queryData.cage_id || this.pQueryData.id){
					return false
				}
				this.$refs.pRWarehouseChange.show()
				
			},
			gelongShow(){
				// console.log(this.gelongList)
				if(this.queryData.cage_id){
					return false
				}
				uni.showLoading({
					title:"请稍后..",
					mask: true
				});
				console.log('选择鸽笼',new Date().getTime())
				
				this.$refs.gelong.show()
				
			},
			pigeonCageClose(){
				this.pCShow=false
			},
			toChangeRecords(type,data){
				
				const {cage_id,groupNumber,warehouseNumber,time}=this
				const queryData = {
					name:type,
					groupNumber,
					warehouseNumber,
					cage_id,
					time,
					changetext:this.pQueryData.changetext,
					...data,
					
				}
				// console.log(queryData)
				// return false
				uni.navigateTo({
					url:'/sub/production_warehouse_change/production_warehouse_change?query='+JSON.stringify(queryData)
				})
			},
			gelongChange(e){
				console.log(e)
				this.warehouseNumber=e.item.name
				this.cage_id=e.item.cage_id
				if(this.cage_id){
					this.getRecordData()
				}
				
			},
			pRWarehouseChange(e){
				this.warehouseNumber='请选择'
				// console.log(e)
				this.groupNumber=e.item.name
				this.gelongList=e.item.children
			},
			getJournalData(){
				this.$http.post('/CageData/Journal.html',{uid:this.userInfo.id})
				.then((res)=>{
					// console.log(res)
					if(!res.data){
						uni.showToast({
							title: '无权限操作',
							icon: 'none'
						})
						setTimeout(()=>{
							uni.navigateBack()
						},1500)
						return false
					}
					Object.keys(res.data).forEach((value, index)=>{
						
						this.list.push({name:value,children:[]})
						Object.keys(res.data[value]).forEach((valu, inde)=>{
							
						this.list[index].children.push({name:valu,cage_id:res.data[value][valu].cage_id})
							
						});
		
						
					});
					
					// console.log(this.list)
					
					if(this.pQueryData.id){
						console.log(this.pQueryData)
						this.list.forEach((i,idx)=>{
							// console.log(i)
							if(this.pQueryData.name === i.name){
								this.gelongList=i.children
							}
						})
					}
					
				}).catch((err)=>{
					console.log(err)
				})
			},
			getRecordData(){
				const {cage_id,userInfo:{id:uid}} = this
				this.$http.post('/CageData/record.html',{uid,cage_id})
				.then((res)=>{
					// console.log(res)
					
					this.recordsData=res.data
					this.isShow=true
					// console.log(this.recordsData)
				}).catch((err)=>{
					// console.log(err)
				})
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				this.time=times
					
			},
			
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),	
		},
		created() {
			this.getJournalData()
			// this.getRecordData()
			this.getToday()
		},
		onShow(){
			if(this.cage_id){
				this.getRecordData()
			}
		},
		onLoad({query}) {
			
			console.log(JSON.parse(query))
			if( query && JSON.parse(query).cage_id){
				console.log(111)
				this.queryData = JSON.parse(query)
				this.cage_id = this.queryData.cage_id
				this.groupNumber = this.queryData.blockName
				this.warehouseNumber = this.queryData.cage_id
				this.getRecordData()
			}else if(query && JSON.parse(query).text){
				
				
				// console.log(JSON.parse(query))
				this.pQueryData = JSON.parse(query)
				console.log(this.pQueryData)
				this.groupNumber = JSON.parse(query).name
			}else if(query && JSON.parse(query).changetext){
				this.pQueryData = JSON.parse(query)
				console.log(this.pQueryData)
				this.groupNumber = JSON.parse(query).name
			}
		}
	}
</script>

<style lang="scss" scoped>
	.recordsContainer {
		background-color: #f4f6fa;
		padding-top: 20rpx;
		font-weight: 500rpx;
		min-height: calc(100vh);
		.records_top {
			background-color: #fff;

			.records_top_i {
				height: 88rpx;
				line-height: 88rpx;
				padding: 0 30rpx;
				display: flex;
				justify-content: space-between;
				border-bottom: 2rpx solid #f4f6fa;

				.records_top_i_left {
					font-size: 30rpx;
					color: #151515;
				}

				.records_top_i_right {
					font-size: 28rpx;
					color: #343434;

					.records_top_i_right_text {
						margin-right: 20rpx;
					}

					image {
						width: 12rpx;
						height: 22rpx;
					}
				}
			}

		}

		.records_breedingPigeon {
			margin-top: 20rpx;

			.records_breedingPigeon_item {
				height: 140rpx;
				background-color: #fff;
				padding:30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.records_breedingPigeon_item_left {
					width: 352rpx;
					display: flex;
					// padding-right: 20rpx;
					justify-content: space-between;

					image {
						width: 80rpx;
						height: 80rpx;
						background-color: #afc;
						border-radius: 50%;
					}

					.records_breedingPigeon_item_left_t {
						height: 80rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						min-width: 234rpx;
						text:nth-child(1) {
							font-size: 36rpx;
							color: #151515;
						}

						text:nth-child(2) {
							font-size: 22rpx;
							color: #e64329;
							margin-left: 20rpx;
						}
						view:nth-first{
							width: 234rpx;
						}
						view {
							// margin-top: 8rpx;
							font-size: 24rpx;
							color: #676767;
						}
					}

				}

				.records_breedingPigeon_item_right {
					width: 140rpx;
					height: 60rpx;
					border: 1rpx solid #377be4;
					border-radius: 30rpx;
					font-size: 30rpx;
					color: #377be4;
					text-align: center;
					line-height: 60rpx;
				}
			}
		}

		.records_breedingPigeon_modify {
			margin-top: 20rpx;
			height: 120rpx;
			padding:24rpx 30rpx 0;
			background-color: #fff;

			.records_breedingPigeon_modify_head_top {
				height: 40rpx;
				display: flex;
				justify-content: space-between;

				.records_breedingPigeon_modify_head_top_left {
					width: 117rpx;
					display: flex;
					justify-content: space-between;
					font-size: 30rpx;
					color: #151515;

					image {
						width: 40rpx;
						height: 40rpx;
						// background-color: #afc;
					}
				}

				.alarm {
					font-size: 24rpx;
					color: #e64329;
				}

			}

			.records_breedingPigeon_modify_bt {
				height: 28rpx;
				margin: 4rpx 0 0 55rpx;
				font-size: 24rpx;
				color: #979797;

				text {
					font-size: 28rpx;
					font-weight: 400;
					color: #151515;
					margin-right: 10rpx;
				}
			}

		}

		.r_pigeon_add {
			margin-top: 10rpx;
			background-color: #fff;
			// padding: 27rpx 0 0;
			

			.add_box {
				height: 80rpx;
				// width: 110rpx;
				display: flex;
				// justify-content: space-between;
				margin-left: 36rpx;
				line-height: 80rpx;
				.r_pigeon_add_c {
					width: 28rpx;
					height: 28rpx;
					border: 8rpx solid #377be4;
					border-radius: 50%;
					position: relative;
					top: 50%;
					transform: translateY(-50%);
				}
				.r_pigeon_reduce_c{
					width: 28rpx;
					height: 28rpx;
					border: 8rpx solid #e64329;
					border-radius: 50%;
					position: relative;
					top: 50%;
					transform: translateY(-50%);
					
				}
				.r_pigeon__t{
					font-size: 30rpx;
					margin-left: 23rpx;
				}
				.r_pigeon_add_t {
					
					color: #377be4;
					
				}
				.r_pigeon_reduce_t{
					color: #E64329;
				}
			}
			.r_pigeon_add_i{
				height: 88rpx;
				display: flex;
				justify-content: space-between;
				border-top: 1rpx solid #f4f6fa;
				padding: 0 30rpx;
				
				text:first-child{
					line-height: 88rpx;
					font-size: 30rpx;
					color: #151515;
				}
				.r_pigeon_add_i_right{
					width: 191rpx;	
					display: flex;
					justify-content: space-between;
					
					.r_bule{
						color: #377be4;
					}
					.r_red{
						color: #e64329;
					}
					.inputBox{
						height: 26rpx;
						line-height: 26rpx;
						margin: auto 12rpx;
						text-align: center;
					}
					input{
						display: block;
						width: 80rpx;
						// padding-top: 8rpx;
						max-height: 26rpx;
						
						// line-height: 10rpx;
						font-size: 28rpx;
						float: left;
					}
					text{
						font-size: 28rpx;
						line-height: 88rpx;
						margin-left: 14rpx;
						color: #343434;
					}
					
					
					
					.jiahao{
						width: 22rpx;
						height: 22rpx;
						margin: auto 0;
					}
					.jianhao{
						width: 22rpx;
						height: 2rpx;
						margin:auto 0;
					}
					
				}
				
				
				
			}
		}
		.records_save_btn{
			width: 670rpx;
			height: 88rpx;
			background-color: #377be4;
			border-radius: 44rpx;
			margin: 100rpx auto 210rpx;
			text-align: center;
			line-height: 88rpx;
			font-size: 34rpx;
			color: #fff;
		}

		
	}
</style>
