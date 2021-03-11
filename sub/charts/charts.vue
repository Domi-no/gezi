<template>
	<view class="myFont reportContainer">
		<view class="report_head">
			<view class="report_head_left">
				<text>所有仓</text>
				<image src="@/static/report/report_zk.png" mode=""></image>
			</view>
			<view class="report_head_right">
				打印报表
			</view>
		</view>
		<view class="report_time">
			<view class="report_time_left">
				<view class="start">
					<text>2020-06-30</text><image src="../../static/report/bt_zk.png" mode=""></image>
				</view>
				<text class="to">至</text>
				<view class="end">
					<text>2020-12-30</text><image src="../../static/report/bt_zk.png" mode=""></image>
				</view>
			</view>
			<view class="report_time_right">
				查询
			</view>
		</view>
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">鸽蛋产量<text>(单位：枚)</text><text class="u_title_right"><text>共计：9899枚</text><text>平均：1489枚</text></text></view>
				</view>
				<view class="qiun-charts">
					<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
				</view>
			</view>
			<view class="maskBox">
				
			</view>
		</view>
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">鸽蛋产量<text>(单位：枚)</text><text class="u_title_right"><text>共计：9899枚</text><text>平均：1489枚</text></text></view>
				</view>
				<view class="qiun-charts">
					<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
				</view>
			</view>
			<view class="maskBox">
				
			</view>
		</view>
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">鸽蛋产量<text>(单位：枚)</text><text class="u_title_right"><text>共计：9899枚</text><text>平均：1489枚</text></text></view>
				</view>
				<view class="qiun-charts">
					<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
				</view>
			</view>
			<view class="maskBox">
				
			</view>
		</view>
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">鸽蛋产量<text>(单位：枚)</text><text class="u_title_right"><text>共计：9899枚</text><text>平均：1489枚</text></text></view>
				</view>
				<view class="qiun-charts">
					<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
				</view>
			</view>
			<view class="maskBox">
				
			</view>
		</view>
	</view>
	
</template>
<script>
	import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.js';
	var _self;
	var canvaColumn = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',

			}
		},
		onLoad() {
			console.log(1)
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		// methods: {
		// 	getServerData() {
				
		// 		var Column = {
		// 			categories: ["6", "7", "8", "9", "10", "11", "12"],
					
		// 			series: [{
		// 				name: '',
		// 				data: [8200, 4600, 7900, 9900, 4923, 8200, 6500]
		// 			}]
		// 		}
		// 		_self.showColumn("canvasColumn", Column)
		// 	},
		// 	showColumn(canvasId, chartData) {
		// 		canvaColumn = new uCharts({
		// 			$this: _self,
		// 			canvasId: canvasId,
		// 			type: 'column',
		// 			legend: {show:true},
		// 			fontSize: 11,
		// 			background: '#FFFFFF',
		// 			pixelRatio: _self.pixelRatio,
		// 			animation: false,
		// 			categories: chartData.categories,
		// 			series: chartData.series,
		// 			xAxis: {
						
		// 				disableGrid: true,
		// 			},
		// 			yAxis: {
		// 				disableGrid:false,
		// 				disabled:true,
		// 				splitNumber: 5,
		// 				min: 0,
		// 				max: 10000,
		// 			},
		// 			legend:{
		// 				show:true,
						
		// 			},
		// 			dataLabel:false,
		// 			dataPointShape:true,
		// 			width: _self.cWidth * _self.pixelRatio,
		// 			height: _self.cHeight * _self.pixelRatio,
		// 			// extra: {
		// 			// 	lineStyle: 'straight',
		// 			// 	column: {
		// 			// 		type: 'group',
		// 			// 		width: _self.cWidth * _self.pixelRatio * 0.35 / chartData.categories.length
		// 			// 	}
		// 			// }
		// 			extra: {
		// 			    column: {
		// 			        // 颜色支持线性渐变
		// 					width: _self.cWidth * _self.pixelRatio * 0.25 / chartData.categories.length,
		// 			        color: {
		// 			            type: 'linear',
		// 			            colorStops: [{
		// 			                offset: 0, color: '#377BE4' // 0% 处的颜色
		// 			            }, {
		// 			                offset: 1, color: '#ff0000' // 100% 处的颜色
		// 			            }],
		// 			            global: false // 缺省为 false
		// 			        }, 
		// 			        // 圆角半径，单位px，必须传入数组分别指定 4 个圆角半径
		// 			        barBorderRadius: [10, 10, 0, 0],
		// 			        // 半圆边框
		// 			        barBorderCircle: true,
		// 			        // 透明渐变（值范围0到1，自下而上渐变透明显示column条，值越小透明程度越高）
		// 			        opacityColor:0.7 ,
		// 			        // 白色渐变（值范围0到1，自下而上向白色渐变显示column条，值越大白色程度越高）
		// 			        linearColor: 0,
		// 			        //多series之间的间距
		// 			        seriesGap:2
					        
		// 			    },
						
		// 			}
		// 		});
				
		// 	},
		// 	touchColumn(e){
		// 		canvaColumn.showToolTip(e, {
		// 			format: function (item, category) {
		// 				if(typeof item.data === 'object'){
		// 					return category + ' ' + item.name + ':' + item.data.value 
		// 				}else{
		// 					return category + ' ' + item.name + ':' + item.data 
		// 				}
		// 			}
		// 		});
		// 	},
		// }
		methods: {
					getServerData(){
						var Column = {
									categories: ["6", "7", "8", "9", "10", "11", "12"],
									
									series: [{
										name: '',
										data: [8200, 4600, 7900, 9900, 4923, 8200, 6500]
									}]
								}
								_self.showColumn("canvasColumn", Column)
					},
					showColumn(canvasId,chartData){
						canvaColumn=new uCharts({
							$this:_self,
							canvasId: canvasId,
							type: 'column',
							legend:{show:true},
							fontSize:11,
							background:'#FFFFFF',
							pixelRatio:_self.pixelRatio,
							animation: false,
							categories: chartData.categories,
							series: chartData.series,
							xAxis: {
								disableGrid:true,
							},
							yAxis: {
								//disabled:true
								splitNumber: 5,
											min: 0,
											max: 10000,
							},
							dataLabel: false,
							width: _self.cWidth*_self.pixelRatio,
							height: _self.cHeight*_self.pixelRatio,
							extra: {
								type: 'group',
								width: _self.cWidth * _self.pixelRatio * 0.35 / chartData.categories.length,
										    column: {
										        // 颜色支持线性渐变
												width: _self.cWidth * _self.pixelRatio * 0.25 / chartData.categories.length,
										        color: {
										            type: 'linear',
										            colorStops: [{
										                offset: 0, color: '#377BE4' // 0% 处的颜色
										            }, {
										                offset: 1, color: '#ff0000' // 100% 处的颜色
										            }],
										            global: false // 缺省为 false
										        }, 
										        // 圆角半径，单位px，必须传入数组分别指定 4 个圆角半径
										        barBorderRadius: [10, 10, 0, 0],
										        // 半圆边框
										        barBorderCircle: true,
										        // 透明渐变（值范围0到1，自下而上渐变透明显示column条，值越小透明程度越高）
										        opacityColor:0.7 ,
										        // 白色渐变（值范围0到1，自下而上向白色渐变显示column条，值越大白色程度越高）
										        linearColor: 0,
										        //多series之间的间距
										        seriesGap:2
										        
										    },
											
										}
						});
						
					},
					touchColumn(e){
						canvaColumn.showToolTip(e, {
							format: function (item, category) {
								if(typeof item.data === 'object'){
									return category + ' ' + item.name + ':' + item.data.value 
								}else{
									return category + ' ' + item.name + ':' + item.data 
								}
							}
						});
					},
				}
	}
</script>
<style lang="scss" scoped>
	.reportContainer{
		padding-bottom: 96rpx;
	}
	page {
		background: #F2F2F2;
		width: 750upx;
		overflow-x: hidden;
	}

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}

	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		// margin-top: 10upx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 100%;
		padding: 30rpx 30rpx 0;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		height: 32rpx;
		line-height: 32rpx;
		border-left: 4upx solid #377be4;
		padding-left: 19rpx;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
		position: relative;
		text{
			margin-left: 20rpx;
			font-size: 22rpx;
			color: #979797;
		}
		.u_title_right{
			position: absolute;
			top: 0;
			right: 0;
			font-size: 22rpx;
			text{
				color: #343434;
			}
			text:nth-child(1){
				margin-right: 40rpx;
				
			}
		}
	}

	.qiun-charts {
		width: 750upx;
		height: 464upx;
		padding-top: 10rpx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height:460upx;
		background-color: #FFFFFF;
	}
	
	.reportContainer {
		background-color: #f4f6fa;
					font-weight: 500;
		.report_head {
			width: 750rpx;
			height: 88rpx;
			padding: 30rpx;
			margin: 1rpx 0;
			display: flex;
			justify-content: space-between;
			border-top: 2rpx solid #f4f6fa;
			background-color: #fff;
	
			.report_head_left {
				font-size: 30rpx;

				color: #151515;
	
				image {
					margin-left: 9rpx;
					width: 12rpx;
					height: 22rpx;
				}
			}
	
			.report_head_right {
				font-size: 24rpx;
				color: #377be4;
			}
		}
	
		.report_time {
			height: 88rpx;
			line-height: 88rpx;
			border-top: 3rpx solid #f4f6fa;
			padding: 0 30rpx;
			display: flex;
			justify-content: space-between;
			background-color: #fff;
			.report_time_left{
				display: flex;
				justify-content: space-between;
				image{
					width: 22rpx;
					height: 12rpx;
					margin-left: 10rpx;
				}
				.start{
					font-size: 24rpx;
					color: #151515;

				}
				.to{
					margin: 0 20rpx;
				}
			}
			.report_time_right{
				width: 120rpx;
				height: 56rpx;
				margin: auto 0;
				border: 1rpx solid #377be4;
				border-radius: 28rpx;
				text-align: center;
				line-height: 56rpx;
				font-size: 24rpx;
				color: #377be4;
			}
		}
		.uchars_box{
			margin-top: 20rpx;
			margin-bottom: 30rpx;
			position: relative;
		}
	}
	.maskBox{
		width: 100%;
		height: 40rpx;
		position: absolute;
		z-index: 999;
		background-color: #fff;
		bottom: -8rpx;
	}
	
</style>
