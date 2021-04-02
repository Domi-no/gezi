<template >
	<view class="productionWarehouseChangeContainer">
		<view class="records_top" v-if="queryData.name !== '育雏仓'&& queryData.name !== '飞棚'" >
			<view class="records_top_i" >
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
		<view class="records_top" v-else>
			<view class="records_top_i" @click="otherWNPopupShow">
				<text class="records_top_i_left">仓号</text>
				<view class="records_top_i_right">
					<text class="records_top_i_right_text">{{queryData.groupNumber}}</text>
					<image src="../../static/report/report_zk.png" mode=""></image>
				</view>
			</view>
			<view class="records_top_i" v-if="queryData.name !== '飞棚'" @click="otherNumberPopupShow">
				<text class="records_top_i_left">鸽笼编号</text>
				<view class="records_top_i_right" @click="pigeonCageShow">
					<text class="records_top_i_right_text">{{queryData.warehouseNumber}}</text>
					<image src="../../static/report/report_zk.png" mode=""></image>
				</view>
			</view>
			<view class="records_top_i">
				<text class="records_top_i_left">日期</text><text class="records_top_i_right">{{dataForm.time}}</text>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('added_out','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.added_out" @input="added_outChange" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'added_out')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('added_out','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>新增(自繁)</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('added_wit','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.added_wit" @input="added_witChange" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'added_wit')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('added_wit','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>补仓</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('replenish','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.replenish" @input="replenishChange" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'replenish')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('replenish','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>并窝</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('conesting','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.conesting"  @input="conestingChange" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'conesting')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('conesting','add')"></image>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('disease','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.disease" @input="diseaseChange" class="r_red" type="number" @blur="onBlur($event,'disease')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('disease','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>病残销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('disease_sell','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.disease_sell" @input="disease_sellChange" class="r_red" type="number" @blur="onBlur($event,'disease_sell')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('disease_sell','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>屠宰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('massacre','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.massacre" @input="massacreChange" class="r_red" type="number" @blur="onBlur($event,'massacre')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('massacre','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死亡</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('death','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.death" @input="deathChange" class="r_red" type="number" @blur="onBlur($event,'death')"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('death','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('sell','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.sell" @input="sellChange" class="r_red" type="number" @blur="onBlur($event,'sell')"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('sell','add')"></image>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('added_wit','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.added_wit" @input="added_witChange" class="r_bule" type="number" @blur="onBlur($event,'added_wit')"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('added_wit','add')"></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>拼窝</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('conesting','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.conesting" @input="conestingChange"  class="r_bule" type="number" @blur="onBlur($event,'conesting')"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('conesting','add')"></image>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('massacre','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.massacre" @input="massacreChange"  class="r_red" type="number" @blur="onBlur($event,'massacre')"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('massacre','add')"></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>臭蛋</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('death','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.death" @input="deathChange"  class="r_red" type="number" @blur="onBlur($event,'death')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('death','add')"></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>残次蛋</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('disease','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.disease" @input="diseaseChange"  class="r_red" type="number" @blur="onBlur($event,'disease')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('disease','add')"></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>无精蛋</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('disease_sell','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.disease_sell" @input="disease_sellChange"  class="r_red" type="number" @blur="onBlur($event,'disease_sell')"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('disease_sell','add')"></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死精蛋</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('dead_eggs','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.dead_eggs" @input="dead_eggsChange"  class="r_red" type="number" @blur="onBlur($event,'dead_eggs')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('dead_eggs','add')"></image>
						<text>枚</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>转入孵化机</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('shift_to','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.shift_to" @input="shift_toChange"  class="r_red" type="number" @blur="onBlur($event,'shift_to')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('shift_to','add')"></image>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('brood','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.brood" @input="broodChange"  :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'brood')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('brood','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>并窝</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('conesting','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.conesting" @input="conestingChange"  :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'conesting')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('conesting','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>孵化机转入</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('hatch','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.hatch" @input="hatchChange"  :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'hatch')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('hatch','add')"></image>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('disease','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.disease" @input="diseaseChange"  class="r_red" type="number" @blur="onBlur($event,'disease')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('disease','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>病残销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('disease_sell','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.disease_sell" @input="disease_sellChange"  class="r_red" type="number" @blur="onBlur($event,'disease_sell')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('disease_sell','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>屠宰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('massacre','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.massacre" @input="massacreChange"  class="r_red" type="number" @blur="onBlur($event,'massacre')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('massacre','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死亡</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('death','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.death" @input="deathChange"  class="r_red" type="number" @blur="onBlur($event,'death')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('death','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('sell','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.sell" @input="sellChange"  class="r_red" type="number" @blur="onBlur($event,'sell')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('sell','add')"></image>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('breeding','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.breeding" @input="breedingChange"  :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'breeding')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('breeding','add')"></image>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('disease','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.disease" @input="diseaseChange"  class="r_red" type="number" @blur="onBlur($event,'disease')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('disease','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>病残销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('disease_sell','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.disease_sell" @input="disease_sellChange"  class="r_red" type="number" @blur="onBlur($event,'disease_sell')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('disease_sell','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>屠宰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('massacre','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.massacre" @input="massacreChange"  class="r_red" type="number" @blur="onBlur($event,'massacre')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('massacre','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死亡</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('death','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.death" @input="deathChange"  class="r_red" type="number" @blur="onBlur($event,'death')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('death','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('sell','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.sell" @input="sellChange"  class="r_red" type="number" @blur="onBlur($event,'sell')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('sell','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>转入育雏室</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('shift_to','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.shift_to" @input="shift_toChange"  class="r_red" type="number" @blur="onBlur($event,'shift_to')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('shift_to','add')"></image>
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
					<view class="records_breedingPigeon_modify_bt">当前存栏：<text>{{queryData.num||0}}</text>只</view>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('hatch','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.hatch" @input="hatchChange"  :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'hatch')"/>
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('hatch','add')"></image>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('disease','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.disease" @input="diseaseChange" class="r_red" type="number" @blur="onBlur($event,'disease')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('disease','add')"></image>
						<text>只</text>
					</view>
				</view>
				
				<view class="r_pigeon_add_i">
					<text>屠宰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('massacre','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.massacre" @input="massacreChange" class="r_red" type="number" @blur="onBlur($event,'massacre')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('massacre','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死亡</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('death','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.death" @input="deathChange" class="r_red" type="number" @blur="onBlur($event,'death')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('death','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('sell','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.sell" @input="sellChange" class="r_red" type="number" @blur="onBlur($event,'sell')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('sell','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>转入飞棚</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('shift_to','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.shift_to" @input="shift_toChange" class="r_red" type="number" @blur="onBlur($event,'shift_to')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('shift_to','add')"></image>
						<text>只</text>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 飞鹏仓 -->
		<view v-if="queryData.name === '飞棚'" class="">
			<view class="records_breedingPigeon_modify">
				<view class="records_breedingPigeon_modify_head">
					<view class="records_breedingPigeon_modify_head_top">
						<view class="records_breedingPigeon_modify_head_top_left">
							<image src="../../static/daiban/ht_qng.png" mode=""></image>
							<view>飞棚管理仓</view>
						</view>
						<view class="">
							<text class="alarm">{{queryData.text}}</text>
							<text style="font-size: 24rpx;font-weight: 500;color: #343434;" v-if="queryData.ageday">日龄：{{queryData.ageday}}天</text>
						</view>
					</view>
					<view class="records_breedingPigeon_modify_bt">当前存栏：<text>{{queryData.num||0}}</text>只</view>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('brood','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.brood" @input="broodChange" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'brood')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('brood','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>转仓</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('replenish','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.replenish" @input="replenishChange" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'replenish')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('replenish','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>生产仓转入</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('hatch','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.hatch" @input="hatchChange" :class="inpData-0?'r_bule':'r_bule'" type="number" @blur="onBlur($event,'hatch')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('hatch','add')"></image>
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
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('disease','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.disease" @input="diseaseChange" class="r_red" type="number" @blur="onBlur($event,'disease')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('disease','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>屠宰</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('massacre','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.massacre" @input="massacreChange" class="r_red" type="number" @blur="onBlur($event,'massacre')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('massacre','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>死亡</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('death','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.death" @input="deathChange" class="r_red" type="number" @blur="onBlur($event,'death')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('death','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>销售</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('sell','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.sell" @input="sellChange" class="r_red" type="number" @blur="onBlur($event,'sell')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('sell','add')"></image>
						<text>只</text>
					</view>
				</view>
				<view class="r_pigeon_add_i">
					<text>补入种鸽</text>
					<view class="r_pigeon_add_i_right">
						<image class="jianhao" src="../../static/cage/jian.png" mode="" @click="numberChange('shift_to','reduce')"></image>
						<view class="inputBox">
							<input ref="inp" :value="dataForm.shift_to" @input="shift_toChange" class="r_red" type="number" @blur="onBlur($event,'shift_to')" />
						</view>
						<image class="jiahao" src="../../static/cage/jia.png" mode="" @click="numberChange('shift_to','add')"></image>
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
		    @cancel="cancelBtn('cancel')" 
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
		    :show="alarShow" 
		    @close="closeWarningModal" 
			:cancel-color="'#E64329'"
			:cancel-text="'修改记录'"
			:confirm-text="'好的'"
		    title="异常警报" 
		    content=""
		    @cancel="warningCBtn('cancel')" 
		    @confirm="warningBtn('confirm')">
			<view class="" style="padding-bottom: 50rpx;"  >
				<view class="" v-if="subAlarmData[0]">
					<view class="warningBox" style="" v-if="subAlarmData[0].data[0].chData[0].glData['鸽蛋需补足']">
						<text style="width:148rpx;color: #E64329;">种鸽需补足</text><text style="min-width: 123rpx;">{{subAlarmData[0].data[0].chName}}</text><text style="" >编号：{{subAlarmData[0].data[0].chData[0].glName}}</text>
					</view>
					<view class="" v-if="subAlarmData[0].data[0].chData[0].glData['死淘异常']">
					<view class="warningBox" style="flex;margin-top: 10rpx;">
						<text style="width: 148rpx;color: #E64329;">死淘异常</text><text style="min-width: 123rpx;">{{subAlarmData[0].data[0].chName}}</text><text style="">编号：{{subAlarmData[0].data[0].chData[0].glName}}</text>
					</view>
					
						<view class="warningBox" style="margin-top: 5rpx;" v-for="(item,index) in subAlarmData[0].data[0].chData[0].glData['死淘异常']" :key="index">
							<text style="width:148rpx;"></text><text style="min-width: 123rpx;">{{item.alias}}</text><text style="">{{'死淘率'+item.ratio}}</text><text style="margin-left: 20rpx;">{{item.death}}只</text>
						</view>
					</view>

				</view>
			</view>
		</neil-modal>
		<lb-picker ref="pRWarehouse"   :list="nurtureData"  :props="myProps" radius="20rpx" confirm-color="#377BE4" @confirm='pRWarehouseChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="gelongbianhao" :list="otherGelongList" radius="20rpx" :props="myProps" confirm-color="#377BE4" @confirm='gelongChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
	</view>
</template>

<script>
	import LbPicker from '@/components/lb-picker'
	import neilModal from '@/components/neil-modal/neil-modal.vue';
	import {
		mapState
	} from 'vuex'
	export default {
		 components: {neilModal,LbPicker},
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
				queryData:{
					groupNumber:'请选择',
					warehouseNumber:'请选择',
					
				},
				changeNumber:null,
				dataForm:{
					cage_id:null,
					time:null,
					dove_type:null,
					added_wit:0,
					conesting:0,
					brood:0,
					hatch:0,
					breeding:0,
					added_out:0,
					replenish:0,
					massacre:0,
					death:0,
					disease:0,
					disease_sell:0,
					dead_eggs:0,
					sell:0,
					shift_to:0,
				},
				nurtureData:[],
				feipengData:[],
				myProps: {
				     label: 'name',
				     value: 'cage_id',
					 id:'survival'
				},
				otherlist:[],
				otherGelongList:[],
				subAlarmData:[],
				alarShow:false
				
			};
		},
		methods: {
			// dialog
			
			onBlur({detail:{value}},data){	
				console.log(value,data)
				value === '' ? this.dataForm[data] = 0 :''
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
				if(!this.dataForm.cage_id && this.queryData.name == "飞棚"){
					uni.showToast({
						title: '请选择仓号',
						icon: 'none'
					})
					return false 
				}else if(!this.dataForm.cage_id && this.queryData.name == "育雏仓"){
					uni.showToast({
						title: '请选择鸽笼编号',
						icon: 'none'
					})
					return false 
				}
				
				this.$http.post('/CageData/DiaryAdd.html',{uid:this.userInfo.id,...this.dataForm})
				.then((res)=>{
					console.log(res)
					if(res.data.type === 1){
						console.log(JSON.stringify(res.data.data))
						Object.keys(res.data.data).forEach((value, index)=>{
							this.subAlarmData.push({time:value,data:[]})
							
							Object.keys(res.data.data[value]).forEach((val, ind)=>{
										
								// this.subAlarmData[index].data=[]
								this.subAlarmData[index].data.push({chName:val,chData:[]})
										
								Object.keys(res.data.data[value][val]).forEach((valu, inde)=>{
									this.subAlarmData[index].data[ind].chData.push({glName:valu,glData:res.data.data[value][val][valu]})
									
								});
							});
						});
						this.alarShow=true
						console.log(this.subAlarmData[0])
					}
					if(res.code != 200){
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}
				}).catch((err)=>{
					console.log(err)
				})
			},
			cancelBtn(e){
				console.log(e)
			},
			numberChange(data,methods){
				if(methods === 'reduce'){
					this.dataForm[data] <= 0 ? 0 : this.dataForm[data]--
				}else if(methods === 'add'){
					this.dataForm[data]++
				}
				
				console.log(data,methods)
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
			// 
			warningBtn(){
				this.alarShow=false
				uni.navigateBack({
				    delta: 1
				});
			},
			warningCBtn(){
				this.alarShow=false
			},
			pRWarehouseChange(e){
				
				this.queryData.groupNumber=e.item.name
				this.otherGelongList=e.item.children
				if(this.queryData.name==='飞棚'){
					console.log(1)
					this.queryData.num=e.item.children[0].num
					this.queryData.text=e.item.children[0].text
					this.queryData.ageday=e.item.children[0].ageday
					this.dataForm.cage_id=e.item.children[0].cage_id
				}
				console.log(e)
			},
			gelongChange(e){
				console.log(e.item)
				this.dataForm.cage_id=e.item.cage_id
				this.queryData.warehouseNumber=e.item.name
				this.queryData.num=e.item.num
				this.queryData.text=e.item.text
				this.queryData.ageday=e.item.ageday
			},
			otherWNPopupShow(){
				this.$refs.pRWarehouse.show()
			},
			otherNumberPopupShow(){
				this.$refs.gelongbianhao.show()
			},
			shift_toChange({detail:{value}}){
				this.dataForm.shift_to=parseInt(value.trim())
			},
			sellChange({detail:{value}}){
				this.dataForm.sell=parseInt(value.trim())
			},
			dead_eggsChange({detail:{value}}){
				this.dataForm.dead_eggs=parseInt(value.trim())
			},
			disease_sellChange({detail:{value}}){
				this.dataForm.disease_sell=parseInt(value.trim())
			},
			diseaseChange({detail:{value}}){
				this.dataForm.disease=parseInt(value.trim())
			},
			deathChange({detail:{value}}){
				this.dataForm.death=parseInt(value.trim())
			},
			massacreChange({detail:{value}}){
				this.dataForm.massacre=parseInt(value.trim())
			},
			replenishChange({detail:{value}}){
				this.dataForm.replenish=parseInt(value.trim())
			},
			added_outChange({detail:{value}}){
				this.dataForm.added_out=parseInt(value.trim())
			},
			breedingChange({detail:{value}}){
				this.dataForm.breeding=parseInt(value.trim())
			},
			hatchChange({detail:{value}}){
				this.dataForm.hatch=parseInt(value.trim())
			},
			broodChange({detail:{value}}){
				this.dataForm.brood=parseInt(value.trim())
			},
			conestingChange({detail:{value}}){
				this.dataForm.conesting=parseInt(value.trim())
			},
			added_witChange({detail:{value}}){
				this.dataForm.added_wit=parseInt(value.trim())
			},
			getFrequencyData(){
				this.$http.post('/CageData/frequency.html',{uid:this.userInfo.id})
				.then((res)=>{
					console.log(res)
					this.changeNumber=res.data.frequency
				}).catch((err)=>{
					console.log(err)
				})
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				this.dataForm.time=times
					
			},
			getNurtureData(){
				this.$http.post('/CageData/nurture.html',{uid:this.userInfo.id})
				.then((res)=>{
					console.log(res)
					Object.keys(res.data).forEach((value, index)=>{
						console.log(value, index,res.data[value]);
						this.nurtureData.push({name:value,children:[]})
						Object.keys(res.data[value]).forEach((valu, inde)=>{
							console.log(valu, inde,res.data[value][valu])
							// this.list.push({name:value,children:res.data[value]})
						this.nurtureData[index].children.push({name:valu,cage_id:res.data[value][valu].cage_id,num:res.data[value][valu].survival,ageday:res.data[value][valu].ageday,text:res.data[value][valu].text})
							// this.warehouseList.push({name:value,children:res.data[value]})
						});
							
						// this.warehouseList.push({name:value,children:res.data[value]})
					});
					console.log(this.nurtureData)
				}).catch((err)=>{
					console.log(err)
				})
			},
			getFeipengData(){
				this.$http.post('/CageData/Feipeng.html',{uid:this.userInfo.id})
				.then((res)=>{
					console.log(res)
					Object.keys(res.data).forEach((value, index)=>{
						console.log(value, index,res.data[value]);
						this.nurtureData.push({name:value,children:[]})
						Object.keys(res.data[value]).forEach((valu, inde)=>{
							console.log(valu, inde,res.data[value][valu])
							// this.list.push({name:value,children:res.data[value]})
						this.nurtureData[index].children.push({name:valu,cage_id:res.data[value][valu].cage_id,num:res.data[value][valu].survival,ageday:res.data[value][valu].ageday,text:res.data[value][valu].text})
							// this.warehouseList.push({name:value,children:res.data[value]})
						});
							
						// this.warehouseList.push({name:value,children:res.data[value]})
					});
					console.log(this.nurtureData)
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
			this.getToday()
			if(this.queryData.name==='飞棚'){
			
				this.getFeipengData()
				
			}else if(this.queryData.name ==='育雏仓'){
					this.getNurtureData()
					
			}
		},
		onLoad({query}) {
			
			if(query&&JSON.parse(query).cage_id){
				console.log(1)
				this.queryData = JSON.parse(query)
				this.dataForm.cage_id=this.queryData.cage_id
				this.dataForm.uid=this.userInfo.id
				this.dataForm.dove_type=this.queryData.name
				console.log(query)
			}else{
				this.queryData.name=JSON.parse(query)
				this.queryData.name === '飞棚'? this.dataForm.dove_type='青年鸽' :''
				this.queryData.name === '育雏仓'? this.dataForm.dove_type='童鸽' :''
				console.log(this.queryData.name)
			}
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
				min-width: 117rpx;
				display: flex;
				justify-content: space-between;
				font-size: 30rpx;
				color: #151515;
	
				image {
					width: 40rpx;
					height: 40rpx;
					// background-color: #afc;
					margin-right: 16rpx;
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
		display: flex;
	}
	
	
}
</style>
