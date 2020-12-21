<template>
	<view class="myFont">
		<uni-calendar 
		:insert="true"
		:start-date="'2019-3-2'"
		:end-date="'2019-5-20'"
		@change="change"
		:showMonth="false"
		></uni-calendar>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				show:true,
				mode: 'date'
			}
		},
		methods: {
			 change(e) {
			            console.log(e);
			        }
		}
	}
</script>

<style lang="scss" scoped>
	.calendar{
		height: 598rpx;
	}

</style>
