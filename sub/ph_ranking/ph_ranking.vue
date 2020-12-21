<template>
	<view class="myFont r_container">
		<view class="r_inside_container">
			<view class="ranking_head">
				<view class="r_left">
					总鸽仓数:1250
				</view>
				<view class="r_right">
					数据截止:2020-12-12
				</view>
			</view>
			<view class="r_box" v-for="(item,idx) in r_data" :key="idx">
				<my-ranking></my-ranking>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				r_data:[1,2,3,4,5,6,7,8,9,10]
			}
		},
		methods: {
			
		},
		onLoad(option){
			
			console.log(option.query)
		}
	}
</script>

<style lang="scss" scoped>
.r_container{
	background-color: #fff;
	.r_inside_container{
		padding: 45rpx 30rpx 0;
		.ranking_head {
			display: flex;
			justify-content: space-between;
			.r_left{
				font-size: 30rpx;
				color: #216fe8;
				font-family: Bold;
			}
			.r_right{
				font-size: 24rpx;
				color: #979797;
			}
		}
		
	}
}
</style>
