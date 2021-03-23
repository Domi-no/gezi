<template>
	<view class="i_o_records_container">
		<view class="topBox">
			<text>交易类型</text>
			<view class="transactionType">
				<view :class="currentId === 0 ? 'currentItem' : ''" @click="currentChange(0)">
					全部
				</view>
				<view :class="currentId === 2 ? 'currentItem' : ''" @click="currentChange(2)">
					出库
				</view>
				<view :class="currentId === 1 ? 'currentItem' : ''" @click="currentChange(1)">
					入库
				</view>
			</view>
		</view>
		<view class="topBox">
			<text>时间年月</text>
			<view class="transactionTime">
				2020-12<image src="../../static/daiban/btm_zk.png" mode=""></image>
			</view>
		</view>
		<view class="i_o_records_Box" >
			<view class="i_o_records_Item" v-for="(item,idx) in inOutRecordsList" :key="idx">
				<view class="sterilizeHead">
					<view class="warehouse">
						{{item.drugs_name}}
					</view>
					<view :class="item.out_reason === '入库' ? 'outName' : 'name'">
						{{item.out_reason}}
					</view>
				</view>
				<view class="sterilizeDetail">
					<view class="">
						<text>出库数量</text><text>{{item.number}}</text>
					</view>
					<view class="">
						<text>合计金额</text><text>￥{{item.price}}</text>
					</view>
					<view class="">
						<text>批准人</text><text>{{item.approved}}</text>
					</view>
					<view class="">
						<text>出库时间</text><text>{{item.creatime}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				currentId:0,
				inOutRecordsList:[]
			}
		},
		methods: {
			currentChange(id){
				this.currentId=id
				this.getInOutRecordsData()
			},
			getInOutRecordsData(){
				this.inOutRecordsList=[]
				this.$http.post('/Vaccin/beLaidUp.html', {uid: this.userInfo.id,type:this.currentId})
				.then((res) => {
						console.log(res)
						this.inOutRecordsList = res.data
						console.log(this.inOutRecordsList)
					}).catch((err) => {
						
					})
			}
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
		created() {
			this.getInOutRecordsData()
		}
	}
</script>

<style lang="scss" scoped>
	.i_o_records_container{
		min-height: calc(100vh - 88rpx);
		background-color: #F4F6FA;
		padding-bottom: 30rpx;
		.topBox{
			width: 100%;
			height: 88rpx;
			display: flex;
			padding: 0 30rpx;
			
			border-top: 2rpx solid #F4F6FA;
			background-color: #fff;
			text{	
				font-size: 28rpx;
				font-weight: 500;
				color: #676767;
				line-height: 88rpx;
			}
			.transactionType{
				font-size: 28rpx;
				font-weight: 500;
				color: #C4C4C4;
				margin-left: 10rpx;
				display: flex;
				view{
					width: 110rpx;
					height: 46rpx;
					text-align: center;
					margin: auto 0 auto 20rpx;
					line-height: 46rpx;
				}
				.currentItem{
					background: #377BE4;
					opacity: 0.7;
					border-radius: 23px;
					color: #FFFFFF;
					
				}
			}
			.transactionTime{
				font-size: 28rpx;
				font-weight: 500;
				color: #151515;
				margin-left: 40rpx;
				line-height: 88rpx;
				image{
					width: 17rpx;
					height: 11rpx;
					position: relative;
					top: -4rpx;
					left: 12rpx;
				}
			}
			
		}
		.i_o_records_Box{
			.i_o_records_Item{
				width: 690rpx;
				height: 320rpx;
				background: #FFFFFF;
				box-shadow: 0px 2rpx 10rpx 0px rgba(0, 0, 0, 0.1);
				border-radius: 10rpx;
				margin: 30rpx auto 0;
				padding: 26rpx 20rpx 0;
				.sterilizeHead{
					display: flex;
					justify-content: space-between;
					border-bottom: 2rpx solid #E4E5E9;
					padding-bottom: 28rpx;
					.warehouse{
						height: 28rpx;
						font-size: 30rpx;
						font-weight: 500;
						color: #151515;
						padding-left: 13rpx;
						border-left: 4rpx solid #E64329;
						line-height: 24rpx;
					}
					.name{
						font-size: 24rpx;
						font-weight: 500;
						color: #E64329;
					}
					.outName{
						font-size: 24rpx;
						font-weight: 500;
						color: #377BE4;
					}
				}
				.sterilizeDetail{
					height: 210rpx;
					display: flex;
					flex-direction:column ;
					justify-content: space-around;
					view{
						display: flex;
						justify-content: space-between;
						text{
							font-size: 24rpx;
							font-weight: 500;
							color: #979797;
						}
						text:nth-child(2){
							color: #343434;
						}
					}
				}
			}
		}
	}

</style>
