<template>
	<view class="harmlessTreatmentContainer">
		<view class="hTTopBox" @click="hTTimePopupShow">
			<text>时间</text><view>{{record_time}}<image src="../../static/daiban/b_zk.png" mode=""></image></view>
		</view>
		<view class="" style="margin-top: 20rpx;">
			<view class="hTItem" @click="toTFInputPage(breedingPigeonData)">
				<view class="ht_left_box">
					<view class="ht_left_Img">
						<image src="../../static/daiban/ht_p.png" mode=""></image>
					</view>
					<view class="ht_left_detail">
						<view class="ht_left_detail_top">
							<text class="ht_num">种鸽死亡：{{breedingPigeonData.death_number}}</text>
							<text :class="{isHandle:breedingPigeonData.handle_number}">{{breedingPigeonData.handle_number?'已处理：'+breedingPigeonData.handle_number:'未处理'}}</text>
						</view>
						<text class="hTRemarks">备注：{{breedingPigeonData.submit_remarks}}</text>
					</view>
				</view>
				
				<image class="ht_zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="hTItem" @click="toTFInputPage(badEggData)">
				<view class="ht_left_box">
					<view class="ht_left_Img">
						<image src="../../static/daiban/ht_b.png" mode=""></image>
					</view>
					<view class="ht_left_detail">
						<view class="ht_left_detail_top">
							<text class="ht_num">臭蛋数量：{{badEggData.death_number}}</text><text :class="{isHandle:badEggData.handle_number}">{{badEggData.handle_number?'已处理：'+badEggData.handle_number:'未处理'}}</text>
						</view>
						<text class="hTRemarks">备注：{{badEggData.submit_remarks}}</text>
					</view>
				</view>
				
				<image class="ht_zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="hTItem" @click="toTFInputPage(squabData)">
				<view class="ht_left_box">
					<view class="ht_left_Img">
						<image src="../../static/daiban/ht_g.png" mode=""></image>
					</view>
					<view class="ht_left_detail">
						<view class="ht_left_detail_top">
							<text class="ht_num">乳鸽死亡：{{squabData.death_number}}</text><text :class="{isHandle:squabData.handle_number}">{{squabData.handle_number?'已处理：'+squabData.handle_number:'未处理'}}</text>
						</view>
						<text class="hTRemarks">备注：{{squabData.submit_remarks}}</text>
					</view>
				</view>
				
				<image class="ht_zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="hTItem" @click="toTFInputPage(childPigeonData)">
				<view class="ht_left_box">
					<view class="ht_left_Img">
						<image src="../../static/daiban/ht_o.png" mode=""></image>
					</view>
					<view class="ht_left_detail">
						<view class="ht_left_detail_top">
							<text class="ht_num">童鸽死亡：{{childPigeonData.death_number}}</text><text :class="{isHandle:childPigeonData.handle_number}">{{childPigeonData.handle_number?'已处理：'+childPigeonData.handle_number:'未处理'}}</text>
						</view>
						<text class="hTRemarks">备注：{{childPigeonData.submit_remarks}}</text>
					</view>
				</view>
				
				<image class="ht_zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="hTItem" @click="toTFInputPage(youngPigeonData)">
				<view class="ht_left_box">
					<view class="ht_left_Img">
						<image src="../../static/daiban/b_g.png" mode=""></image>
					</view>
					<view class="ht_left_detail">
						<view class="ht_left_detail_top">
							<text class="ht_num">青年鸽死亡：{{youngPigeonData.death_number}}</text><text :class="{isHandle:youngPigeonData.handle_number}">{{youngPigeonData.handle_number?'已处理：'+youngPigeonData.handle_number:'未处理'}}</text>
						</view>
						<text class="hTRemarks">备注：{{youngPigeonData.submit_remarks}}</text>
					</view>
				</view>
				
				<image class="ht_zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
		</view>
		<view class="handlerBox" v-if="harmlessTreatmentData.power == 0">
			<view class="toExamineBox" v-show="this.harmlessTreatmentData.submit !== '提交'">
				<view class="leaveReason">
					<view class="">
						审核结果：<text style="color: #E64329;" v-show="harmlessTreatmentData.text === '未通过'">未通过</text>
						<text style="color: #1D8A27;" v-show="harmlessTreatmentData.text === '通过'">通过</text>
						<text style="color: #377BE4;" v-show="harmlessTreatmentData.text === '审核中'">审核中</text>
					</view>
					<textarea     :value="harmlessTreatmentData.examine_remarks" disabled="true"  placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
				</view>
			</view>
			<view :class="{htSubmit:true,inReview:this.harmlessTreatmentData.text==='审核中'}" @click="submitForReview">
				{{this.harmlessTreatmentData.submit}}
			</view>
		</view>
		<view class="" v-else-if="harmlessTreatmentData.power == 1">
		<view class="leaveReason" v-show="isExamine" >
			
				<view class="">
					审核结果
				</view>
				<textarea   @input="examine_remarksChange"  :value="examine_remarks" placeholder="如果审核不通过，请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
				<view class="examineBtnBox">
					<view class="refuseBtn" @click="findingOfAuditChange(3)">
						拒绝
					</view>
					<view class="adoptBtn" @click="findingOfAuditChange(2)">
						通过
					</view>
				</view>
			
		</view>
		</view>
		<lb-picker ref="hTTime" mode="dateSelector"  :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='record_timeChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
	</view>
</template>

<script>
	import LbPicker from '@/components/lb-picker';
	import {
		mapState
	} from 'vuex'
	export default {
		components:{
			LbPicker
		},
		data() {
			return {
				record_time:'',
				harmlessTreatmentData:{},
				breedingPigeonData:'',
				badEggData:'',
				squabData:'',
				childPigeonData:'',
				youngPigeonData:'',
				type:'',
				examine_remarks:'',
				isExamine:true
			}
		},
		methods: {
			hTTimePopupShow(){
			this.$refs.hTTime.show()
			},
			toTFInputPage(data){
				data.record_time = this.record_time
				uni.navigateTo({
					url:'/sub/t_f_change/t_f_change?query='+JSON.stringify(data)
				});
			},
			record_timeChange(e){
				this.record_time=e.value
				this.getdefusingData()
			},
			examine_remarksChange({detail:{value}}){
			
				this.examine_remarks=value
			},
			dWremarks({detail:{value}}){
				this.harmlessTreatmentData.examine_remarks=value
			},
			submitForReview(){
				const {record_time}=this
				if(this.harmlessTreatmentData.submit === '提交'||this.harmlessTreatmentData.submit === '再次提交'){
					this.$http.post('/Sale/issue.html', {uid: this.userInfo.id,record_time})
					.then((res) => {
							console.log(res)
							if(res.code == 200){
								uni.showToast({
									title:'提交成功',
									icon: 'none'
								})
								this.isExamine=false
							}else{
								uni.showToast({
									title:'提交失败',
									icon: 'none'
								})
							}
						}).catch((err) => {
							
					})
				}
				this.getdefusingData()
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				 this.record_time=times
			},
			getdefusingData(){
				const { record_time }=this
				this.$http.post('/Sale/defusingRecord.html', {uid: this.userInfo.id,record_time})
				.then((res) => {
						console.log(res)
						this.harmlessTreatmentData=res.data
						Object.keys(res.data).forEach((value, index)=>{
							console.log(value, index,res.data[value]);
							console.log(res.data[value].death)
							switch(res.data[value].death){
								case '种鸽' :
								this.breedingPigeonData=res.data[value]
								console.log(1)
								break;
								case '臭蛋' :
								this.badEggData=res.data[value]
								console.log(2)
								break;
								case '乳鸽' :
								this.squabData=res.data[value]
								console.log(3)
								break;
								case '童鸽' :
								this.childPigeonData=res.data[value]
								console.log(4)
								break;
								case '青年鸽' :
								this.youngPigeonData=res.data[value]
								console.log(5)
								break;
							}
						});
						
						console.log(this.harmlessTreatmentData)
					}).catch((err) => {
						
				})
			},
			findingOfAuditChange(type){
				this.type=type
				const {examine_remarks}=this
				if(type === 3 && !examine_remarks){
					uni.showToast({
						title:'请输入备注',
						icon: 'none'
					})
					this.type= ''
					return false
				}
				this.$http.post('/Sale/adopt.html', {uid: this.userInfo.id,type,examine_remarks})
				.then((res) => {
						console.log(res)
						if(res.code == 200){
							uni.showToast({
								title:'审核成功',
								icon: 'none'
							})
							this.isExamine=false
						}else{
							uni.showToast({
								title:'审核失败',
								icon: 'none'
							})
						}
					}).catch((err) => {
						
				})
				this.getdefusingData()
			}
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
		onLoad({query}) {
			query?console.log(JSON.parse(query)):''
		},
		created() {
			this.getToday()
			this.getdefusingData()
		}
	}
</script>

<style lang="scss" scoped>
.harmlessTreatmentContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	/*  #ifdef  MP-WEIXIN */
	min-height: calc(100vh);
	/*  #endif  */
	.hTTopBox{
		width: 100%;
		height: 88rpx;
		background: #FFFFFF;
		padding: 0 30rpx;
		line-height: 88rpx;
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
		border-top: 2rpx solid #F4F6FA;;
		image{
			width: 12rpx;
			height: 22rpx;
			margin-left: 19rpx;
			position: relative;
			top: 2rpx;
		}
		view{
			font-size: 24rpx;
			color: #343434;
		}
	}
	.hTItem{
		width: 100%;
		height: 120rpx;
		background: #FFFFFF;
		border-top: 2rpx solid #F4F6FA;
		display: flex;
		justify-content: space-between;
		padding: 20rpx 30rpx 0;
		.ht_left_box{
			display: flex;
			justify-content: space-between;
		}
		.ht_left_Img{
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
		.ht_left_detail{
			width: 358rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #979797;
			margin-left: 19rpx;
			.ht_left_detail_top{
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				font-weight: 500;
				.ht_num{
					color: #151515;
				}
				.isHandle{
					color: #377BE4;
				}
				text:nth-child(2){
					width: 145rpx;
					text-align: left;
				}
				
			}
			.hTRemarks{
				display: block;
				margin-top: 14rpx;
			}
		}
		.ht_zk{
			width: 12rpx;
			height: 22rpx;
			position: relative;
			top: 50%;
			transform: translateY(-22rpx);
		}
	}
	.hTItem:first-child{
		border-top: 0;
	}
	.htSubmit{
		width: 670rpx;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		margin: 100rpx auto 46rpx;
		background: #377BE4;
		border-radius: 44rpx;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
	.inReview{
		background-color: #D1D2D3;
		color: #fff;
	}
	.handlerBox{
		padding-bottom: 46rpx;
	}
	.toExamineBox{
		min-height: 180rpx;
	}
	.leaveReason{
		// height: 320rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		font-size: 30rpx;
		font-weight: 500;
		
		padding: 26rpx 30rpx 42rpx;
		textarea{
			width: 660rpx;
			height: 172rpx;
			border: 1rpx solid #D1D2D3;
			margin-top: 14rpx;
			padding: 19rpx 15rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #979797;
			line-height: 42rpx;
		}
		.examineBtnBox{
			width: 550rpx;
			height: 64rpx;
			display: flex;
			font-size: 34rpx;
			font-weight: 500;
			
			margin: 100rpx auto 70rpx;
			text-align: center;
			justify-content: space-between;
			view{
				width: 200rpx;
				height: 64rpx;
				border-radius: 32rpx;
				line-height: 64rpx;
			}
			.refuseBtn{
				border: 2rpx solid #E64329;
				color: #E64329;
			}
			.adoptBtn{
				border: 2rpx solid #1D8A27;
				color: #1D8A27;
			}
		}
	}
}
</style>
