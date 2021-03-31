<template >
	<view class="productionWarehouseChangeContainer">
		<view class="records_top">
			<view class="records_top_i">
				<text class="records_top_i_left">仓号</text>
				<view class="records_top_i_right">
					<text class="records_top_i_right_text">{{queryData.groupNumber}}</text>
					<!-- <image src="../../static/report/report_zk.png" mode=""></image> -->
				</view>
			</view>
			<view class="records_top_i">
				<text class="records_top_i_left">鸽笼编号</text>
				<view class="records_top_i_right" @click="pigeonCageShow">
					<text class="records_top_i_right_text">{{queryData.warehouseNumber}}</text>
					<!-- <image src="../../static/report/report_zk.png" mode=""></image> -->
				</view>
			</view>
			<view class="records_top_i">
				<text class="records_top_i_left">日期</text><text class="records_top_i_right">{{queryData.time}}</text>
			</view>
		</view>
		
		<!-- 种鸽 -->
		<view v-if="queryData.name === '种鸽'" class="">
			<view class="records_breedingPigeon_modify">
				<view class="records_breedingPigeon_modify_head">
					<view class="records_breedingPigeon_modify_head_top">
						<view class="records_breedingPigeon_modify_head_top_left">
							<image src="../../static/daiban/ht_p.png" mode=""></image>
							<view>种鸽</view>
						</view>
						<view class="">
							<text class="alarm">{{queryData.text}}</text>
							<text style="font-size: 24rpx;font-weight: 500;color: #343434;" v-if="queryData.ageday">日龄：{{queryData.ageday}}天</text>
						</view>
					</view>
					<view class="records_breedingPigeon_modify_bt">当前存栏：<text>{{queryData.num}}</text>只</view>
				</view>
			</view>
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_add_c">
					</view>
					<view class="r_pigeon__t r_pigeon_add_t">
						增加
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>新增(外购)</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>新增(自繁)</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>补仓</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>并窝</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
			</view>
			<!-- 减少 -->
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_reduce_c">
					</view>
					<view class="r_pigeon__t r_pigeon_reduce_t">
						减少
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>病残淘汰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>病残销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>屠宰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死亡</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 鸽蛋 -->
		<view v-if="queryData.name === '鸽蛋'" class="">
			<view class="records_breedingPigeon_modify">
				<view class="records_breedingPigeon_modify_head">
					<view class="records_breedingPigeon_modify_head_top">
						<view class="records_breedingPigeon_modify_head_top_left">
							<image src="../../static/daiban/ht_b.png" mode=""></image>
							<view>鸽蛋</view>
						</view>
						<!-- <text class="alarm">需要补足种鸽！</text> -->
						<view class="">
							<text class="alarm">{{queryData.text}}</text>
							<text style="font-size: 24rpx;font-weight: 500;color: #343434;" v-if="queryData.ageday">日龄：{{queryData.ageday}}天</text>
						</view>
					</view>
					<view class="records_breedingPigeon_modify_bt">当前存栏：<text>{{queryData.num}}</text>只</view>
				</view>
			</view>
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_add_c">
					</view>
					<view class="r_pigeon__t r_pigeon_add_t">
						增加
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>新生</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>拼窝</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>枚</text>
					</view>
				</view>
				
			</view>
			<!-- 减少 -->
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_reduce_c">
					</view>
					<view class="r_pigeon__t r_pigeon_reduce_t">
						减少
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>破损</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>臭蛋</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>残次蛋</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>无精蛋</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死精蛋</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>转入孵化机</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>枚</text>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 乳鸽 -->
		<view v-if="queryData.name === '乳鸽'" class="">
			<view class="records_breedingPigeon_modify">
				<view class="records_breedingPigeon_modify_head">
					<view class="records_breedingPigeon_modify_head_top">
						<view class="records_breedingPigeon_modify_head_top_left">
							<image src="../../static/daiban/ht_g.png" mode=""></image>
							<view>乳鸽</view>
						</view>
						<view class="">
							<text class="alarm">{{queryData.text}}</text>
							<text style="font-size: 24rpx;font-weight: 500;color: #343434;" v-if="queryData.ageday">日龄：{{queryData.ageday}}天</text>
						</view>
					</view>
					<view class="records_breedingPigeon_modify_bt">当前存栏：<text>{{queryData.num}}</text>只</view>
				</view>
			</view>
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_add_c">
					</view>
					<view class="r_pigeon__t r_pigeon_add_t">
						增加
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>出雏</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>并窝</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>转入孵化机</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				
			</view>
			<!-- 减少 -->
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_reduce_c">
					</view>
					<view class="r_pigeon__t r_pigeon_reduce_t">
						减少
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>病残淘汰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>病残销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>屠宰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死亡</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				
				
			</view>
		</view>
		<!-- 童鸽 -->
		<view v-if="queryData.name === '童鸽'" class="">
			<view class="records_breedingPigeon_modify">
				<view class="records_breedingPigeon_modify_head">
					<view class="records_breedingPigeon_modify_head_top">
						<view class="records_breedingPigeon_modify_head_top_left">
							<image src="../../static/daiban/ht_o.png" mode=""></image>
							<view>童鸽</view>
						</view>
						<view class="">
							<text class="alarm">{{queryData.text}}</text>
							<text style="font-size: 24rpx;font-weight: 500;color: #343434;" v-if="queryData.ageday">日龄：{{queryData.ageday}}天</text>
						</view>
					</view>
					<view class="records_breedingPigeon_modify_bt">当前存栏：<text>{{queryData.num}}</text>只</view>
				</view>
			</view>
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_add_c">
					</view>
					<view class="r_pigeon__t r_pigeon_add_t">
						增加
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>选育</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				
				
			</view>
			<!-- 减少 -->
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_reduce_c">
					</view>
					<view class="r_pigeon__t r_pigeon_reduce_t">
						减少
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>病残淘汰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>病残销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>屠宰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死亡</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>转入育雏室</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 育雏仓 -->
		<view v-if="queryData.name === '育雏仓'" class="">
			<view class="records_breedingPigeon_modify">
				<view class="records_breedingPigeon_modify_head">
					<view class="records_breedingPigeon_modify_head_top">
						<view class="records_breedingPigeon_modify_head_top_left">
							<image src="../../static/daiban/ht_o.png" mode=""></image>
							<view>育雏仓</view>
						</view>
						<view class="">
							<text class="alarm">{{queryData.text}}</text>
							<text style="font-size: 24rpx;font-weight: 500;color: #343434;" v-if="queryData.ageday">日龄：{{queryData.ageday}}天</text>
						</view>
					</view>
					<view class="records_breedingPigeon_modify_bt">当前存栏：<text>{{queryData.num}}</text>只</view>
				</view>
			</view>
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_add_c">
					</view>
					<view class="r_pigeon__t r_pigeon_add_t">
						增加
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>生产仓转入</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				
				
			</view>
			<!-- 减少 -->
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_reduce_c">
					</view>
					<view class="r_pigeon__t r_pigeon_reduce_t">
						减少
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>病残淘汰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				
				<view class="r_pigeon_add_i">
					<text>屠宰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死亡</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>转入飞棚</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 飞鹏仓 -->
		<view v-if="queryData.name === '飞鹏仓'" class="">
			<view class="records_breedingPigeon_modify">
				<view class="records_breedingPigeon_modify_head">
					<view class="records_breedingPigeon_modify_head_top">
						<view class="records_breedingPigeon_modify_head_top_left">
							<image src="../../static/daiban/ht_o.png" mode=""></image>
							<view>飞鹏仓</view>
						</view>
						<view class="">
							<text class="alarm">{{queryData.text}}</text>
							<text style="font-size: 24rpx;font-weight: 500;color: #343434;" v-if="queryData.ageday">日龄：{{queryData.ageday}}天</text>
						</view>
					</view>
					<view class="records_breedingPigeon_modify_bt">当前存栏：<text>{{queryData.num}}</text>只</view>
				</view>
			</view>
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_add_c">
					</view>
					<view class="r_pigeon__t r_pigeon_add_t">
						增加
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>育雏仓转入</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>转仓</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>生产仓转入</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
			</view>
			<!-- 减少 -->
			<view class="r_pigeon_add">
				<view class="add_box">
					<view class="r_pigeon_reduce_c">
					</view>
					<view class="r_pigeon__t r_pigeon_reduce_t">
						减少
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>病残淘汰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>屠宰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死亡</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>补入种鸽</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode=""></image>
						<view class="inputBox">
							<input ref="inp" v-model="inpData" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur" maxlength="4"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode=""></image>
						<text>只</text>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 保存按钮 -->
		<view class="" style="height: 398rpx;">
			<view class="records_save_btn" @click="saveRecord">
				保存
			</view>
		</view>
		<neil-modal 
		    :show="saveModalShow" 
		    @close="closeSaveModal" 
			:cancel-color="'#377BE4'"
			:align="'center'"
		    title="" 
		    content="确定提交日记录？"
		    @cancel="saveBtn('cancel')" 
		    @confirm="saveBtn('confirm')">
		</neil-modal>
		<neil-modal
		    :show="true" 
		    @close="closesTipModal" 
			:cancel-color="'#377BE4'"
			:align="'center'"
		    title="当日最多可修改3次记录" 
		    content=""
		    @cancel="tipsBtn('cancel')" 
		    @confirm="tipsBtn('confirm')">
			<view class="" style="font-size: 28rpx;font-weight: 500;padding-bottom: 42rpx;">
				今日剩余修改次数<text style="color: #377BE4;margin-left: 25rpx;">{{changeNumber}}</text>
			</view>
		</neil-modal>
		<neil-modal
		    :show="false" 
		    @close="closeWarningModal" 
			:cancel-color="'#E64329'"
			:cancel-text="'取消修改'"
			:confirm-text="'好的'"
		    title="异常警报" 
		    content=""
		    @cancel="warningBtn('cancel')" 
		    @confirm="warningBtn('confirm')">
			<view class="" style="padding-bottom: 50rpx;">
				<view class="warningBox" style="display:felx;">
					<text style="width:168rpx;display: inline-block;color: #E64329;">种鸽需补足</text><text>生产仓122</text><text style="margin-left: 29rpx;" >编号：212</text>
				</view>
				<view class="warningBox" style="display: flex;margin-top: 10rpx;">
					<text style="width: 168rpx;display: inline-block;color: #E64329;">死淘异常</text><text >生产仓122</text><text style="margin-left: 29rpx;">编号：212</text>
				</view>
				<view class="warningBox" style="text-align: right;margin-top: 5rpx;">
					<text style="margin-right: 99rpx;">种鸽</text><text style="margin-right: 49rpx;">死淘率6%</text><text>20只</text>
				</view>
				<view class="warningBox" style="text-align: right;margin-top: 5rpx;">
					<text style="margin-right: 99rpx;">种鸽</text><text style="margin-right: 49rpx;">死淘率6%</text><text>20只</text>
				</view>
			</view>
		</neil-modal>
	</view>
</template>

<script>
	import neilModal from '@/components/neil-modal/neil-modal.vue';
	import {
		mapState
	} from 'vuex'
	export default {
		 components: {neilModal},
		data() {
			return {
				saveModalShow: false,
				visible: false,
				selector: [{
						label: "一"
					},
					{
						label: "二"
					},
					{
						label: "三"
					}
				],
				defaultIndex: [0],
				inpData:0,
				pCShow:false,
				// 
				queryData:{},
				changeNumber:null,
				dataForm:{
					cage_id:null,
					time:null,
					dove_type:null,
					added_wit:null,
					conesting:null,
					brood:null,
					hatch:null,
					breeding:null,
					added_out:null,
					replenish:null,
					massacre:null,
					death:null,
					disease:null,
					disease_sell:null,
					dead_eggs:null,
					sell:null,
					shift_to:null,
				}
			};
		},
		methods: {
			// dialog
			
			onBlur(e){	
			},
			saveRecord(){
				this.saveModalShow=true
			},
			pigeonCageShow(){
				this.pCShow=true
			},
			pigeonCageClose(){
				this.pCShow=false
			},
			saveBtn(e){
				console.log(e)
			},
			closeSaveModal(e){
				this.saveModalShow=false
			},
			closeWarningModal(){
				
			},
			tipsBtn(){
				
			},
			closesTipModal(){
				
			},
			getFrequencyData(){
				this.$http.post('/CageData/frequency.html',{uid:this.userInfo.id})
				.then((res)=>{
					console.log(res)
					this.changeNumber=res.data.frequency
				}).catch((err)=>{
					console.log(err)
				})
			}
			
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
		created() {
			this.getFrequencyData()

		},
		onLoad({query}) {
			this.queryData = JSON.parse(query)
			this.dataForm.cage_id=this.queryData.cage_id
			this.dataForm.time=this.queryData.time
			this.dataForm.uid=this.userInfo.id
			this.dataForm.dove_type=this.queryData.name
			console.log(query)
		}
	}
</script>

<style lang="scss" scoped>
.productionWarehouseChangeContainer{
	background-color: #f4f6fa;
	padding-top: 20rpx;
	font-weight: 500rpx;
	
	.records_top {
		background-color: #fff;
	
		.records_top_i {
			height: 88rpx;
			line-height: 88rpx;
			padding: 0 30rpx;
			display: flex;
			justify-content: space-between;
			border-bottom: 2rpx solid #f4f6fa;
	
			.records_top_i_left {
				font-size: 30rpx;
				color: #151515;
			}
	
			.records_top_i_right {
				font-size: 28rpx;
				color: #343434;
	
				.records_top_i_right_text {
					// margin-right: 20rpx;
				}
	
				image {
					width: 12rpx;
					height: 22rpx;
					margin-left: 20rpx;
				}
			}
		}
	
	}
	
	.records_breedingPigeon {
		margin-top: 20rpx;
	
		.records_breedingPigeon_item {
			height: 140rpx;
			background-color: #fff;
			padding:30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
	
			.records_breedingPigeon_item_left {
				width: 338rpx;
				display: flex;
				// padding-right: 20rpx;
				justify-content: space-between;
	
				image {
					width: 80rpx;
					height: 80rpx;
					background-color: #afc;
					border-radius: 50%;
				}
	
				.records_breedingPigeon_item_left_t {
					height: 80rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
	
					text:nth-child(1) {
						font-size: 36rpx;
						color: #151515;
					}
	
					text:nth-child(2) {
						font-size: 22rpx;
						color: #e64329;
						margin-left: 20rpx;
					}
	
					view {
						// margin-top: 8rpx;
						font-size: 24rpx;
						color: #676767;
					}
				}
	
			}
	
			.records_breedingPigeon_item_right {
				width: 140rpx;
				height: 60rpx;
				border: 1rpx solid #377be4;
				border-radius: 30rpx;
				font-size: 30rpx;
				color: #377be4;
				text-align: center;
				line-height: 60rpx;
			}
		}
	}
	
	.records_breedingPigeon_modify {
		margin-top: 20rpx;
		height: 120rpx;
		padding:24rpx 30rpx 0;
		background-color: #fff;
	
		.records_breedingPigeon_modify_head_top {
			height: 40rpx;
			display: flex;
			justify-content: space-between;
	
			.records_breedingPigeon_modify_head_top_left {
				width: 117rpx;
				display: flex;
				justify-content: space-between;
				font-size: 30rpx;
				color: #151515;
	
				image {
					width: 40rpx;
					height: 40rpx;
					// background-color: #afc;
				}
			}
	
			.alarm {
				font-size: 24rpx;
				color: #e64329;
			}
	
		}
	
		.records_breedingPigeon_modify_bt {
			height: 28rpx;
			margin: 4rpx 0 0 55rpx;
			font-size: 24rpx;
			color: #979797;
	
			text {
				font-size: 28rpx;
				font-weight: 400;
				color: #151515;
				margin-right: 10rpx;
			}
		}
	
	}
	
	.r_pigeon_add {
		margin-top: 10rpx;
		background-color: #fff;
		// padding: 27rpx 0 0;
		
	
		.add_box {
			height: 80rpx;
			// width: 110rpx;
			display: flex;
			// justify-content: space-between;
			margin-left: 36rpx;
			line-height: 80rpx;
			.r_pigeon_add_c {
				width: 28rpx;
				height: 28rpx;
				border: 8rpx solid #377be4;
				border-radius: 50%;
				position: relative;
				top: 50%;
				transform: translateY(-50%);
			}
			.r_pigeon_reduce_c{
				width: 28rpx;
				height: 28rpx;
				border: 8rpx solid #e64329;
				border-radius: 50%;
				position: relative;
				top: 50%;
				transform: translateY(-50%);
				
			}
			.r_pigeon__t{
				font-size: 30rpx;
				margin-left: 23rpx;
			}
			.r_pigeon_add_t {
				
				color: #377be4;
				
			}
			.r_pigeon_reduce_t{
				color: #E64329;
			}
		}
		.r_pigeon_add_i{
			height: 88rpx;
			display: flex;
			justify-content: space-between;
			border-top: 1rpx solid #f4f6fa;
			padding: 0 30rpx;
			
			text:first-child{
				line-height: 88rpx;
				font-size: 30rpx;
				color: #151515;
			}
			.r_pigeon_add_i_right{
				width: 191rpx;	
				display: flex;
				justify-content: space-between;
				
				.r_bule{
					color: #377be4;
				}
				.r_red{
					color: #e64329;
				}
				.inputBox{
					height: 26rpx;
					line-height: 26rpx;
					margin: auto 12rpx;
					text-align: center;
					position: relative;
					top: -4rpx;
				}
				input{
					display: block;
					width: 80rpx;
					// padding-top: 8rpx;
					max-height: 26rpx;
					
					// line-height: 10rpx;
					font-size: 28rpx;
					float: left;
				}
				text{
					font-size: 28rpx;
					line-height: 88rpx;
					margin-left: 14rpx;
					color: #343434;
				}
				
				
				
				.jiahao{
					width: 22rpx;
					height: 22rpx;
					margin: auto 0;
				}
				.jianhao{
					width: 22rpx;
					height: 2rpx;
					margin:auto 0;
				}
				
			}
			
			
			
		}
	}
	.records_save_btn{
		width: 670rpx;
		height: 88rpx;
		background-color: #377be4;
		border-radius: 44rpx;
		margin: 100rpx auto 210rpx;
		text-align: center;
		line-height: 88rpx;
		font-size: 34rpx;
		color: #fff;
	}
	.warningBox{
		padding: 0 30rpx;
		font-size: 24rpx !important;
	}
	
	
}
</style>
