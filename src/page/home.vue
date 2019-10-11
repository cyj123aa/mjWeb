<template>
    <div>
        <head-top></head-top>
		<section class="data_section">
			<header class="section_title">数据说话</header>
			<el-row :gutter="20" style="margin-bottom: 10px;">
                <el-col :span="4"><div class="data_list today_head"><span class="data_num head">正排名：</span></div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">陈岳军 69%</span> 胜率</div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">钱松 93%</span> 参团</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">陈岳军 890</span> 赢最多</div></el-col>
			</el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="data_list all_head"><span class="data_num head">负排序：</span></div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">孙灿杰 79%</span> 失败率</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">孙灿杰 60%</span> 参团</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">任炜刚 2761</span> 输最多</div></el-col>
            </el-row>
		</section>
		<tendency :vulDate='vulDate' :sevenDay='sevenDay' :series='series'></tendency>
    </div>
</template>

<script>
	import headTop from '../components/headTop'
	import tendency from '../components/tendency' 
	import dtime from 'time-formater'
	import {userCount, orderCount, getUserCount, getOrderCount, adminDayCount, adminCount,getVueData} from '@/api/getData'
    export default {
    	data(){
    		return {
    			userCount: null,
    			orderCount: null,
                adminCount: null,
                allUserCount: null,
                allOrderCount: null,
                allAdminCount: null,
    			sevenDay: [],
				sevenDate: [[],[],[]],
				vulDate:[],
				series:[],
    		}
    	},
    	components: {
    		headTop,
    		tendency,
    	},
    	mounted(){
    		
			this.getVueDataMy()
			
    	},
        computed: {

        },
    	methods: {
    	
			async getVueDataMy(){
				const res = await getVueData();
				this.vulDate =res.tuName;
				this.sevenDay=res.time;
				this.series=res.series;
			}
    
    	}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.data_section{
		padding: 20px;
		margin-bottom: 40px;
		.section_title{
			text-align: center;
			font-size: 30px;
			margin-bottom: 10px;
		}
		.data_list{
			text-align: center;
			font-size: 14px;
			color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;

            }
            .head{
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
	}
    .wan{
        .sc(16px, #333)
    }
</style>
