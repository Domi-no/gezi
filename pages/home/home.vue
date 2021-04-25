<template>
	<view class="myFont hContainer" @click.stop="containerClick">
		<view class="sw">
			<view class="wrap">
				<u-swiper :list="homeBannerList" :name="'linkurl'" indicator-pos="bottomRight" height="300"></u-swiper>
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
			<my-news :news="homeNewsList"></my-news>
		</view>
		<view class="rank">
			<view class="rank_head">
				<!-- <text class="gcph">鸽仓排行</text> <text class="cage_sum">鸽仓总数:&nbsp;1250</text> -->
				<view class="gcph"  >
					<view @click.stop="showRankListName">{{rankName}} <image src="../../static/home/zk_btm.png" mode="" ></image></view>
					<view :class="{rankListName:true,htmlHidden:!isShowRLN}" >
						<text :class="cRankListNameId === idx ? 'cRankListName' : ''" v-for="(item,idx) in rankListName" :key = 'idx' @click="rLNameChange(idx,item)">{{item.name}}</text>
					</view>
				</view> 
				<view class="cage_sum">
					<view @click="changeTime(idx,item)" :class="{rankListClick:cRLTime === idx }" v-for="(item,idx) in classification" :key='idx'>{{item.name}}
						<text :class="{cage_sum_line:true,htmlHidden:cRLTime !== idx}"></text>
					</view>
				</view>
			</view>
			<my-ranking class="r_c" :gecang="isWh" :rankingList="homeSaleList"></my-ranking>
			<view class="h_bt"  @click="toRanking">
				查看全部排名
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import uSwiper from '@/uview-ui/components/u-swiper/u-swiper.vue';
	export default {
		 components:{
			 uSwiper
		 },
		data() {
			return {
				cRLTime:0,
				isShowRLN:false,
				cRankListNameId:null,
				rankName:'厂区排行',
				homeNewsList:[],
				homeSaleList:[],
				homeBannerList: [],
				classification:[{name:'日榜',timeSlot:'day'},{name:'月度榜',timeSlot:'month'},{name:'季度榜',timeSlot:'season'},{name:'年度榜',timeSlot:'year'}],
				rankListName:[{name:'厂区排行',rankText:'factory'},{name:'员工排行',rankText:'staff'},{name:'鸽仓排行',rankText:'barn'}],
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
				rankingList:[1,2,3,4,5],
				saleData:{
					sale_num:10,
					RankText:'factory',
					TimeSlot:'day',
					page:1
				},
				isWh:false
				
			}
		},
		methods: {
			toNewsList() {
				uni.navigateTo({
					url: '/sub/news_list/news_list'
				})
			},
			toHomeSubPage(idx){
				switch(idx){
					case 0 :
					uni.navigateTo({
						url: '/sub/help_the_poor/help_the_poor'
					});
					break;
					case 1 :
					uni.navigateTo({
						url: '/sub/pigeon_skill/pigeon_skill'
					});
					break;
					case 2 :
					uni.navigateTo({
						url: '/sub/prevention_cure/prevention_cure'
					});
					break;
					case 3 :
					uni.navigateTo({
						url: '/sub/productCenter/productCenter'
					});
					break;
				}
				
			},
			changeTime(idx,item){
				console.log(item.timeSlot,this.saleData)
				this.cRLTime = idx
				this.saleData.TimeSlot=item.timeSlot
				this.getSaleData()
			}
			,showRankListName(){
				this.isShowRLN = !this.isShowRLN
			},
			rLNameChange(idx,item){
				item.name === '鸽仓排行' ? this.isWh=true : this.isWh =false
				this.isShowRLN = false
				console.log(item.rankText)
				this.cRankListNameId = idx
				this.rankName=item.name
				this.saleData.RankText =item.rankText
				
				this.getSaleData()
			},
			containerClick(){
				this.isShowRLN=false
			},
			toRanking(){
				uni.navigateTo({
					url: '/sub/ph_ranking/ph_ranking?query='+JSON.stringify(this.homeSaleList)
				})
			},
			next(){
				console.log(1)
				this.$nextTick(function(){
					console.log('next')
				
				})
			},
			getHomeNews(){
				this.$http.post('/Rank/news.html',{News:'homeNews'})
				.then((res)=>{
					console.log(res)
					this.homeNewsList =res.data
					// uni.showToast({
					// 	title: 'message',
					// 	icon: 'none'
					// })
					
				}).catch((err)=>{
					console.log(err)
				})
			},
			getHomeSale(){
				this.$http.post('/Rank/home.html',{uid:this.userInfo.id,...this.saleData})
				.then((res)=>{
					console.log(res)
					this.homeBannerList =res.data.banner
					this.homeNewsList =res.data.news
					this.homeSaleList=res.data.sale.data
					console.log(res.data.sale)
				}).catch((err)=>{
					console.log(err)
				})
			},
			getSaleData(){
				this.$http.post('/Rank/sale.html',{...this.saleData})
				.then((res)=>{
					console.log(res)
					this.homeSaleList=res.data.data
				}).catch((err)=>{
					console.log(err)
				})
			},
			
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
		created() {
			this.next()
			this.getHomeSale()
			console.log(this.userInfo.token)
			console.log(this.isShowRLN)
			
		}
	}
</script>

<style lang="scss" scoped>
	.hContainer {
		padding-top: 88rpx;
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
			min-height: 134rpx;
			padding: 40rpx 30rpx 20rpx;
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
			min-height: calc(100vh - 1044rpx);

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
					position: relative;
					top: -6rpx;
					font-size: 28rpx;
					color: #343434;
					// border-bottom: 6rpx solid #377BE4;
					// border-radius: 3rpx;
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
		.htmlHidden{
			display:none !important;
		}
		
	}
</style>
