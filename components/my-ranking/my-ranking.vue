<template>
	<view>
		<view class="rank_c" v-for="(item,idx) in rankingList" :key="idx">
			<view class="r_top">
				<view class="w_number">
					<view class="r_medal">
						<image :src="idx>=3?r_pic[3]:r_pic[idx]" mode=""></image>
						<text class="r_medal_num">{{idx+1}}</text>
					</view>
					<view class="wn_text">{{item.name||item.user_name}}</view>
				</view>
				<view class="personnel">
					<view class="">
						<text class="_personnel">{{gecang?'饲养员：':'病残率：'}}</text><text class="p_name">{{item.breeder||item.fall_ill}}</text>
					</view>
					<view class="" style="margin-left: 19rpx;">
						<text class="_personnel ">{{gecang?'护工：':'死亡率：'}}</text><text class="p_name">{{item.support||item.mortality}}</text>
					</view>
				</view>
			</view>
			<view class="r_bt">
				<view class="store">
					<view class="_text">当前存栏</view>
					<view class="_num">{{item.survival}}</view>

				</view>
				<view class="out">
					<view class="_text">累计销售</view>
					<view class="_num">{{item.sale_number}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			rankingList:{
				type:Array,
				// required:true
			},
			gecang:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				r_pic: ['../../static/home/yi.png', '../../static/home/er.png', '../../static/home/san.png','../../static/home/si.png']
			};
		},
		methods:{
		
		},
		created() {
			console.log(this.rankingList)
		}
	}
</script>

<style lang="scss">
	.rank_c {
		width: 690rpx;
		height: 180rpx;
		background: #FFFFFF;
		box-shadow: 0px 2px 10px 0px rgba(4, 10, 61, 0.1);
		border-radius: 20px;
		padding: 0 30rpx;
		margin-top: 20rpx;

		.r_top {
			padding-top: 17rpx;
			height: 80rpx;
			display: flex;
			justify-content: space-between;
			border-bottom: 2rpx solid #e4e5e9;

			.w_number {
				width:182rpx ;
				font-size: 28rpx;
				display: flex;
				// justify-content: space-between;
				.r_medal{
					
					display: inline-block;
					position: relative;
					top: 8rpx;
					image {
						position: relative;
						top: 0;
						width: 38rpx;
						height: 40rpx;
					}
					.r_medal_num{
						width: 38rpx;
						height: 40rpx;
						text-align: center;
						font-size: 24rpx;
						font-weight: 400;
						font-family: SimHei;
						position: absolute;
						left: 0;
						top: 0;
						line-height: 47rpx;
						color: #fff;
								
					}
					
				}
				.wn_text{
					line-height: 57rpx;
					margin-left: 20rpx;
				}

			}

			.personnel {
				font-size: 22rpx;
				margin-top: 12rpx;
				display: flex;
				view{
					min-width: 143rpx;
					display: flex;
					color: #343434;
					
					padding: 0;
				}
				._personnel {
					color: #979797;
					font-size: 22rpx;
				}

				

				// .space {
				// 	margin-right: 19rpx;
				// }

			}
		}

		.r_bt {
			height: 60rpx;
			margin-top: 23rpx;
			text-align: center;

			.store {
				width: 313rpx;
				display: inline-block;
				border-right: 2px solid #e4e5e9;
			}

			.out {
				width: 313rpx;
				display: inline-block;
			}

			._text {
				font-size: 21rpx;
				color: #979797;
			}

			._num {
				margin-top: 13rpx;
				font-size: 21rpx;
				color: #343434;
				line-height: 10rpx;
			}
		}

	}
</style>
