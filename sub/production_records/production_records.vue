<template>
	<view class="myFont recordsContainer">
		<view class="records_top">
			<view class="records_top_i">
				<text class="records_top_i_left">仓号</text>
				<view class="records_top_i_right">
					<text class="records_top_i_right_text">仓号1</text>
					<image src="../../static/report/report_zk.png" mode=""></image>
				</view>
			</view>
			<view class="records_top_i">
				<text class="records_top_i_left">组号</text>
				<view class="records_top_i_right" @click="pRWPopup">
					<text class="records_top_i_right_text">233</text>
					<image src="../../static/report/report_zk.png" mode=""></image>
				</view>
			</view>
			<view class="records_top_i">
				<text class="records_top_i_left">日期</text><text class="records_top_i_right">2020-12-02</text>
			</view>
		</view>
		<view class="records_breedingPigeon">
			<view class="records_breedingPigeon_item">
				<view class="records_breedingPigeon_item_left">
					<image src="../../static/daiban/ht_p.png" mode=""></image>
					<view class="records_breedingPigeon_item_left_t">
						<view class="">
							<text>种鸽</text><text>需要补足种鸽</text>
						</view>
						<view class="">
							当前存栏64只
						</view>
					</view>
				</view>
				<view class="records_breedingPigeon_item_right" @click="toChangeRecords('种鸽')">
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
							<text>鸽蛋</text><text>需要补足种鸽</text>
						</view>
						<view class="">
							当前存栏64只
						</view>
					</view>
				</view>
				<view class="records_breedingPigeon_item_right" @click="toChangeRecords('鸽蛋')">
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
							<text>乳鸽</text><text>需要补足种鸽</text>
						</view>
						<view class="">
							当前存栏64只
						</view>
					</view>
				</view>
				<view class="records_breedingPigeon_item_right" @click="toChangeRecords('乳鸽')">
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
							<text>童鸽</text><text>需要补足种鸽</text>
						</view>
						<view class="">
							当前存栏64只
						</view>
					</view>
				</view>
				<view class="records_breedingPigeon_item_right" @click="toChangeRecords('童鸽')">
					修改
				</view>
			</view>
		</view>
		<lb-picker ref="pRWarehouseChange" :list="pRWList" radius="20rpx" confirm-color="#377BE4" @confirm='pRWarehouseChange'>
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
				pRWList:[1,2,3,4]
			};
		},
		methods: {
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
				this.$refs.pRWarehouseChange.show()
				
			},
			pigeonCageClose(){
				this.pCShow=false
			},
			toChangeRecords(type){
				uni.navigateTo({
					url:'/sub/production_warehouse_change/production_warehouse_change?query='+type+'&id='+this.id
				})
			},
			pRWarehouseChange(e){
				console.log(e.value)
			},
			
		},
		computed:{
			
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
					width: 338rpx;
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

						text:nth-child(1) {
							font-size: 36rpx;
							color: #151515;
						}

						text:nth-child(2) {
							font-size: 22rpx;
							color: #e64329;
							margin-left: 20rpx;
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
