<template>
	<view class="myFont r_container" @click.stop="containerClick">
		<view class="rank_head">
			<!-- <text class="gcph">鸽仓排行</text> <text class="cage_sum">鸽仓总数:&nbsp;1250</text> -->
			<view class="gcph" >
				<view @click.stop="showRankListName">{{rankName}} <image src="../../static/home/zk_btm.png" mode="" ></image></view>
				<view :class="{rankListName:true,htmlHidden:!isShowRLN}">
					<text :class="cRankListNameId === idx ? 'cRankListName' : ''" v-for="(item,idx) in rankListName" :key = 'idx' @click="rLNameChange(idx,item)">{{item.name}}</text>
				</view>
			</view> 
			<view class="cage_sum">
				<view @click="changeTime(idx,item)" :class="{rankListClick:cRLTime === idx} " v-for="(item,idx) in classification" :key='idx'>{{item.name}}
					<text :class="{cage_sum_line:true,htmlHidden:cRLTime !== idx}"></text>
				</view>
				
			</view>
		</view>
		<view class="">
			
			<my-ranking class="r_c" :gecang="isWH" :rankingList="saleRankList"></my-ranking>
		</view>
		<view v-show="isLoadMore">
		      <uni-load-more :status="loadStatus" ></uni-load-more>
		</view>
		<!-- <view class="rankingNoMore">
			已经到底了~. ~
		</view> -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowRLN:false,
				rankName:'厂区排行',
				cRankListNameId:'',
				classification:[{name:'日榜',timeSlot:'day'},{name:'月度榜',timeSlot:'month'},{name:'季度榜',timeSlot:'season'},{name:'年度榜',timeSlot:'year'}],
				rankListName:[{name:'厂区排行',rankText:'factory'},{name:'员工排行',rankText:'staff'},{name:'鸽仓排行',rankText:'barn'}],
				cRLTime:0,
				saleRankList:[],
				saleData:{
					sale_num:10,
					RankText:'factory',
					TimeSlot:'day',
					page:1
				},
				// 
				videoList:[],			
				
				loadStatus:'loading',  //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
				isLoadMore:true,  //是否加载中
				isWH:false,
			}
		},
		methods: {
			changeTime(idx,item){
				console.log(1)
				this.cRLTime = idx
				this.saleData.TimeSlot=item.timeSlot
				this.saleRankList=[]
				this.saleData.page = 1
				this.getSaleData()
			}
			,showRankListName(){
				this.isShowRLN = !this.isShowRLN
			},
			rLNameChange(idx,item){
				item.name==='鸽仓排行'?this.isWH=true:this.isWH=false
				this.cRankListNameId = idx
				this.rankName=item.name
				this.saleData.RankText =item.rankText
				this.isShowRLN=false
				this.saleRankList=[]
				this.getSaleData()
			},
			containerClick(){
				this.isShowRLN=false
			},
			getSaleData(){
				console.log(this.saleData.TimeSlot,this.saleData.page)
				this.$http.post('/Rank/sale.html',{...this.saleData})
				.then((res)=>{
					console.log(res)
					if(res.code == 200){
						this.saleRankList.push(...res.data.data)
						console.log(...res.data.data)
						if(res.data.data){
							if(res.data.total <= this.saleRankList.length){  //判断接口返回数据量小于请求数据量，则表示此为最后一页
								
							      this.isLoadMore=true                                             
							      this.loadStatus='已经到底了~. ~'
							}else{
							      this.isLoadMore=false
								  console.log(2)
							}
						}
					}else{
						 this.isLoadMore=true
						 // this.loadStatus='已经到底了~. ~'
					}
				}).catch((err)=>{
					console.log(err)
				})
			},
			// 
			
		},
		onReachBottom(){  //上拉触底函数
		  if(!this.isLoadMore){  //此处判断，上锁，防止重复请求
		        this.isLoadMore=true
				console.log(this.saleData.page,'PAGE1')
		        this.saleData.page += 1
				console.log(this.saleData.page,'PAGE')
		        this.getSaleData()
		  }
		},
		created() {
			
			this.getSaleData()
		},
		
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
		.htmlHidden{
			display:none !important;
		}
	
}
</style>
