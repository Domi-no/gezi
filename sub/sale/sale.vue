<template>
	<view class="saleContainer">
		<view class="navigationBar">
			<view class="goBackImg" >
				<image @click="goBack" src="../../static/daiban/back.png" mode=""></image>
			</view>
			<view class="nBtitle">
				销售
			</view>
			<view class="nBright" >
				<image @click="toRecordsPage" src="../../static/daiban/jiahao.png" mode=""></image>
			</view>
		</view>
		<view class="saleTopBox">
			<view class=""style="padding: 0 30rpx;">
				<view class="saleNumBox">
					<text>可销售数量</text>
					<view class="" @click="warehousePopupShow">
						{{block_type}} <image src="../../static/my/zk.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="" style="position: relative;">
				<scroll-view class="saleCageBox"  scroll-x="true" @scroll="touchStart" ref="scrollBox" >
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_p.png" mode=""></image><text>种鸽</text>
						</view>
						<text class="sCCageNum pinkNum">598</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_b.png" mode=""></image><text>鸽蛋</text>
						</view>
						<text class="sCCageNum pinkNum">25,468</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_g.png" mode=""></image><text>乳鸽</text>
						</view>
						<text class="sCCageNum pinkNum">598</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_o.png" mode=""></image><text>童鸽</text>
						</view>
						<text class="sCCageNum pinkNum">598</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_qng.png" mode=""></image><text>青年鸽</text>
						</view>
						<text class="sCCageNum pinkNum">598</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_fb.png" mode=""></image><text>粪便</text>
						</view>
						<text class="sCCageNum pinkNum">598</text>
					</view>
					<view class="sCItem">
						<view class="">
							<image src="../../static/daiban/ht_fl.png" mode=""></image><text>废料</text>
						</view>
						<text class="sCCageNum pinkNum">598</text>
					</view>
					
				</scroll-view>
				<view class="lineBox">
					<view class="" style="position: relative;">
						<view class="line" id="line" :style="'position: absolute;left:' + leftValue +'%;'">
							
						</view>
						
					</view>
				</view>
			</view>
			
		</view>
		<view class="salesVolumeTodayBox">
			<view class="salesVolumeTodayItem">
				<view class="salesVolumeTodayTitle">
					今日销售
				</view>
				<view class="" style="display: flex;justify-content: space-between;">
					<view class="s_v_t_typeBox" v-for="(item,idx) in todaySaleData" :key="idx">
						<text class="s_v_t_num">{{item.number}}</text>
						<text class="s_v_t_type">{{item.goods_name}}({{item.unit}})</text>
					</view>
					<!-- <view class="s_v_t_typeBox">
						<text class="s_v_t_num">99,864</text>
						<text class="s_v_t_type">肉鸽销量(kg)</text>
					</view>
					<view class="s_v_t_typeBox">
						<text class="s_v_t_num">99,864</text>
						<text class="s_v_t_type">鸽蛋销量(￥)</text>
					</view> -->
				</view>
			</view>
		</view>
		<view class="salesVolumeTodayBox">
			<view class="salesVolumeTodayItem">
				<view class="salesVolumeTodayTitle">
					本月销售
				</view>
				<view class="" style="display: flex;justify-content: space-between;">
					<view class="s_v_t_typeBox" v-for="(item,idx) in monthSaleData" :key="idx">
						<text class="s_v_t_num">{{item.number}}</text>
						<text class="s_v_t_type">{{item.goods_name}}({{item.unit}})</text>
					</view>
					<!-- <view class="s_v_t_typeBox">
						<text class="s_v_t_num">99,864</text>
						<text class="s_v_t_type">肉鸽销量(￥)</text>
					</view>
					<view class="s_v_t_typeBox">
						<text class="s_v_t_num">99,864</text>
						<text class="s_v_t_type">鸽蛋销量(￥)</text>
					</view> -->
				</view>
			</view>
		</view>
		<view class="qiun-columns">
				
				<view class="qiun-charts" >
					<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA" @touchmove="moveLineA"  @touchend="touchEndLineA"></canvas>
				</view>
		</view>
		<lb-picker ref="warehouse" :props="myProps" :list="list" radius="20rpx" confirm-color="#377BE4" @confirm='typeNameChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
	</view>
</template>

<script>
	import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.js';
		var _self;
		var canvaLineA=null;
		import LbPicker from '@/components/lb-picker';
		import {
			mapState
		} from 'vuex'
	export default {
		components: {
		     LbPicker
		   },
		data() {
			return {
				leftValue:0,
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				chartData: {
					categories: [],
					series: [{
						name: '销售额',
						data: [],
						color: '#88C932',
						legendShape:'rect'
					}, {
						name: '肉鸽销量',
						data: [],
						color:'#5273EB',
						legendShape:'rect'
					}, {
						name: '鸽蛋销量',
						data: [],
						color:'#EE577A',
						legendShape:'rect'
					}]
				},
				list:[],
				myProps:{
					 label: 'type_name',
					 value: 'block_type',
				},
				block_type:'生产仓',
				preSaleData:'',
				todaySaleData:'',
				monthSaleData:'',
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(720);
			this.cHeight=uni.upx2px(320);
			
		},
		methods: {
			goBack(){
				uni.navigateBack({
				    delta: 1
				})
			},
			toRecordsPage(){
				
				uni.navigateTo({
					url:'/sub/add_sale_record/add_sale_record?list='+JSON.stringify(this.list)
				});
			},
			
			showLineA(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11	,
					legend:{show:true,position:'top',float:'right'},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					dataPointShape:false,
					enableScroll:true,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8,
						itemCount:5,
						// scrollShow:true,
						// scrollAlign:'left',
					},
					yAxis: {
						gridType:'solid',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:5,
						calibration:true,
						  "disabled": false,
						        "disableGrid": false,
						data: [
						        {
						            position: "left",
						            disabled: false,
						            axisLine: false,
						            // axisLineColor: "#CCCCCC",
						            // calibration: false,
						            // fontColor: "#666666",
						            // fontSize: 13,
						            // textAlign: "right",
						            // title: "",
						            // titleFontSize: 13,
						            // titleFontColor: "#666666",
						            // min: null,
						            // max: null,
						            // format: ""
						        }
						    ],
						
						
						format:(val)=>{return val.toFixed(0)+''}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						// lineStyle:'straight',
						line:{
							type: 'straight'
						}
					}
				});
				
			},
			touchLineA(e) {
				// canvaLineA.showToolTip(e, {
				// 	format: function (item, category) {
				// 		return category + ' ' + item.name + ':' + item.data 
				// 	}
				// });
				canvaLineA.scrollStart(e);
			},
			touchStart(e){
				
				 console.log()
				this.leftValue = e.detail.scrollLeft * 0.24
				
			},
			moveLineA(e) {
							canvaLineA.scroll(e);
						},
						touchEndLineA(e) {
							canvaLineA.scrollEnd(e);
							//下面是toolTip事件，如果滚动后不需要显示，可不填写
							canvaLineA.showToolTip(e, {
								format: function (item, category) {
									return category + ' ' + item.name + ':' + item.data 
								}
							});
						},
			touchEnd(e){
				console.log(e)
			},
			getPreSaleData(){
				const {block_type} = this
				this.$http.post('/Sale/preSale.html', {uid: this.userInfo.id,block_type})
				.then((res) => {
						console.log(res)
						this.preSaleData=res.data
					}).catch((err) => {
						
				})
			},
			getTypeBlockData(){
				
				this.$http.post('/Grain/typeBlock.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
					this.list=res.data
					}).catch((err) => {
						
				})
			},
			getSalesData(){
				
				this.$http.post('/Sale/SalesData.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
						console.log(res.data.canvas)
						this.todaySaleData=res.data['今日销售']
						this.monthSaleData=res.data['本月销售']						
						Object.keys(res.data.canvas).forEach((value, index)=>{
							console.log(value, index,res.data.canvas[value]);
							this.chartData.categories.push(value)
							this.chartData.series[0].data.push(res.data.canvas[value][0].number)
							this.chartData.series[1].data.push(res.data.canvas[value][1].number)
							this.chartData.series[2].data.push(res.data.canvas[value][2].number)    
						});
						console.log(this.chartData)
						this.showLineA("canvasLineA",this.chartData)
					}).catch((err) => {
						
				})
			},
			typeNameChange(e){
				console.log(e)
				this.block_type=e.item.type_name
				this.getPreSaleData()
			},
			warehousePopupShow(){
				this.$refs.warehouse.show()
			}
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
		created() {
			this.getTypeBlockData()
			this.getPreSaleData()
			this.getSalesData()
		}
	}
</script>

<style lang="scss" scoped>
.saleContainer{
	padding-top: 88rpx;
	background-color: #F4F6FA;
	min-height: calc(100vh);
	.navigationBar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-around;
		z-index: 999;
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
			// line-height: 88rpx;
			
			image{
				width: 40rpx;
				height: 40rpx;
				position: relative;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
	.saleTopBox{
		background: #FFFFFF;
		// padding: 0 30rpx;
		border-top: 2rpx solid #F4F6FA;
		position: relative;
		.saleNumBox{
			height: 90rpx;
			display: flex;
			justify-content: space-between;
			line-height: 90rpx;
			border-bottom: 2rpx solid #F4F6FA;
			
			text{
				font-size: 30rpx;
				font-weight: bold;
				color: #151515;
			}
			view{
				font-size: 28rpx;
				font-weight: 500;
				color: #343434;
				
				image{
					width: 12rpx;
					height: 22rpx;
					margin-left: 16rpx;
				}
			}
		}
		.saleCageBox{
			height: 180rpx;
			display: flex;
			// overflow-y: scroll;
			// position: relative;
			overflow: hidden;
			flex-wrap: nowrap;
			
			
			.sCItem{
				width: 180rpx;
				height: 180rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #151515;
				display: inline-block;
				text-align: center;
				view{
					padding: 30rpx 0 0 30rpx;
					display: flex;
					image{
						width: 40rpx;
						height: 40rpx;
					}
					text{
						margin-left: 12rpx;
					}
				}
				.sCCageNum{
					display: block;
					font-size: 36rpx;
					font-weight: 400;
					margin-top: 14rpx;
					
				}
				
				.pinkNum{
					font-size: 36rpx;
					font-weight: 400;
					color: #E86F60;
					
					
				}
			}
		}
		.lineBox{
			width: 90rpx;
			height: 4rpx;
			background: #E4E5E9;
			border-radius: 2rpx;
			position: absolute;
			bottom: 18rpx;
			left: 50%;
			transform: translateX(-50%);
			.line{
				width: 40rpx;
				height: 4rpx;
				background: #676767;
				border-radius: 2rpx;
				position: absolute;
				
			}
		}
		scroll-view{
			
				white-space: nowrap;
			}
		
		
	}
	.uni-scroll-view-content{
		display: flex !important;
	}
	.salesVolumeTodayBox{
		background-color: #fff;
		margin-top: 20rpx;
		.salesVolumeTodayItem{
			padding: 40rpx 30rpx;
			.salesVolumeTodayTitle{
				font-size: 30rpx;
				font-weight: bold;
				color: #151515;
			}
			.s_v_t_typeBox{
				width: 210rpx;
				height: 160rpx;
				background: #FFFFFF;
				box-shadow: 0px 2rpx 12rpx 0px rgba(0, 0, 0, 0.08);
				border-radius: 10rpx;
				padding-top: 26rpx;
				margin-top: 27rpx;
				padding-bottom: 29rpx;
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				
			}
			text{
				display: block;
			}
			.s_v_t_num{
				font-size: 48rpx;
				font-weight: 400;
				color: #377BE4;
			}
			.s_v_t_type{
				font-size: 22rpx;
				font-weight: 500;
				color: #979797;
				// margin-top: 20rpx;
				line-height: 1;
			}
		}
	}
}
.qiun-charts {
		width: 100%;
		height: 500upx;
		background-color: #FFFFFF;
		
	}
	
	.charts {
		width: 720upx;
		height: 328upx;
		background-color: #FFFFFF;
		margin: 0 auto;
	}
</style>
