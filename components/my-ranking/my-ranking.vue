<template>
	<view>
		<view class="rank_c" @click="toRanking">
			<view class="r_top">
				<view class="w_number">
					<view class="r_medal">
						<image :src="r_pic[0]" mode=""></image>
					</view>
					<text class="wn_text">鸽仓号50</text>
				</view>
				<view class="personnel">
					<text class="_personnel">饲养员：</text><text class="p_name space">李大牛</text>
					<text class="_personnel ">护工：</text><text class="p_name">张三</text>
				</view>
			</view>
			<view class="r_bt">
				<view class="store">
					<view class="_text">当前存栏</view>
					<view class="_num">9999</view>

				</view>
				<view class="out">
					<view class="_text">累计出栏</view>
					<view class="_num">9999</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				r_pic: ['../../static/home/yi.png', '../../static/home/er.png', '../../static/home/san.png']
			};
		},
		methods:{
			toRanking(){
				uni.navigateTo({
					url: '/sub/ph_ranking/ph_ranking'
				})
			}
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
				font-size: 28rpx;
				.r_medal{
					display: inline-block;
					position: relative;
					image {
						position: absolute;
						top: -30rpx;
						width: 38rpx;
						height: 40rpx;
					}
				}
				

				.wn_text {
					margin-left: 53rpx;
				}

			}

			.personnel {
				font-size: 22rpx;
				margin-top: 12rpx;

				._personnel {
					color: #979797;
				}

				.p_name {
					color: #343434;
					font-family: SimHei;
				}

				.space {
					margin-right: 19rpx;
				}

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
