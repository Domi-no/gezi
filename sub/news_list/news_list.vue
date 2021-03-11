<template>
	<view class="myFont nl_container">
		<my-news :news="newsList"></my-news>
		<view class="news_list_bt">
			已经到底了~.~
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		methods: {
			
		},
		onLoad(e){
			console.log(JSON.parse(e.query))
			this.newsList =JSON.parse(e.query)
		}
	}
</script>

<style lang="scss" scoped>
	.nl_container{
		padding: 0 30rpx;
		.news_list_bt{
			margin-top: 49rpx;
			text-align: center;
		}
	}

</style>
