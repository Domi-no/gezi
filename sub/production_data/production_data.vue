<template>
	<view class="myFont pd_container">
		<view class="pd_title">
			<view class="pd_title_left" @click="showPDTimePopup">
				<text>2020-12-20</text>
				<image src="../../static/report/report_zk.png"></image>
			</view>
			<view class="pd_title_right" @click="showPDWarehousePopup">
				<text>所有仓</text>
				<image src="../../static/home/zk.png"></image>
			</view>
		</view>
		<view class="pd_item" v-for="(item,idx) in list" :key="idx">
		
			<view class="">
				<view class="pd_item_title"  @click="exhibitionHandler(idx)">
					
					<view class="" style="display: flex">
						<text class="pd_item_title_num">仓号2</text>
						<text class="pd_item_title_syy">饲养员:</text>
						<text class="pd_item_title_syy_mz">李大牛</text>
						<text class="pd_item_title_hg">护工:</text>
						<text class="pd_item_title_syy_mz">张三</text>
						<text class="pd_item_title_hl">耗料:</text>
						<text>100公斤</text>
						
					</view>
					<image :src="expandItem[idx] ? zkicon[0] : zkicon[1]" :class="expandItem[idx]?'xzk':'yzk'"></image>
				</view>
				<view class="" v-show="expandItem[idx]" >
					<view class="pd_item_content" v-for="(item,index) in list" :key="index">
						<view class="pd_pigeon_title">
							<view class="pd_pigeon_title_left">
								<text class="pd_pigeon_title_left_gz">种鸽</text><text class="pd_pigeon_title_left_jl">死亡率:0.5%</text>
							</view>
							<view class="pd_pigeon_title_right">
								<text class="pd_pigeon_title_right_cl">存栏</text>
								<text class="pd_pigeon_title_right_num">9899</text>
							</view>
						</view>
						<view class="pd_pigeon_bt">
							<view class="pd_pigeon_bt_state pd_l_mr">
								<view class="pd_pigeon_bt_state_text">
									<text class="text_m">残疾</text>
								</view><text class="pd_pigeon_bt_state_num">98</text>
							</view>
							<view class="pd_pigeon_bt_state pd_r_mr">
								<view class="pd_pigeon_bt_state_text">
									<text>转出</text>
								</view><text class="pd_pigeon_bt_state_num">7878</text>
							</view>
							<view class="pd_pigeon_bt_state pd_l_mr">
								<view class="pd_pigeon_bt_state_text">
									<text class="text_m">死亡</text>
								</view><text class="pd_pigeon_bt_state_num">112</text>
							</view>
							<view class="pd_pigeon_bt_state pd_r_mr">
								<view class="pd_pigeon_bt_state_text">
									<text>新增</text>
								</view>
								<text class="pd_pigeon_bt_state_num">4499</text>
							</view>
						</view>
					</view>
					<view class="pd_bt">
						<view class="">
							
						</view>
						<view class="change_recordBtn">
							<text v-if="record">今日未记录&nbsp;＞</text>
							<view v-else >修改记录</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<lb-picker ref="pD_time" mode="dateSelector"  :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='pD_time'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="pDWarehouseChange" :list="list" radius="20rpx" confirm-color="#377BE4" @confirm='pDWarehouseChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
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
				
				expandItem:[],
				list: [1, 2, 3,4,5],
				record:false,
				index:'',
				zkicon:['../../static/report/bt_zk.png','../../static/report/report_zk.png']
			}
		},
		methods: {
			exhibitionHandler(idx) {
				
				this.expandItem[idx]===true?  this.$set(this.expandItem,idx,false) : this.$set(this.expandItem,idx,true)
				console.log(this.expandItem)
				
			},
			pD_time(e){
				console.log(e.value)
			},
			pDWarehouseChange(e){
				console.log(e.value)
			},
			showPDTimePopup(){
				this.$refs.pD_time.show()
			},
			showPDWarehousePopup(){
				this.$refs.pDWarehouseChange.show()
			},
			
			
		},
		computed:{
			
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
				width: 93rpx;
				display: flex;
				justify-content: space-between;
				text {
					font-size: 24rpx;
					color: #979797;
					
				}

				image {
					width: 12rpx;
					height: 22rpx;
					margin: auto 0;
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
				.pd_item_title_num {
					width: 145rpx;
					font-size: 30rpx;
					color: #151515;
				}

				.pd_item_title_syy {
					margin-left: 17rpx;
					font-size: 22rpx;
				
					font-weight: 400;
					color: #979797;
				}

				.pd_item_title_syy_mz {
					font-size: 22rpx;
				}

				.pd_item_title_hg {
					font-size: 22rpx;
				
					font-weight: 400;
					color: #979797;
					margin-left: 19rpx;
				}

				.pd_item_title_hl {
					margin-left: 10rpx;
		
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
