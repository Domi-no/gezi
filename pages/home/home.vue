<template>
	<view class="myFont hContainer" @click.stop="containerClick">
		<view class="sw">
			<view class="wrap">
				<u-swiper :list="list" indicator-pos="bottomRight" height="300"></u-swiper>
			</view>
			<view class="column">
				<view class="c_item" v-for="(item,idx) in c_img" :key="idx" @click="toHomeSubPage(idx)">
					<image :src="item.src" mode=""></image>
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="focus_news">
			<view class="focus_head">
				<text class="c_news">
					公司要闻
				</text>
				<view class="more" @click="toNewsList">
					<text>更多</text>
					<image class="zk" src="../../static/home/zk.png" />
				</view>
			</view>
			<my-news :news="newsArray"></my-news>
		</view>
		<view class="rank">
			<view class="rank_head">
				<!-- <text class="gcph">鸽仓排行</text> <text class="cage_sum">鸽仓总数:&nbsp;1250</text> -->
				<view class="gcph">
					<view>{{rankName}} <image src="../../static/home/zk_btm.png" mode="" @click.stop="showRankListName"></image></view>
					<view class="rankListName" v-show="this.isShowRLN">
						<text :class="cRankListNameId === idx ? 'cRankListName' : ''" v-for="(item,idx) in rankListName" :key = 'idx' @click="rLNameChange(idx,item)">{{item}}</text>
					</view>
				</view> 
				<text class="cage_sum"><text @click="changeTime(idx)" :class="cRLTime === idx ? 'rankListClick' : ''" v-for="(item,idx) in classification" :key='idx'>{{item}}</text></text>
			</view>
			<my-ranking class="r_c" :rankingList="rankingList"></my-ranking>
			<view class="h_bt">
				查看全部排名
			</view>
		</view>
	</view>
</template>

<script>
	import uSwiper from '@/uview-ui/components/u-swiper/u-swiper.vue';
	export default {
		 components:{
			 uSwiper
		 },
		data() {
			return {
				cRLTime:0,
				isShowRLN:false,
				cRankListNameId:'',
				rankName:'鸽仓排行',
				newsArray:[{content:'和平鸽是和平，友谊，团结，和圣洁的象征。世界很多城市和广场上,都会放那么一两只鸽子',title:'安全生产重于泰山'},{content:'和平鸽是和平，友谊，团结，和圣洁的象征。世界很多城市和广场上,都会放那么一两只鸽子',title:'安全生产重于泰山'}],
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
					}
				],
				classification:['日榜','月度榜','季度榜','年度榜'],
				rankListName:['厂区排行','员工排行','鸽仓排行'],
				c_img: [{
					src: '../../static/home/fp.png',
					text: '扶贫成果'
				}, {
					src: '../../static/home/js.png',
					text: '养鸽技术'
				}, {
					src: '../../static/home/fz.png',
					text: '鸽病防治'
				},{
					src: '../../static/home/cpzx.png',
					text: '产品中心'
				}],
				rankingList:[1,2,3,4,5]
				
			}
		},
		methods: {
			toNewsList() {
				uni.navigateTo({
					url: '/sub/news_list/news_list?query='+JSON.stringify(this.newsArray)
				})
			},
			toHomeSubPage(idx){
				switch(idx){
					case 0 :
					console.log(0)
					break;
					case 1 :
					console.log(1)
					break;
					case 2 :
					console.log(2)
					break;
					case 3 :
					uni.navigateTo({
						url: '/sub/productCenter/productCenter'
					});
					break;
				}
				
			},
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
		onShow() {
			console.log(1)
		}
	}
</script>

<style lang="scss" scoped>
	.hContainer {
		.sw {
			height: 560rpx;
			background-color: #fff;

			.wrap {
				padding: 35rpx 30rpx 0;
			}

			.column {
				margin: 45rpx 0 0 0;
				display: flex;
				justify-content: space-around;

				.c_item {
					width: 126rpx;
					text-align: center;
					font-size: 26rpx;
					line-height: 22rpx;

					image {
						width: 100%;
						height: 126rpx;
					}
				}
				
			}
		}

		.focus_news {
			margin-top: 20rpx;
			height: 484rpx;
			padding: 40rpx 30rpx 0;
			background-color: #fff;

			.focus_head {
				display: flex;
				justify-content: space-between;

				.c_news {
					font-size: 35rpx;
					font-weight: 700;
					color: #151515;
					font-family: Bold;
				}

				.more {
					display: flex;
					justify-content: space-between;
					width: 68rpx;
					padding-bottom: 6rpx;
					font-size: 23rpx;
					color: #979797;
					line-height: 23rpx;
					text {
						height: 23rpx;
					}

					.zk {
						width: 12rpx;
						height: 23rpx;
					}


				}
			}


		}

		.rank {
			margin-top: 20rpx;
			padding: 40rpx 30rpx 0;
			background-color: #FFFFFF;
			// min-height: calc(100vh - 1000rpx);

			.rank_head {
				font-size: 34rpx;
				display: flex;
				justify-content: space-between;
				font-weight: 700;

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
					font-size: 24rpx;
					font-weight: 400;
					color: #979797;
					font-weight: 500;
					text{
						margin-right: 39rpx;
						
					}
						
					text:nth-child(4){
						margin-right: 0;
					}
				}
				.rankListClick{
					display: inline-block;
					font-size: 28rpx;
					color: #343434;
					border-bottom: 6rpx solid #377BE4;
					border-radius: 3rpx;
				}
			}

			.r_c {
				margin-top: 30rpx;
			}
		}

		.h_bt {
			height: 100rpx;
			// line-height: 100rpx;
			margin-top: 40rpx;
			text-align: center;
			color: #377BE4;
		}
		
	}
</style>
