<template>
	<view class="food_d_s_container">
		<!-- <view class="navigationBar">
			<view class="goBackImg" >
				<image @click="goBack" src="../../static/daiban/back.png" mode=""></image>
			</view>
			<view class="nBtitle">
				粮食仓储
			</view>
			<view class="nBright" >
				<text @click="toRecordsPage">出入库记录</text>
			</view>
		</view> -->
		<view class="food_d_s_Box">
			<view class="food_d_s_item" v-for="(i,idx) in grainNameList" :key="idx">
				<view class="food_d_s_item_imaBox">
					<image :src="i.item_img" mode=""></image>
				</view>
				<view class="food_d_s_rightBox">
					<view class="food_d_s_item_title">
						<text>{{i.grain_name}}</text><text class="stock">库存：{{i.number + i.unit_price}}</text>
					</view>
					<view class="food_d_s_item_time">
						更新时间：{{i.time}}
					</view>
					<view class="food_d_s_item_buttonBox">
						
						<view class="warehousingBtn" @click="tofoodWarehousing(i)">
							入库
						</view>
						<view class="deliveryBtn" @click="tofoodDelivery(i)">
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
				grainNameList:[],
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
					url: '/sub/food_in_out_records/food_in_out_records'
				});
			},
			tofoodDelivery(i){
				console.log(i)
				// return false
				const form = {
					grain_name:i.grain_name,
					number:i.number,
					time:i.time,
					unit_price:i.unit_price
				}
				uni.navigateTo({
					url: '/sub/food_delivery/food_delivery?query='+JSON.stringify(form)
				});
			},
			tofoodWarehousing(i){
				const form = {
					grain_name:i.grain_name,
					number:i.number,
					time:i.time,
					unit_price:i.unit_price
				}
				uni.navigateTo({
					url: '/sub/foods_warehousing/foods_warehousing?query='+JSON.stringify(form)
				});
			},
			getGrainNameData(){
				this.$http.post('/Grain/grainName.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
						this.grainNameList=res.data
						
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
			
		},
		onShow() {
			this.getGrainNameData()
		}
	}
</script>

<style lang="scss" scoped>
	.food_d_s_container{
			min-height: calc(100vh);
			background-color: #F4F6FA;
			padding-top: 1rpx;
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
		.food_d_s_Box{
			.food_d_s_item{
				width: 100%;
				height: 240rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 2rpx 6rpx 0rpx rgba(0, 0, 0, 0.03);
				padding: 30rpx 30rpx 0;
				display: flex;
				justify-content: space-between;
				margin-top: 20rpx;
				.food_d_s_item_imaBox{
					width: 160rpx;
					height: 160rpx;
					border-radius: 10rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.food_d_s_rightBox{
					width: 506rpx;
					.food_d_s_item_title{
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
					.food_d_s_item_time{
						font-size: 24rpx;
						font-weight: 500;
						color: #979797;
						margin-top: 14rpx;
					}
					.food_d_s_item_buttonBox{
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
							border: 1px solid #E64329;
							color: #E64329;
							margin-right: 40rpx;
						}
						.warehousingBtn{
							font-size: 24rpx;
							font-weight: 500;
							border: 1px solid #377BE4;
							color: #377BE4;
							
						}
					}
				}
			}
		}
	}

</style>
