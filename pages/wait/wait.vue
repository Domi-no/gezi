<template>
	<view class="waitContainer">
			<view class="swiper">
				<u-swiper :list="list" indicator-pos="bottomRight" height="300"></u-swiper>
			</view>
			<view class="" v-for="(i,idx) in waitData" :key="idx">
				<view class="administration">
					{{i.title}}
				</view>
				<view class="administration_box">
					<view class="administration_box_item" v-for="(item,index) in waitData[idx].item" :key="'1'+index" @click="goToItemPage(item.url)">
						<view class="a_i_box">
							<image class="administration_box_item_img" :src="item.icon" mode=""></image>
						</view>
						<text>{{item.i_name}}</text>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	import uSwiper from '@/uview-ui/components/u-swiper/u-swiper.vue';
	export default {
		components:{
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
				waitData:[
					{
						title:'管理',
						item:[
							{
								i_name:'打卡',
								icon:'../../static/daiban/daka.png',
								url:'/sub/clock_in/clock_in'
							},
							{
								i_name:'请假',
								icon:'../../static/daiban/qingjia.png',
								url:'/sub/ask_for_leave/ask_for_leave'
							}
						]
					},
					{
						title:'工作记录',
						item:[
							{
								i_name:'疫苗使用',
								icon:'../../static/daiban/ymsy.png',
								url:'/sub/vaccine_use/vaccine_use'
							},
							{
								i_name:'药品使用',
								icon:'../../static/daiban/ypsy.png',
								url:'/sub/drug_use/drug_use'
							},
							{
								i_name:'无害化处理',
								icon:'../../static/daiban/whhcl.png',
								url:'/sub/harmless_treatment/harmless_treatment'
							},
							{
								i_name:'饲料消耗',
								icon:'../../static/daiban/slxh.png',
								url:'/sub/feed_consumption/feed_consumption'
							},
							{
								i_name:'鸽舍消杀',
								icon:'../../static/daiban/gsxs.png',
								url:'/sub/cage_sterilize/cage_sterilize'
							},
							{
								i_name:'环境监测',
								icon:'../../static/daiban/hjjc.png'
							}
						]
					}
					,
					{
						title:'出入库管理',
						item:[
							{
								i_name:'药品出入库',
								icon:'../../static/daiban/ypcrk.png',
								url:'/sub/drug_d_s/drug_d_s'
							},
							{
								i_name:'粮食仓储管理',
								icon:'../../static/daiban/lsccgl.png',
								url:'/sub/food_d_s/food_d_s'
							}
						]
					},
					
					{
						title:'销售管理',
						item:[
							{
								i_name:'销售数据',
								icon:'../../static/daiban/xssj.png',
								url:'/sub/sale/sale'
							},
							
						]
					}
				]
			}
		},
		methods: {
			goToItemPage(url){
				uni.navigateTo({
					url
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.waitContainer{
		background-color: #fff;
		// height: 100%;
		padding: 36rpx 30rpx 40rpx;
		.swiper{
			// padding: 0 30rpx;
		}
		.administration{
			font-size: 36rpx;
			color: #151515;
			font-weight: bold;
			margin-top: 60rpx;
		}
		.administration_box{
			width: 690rpx;
			margin-top: 30rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 2rpx 12rpx 0rpx rgba(0, 0, 0, 0.1);
			border-radius: 20rpx;
			display: flex;
			flex-wrap: wrap;
			.administration_box_item{
				width: 172rpx;
				height: 160rpx;
				font-size: 24rpx;
				text-align: center;
				font-weight: 500;
				color: #343434;
				padding-top: 34rpx;
				.a_i_box{
					
					.administration_box_item_img{
						margin: 0 auto;
						width: 64rpx;
						height: 64rpx;
					}
				}
				
			}

		}
	}

</style>
