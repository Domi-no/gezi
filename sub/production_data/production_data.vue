<template>
	<view class="myFont pd_container">
		<view class="pd_title">
			<view class="pd_title_left" @click="showPDTimePopup">
				<text>{{today}}</text>
				<image src="../../static/report/report_zk.png"></image>
			</view>
			<view class="pd_title_right" @click="showPDWarehousePopup">
				<text>{{type_name}}</text>
				<image src="../../static/home/zk.png"></image>
			</view>
		</view>
		<view class="pd_item" v-for="(item,idx) in dataList" :key="idx">
		
			<view class="">
				<view class="pd_item_title"  @click="exhibitionHandler(idx,item.array)">
					<view class="" style="display: flex">
						<text class="pd_item_title_num">{{item.name}}</text>
						<view class="" style="width: 185rpx;display: flex">
							<view class="pd_item_title_syy">饲养员:</view>
							<view class="pd_item_title_syy_mz">{{item.user_name}}</view>
						</view>
						<view class="" style="width: 170rpx;display: flex">
							<view class="pd_item_title_hg">护工:</view>
							<view class="pd_item_title_syy_mz">{{item.support}}</view>
						</view>
						<text class="pd_item_title_hl">耗料:</text>
						<text style="font-size: 22rpx;">{{item.number === null ? 0 : item.number }}公斤</text>
						
					</view>
					<image :src="expandItem[idx] ? zkicon[0] : zkicon[1]" :class="expandItem[idx]?'xzk':'yzk'"></image>
				</view>
				<view class="" v-show="expandItem[idx]" >
					<view class="pd_item_content" v-for="(i,index) in item.array" :key="index" >
						<view class="pd_pigeon_title">
							<view class="pd_pigeon_title_left">
								<text class="pd_pigeon_title_left_gz">{{i.alias}}</text><text class="pd_pigeon_title_left_jl">{{i.alias === '鸽蛋' ? '破损率' : '死亡率'}}:{{i.pct}}</text>
							</view>
							<view class="pd_pigeon_title_right">
								<text class="pd_pigeon_title_right_cl">{{i.alias === '鸽蛋' ? '产蛋' : '存栏'}}</text>
								<text class="pd_pigeon_title_right_num">{{i.survival}}</text>
							</view>
						</view>
						<view class="pd_pigeon_bt">
							<view class="pd_pigeon_bt_state pd_l_mr">
								<view class="pd_pigeon_bt_state_text">
									<text class="text_m">{{i.alias === '鸽蛋' ? '破损' : '残疾'}}</text>
								</view><text class="pd_pigeon_bt_state_num">{{i.disease}}</text>
							</view>
							<view class="pd_pigeon_bt_state pd_r_mr">
								<view class="pd_pigeon_bt_state_text">
									<text v-if="i.alias === '种鸽'">转出</text><text v-if="i.alias === '鸽蛋'">入库</text><text v-if="i.alias === '乳鸽'">出售</text><text v-if="i.alias === '童鸽'">转至飞棚</text>
								</view>
								<text class="pd_pigeon_bt_state_num">{{i.alias === '童鸽' ? i.shift_to : i.getout}}</text>
							</view>
							<view class="pd_pigeon_bt_state pd_l_mr">
								<view class="pd_pigeon_bt_state_text">
									<text class="text_m">{{i.alias === '鸽蛋' ? '臭蛋' : '死亡'}}</text>
								</view><text class="pd_pigeon_bt_state_num">{{i.death}}</text>
							</view>
							<view class="pd_pigeon_bt_state pd_r_mr" v-if="i.alias !== '童鸽'">
								<view class="pd_pigeon_bt_state_text">
									<text v-if="i.alias === '种鸽'">新增</text><text v-if="i.alias === '鸽蛋'">转入孵化机</text><text v-if="i.alias === '乳鸽'">孵化机转入</text>
								</view>
								<text class="pd_pigeon_bt_state_num">{{ i.alias === '种鸽' ? i.added_wit : i.shift_to}}</text>
							</view>
						</view>
					</view>
					<view class="pd_bt">
						<view class="">
							
						</view>
						<view class="" v-if="item.text === '今日未记录'" >
							<text >今日未记录&nbsp;＞</text>
						</view>
						<view class="change_recordBtn" v-else >
							
							<view >修改记录</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<lb-picker ref="pD_time" mode="dateSelector"  :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='pD_time'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="pDWarehouseChange" :list="list" :props="myProps" radius="20rpx" confirm-color="#377BE4" @confirm='pDWarehouseChange'>
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
				list:[],
				expandItem:[],
				record:false,
				index:'',
				zkicon:['../../static/report/bt_zk.png','../../static/report/report_zk.png'],
				today:'',
				block_type:0,
				type_name:'所有仓',
				dataList:[],
				myProps:{
					label:'type_name',
					value:'block_type'
				}
			}
		},
		methods: {
			exhibitionHandler(idx,array) {
				// console.log(array)
				// if(array.length === 0){
				// 	return false
				// }
				this.expandItem[idx]===true?  this.$set(this.expandItem,idx,false) : this.$set(this.expandItem,idx,true)
				console.log(this.expandItem)
				
			},
			pD_time(e){
				console.log(e.value)
				this.today=e.value
				this.getProducitionData()
			},
			pDWarehouseChange(e){
				console.log(e)
				this.type_name=e.item.type_name
				this.block_type=e.item.block_type
				console.log(this.block_type)
				this.getProducitionData()
			},
			showPDTimePopup(){
				this.$refs.pD_time.show()
			},
			showPDWarehousePopup(){
				this.$refs.pDWarehouseChange.show()
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				this.today=times
					
			},
			getProducitionData(){
				this.$http.post('/CageData/getData.html',{uid:this.userInfo.id,time:this.today,block_type:this.block_type})
				.then((res)=>{
					console.log(res)
					this.dataList=res.data
					console.log(this.dataList)
				}).catch((err)=>{
					console.log(err)
				})
			},
			getTypeBlock(){
				this.$http.post('/Grain/typeBlock.html',{uid:this.userInfo.id})
				.then((res)=>{
					console.log(res)
					this.list=res.data
				}).catch((err)=>{
					console.log(err)
				})
			}
			
			
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
		created() {
			this.getToday()
			this.getProducitionData()
			this.getTypeBlock()
		}
	}
</script>

<style lang="scss" scoped>
	.pd_container {
		background-color: #f4f6fa;
		min-height: calc(100vh);
		font-weight: 500;
		padding-bottom: 108rpx;
		.pd_title {
			height: 88rpx;
			display: flex;
			justify-content: space-between;
			padding: 0 30rpx 0;
			background-color: #fff;
			line-height: 88rpx;

			.pd_title_left {
				text {
					font-size: 30rpx;
					color: #151515;
				}

				image {
					width: 12rpx;
					height: 22rpx;
					margin-left: 9rpx;
				}
			}

			.pd_title_right {
				min-width: 93rpx;
				display: flex;
				// justify-content: space-between;
				text {
					font-size: 24rpx;
					color: #979797;
					
				}

				image {
					width: 12rpx;
					height: 22rpx;
					margin: auto 0 auto 10rpx;
				}
			}
		}
		.pd_splitLine{
			background-color: #f4f6fa;
			height: 20rpx;
		}
		.pd_item {
			border-radius: 20rpx;
			background-color: #fff;
			overflow: hidden;
			margin-top: 20rpx;
			.pd_item_title {
				height: 88rpx;
				line-height: 88rpx;
				padding: 0 30rpx;
				border-bottom: 1rpx solid #f4f6fa;
				display: flex;
				justify-content: space-between;
				view{
					padding: 0;
					margin: 0;
				}
				.pd_item_title_num {
					width: 140rpx;
					font-size: 30rpx;
					color: #151515;
				}

				.pd_item_title_syy {
					font-size: 22rpx;
					// font-weight: 400;
					color: #979797;
				}

				.pd_item_title_syy_mz {
					font-size: 22rpx;
				}

				.pd_item_title_hg {
					font-size: 22rpx;
					font-weight: 400;
					color: #979797;
					// margin-left: 19rpx;
				}

				.pd_item_title_hl {
					// margin-left: 10rpx;
					font-size: 22rpx;
					font-weight: 400;
					color: #979797;
				}

				.pd_item_title_zl {
					font-size: 22rpx;
				}
				image{
					position: relative;
					right: 0;
					top: 50%;
					transform: translateY(-50%);
				}
				.yzk {
					width: 12rpx;
					height: 22rpx;
					// margin-left: 64rpx;
				}
				.xzk{
					width: 22rpx;
					height: 12rpx;
					// margin-left: 49rpx;
				}
			}

			.pd_item_content {
				padding: 0 30rpx;

				.pd_pigeon_title {
					height: 88rpx;
					line-height: 88rpx;
					padding: 8rpx 0 0;
					display: flex;
					justify-content: space-between;
					border-top: 2rpx solid #f4f6fa;

					.pd_pigeon_title_left_gz {
						font-size: 30rpx;
						color: #151515;
					}

					.pd_pigeon_title_left_jl {
						width: 150rpx;
						height: 32rpx;
						margin-left: 20rpx;
						background-color: rgba(251, 226, 223, 0.7);
						border-radius: 4rpx;
						font-size: 22rpx;
						text-align: center;
						padding: 0 9rpx;
						color: #e96d59;
					}

					.pd_pigeon_title_right {
						.pd_pigeon_title_right_cl {
							margin-right: 13rpx;
							font-size: 24rpx;
							color: #979797;
						}

						.pd_pigeon_title_right_num {
							font-size: 30rpx;
							font-weight: 400;
							color: #343434;
						}
					}
				}

				.pd_pigeon_bt {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;

					.pd_pigeon_bt_state {
						height: 44rpx;
						font-size: 22rpx;
						color: #979797;

						.pd_pigeon_bt_state_text {
							width: 110rpx;
							display: inline-block;
							position: relative;

							text {
								position: absolute;
								top: -26rpx;
								right: 0;
							}

							.text_m {
								margin-right: 55rpx;
							}
						}

						.pd_pigeon_bt_state_num {
							font-size: 30rpx;
							font-weight: 400;
							color: #343434;
							font-family: SimHei;
							margin-left: 19rpx;
						}
					}

					.pd_r_mr {
						margin-right: 200rpx;
					}

					.pd_l_mr {
						margin-right: 100rpx;
					}
				}
				.pd_pigeon_bt:nth-child(2){
					margin-right: 0;
				}
				.pd_pigeon_bt:nth-child(4){
					margin-right: 0;
				}

			}

			.pd_bt {
				height: 93rpx;
				padding: 1rpx 30rpx;
				// border-radius: 0 0 20rpx 20rpx;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				button {
					float: right;
					width: 200rpx;
					height: 70rpx;
					border: 1px solid #377be4;
					border-radius: 35rpx;
					font-size: 30rpx;
					color: #377be4;
					line-height: 70rpx;

				}
				.change_recordBtn{
					width: 200rpx;
					height: 70rpx;
					background: #FFFFFF;
					border: 1rpx solid #377BE4;
					border-radius: 35rpx;
					text-align: center;
					line-height: 70rpx;
					font-size: 30rpx;
					font-weight: 500;
					color: #377BE4;
				}
				text{
					float: right;
					line-height: 93rpx;
					font-size: 30rpx;
					color: #e64329;
				}
			}
		}

	}
</style>
