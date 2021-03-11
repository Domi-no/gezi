<template>
	<view class="myFont cage_container">
		<view class="cage_head">
			<view class="cage_pic">
				<view class="column" v-for="(item,idx) in cage_image" :key="idx" @click="toProductionPage(item.url)">
					<image :src="item.pic" mode=""></image>
					<view class="column_text">
						{{item.text}}
					</view>
				</view>
			</view>
		</view>
		<view class="_category">
			<view class="category_header">
				<view class="category_left">
					<text>2020-12-20</text>
					<image src="../../static/cage/cage_b_zk.png" mode=""></image>
				</view>
				<view class="category_right" @click="toPdata">
					<text>数据详情</text>
					<image src="../../static/cage/cage_s_zk.png" mode=""></image>
				</view>
			</view>
			<view class="_pigeon_type">
				<view class="_pigeon_type_top">
					<view class="_pigeon_type_top_left">
						<image src="../../static/daiban/ht_p.png" mode=""></image>
						<view class="_pigeon_type_top_left_zg">种鸽</view>
						<view class="_pigeon_type_top_left_mortality">死亡率：0.5%</view>
					</view>
					<view class="_pigeon_type_top_right">
						<text class="_pigeon_type_top_right_save">存栏</text>
						<text class="_pigeon_type_top_right_num">9999</text>
					</view>
				</view>
				<view class="_pigeon_type_bt">
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>残疾</text>
						</view><text class="_pigeon_type_bt_item_num">98</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>转出</text>
						</view><text class="_pigeon_type_bt_item_num">7878</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>死亡</text>
						</view><text class="_pigeon_type_bt_item_num">112</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>新增</text>
						</view>
						<text class="_pigeon_type_bt_item_num">4499</text>
					</view>
				</view>
			</view>
			<view class="_pigeon_type">
				<view class="_pigeon_type_top">
					<view class="_pigeon_type_top_left">
						<image src="../../static/daiban/ht_b.png" mode=""></image>
						<view class="_pigeon_type_top_left_zg">鸽蛋</view>
						<view class="_pigeon_type_top_left_mortality">死亡率：0.5%</view>
					</view>
					<view class="_pigeon_type_top_right">
						<text class="_pigeon_type_top_right_save">存栏</text>
						<text class="_pigeon_type_top_right_num">9999</text>
					</view>
				</view>
				<view class="_pigeon_type_bt">
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>破损</text>
						</view><text class="_pigeon_type_bt_item_num">98</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>入库</text>
						</view><text class="_pigeon_type_bt_item_num">7878</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>臭蛋</text>
						</view><text class="_pigeon_type_bt_item_num">112</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>转入孵化机</text>
						</view>
						<text class="_pigeon_type_bt_item_num">4499</text>
					</view>
				</view>
			</view>
			<view class="_pigeon_type">
				<view class="_pigeon_type_top">
					<view class="_pigeon_type_top_left">
						<image src="../../static/daiban/ht_g.png" mode=""></image>
						<view class="_pigeon_type_top_left_zg">乳鸽</view>
						<view class="_pigeon_type_top_left_mortality">死亡率：0.5%</view>
					</view>
					<view class="_pigeon_type_top_right">
						<text class="_pigeon_type_top_right_save">存栏</text>
						<text class="_pigeon_type_top_right_num">9999</text>
					</view>
				</view>
				<view class="_pigeon_type_bt">
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>残疾</text>
						</view><text class="_pigeon_type_bt_item_num">98</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>出售</text>
						</view><text class="_pigeon_type_bt_item_num">7878</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>死亡</text>
						</view><text class="_pigeon_type_bt_item_num">112</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>孵化机转入</text>
						</view>
						<text class="_pigeon_type_bt_item_num">4499</text>
					</view>
				</view>
			</view>
			<view class="_pigeon_type">
				<view class="_pigeon_type_top">
					<view class="_pigeon_type_top_left">
						<image src="../../static/daiban/ht_o.png" mode=""></image>
						<view class="_pigeon_type_top_left_zg">童鸽</view>
						<view class="_pigeon_type_top_left_mortality">死亡率：0.5%</view>
					</view>
					<view class="_pigeon_type_top_right">
						<text class="_pigeon_type_top_right_save">存栏</text>
						<text class="_pigeon_type_top_right_num">9999</text>
					</view>
				</view>
				<view class="_pigeon_type_bt">
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>残疾</text>
						</view><text class="_pigeon_type_bt_item_num">98</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>转至飞棚</text>
						</view><text class="_pigeon_type_bt_item_num">7878</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>死亡</text>
						</view><text class="_pigeon_type_bt_item_num">112</text>
					</view>
					
				</view>
			</view>
			<view class="_pigeon_type">
				<view class="_pigeon_type_top">
					<view class="_pigeon_type_top_left">
						<image src="../../static/daiban/b_g.png" mode=""></image>
						<view class="_pigeon_type_top_left_zg">青年鸽</view>
						<view class="_pigeon_type_top_left_mortality">死亡率：0.5%</view>
					</view>
					<view class="_pigeon_type_top_right">
						<text class="_pigeon_type_top_right_save">存栏</text>
						<text class="_pigeon_type_top_right_num">9999</text>
					</view>
				</view>
				<view class="_pigeon_type_bt">
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>残疾</text>
						</view><text class="_pigeon_type_bt_item_num">98</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>转至飞棚</text>
						</view><text class="_pigeon_type_bt_item_num">7878</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>死亡</text>
						</view><text class="_pigeon_type_bt_item_num">112</text>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cage_image: [{
						url: '/sub/charts/charts',
						pic: '../../static/cage/scbb.png',
						text: '生产报表'
					},
					{
						url: '/sub/production_calendar/production_calendar',
						pic: '../../static/cage/scrl.png',
						text: '生产日历'
					},
					{
						url: '/sub/abnormal_alarm/abnormal_alarm',
						pic: '../../static/cage/ycjb.png',
						text: '异常警报'
					},
					{
						url: '/sub/production_records/production_records',
						pic: '../../static/cage/sccgl.png',
						text: '生产仓管理'
					},
					{
						url: '/sub/production_records/production_records',
						pic: '../../static/cage/yccgl.png',
						text: '育雏仓管理'
					},
					{
						url: '/sub/production_records/production_records',
						pic: '../../static/cage/fpcgl.png',
						text: '飞棚仓管理'
					}
					
				]
			}
		},
		methods: {
			toProductionPage(url) {
				uni.navigateTo({
					url
				})
			},
			toPdata() {
				uni.navigateTo({
					url: '../../sub/production_data/production_data'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cage_container {
		background-color: #fff;
		padding-top: 40rpx;

		.cage_head {
			// height: 208rpx;
			padding: 0 30rpx 40rpx;

			.cage_pic {
				width: 690rpx;
				height: 360rpx;
				padding: 43rpx 73rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 2rpx 10rpx 0rpx rgba(4, 10, 61, 0.1);
				border-radius: 20rpx;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				text-align: center;
				margin: 0 auto;
				.column {
					font-size: 24rpx;
					margin-left: 92rpx;
					image {
						width: 76rpx;
						height: 80rpx;
					}

					.column_text {
						line-height: 10rpx;
					}
				}
				.column:nth-child(1){
					margin-left:0
				}
				.column:nth-child(4){
					margin-left:0
				}
			}
		}

		._category {
			border-top: 20rpx solid #f4f6fa;
			min-height: calc(100vh - 270rpx);
			padding: 40rpx 30rpx 300rpx;

			.category_header {
				position: relative;
				display: flex;
				justify-content: space-between;
				margin-bottom: 11rpx;

				.category_left {
					width: 199rpx;
					display: flex;
					justify-content: space-between;
					font-size: 30rpx;
					line-height: 25rpx;
					color: #151515;

					text {
						height: 30rpx;
					}

					image {
						width: 12rpx;
						height: 22rpx;
					}
				}

				.category_right {
					width: 117rpx;
					display: flex;
					justify-content: space-between;
					color: #979797;

					text {
						font-size: 24rpx;
						line-height: 32rpx;
					}

					image {
						padding-top: 5rpx;
						width: 12rpx;
						height: 22rpx;
					}
				}


			}


		}
		._pigeon_type {
			width: 690rpx;
			height: 210rpx;
			background: #FFFFFF;
			box-shadow: 0px 2rpx 10rpx 0px rgba(4, 10, 61, 0.1);
			border-radius: 20rpx;
			margin: 30rpx auto 0;
			._pigeon_type_top {
				
				height: 76rpx;
				border-bottom: 2rpx solid #e4e5e9;
				display: flex;
				justify-content: space-between;
				padding: 0rpx 30rpx 0;
				font-weight: 500;
				line-height: 76rpx;
				._pigeon_type_top_left {
					
					display: flex;
					image{
						width: 40rpx;
						height: 40rpx;
						
						margin:auto 12rpx auto 0;
					}
					._pigeon_type_top_left_zg {
						font-size: 30rpx;
						color: #151515;
					}
		
					._pigeon_type_top_left_mortality {
						
						height: 32rpx;
						background-color: rgba(251,226,223,0.7);
						border-radius: 4rpx;
						// text-align: center;
						margin-left: 20rpx;
						padding: 0 9rpx;
						color: #e96d59;
						font-size: 22rpx;
						
						margin:auto 0 auto 12rpx;
					
						line-height: 32rpx;
						
					}
				}
		
				._pigeon_type_top_right {
					._pigeon_type_top_right_save {
						font-size: 24rpx;
						color: #979797;
						margin-right: 13rpx;
					}
					
		
					._pigeon_type_top_right_num {
						font-size: 30rpx;
						color: #343434;
						font-weight: 300;
					}
				}
		
			}
			._pigeon_type_bt {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				padding: 30rpx;
			
				._pigeon_type_bt_item {
					height: 52rpx;
					font-size: 22rpx;
					margin-right: 125rpx;
					font-weight: 500;
					color: #979797;
					._pigeon_type_bt_item_text{
						width: 120rpx;
						display: inline-block;
						position: relative;
						text{
							position: absolute;
							top:-26rpx;
							right: 0;
						}
					}
					._pigeon_type_bt_item_num {
						font-size: 30rpx;
						font-weight: 400;
						color: #343434;
						font-family: SimHei;
						margin-left: 19rpx;
					}
					.leftBox{
						width: 100rpx !important;
					}
				}
			}
		
			
		
		}
	}
</style>
