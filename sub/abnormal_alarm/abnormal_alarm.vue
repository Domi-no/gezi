<template>
	<view class="myFont alertContainer">
		<view class="">
			<view class="alert_item">
				<view class="alert_item_title">
					<text class="alert_time">2020-12-20</text>
					<text v-if="isHandled" class="Processed">已处理</text>
					<text v-else class="untreated">未处理!</text>	
				</view>
				<!-- 判断数据是否有需补足和死淘  不同仓库需要上边框-->
				<view class="alert_content">
						<view class="a_containe_detail">
							<view class="a_containe_detail_bc">
								<text>种鸽需补充！</text><text>仓号2</text><text>组号</text><text>212</text>
							</view>
							<view class="a_containe_detail_st">
								<view class="a_containe_detail_st_title">
									<text>死淘异常！</text><text>仓号3</text><text>组号：</text><text>52</text>
								</view>
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>	
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>	
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>		
							</view>
						</view>
						<view class="a_containe_detail">
							<view class="a_containe_detail_bc">
								<text>种鸽需补充！</text><text>仓号2</text><text>组号</text><text>212</text>
							</view>
							<view class="a_containe_detail_st">
								<view class="a_containe_detail_st_title">
									<text>死淘异常！</text><text>仓号3</text><text>组号：</text><text>52</text>
								</view>
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>	
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>	
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>		
							</view>
						</view>
				</view>
				
			</view>
			<view class="alert_item">
				<view class="alert_item_title">
					<text class="alert_time">2020-12-20</text>
					<text v-if="isHandled" class="Processed">已处理</text>
					<text v-else class="untreated">未处理!</text>	
				</view>
				<!-- 判断数据是否有需补足和死淘  不同仓库需要上边框-->
				<view class="alert_content">
						<view class="a_containe_detail">
							<view class="a_containe_detail_bc">
								<text>种鸽需补充！</text><text>仓号2</text><text>组号</text><text>212</text>
							</view>
							<view class="a_containe_detail_st">
								<view class="a_containe_detail_st_title">
									<text>死淘异常！</text><text>仓号3</text><text>组号：</text><text>52</text>
								</view>
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>	
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>	
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>		
							</view>
						</view>
						<view class="a_containe_detail">
							<view class="a_containe_detail_bc">
								<text>种鸽需补充！</text><text>仓号2</text><text>组号</text><text>212</text>
							</view>
							<view class="a_containe_detail_st">
								<view class="a_containe_detail_st_title">
									<text>死淘异常！</text><text>仓号3</text><text>组号：</text><text>52</text>
								</view>
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>	
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>	
								<view class="a_containe_detail_st_gz">
									<text>种鸽需补充！</text><text>种鸽</text><text>死淘率6%</text><text>20只</text>
								</view>		
							</view>
						</view>
				</view>
				
			</view>
		</view>
		<view class="InTheEnd">
			已经到底了~. ~
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 是否处理
			isHandled:true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.alertContainer {
		min-height: calc(100vh);
		background-color: #f4f6fa;
		padding-top: 1rpx;
		padding-bottom: 60rpx;
		font-weight: 500;
		.alert_item {
			margin-top: 20rpx;
			background-color: #fff;
			.alert_item_title {
				height: 88rpx;
				display: flex;
				justify-content: space-between;
				line-height: 88rpx;
				padding: 0 30rpx;
				border-bottom: 1rpx solid #f4f6fa;
				.alert_time {
					font-size: 30rpx;
					color: #151515;
				}
				// 未处理
				.untreated {
					font-size: 24rpx;
					color: #e64329;
				}
				// 已处理
				.Processed {
					font-size: 24rpx;
					color: #377be4;
				}
			}
			.alert_content{
				font-size: 28rpx;
				padding: 0 30rpx 0;
				.a_containe_detail{
					border-bottom: 2rpx solid #f4f6fa;
					.a_containe_detail_bc{
						height: 84rpx;
						line-height: 84rpx;
						color: #343434;
						text:first-child{
							color: #e64329;
						}
						text:nth-child(2){
							margin: 0 60rpx;
						}
					}
					.a_containe_detail_st{
						.a_containe_detail_st_title{
							height: 57rpx;
							color: #343434;
							text:first-child{
								color: #e64329;
								margin-right: 28rpx;
							}
							text:nth-child(2){
								margin: 0 60rpx;
							}
						}
						.a_containe_detail_st_gz{
							height: 56rpx;
							text:first-child{
								visibility:hidden;
							}
							text:nth-child(2){
								margin: 0 63rpx;
							}
							text:nth-child(3){
								margin-left: 12rpx;
								margin-right: 60rpx;
							}
						}
					}
				}
			}
		}
		.InTheEnd{
			font-size: 24rpx;
			font-weight: 500;
			color: #979797;
			text-align: center;
			margin-top: 49rpx;
		}
	}
</style>
