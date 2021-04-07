<template>
	<view class="myFont reportContainer">
		<view class="report_head">
			<view class="report_head_left" @click="showPRWarehousePopup">
				<text>{{blockName}}</text>
				<image src="@/static/report/report_zk.png" mode=""></image>
			</view>
			<view class="report_head_right">
				打印报表
			</view>
		</view>
		<view class="report_time">
			<view class="report_time_left">
				<view class="start" @click="showStartPRTimePopup">
					<text>{{sta_time}}</text><image src="../../static/report/bt_zk.png" mode=""></image>
				</view>
				<text class="to">至</text>
				<view class="end" @click="showEndPRTimePopup">
					<text>{{end_time}}</text><image src="../../static/report/bt_zk.png" mode=""></image>
				</view>
			</view>
			<view class="report_time_right" @click="getReportData">
				查询
			</view>
		</view>
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">鸽蛋产量<text>(单位：枚)</text><text class="u_title_right"><text>共计：{{gdColumn.sum||0}}枚</text><text>平均：{{gdColumn.all||0}}枚</text></text></view>
				</view>
				<view class="qiun-charts">
					<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchLine" @touchmove="moveLine" @touchend="touchEndLine"></canvas>
					<view class="timeClass">
						{{currentName}}
					</view>
				</view>
			</view>
			
		</view>
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">乳鸽产量<text>(单位：只)</text><text class="u_title_right"><text>共计：{{rgColumn.sum||0}}只</text><text>平均：{{rgColumn.sum||0}}只</text></text></view>
				</view>
				<view class="qiun-charts">
					<canvas canvas-id="rgcanvasColumn" id="rgcanvasColumn" class="charts" @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
					<view class="timeClass">
						{{currentName}}
					</view>
				</view>
			</view>
			
		</view>
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">童鸽产量<text>(单位：只)</text><text class="u_title_right"><text>共计：{{tgColumn.sum||0}}只</text><text>平均：{{tgColumn.sum||0}}只</text></text></view>
				</view>
				<view class="qiun-charts">
					<canvas canvas-id="tgcanvasColumn" id="tgcanvasColumn" class="charts" @touchstart="touchLineB" @touchmove="moveLineB" @touchend="touchEndLineB"></canvas>
					<view class="timeClass">
						{{currentName}}
					</view>
				</view>
			</view>
			
		</view>
		
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">死淘量<text>(单位：只)</text><text class="u_title_right"><text>共计：{{stColumn.sum||0}}只</text><text>平均：{{stColumn.all||0}}只</text></text></view>
				</view>
				<view class="qiun-charts">
					<canvas canvas-id="stcanvasColumn" id="stcanvasColumn" class="charts" @touchstart="touchLineC" @touchmove="moveLineC" @touchend="touchEndLineC"></canvas>
					<view class="timeClass">
						{{currentName}}
					</view>
				</view>
			</view>
			
		</view>
		<lb-picker ref="startPRTime" mode="dateSelector"    :value="sta_time" :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='pRtime'>
					
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="endPRTime" mode="dateSelector" :zyj="true" :cancel-text="''" :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='pEtime'>
			<view slot="action-zyj" class="zyj">
				<view :class="{zyjB:currentId === 'week'}" @click="currentTime('week','周')">
				周
				</view>
				<view :class="{zyjB:currentId === 'month'}" @click="currentTime('month','月')">
				月
				</view>
				<view :class="{zyjB:currentId === 'season'}" @click="currentTime('season','季')">
				季
				</view>
			</view>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="pRWarehouseChange" :list="list" :props="myProps" radius="20rpx" confirm-color="#377BE4" @confirm='pRWarehouseChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
	</view>
	
</template>
<script>
	import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.js';
	import LbPicker from '@/components/lb-picker'
	var _self;
	var canvaColumn = null;
	var canvaColumnA = null;
	var canvaColumnB = null;
	var canvaColumnC = null;
	import {
		mapState
	} from 'vuex'
	export default {
		components: {
		     LbPicker
		   },
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',
				list:[],
				block_id:0,
				end_time:'',
				sta_time:'',
				gdColumn:{},
				rgColumn:{
		
				},
				tgColumn:{	
					
				},
				stColumn:{
					
				},
				myProps: {
					label: 'name',
					value: 'id'
				},
				blockName:'所有仓',
				currentId:'month',
				currentName:'月'
			}
		},
		onLoad() {
			console.log(1)
			_self = this;
			this.cWidth = uni.upx2px(700);
			this.cHeight = uni.upx2px(370);
		},
		
		methods: {
			currentTime(id,name){
				this.currentId=id
				this.currentName=name
			},
			pRtime(e){
				console.log(e.value)
				this.sta_time=e.value
			},
			pEtime(e){
				console.log(e.value)
				this.end_time=e.value
			},
			pRWarehouseChange(e){
				console.log(e)
				this.blockName=e.item.name
				this.block_id=e.item.id
			},
			showStartPRTimePopup(){
				this.$refs.startPRTime.show()
			},
			showEndPRTimePopup(){
				this.$refs.endPRTime.show()
			},
			showPRWarehousePopup(){
				this.$refs.pRWarehouseChange.show()
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
					enableScroll: true,
					xAxis: {
						disableGrid:true,
						axisLine:false,
						itemCount:6,
								
					},
					yAxis: {
						//disabled:true
						splitNumber: 5,
						
					},
					
					dataLabel: false,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					legend:{show:false},
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
					        barBorderCircle: true,
					        // 透明渐变（值范围0到1，自下而上渐变透明显示column条，值越小透明程度越高）
					        opacityColor:0.7 ,
					        // 白色渐变（值范围0到1，自下而上向白色渐变显示column条，值越大白色程度越高）
					        linearColor: 0,
					        //多series之间的间距
					        seriesGap:2,
					    },
						markLine: {
						            type: "solid",
						            dashLength: 4,
						            data: []
						}
						
						}
				});
				
			},
			showColumnA(canvasId,chartData){
				canvaColumnA=new uCharts({
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
					enableScroll: true,
					xAxis: {
						disableGrid:true,
						axisLine:false,
						itemCount:6,
								
					},
					yAxis: {
						//disabled:true
						splitNumber: 5,
						
					},
					
					dataLabel: false,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					legend:{show:false},
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
					        barBorderCircle: true,
					        // 透明渐变（值范围0到1，自下而上渐变透明显示column条，值越小透明程度越高）
					        opacityColor:0.7 ,
					        // 白色渐变（值范围0到1，自下而上向白色渐变显示column条，值越大白色程度越高）
					        linearColor: 0,
					        //多series之间的间距
					        seriesGap:2,
					    },
						markLine: {
						            type: "solid",
						            dashLength: 4,
						            data: []
						}
						
						}
				});
				
			},
			showColumnB(canvasId,chartData){
				canvaColumnB=new uCharts({
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
					enableScroll: true,
					xAxis: {
						disableGrid:true,
						axisLine:false,
						itemCount:6,
								
					},
					yAxis: {
						//disabled:true
						splitNumber: 5,
						
					},
					
					dataLabel: false,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					legend:{show:false},
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
					        barBorderCircle: true,
					        // 透明渐变（值范围0到1，自下而上渐变透明显示column条，值越小透明程度越高）
					        opacityColor:0.7 ,
					        // 白色渐变（值范围0到1，自下而上向白色渐变显示column条，值越大白色程度越高）
					        linearColor: 0,
					        //多series之间的间距
					        seriesGap:2,
					    },
						markLine: {
						            type: "solid",
						            dashLength: 4,
						            data: []
						}
						
						}
				});
				
			},
			showColumnC(canvasId,chartData){
				canvaColumnC=new uCharts({
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
					enableScroll: true,
					xAxis: {
						disableGrid:true,
						axisLine:false,
						itemCount:6,
								
					},
					yAxis: {
						//disabled:true
						splitNumber: 5,
						
					},
					
					dataLabel: false,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					legend:{show:false},
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
					        barBorderCircle: true,
					        // 透明渐变（值范围0到1，自下而上渐变透明显示column条，值越小透明程度越高）
					        opacityColor:0.7 ,
					        // 白色渐变（值范围0到1，自下而上向白色渐变显示column条，值越大白色程度越高）
					        linearColor: 0,
					        //多series之间的间距
					        seriesGap:2,
					    },
						markLine: {
						            type: "solid",
						            dashLength: 4,
						            data: []
						}
						
						}
				});
				
			},
			touchLine(e){
				canvaColumn.scrollStart(e);
			},
			moveLine(e) {
				canvaColumn.scroll(e);
			},
			touchEndLine(e) {
				canvaColumn.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaColumn.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			// 
			touchLineA(e){
				canvaColumnA.scrollStart(e);
			},
			moveLineA(e) {
				canvaColumnA.scroll(e);
			},
			touchEndLineA(e) {
				canvaColumnA.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaColumnA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			// 
			touchLineB(e){
				canvaColumnB.scrollStart(e);
			},
			moveLineB(e) {
				canvaColumnB.scroll(e);
			},
			touchEndLineB(e) {
				canvaColumnB.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaColumnB.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			// 
			touchLineC(e){
				canvaColumnC.scrollStart(e);
			},
			moveLineC(e) {
				canvaColumnC.scroll(e);
			},
			touchEndLineC(e) {
				
				canvaColumnC.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaColumnC.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			getReportData(){
				const {block_id,sta_time,end_time,currentId:time_type}=this
				this.$http.post('/CageData/report.html',{uid:this.userInfo.id,block_id,sta_time,end_time,time_type})
				.then((res)=>{
					console.log(res)
					this.gdColumn={
					all:res.data['鸽蛋'].all,
					sum:res.data['鸽蛋'].sum,
					categories: res.data['鸽蛋'].lat,
					series:[{
						name: '',
						data: res.data['鸽蛋'].lng,
					}]}
					this.rgColumn={
					all:res.data['乳鸽'].all,
					sum:res.data['乳鸽'].sum,
					categories: res.data['乳鸽'].lat,
					series:[{
						name: '',
						data: res.data['乳鸽'].lng,
					}]}
					this.tgColumn={
					all:res.data['童鸽'].all,
					sum:res.data['童鸽'].sum,
					categories: res.data['童鸽'].lat,
					series:[{
						name: '',
						data: res.data['童鸽'].lng,
					}]}
					this.stColumn={
					all:res.data['死淘'].all,
					sum:res.data['死淘'].sum,
					categories: res.data['死淘'].lat,
					series:[{
						name: '',
						data: res.data['死淘'].lng,
					}]}
					this.showColumn("canvasColumn", this.gdColumn)
					this.showColumnA("rgcanvasColumn", this.rgColumn)
					this.showColumnB("tgcanvasColumn", this.tgColumn)
					this.showColumnC("stcanvasColumn", this.stColumn)
				}).catch((err)=>{
					console.log(err)
				})
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				  let staM = 0
				  let staY = 0
				  if(M > 6){
					staM = M - 6
				  }else{
					staM=  M + 12 - 6 
					staY = Y -1
				  }
				  console.log(staM)
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				  let sTimes = staY + (staM < 10 ? "-0" : "-") + staM + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				 this.end_time=times
				 this.sta_time=sTimes
					
			},
			getAllBlock(){
				this.$http.post('/CageData/AllBlock.html',{uid:this.userInfo.id})
				.then((res)=>{
					console.log(res)
					this.list=res.data
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
		created() {
			this.getToday()
			this.getReportData()
			this.getAllBlock()
		}
	}
</script>
<style lang="scss" scoped>
	.reportContainer{
		padding-bottom: 96rpx;
		background: #F2F2F2;
		min-height: calc(100vh);
		.zyj{
			width: 305rpx;
			display: flex;
			justify-content: space-between;
			padding: 20rpx 40rpx 0;
			view{
				width: 40rpx;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				
			}
		}
		.zyjB{
			border-bottom: 4rpx solid #377BE4;
		}
	}
	// page {
	// 	background: #F2F2F2;
	// 	width: 750upx;
	// 	overflow-x: hidden;
	// }

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
		width: 700upx;
		height: 380upx;
		padding-top: 10rpx;
		background-color: #FFFFFF;
		display: flex;
	}
	.timeClass{
		position: absolute;
		bottom: 24rpx;
		right: 30rpx;
		font-size: 22rpx;
		font-weight: 500;
		color: #343434;
	}
	.charts {
		width: 700upx;
		height:370upx;
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
			background-color: #fff;
			position: relative;
		}
	}
	.maskBox{
		width: 100%;
		height: 40rpx;
		position: absolute;
		z-index: 999;
		background-color: #fff;
		bottom: 20rpx;
	}
	
</style>
