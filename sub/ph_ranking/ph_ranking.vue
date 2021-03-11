<template>
	<view class="myFont r_container" @click.stop="containerClick">
		<view class="rank_head">
			<!-- <text class="gcph">鸽仓排行</text> <text class="cage_sum">鸽仓总数:&nbsp;1250</text> -->
			<view class="gcph">
				<view>{{rankName}} <image src="../../static/home/zk_btm.png" mode="" @click.stop="showRankListName"></image></view>
				<view class="rankListName" v-show="this.isShowRLN">
					<text :class="cRankListNameId === idx ? 'cRankListName' : ''" v-for="(item,idx) in rankListName" :key = 'idx' @click="rLNameChange(idx,item)">{{item}}</text>
				</view>
			</view> 
			<view class="cage_sum">
				<view @click="changeTime(idx)" :class="cRLTime === idx ? 'rankListClick' : ''" v-for="(item,idx) in classification" :key='idx'>{{item}}
					<text class="cage_sum_line" v-show="cRLTime === idx"></text>
				</view>
			</view>
		</view>
		<my-ranking class="r_c" :rankingList="r_data"></my-ranking>
		<view class="rankingNoMore">
			已经到底了~. ~
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowRLN:false,
				r_data:[1,2,3,4,5,6,7,8,9,10,11],
				rankName:'鸽仓排行',
				cRankListNameId:'',
				rankListName:['厂区排行','员工排行','鸽仓排行'],
				classification:['日榜','月度榜','季度榜','年度榜'],
				cRLTime:0,
			}
		},
		methods: {
			changeTime(idx){
				console.log(1)
				this.cRLTime = idx
			}
			,showRankListName(){
				this.isShowRLN = !this.isShowRLN
			},
			rLNameChange(idx,name){
				this.cRankListNameId = idx
				this.rankName=name
				this.isShowRLN=false
			},
			containerClick(){
				this.isShowRLN=false
			}
		},
		onLoad(option){
			
			console.log(option.query)
		}
	}
</script>

<style lang="scss" scoped>
.r_container{
	background-color: #F4F6FA;
	min-height: calc(100vh);
	padding: 40rpx 30rpx;
		.rank_head {
			font-size: 34rpx;
			display: flex;
			justify-content: space-between;
			font-weight: 700;
			margin-bottom: 24rpx;
			.gcph {
				position: relative;
				display: inline-block;
				font-family: Bold;
				image{
					width: 22rpx;
					height: 12rpx;
					margin-left: 13rpx;
				}
				.rankListName{
					position: absolute;
					top:50rpx;
					width: 206rpx;
					height: 240rpx;
					border-radius: 20rpx;
					background-color: #fff;
					box-shadow: 0px 2px 10px 0px rgba(4, 10, 61, 0.1);
					font-size: 28rpx;
					font-weight: bold;
					z-index: 99;
					display: flex;
					flex-direction:column ;
					justify-content: space-around;
					text-align: center;
					text{
						height: 80rpx;
						width: 100%;
						line-height: 80rpx;
					}
				}
				.cRankListName{
					background-color:#F4F6FA
				}
			}
		
			.cage_sum {
				position: relative;
				top: 8rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #979797;
				font-weight: 500;
				display: flex;
				text-align: center;
				view{
					margin-right: 21rpx;
					width: 92rpx;
					height: 43rpx;
				}
					
				view:nth-child(4){
					margin-right: 0;
				}
				.cage_sum_line{
					display: block;
					width: 60rpx;
					height: 6rpx;
					background: #377BE4;
					border-radius: 3rpx;
					
					position: relative;
					bottom: -4rpx;
					margin: 0 auto;
				}
			}
			.rankListClick{
				display: inline-block;
				font-size: 28rpx;
				color: #343434;
				position: relative;
				top: -6rpx;
				// border-bottom: 6rpx solid #377BE4;
				// border-radius: 3rpx;
			}
		}
		.rankingNoMore{
			font-size: 24rpx;
			font-weight: 500;
			color: #979797;
			text-align: center;
			margin: 57rpx auto 0;
		}
	
}
</style>
