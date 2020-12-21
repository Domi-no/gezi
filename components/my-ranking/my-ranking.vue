<template>
	<view>
		<view class="rank_c" @click="toRanking" v-for="(item,idx) in rankingList" :key="idx">
			<view class="r_top">
				<view class="w_number">
					<view class="r_medal">
						<image :src="idx>=3?r_pic[3]:r_pic[idx]" mode=""></image>
						<text class="r_medal_num">{{idx+1}}</text>
					</view>
					<view class="wn_text">鸽仓号50</view>
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
		props:{
			rankingList:{
				type:Array,
				// required:true
			}
		},
		data() {
			return {
				r_pic: ['../../static/home/yi.png', '../../static/home/er.png', '../../static/home/san.png','../../static/home/si.png']
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
				width:182rpx ;
				font-size: 28rpx;
				display: flex;
				justify-content: space-between;
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
