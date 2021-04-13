<template>
	<view class="drug_d_s_container">
		<!-- <view class="navigationBar">
			<view class="goBackImg" >
				<image @click="goBack" src="../../static/daiban/back.png" mode=""></image>
			</view>
			<view class="nBtitle">
				药品出入库
			</view>
			<view class="nBright" >
				<text @click="toRecordsPage">出入库记录</text>
			</view>
		</view> -->
		<view class="drug_d_s_Box" v-for="(item,index) in drugDSdataList" :key="index">
			<view class="drug_d_s_item">
				<view class="drug_d_s_item_imaBox">
					<image :src="item.item_img" mode=""></image>
				</view>
				<view class="drug_d_s_rightBox">
					<view class="drug_d_s_item_title">
						<text>{{item.drugs_name}}</text><text class="stock">库存：{{item.number}}{{item.unit_price}}</text>
					</view>
					<view class="drug_d_s_item_time">
						更新时间：{{item.time}}
					</view>
					<view class="drug_d_s_item_buttonBox">
						
						<view class="warehousingBtn" @click="toDrugWarehousing(item)">
							入库
						</view>
						<view class="deliveryBtn" @click="toDrugDelivery(item)">
							出库
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				drugDSdataList:[]
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
				    delta: 1
				});
			},
			onNavigationBarButtonTap(){
				uni.navigateTo({
					url: '/sub/in_out_records/in_out_records'
				});
			},
			toDrugDelivery(i){
				console.log(i)
				const form = {
					drugs_name:i.drugs_name,
					number:i.number,
					time:i.time,
					unit_price:i.unit_price,
					category:i.category,
				}
				// return false
				uni.navigateTo({
					url: '/sub/drug_delivery/drug_delivery?query='+ JSON.stringify(form)
				});
			},
			toDrugWarehousing(i){
				console.log(i)
				const form = {
					drugs_name:i.drugs_name,
					number:i.number,
					time:i.time,
					unit_price:i.unit_price,
					category:i.category,
				}
				// return false
				uni.navigateTo({
					url: '/sub/drugs_warehousing/drugs_warehousing?query=' + JSON.stringify(form)
				});
			},
			getDrugDSdata(){
				this.$http.post('/Vaccin/stockList.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
						this.drugDSdataList=res.data
					}).catch((err) => {
						
					})
			}
			
			
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
		created() {
			this.getDrugDSdata()
		}
		
	}
</script>

<style lang="scss" scoped>
	.drug_d_s_container{
			min-height: calc(100vh);
			background-color: #F4F6FA;
			padding-top: 1rpx;
			padding-bottom: 30rpx;
		.navigationBar{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 88rpx;
			background: #FFFFFF;
			display: flex;
			justify-content: space-around;
			
			padding: 0 30rpx;
			.goBackImg{
				width: 200rpx;
				height: 100%;
				image{
					width: 22rpx;
					height: 34rpx;
					position: relative;
					top: 50%;
					transform: translateY(-50%);
				}
			}
			.nBtitle{
				width: 200rpx;
				font-size: 32rpx;
				font-weight: 700;
				color: #151515;
				text-align: center;
				line-height: 88rpx;
			}
			.nBright{
				width: 200rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #377BE4;
				text-align:right;
				line-height: 88rpx;
			}
		}
		.drug_d_s_Box{
			.drug_d_s_item{
				width: 100%;
				height: 240rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 2rpx 6rpx 0rpx rgba(0, 0, 0, 0.03);
				padding: 30rpx 30rpx 0;
				display: flex;
				justify-content: space-between;
				margin-top: 20rpx;
				.drug_d_s_item_imaBox{
					width: 160rpx;
					height: 160rpx;
					border-radius: 10rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.drug_d_s_rightBox{
					width: 506rpx;
					.drug_d_s_item_title{
						font-size: 30rpx;
						font-weight: 500;
						color: #151515;
						display: flex;
						justify-content: space-between;
						.stock{
							font-size: 24rpx;
							font-weight: 500;
							color: #151515;
						}
					}
					.drug_d_s_item_time{
						font-size: 24rpx;
						font-weight: 500;
						color: #979797;
						margin-top: 14rpx;
					}
					.drug_d_s_item_buttonBox{
						display: flex;
						flex-direction: row-reverse;
						margin-top: 46rpx;
						view{
							width: 120rpx;
							height: 56rpx;
							background: #FFFFFF;
							text-align: center;
							border-radius: 28rpx;
							line-height: 56rpx;
							
						}
						.deliveryBtn{
							font-size: 24rpx;
							font-weight: 500;
							border: 1rpx solid #E64329;
							color: #E64329;
							margin-right: 40rpx;
						}
						.warehousingBtn{
							font-size: 24rpx;
							font-weight: 500;
							border: 1rpx solid #377BE4;
							color: #377BE4;
							
						}
					}
				}
			}
		}
	}

</style>
