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
					<text>{{sta_time}}</text>
					<image src="../../static/report/bt_zk.png" mode=""></image>
				</view>
				<text class="to">至</text>
				<view class="end" @click="showEndPRTimePopup">
					<text>{{end_time}}</text>
					<image src="../../static/report/bt_zk.png" mode=""></image>
				</view>
			</view>
			<view class="report_time_right" @click="getReportData">
				查询
			</view>
		</view>
		<!-- #ifdef APP-PLUS || H5 -->
	
		
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">鸽蛋产量<text>(单位：枚)</text><text class="u_title_right"><text>共计：{{chartData.sum||0}}枚</text><text>平均：{{chartData.all||0}}枚</text></text></view>
				</view>
				<view class="qiun-charts">
					<qiun-data-charts style="width: 100%;" canvasId="dsfgdgads123adeerwaer2adfgh" type="column" :chartData="chartData"
					 :errorShow="false" :canvas2d="true" background="none" :ontouch="true" :inScrollView="true" key="gedankey"  @getIndex="getIndex"/>
					<view class="timeClass">
						{{currentName}}
					</view>
				</view>
			</view>
		</view>
		<!-- #endif -->
		<!--  -->
<!-- #ifdef MP-WEIXIN -->
<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">鸽蛋产量<text>(单位：枚)</text><text class="u_title_right"><text>共计：{{chartData.sum||0}}枚</text><text>平均：{{chartData.all||0}}枚</text></text></view>
				</view>
				<view class="qiun-charts">
					<qiun-data-charts style="width: 100%;" canvasId="dsfgdgads123adeerwaer2adfgh" type="column" :chartData="chartData"
					 :errorShow="false" :canvas2d="true" background="none" :ontouch="true" :inScrollView="true" key="gedankey"  :tooltipShow="false"  />
					<view class="timeClass">
						{{currentName}}
					</view>
				</view>
			</view>
		</view>
<!-- #endif -->
<!-- #ifdef APP-PLUS || H5 -->
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">乳鸽产量<text>(单位：只)</text><text class="u_title_right"><text>共计：{{rgColumn.sum||0}}只</text><text>平均：{{rgColumn.all||0}}只</text></text></view>
				</view>
				<view class="qiun-charts">
					<qiun-data-charts style="width: 100%;" type="column" canvasId="rugeclid" :chartData="rgColumn" :errorShow="false"
					 :canvas2d="true" background="none" :ontouch="true" :inScrollView="true" key="rugeclidkey"  @getIndex="getIndex"/>
					<view class="timeClass">
						{{currentName}}
					</view>
				</view>
			</view>

		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">乳鸽产量<text>(单位：只)</text><text class="u_title_right"><text>共计：{{rgColumn.sum||0}}只</text><text>平均：{{rgColumn.all||0}}只</text></text></view>
				</view>
				<view class="qiun-charts">
					<qiun-data-charts style="width: 100%;" type="column" canvasId="rugeclid" :chartData="rgColumn" :errorShow="false"
					 :canvas2d="true" background="none" :ontouch="true" :inScrollView="true" key="rugeclidkey"  :tooltipShow="false" />
					<view class="timeClass">
						{{currentName}}
					</view>
				</view>
			</view>
		
		</view>
		<!-- #endif -->
		<view class="uchars_box">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">童鸽产量<text>(单位：只)</text><text class="u_title_right"><text>共计：{{tgColumn.sum||0}}只</text><text>平均：{{tgColumn.all||0}}只</text></text></view>
				</view>
				<view class="qiun-charts">
					<!-- <canvas canvasId="canvasColumn" id="canvasColumn" type="2d" class="charts" @tap="tap($event,'canvasColumn')"/> -->
					<qiun-data-charts style="width: 100%;" type="column" canvasId="tonggeclid" :chartData="tgColumn" :errorShow="false"
					 :canvas2d="true" background="none" :ontouch="true" :inScrollView="true" key="tonggeclkey" />
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
					<qiun-data-charts style="width: 100%;" type="column" canvasId="sitaoliangid" :chartData="stColumn" :errorShow="false"
					 :canvas2d="true" background="none" :ontouch="true" :inScrollView="true" key="sitaoliangkey" />
					<view class="timeClass">
						{{currentName}}
					</view>
				</view>
			</view>

		</view>

		<!--  -->
		<lb-picker ref="startPRTime" mode="dateSelector" :value="sta_time" :level="3" radius="20rpx" confirm-color="#377BE4"
		 @confirm='pRtime'>

			<view slot="confirm-text">完成</view>
		</lb-picker>
		<lb-picker ref="endPRTime" mode="dateSelector" :zyj="true" :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='pEtime'>
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
			<view slot="confirm-text">完成</view>
		</lb-picker>
		<lb-picker ref="pRWarehouseChange" :list="list" :props="myProps" radius="20rpx" confirm-color="#377BE4" @confirm='pRWarehouseChange'>
			<view slot="confirm-text">完成</view>
		</lb-picker>
	</view>

</template>
<script>
	import LbPicker from '@/components/lb-picker'

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
				list: [],
				block_id: 0,
				end_time: '',
				sta_time: '',
				gdColumn: {},
				cccdata: {

					"categories": [
						"2016",
						"2017",
						"2018",
						"2019",
						"2020",
						"2021"
					],
					"series": [{
							"name": "目标值",
							"data": [
								35,
								36,
								31,
								33,
								13,
								34
							]
						},
						{
							"name": "完成量",
							"data": [
								18,
								27,
								21,
								24,
								6,
								28
							]
						}
					]

				},
				rgColumn: {

				},
				tgColumn: {

				},
				stColumn: {

				},
				myProps: {
					label: 'name',
					value: 'id'
				},
				blockName: '所有仓',
				currentId: 'month',
				currentName: '月',
				chartData: {}
			}
		},
		onLoad() {

		},

		methods: {
			getIndex(e){
				console.log(e)
			},
			tap(e) {
				console.log(e)
			},
			currentTime(id, name) {
				this.currentId = id
				this.currentName = name
			},
			pRtime(e) {
				console.log(e.value)
				this.sta_time = e.value
			},
			pEtime(e) {
				console.log(e.value)
				this.end_time = e.value
			},
			pRWarehouseChange(e) {
				console.log(e)
				this.blockName = e.item.name
				this.block_id = e.item.id
			},
			showStartPRTimePopup() {
				this.$refs.startPRTime.show()
			},
			showEndPRTimePopup() {
				this.$refs.endPRTime.show()
			},
			showPRWarehousePopup() {
				this.$refs.pRWarehouseChange.show()
			},


			touchLine(e) {
				canvaColumn.scrollStart(e);
			},
			moveLine(e) {
				canvaColumn.scroll(e);
			},
			touchEndLine(e) {
				canvaColumn.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaColumn.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			// 
			touchLineA(e) {
				canvaColumnA.scrollStart(e);
			},
			moveLineA(e) {
				canvaColumnA.scroll(e);
			},
			touchEndLineA(e) {
				canvaColumnA.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaColumnA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			// 
			touchLineB(e) {
				canvaColumnB.scrollStart(e);
			},
			moveLineB(e) {
				canvaColumnB.scroll(e);
			},
			touchEndLineB(e) {
				canvaColumnB.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaColumnB.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			// 
			touchLineC(e) {
				canvaColumnC.scrollStart(e);
			},
			moveLineC(e) {
				canvaColumnC.scroll(e);
			},
			touchEndLineC(e) {

				canvaColumnC.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaColumnC.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			getReportData() {
				const {
					block_id,
					sta_time,
					end_time,
					currentId: time_type
				} = this
				this.$http.post('/CageData/report.html', {
						uid: this.userInfo.id,
						block_id,
						sta_time,
						end_time,
						time_type
					})
					.then((res) => {
						console.log(res)
						const obj = {
							all: res.data['鸽蛋'].all,
							sum: res.data['鸽蛋'].sum,
							categories: res.data['鸽蛋'].lat,
							series: [{
								name: '',
								data: res.data['鸽蛋'].lng,
							}]
						}
						this.chartData = JSON.parse(JSON.stringify(obj))


						this.rgColumn = {
							all: res.data['乳鸽'].all,
							sum: res.data['乳鸽'].sum,
							categories: res.data['乳鸽'].lat,
							series: [{
								name: '',
								data: res.data['乳鸽'].lng,
							}]
						}
						this.tgColumn = {
							all: res.data['童鸽'].all,
							sum: res.data['童鸽'].sum,
							categories: res.data['童鸽'].lat,
							series: [{
								name: '',
								data: res.data['童鸽'].lng,
							}]
						}
						this.stColumn = {
							all: res.data['死淘'].all,
							sum: res.data['死淘'].sum,
							categories: res.data['死淘'].lat,
							series: [{
								name: '',
								data: res.data['死淘'].lng,
							}]
						}

						console.log(this.chartData, this.rgColumn, this.tgColumn, this.stColumn)
					}).catch((err) => {
						console.log(err)
					})
			},
			getToday() {
				let Dates = new Date();
				let Y = Dates.getFullYear();
				let M = Dates.getMonth() + 1;
				let staM = 0
				let staY = 0
				if (M > 6) {
					staM = M - 6
				} else {
					staM = M + 12 - 6
					staY = Y - 1
				}
				console.log(staM)
				let D = Dates.getDate();
				let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				let sTimes = staY + (staM < 10 ? "-0" : "-") + staM + (D < 10 ? "-0" : "-") + D;
				// this.drugUseForm.time_m = M < 10?  '0'+ M : M
				this.end_time = times
				this.sta_time = sTimes

			},
			getAllBlock() {
				this.$http.post('/CageData/AllBlock.html', {
						uid: this.userInfo.id
					})
					.then((res) => {
						console.log(res)
						this.list = res.data
					}).catch((err) => {
						console.log(err)
					})
			}
		},
		computed: {
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),

		},
		created() {

		},
		onLoad() {
			this.getToday()

			this.getAllBlock()
			this.getReportData()
		}
	}
</script>
<style lang="scss" scoped>
	.reportContainer {
		padding-bottom: 96rpx;
		background: #F2F2F2;
		min-height: calc(100vh);

		.zyj {
			width: 305rpx;
			display: flex;
			justify-content: space-between;
			padding: 20rpx 40rpx 0;

			view {
				width: 40rpx;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;

			}
		}

		.zyjB {
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

		text {
			margin-left: 20rpx;
			font-size: 22rpx;
			color: #979797;
		}

		.u_title_right {
			position: absolute;
			top: 0;
			right: 0;
			font-size: 22rpx;

			text {
				color: #343434;
			}

			text:nth-child(1) {
				margin-right: 40rpx;

			}
		}
	}

	.charts-box {
		width: 100%;
		height: 300px;
	}

	.qiun-charts {
		width: 700upx;
		height: 380upx;
		padding-top: 10rpx;
		background-color: #FFFFFF;
		display: flex;
	}

	.timeClass {
		position: absolute;
		bottom: 24rpx;
		right: 30rpx;
		font-size: 22rpx;
		font-weight: 500;
		color: #343434;
	}

	.charts {
		width: 700upx;
		height: 370upx;
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

			.report_time_left {
				display: flex;
				justify-content: space-between;

				image {
					width: 22rpx;
					height: 12rpx;
					margin-left: 10rpx;
				}

				.start {
					font-size: 24rpx;
					color: #151515;

				}

				.to {
					margin: 0 20rpx;
				}
			}

			.report_time_right {
				width: 120rpx;
				height: 56rpx;
				margin: auto 0;
				border: 1rpx solid #377be4;
				border-radius: 28rpx;
				text-align: center;
				line-height: 56rpx;
				font-size: 24rpx;
				color: #377be4;
				border-top: 1rpx solid #377be4;
			}
		}

		.uchars_box {
			margin-top: 20rpx;
			background-color: #fff;
			position: relative;
		}
	}

	.maskBox {
		width: 100%;
		height: 40rpx;
		position: absolute;
		z-index: 999;
		background-color: #fff;
		bottom: 20rpx;
	}
</style>
