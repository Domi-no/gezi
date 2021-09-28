<template>
	<view class="waitContainer">
		<view class="swiper">
			<u-swiper :list="bannerList" :name="'linkurl'" indicator-pos="bottomCenter" :indicator="{'background-color':'#A5A5AA'}"
			 height="300"></u-swiper>
		</view>
		<!-- #ifdef APP-PLUS||H5 -->
		<view class="" v-if="userInfo.DealtWith['管理']">
			<view class="administration">
				管理
			</view>
			<view class="administration_box">
				<view class="administration_box_item" v-if="userInfo.DealtWith['管理']['打卡']" @click="goToItemPage('/sub/clock_in/clock_in')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/daka.png" mode=""></image>
					</view>
					<text>打卡</text>
				</view>
				<view class="administration_box_item" v-if="userInfo.DealtWith['管理']['请假']" @click="goToItemPage('/sub/ask_for_leave/ask_for_leave')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/qingjia.png" mode=""></image>
					</view>
					<text>请假</text>
				</view>
			</view>
		</view>
		<view class="" v-if="userInfo.DealtWith['工作记录']">
			<view class="administration">
				工作记录
			</view>
			<view class="administration_box">
				<view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['疫苗使用']" @click="goToItemPage('/sub/vaccine_use/vaccine_use')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/ymsy.png" mode=""></image>
					</view>
					<text>疫苗使用</text>
				</view>
				<view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['药品使用']" @click="goToItemPage('/sub/drug_use/drug_use')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/ypsy.png" mode=""></image>
					</view>
					<text>药品使用</text>
				</view>
				<view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['无害化处理']" @click="goToItemPage('/sub/harmless_treatment/harmless_treatment')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/whhcl.png" mode=""></image>
					</view>
					<text>无害化处理</text>
				</view>
				<view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['饲料消耗']" @click="goToItemPage('/sub/feed_consumption/feed_consumption')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/slxh.png" mode=""></image>
					</view>
					<text>饲料消耗</text>
				</view>
				<view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['鸽舍消杀']" @click="goToItemPage('/sub/cage_sterilize/cage_sterilize')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/gsxs.png" mode=""></image>
					</view>
					<text>鸽舍消杀</text>
				</view>
				<!-- <view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['环境监测']" @click="goToItemPage()">
						<view class="a_i_box">
							<image class="administration_box_item_img" src="../../static/daiban/hjjc.png" mode=""></image>
						</view>
						<text>环境监测</text>
					</view> -->
			</view>
		</view>
		<view class="" v-if="userInfo.DealtWith['出入库管理']">
			<view class="administration">
				出入库管理
			</view>
			<view class="administration_box">
				<view class="administration_box_item" v-if="userInfo.DealtWith['出入库管理']['药品出入库']" @click="goToItemPage('/sub/drug_d_s/drug_d_s')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/ypcrk.png" mode=""></image>
					</view>
					<text>药品出入库</text>
				</view>
				<view class="administration_box_item" v-if="userInfo.DealtWith['出入库管理']['粮食仓储管理']" @click="goToItemPage('/sub/food_d_s/food_d_s')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/lsccgl.png" mode=""></image>
					</view>
					<text>粮食仓储管理</text>
				</view>
			</view>
		</view>
		<view class="" v-if="userInfo.DealtWith['销售管理']">
			<view class="administration">
				销售管理
			</view>
			<view class="administration_box">
				<view class="administration_box_item" v-if="userInfo.DealtWith['销售管理']['销售数据']" @click="goToItemPage('/sub/sale/sale')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/xssj.png" mode=""></image>
					</view>
					<text>销售数据</text>
				</view>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="">
			<view class="administration">
				工作记录
			</view>
			<view class="administration_box">
				<view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['疫苗使用']" @click="goToItemPage('/sub/vaccine_use/vaccine_use')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/ymsy.png" mode=""></image>
					</view>
					<text>疫苗使用</text>
				</view>
				<view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['药品使用']" @click="goToItemPage('/sub/drug_use/drug_use')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/ypsy.png" mode=""></image>
					</view>
					<text>药品使用</text>
				</view>
				<!-- <view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['无害化处理']"  @click="goToItemPage('/sub/harmless_treatment/harmless_treatment')">
						<view class="a_i_box">
							<image class="administration_box_item_img" src="../../static/daiban/whhcl.png" mode=""></image>
						</view>
						<text>无害化处理</text>
					</view> -->
				<view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['饲料消耗']" @click="goToItemPage('/sub/feed_consumption/feed_consumption')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/slxh.png" mode=""></image>
					</view>
					<text>饲料消耗</text>
				</view>
				<view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['鸽舍消杀']" @click="goToItemPage('/sub/cage_sterilize/cage_sterilize')">
					<view class="a_i_box">
						<image class="administration_box_item_img" src="../../static/daiban/gsxs.png" mode=""></image>
					</view>
					<text>鸽舍消杀</text>
				</view>
				<!-- <view class="administration_box_item" v-if="userInfo.DealtWith['工作记录']['环境监测']" @click="goToItemPage()">
						<view class="a_i_box">
							<image class="administration_box_item_img" src="../../static/daiban/hjjc.png" mode=""></image>
						</view>
						<text>环境监测</text> -->
			</view>
		</view>
		<!-- <view class="administration">
					{{wxWaitdata.title}}
				</view>
				<view class="administration_box">
					<view class="administration_box_item" v-for="(item,index) in wxWaitdata.item" :key="index" @click="goToItemPage(item.url)">
						<view class="a_i_box">
							<image class="administration_box_item_img" :src="item.icon" mode=""></image>
						</view>
						<text>{{item.i_name}}</text>
					</view>
				</view> -->
	</view>
	<!-- #endif -->
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import uSwiper from '@/uview-ui/components/u-swiper/u-swiper.vue';
	export default {
		components: {
			uSwiper
		},
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
					}
				],
				waitData: [{
						title: '管理',
						item: [{
								i_name: '打卡',
								icon: '../../static/daiban/daka.png',
								url: '/sub/clock_in/clock_in'
							},
							{
								i_name: '请假',
								icon: '../../static/daiban/qingjia.png',
								url: '/sub/ask_for_leave/ask_for_leave'
							}
						]
					},
					{
						title: '工作记录',
						item: [{
								i_name: '疫苗使用',
								icon: '../../static/daiban/ymsy.png',
								url: '/sub/vaccine_use/vaccine_use'
							},
							{
								i_name: '药品使用',
								icon: '../../static/daiban/ypsy.png',
								url: '/sub/drug_use/drug_use'
							},
							{
								i_name: '无害化处理',
								icon: '../../static/daiban/whhcl.png',
								url: '/sub/harmless_treatment/harmless_treatment'
							},
							{
								i_name: '饲料消耗',
								icon: '../../static/daiban/slxh.png',
								url: '/sub/feed_consumption/feed_consumption'
							},
							{
								i_name: '鸽舍消杀',
								icon: '../../static/daiban/gsxs.png',
								url: '/sub/cage_sterilize/cage_sterilize'
							},
							{
								i_name: '环境监测',
								icon: '../../static/daiban/hjjc.png'
							}
						]
					},
					{
						title: '出入库管理',
						item: [{
								i_name: '药品出入库',
								icon: '../../static/daiban/ypcrk.png',
								url: '/sub/drug_d_s/drug_d_s'
							},
							{
								i_name: '粮食仓储管理',
								icon: '../../static/daiban/lsccgl.png',
								url: '/sub/food_d_s/food_d_s'
							}
						]
					},

					{
						title: '销售管理',
						item: [{
								i_name: '销售数据',
								icon: '../../static/daiban/xssj.png',
								url: '/sub/sale/sale'
							},

						]
					}
				],
				wxWaitdata: {
					title: '工作记录',
					item: [{
							i_name: '疫苗使用',
							icon: '../../static/daiban/ymsy.png',
							url: '/sub/vaccine_use/vaccine_use'
						},
						{
							i_name: '药品使用',
							icon: '../../static/daiban/ypsy.png',
							url: '/sub/drug_use/drug_use'
						},
						{
							i_name: '饲料消耗',
							icon: '../../static/daiban/slxh.png',
							url: '/sub/feed_consumption/feed_consumption'
						},
						{
							i_name: '鸽舍消杀',
							icon: '../../static/daiban/gsxs.png',
							url: '/sub/cage_sterilize/cage_sterilize'
						}
					]
				},
				powerList: [],
				bannerList: [],
			}
		},
		methods: {
			goToItemPage(url) {
				uni.navigateTo({
					url
				});
			},
			showList() {

				// Object.keys(this.userInfo.DealtWith).forEach((value,index)=>{
				// 	console.log(value,this.userInfo.DealtWith[value])
				// 	this.powerList.push({title:value,children:this.userInfo.DealtWith[value]})
				// })
				
			},
			getBannerData() {
				this.$http.post('/Rank/Banner.html', {
						position: 2
					})
					.then((res) => {
						
						this.bannerList = res.data
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
			this.showList()
			this.getBannerData()
		}
	}
</script>

<style lang="scss" scoped>
	.waitContainer {
		background-color: #fff;
		min-height: calc(100vh);
		padding: 124rpx 30rpx 40rpx;

		.swiper {
			// padding: 0 30rpx;
		}

		.administration {
			font-size: 36rpx;
			color: #151515;
			font-weight: bold;
			margin-top: 60rpx;
		}

		.administration_box {
			width: 690rpx;
			margin-top: 30rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 2rpx 12rpx 0rpx rgba(0, 0, 0, 0.1);
			border-radius: 20rpx;
			display: flex;
			flex-wrap: wrap;

			.administration_box_item {
				width: 172rpx;
				height: 160rpx;
				font-size: 24rpx;
				text-align: center;
				font-weight: 500;
				color: #343434;
				padding-top: 34rpx;

				.a_i_box {

					.administration_box_item_img {
						margin: 0 auto;
						width: 64rpx;
						height: 64rpx;
					}
				}

			}

		}
	}
</style>
