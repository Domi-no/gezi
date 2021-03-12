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
				<text @click="toRecordsPage">出入库记录</text>
			</view>
		</view>
		<view class="saleTopBox">
			<view class=""style="padding: 0 30rpx;">
				<view class="saleNumBox">
					<text>可销售数量</text>
					<view class="">
						生产仓 <image src="../../static/my/zk.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="saleCageBox">
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
			</view>
			
		</view>
		<view class="salesVolumeTodayBox">
			<view class="salesVolumeTodayItem">
				<view class="salesVolumeTodayTitle">
					今日销售
				</view>
				<view class="" style="display: flex;justify-content: space-between;">
					<view class="s_v_t_typeBox">
						<text class="s_v_t_num">99,864</text>
						<text class="s_v_t_type">销售额(￥)</text>
					</view>
					<view class="s_v_t_typeBox">
						<text class="s_v_t_num">99,864</text>
						<text class="s_v_t_type">肉鸽销量(kg)</text>
					</view>
					<view class="s_v_t_typeBox">
						<text class="s_v_t_num">99,864</text>
						<text class="s_v_t_type">鸽蛋销量(￥)</text>
					</view>
				</view>
			</view>
		</view>
		<view class="salesVolumeTodayBox">
			<view class="salesVolumeTodayItem">
				<view class="salesVolumeTodayTitle">
					本月销售
				</view>
				<view class="" style="display: flex;justify-content: space-between;">
					<view class="s_v_t_typeBox">
						<text class="s_v_t_num">99,864</text>
						<text class="s_v_t_type">销售额(￥)</text>
					</view>
					<view class="s_v_t_typeBox">
						<text class="s_v_t_num">99,864</text>
						<text class="s_v_t_type">肉鸽销量(￥)</text>
					</view>
					<view class="s_v_t_typeBox">
						<text class="s_v_t_num">99,864</text>
						<text class="s_v_t_type">鸽蛋销量(￥)</text>
					</view>
				</view>
			</view>
		</view>
		<view class="qiun-columns">
				
				<view class="qiun-charts" >
					<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
				</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.js';
		var _self;
		var canvaLineA=null;
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				chartData: {
					categories: ['12.1', '12.5', '12.10', '12.15', '12.20', '12.25','12.31'],
					series: [{
						name: '销售额(万元)',
						data: [350, 200, 250, 370, 40, 200,700],
						color: '#88C932',
						legendShape:'rect'
					}, {
						name: '肉鸽销量',
						data: [700, 400, 650, 1000, 440, 680,100],
						color:'#5273EB',
						legendShape:'rect'
					}, {
						name: '鸽蛋销量',
						data: [1000, 800, 950, 450, 612, 232,400],
						color:'#EE577A',
						legendShape:'rect'
					}]
				}
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(720);
			this.cHeight=uni.upx2px(320);
			this.showLineA("canvasLineA",this.chartData)
		},
		methods: {
			goBack(){
				uni.navigateBack({
				    delta: 1
				})
			},
			toRecordsPage(){
				uni.navigateTo({
					url:'/sub/add_sale_record/add_sale_record'
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
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8,
						
					},
					yAxis: {
						gridType:'solid',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:5,
						calibration:true,
						min:0,
						max:1000,
						
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
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			}
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
			line-height: 88rpx;
		}
	}
	.saleTopBox{
		background: #FFFFFF;
		// padding: 0 30rpx;
		border-top: 2rpx solid #F4F6FA;
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
			.sCItem{
				width: 180rpx;
				height: 180rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #151515;
				
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
