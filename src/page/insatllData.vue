<template>

<div>
 
 <p class="mj_tip"  > 麻将对局入录</p>

    <div>
      名字：
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
     输赢：
        <Input placeholder="Enter text" style="width: auto" />
    </div>
     <div>
      名字：
      <Select v-model="model2" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
      输赢：
        <Input placeholder="Enter text" style="width: auto" />
    </div>
     <div>
      名字：
      <Select v-model="model3" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
      输赢：
        <Input placeholder="Enter text" style="width: auto" />
    </div>
     <div>
      名字：
      <Select v-model="model4" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
      输赢：
        <Input placeholder="Enter text" style="width: auto" />
    </div>
     <div>
      名字：
      <Select v-model="model5" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
      输赢：
        <Input placeholder="Enter text" style="width: auto" />
    </div>
     <Button type="success" long>提交</Button>
<tr></tr>
        <div class="mj_tip">
          麻将历次战绩
            <Table stripe :columns="columns1" :data="data1"></Table>
      </div>
<Button type="success" long>结算</Button>
        <div class="mj_tip">
          麻将总战绩
            <Table stripe :columns="columns1" :data="data1"></Table>
      </div>
      <Button type="success" long>提交</Button>
        </div>
     
 
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: '陈岳军',
                        label: '陈岳军'
                    },
                    {
                        value: '任炜刚',
                        label: '任炜刚'
                    },
                    {
                        value: '陈加倍',
                        label: '陈加倍'
                    },
                    {
                        value: '钱松',
                        label: '钱松'
                    },
                    {
                        value: '孙灿杰',
                        label: '孙灿杰'
                    },
                    {
                        value: '台版',
                        label: '台版'
                    }
                ],
                 columns1: [
                    {
                        title: '陈岳军',
                        key: 'cyj'
                    },
                    {
                        title: '任炜刚',
                        key: 'rwg'
                    },
                    {
                        title: '陈加倍',
                        key: 'cjb'
                    },
                    {
                        title: '钱松',
                        key: 'qs'
                    },
                    {
                        title: '孙灿杰',
                        key: 'scj'
                    },
                    {
                        title: '台版',
                        key: 'tb'
                    }
                ],
                data1: [
                    {
                        cyj: 1000,
                        rwg: -2918,
                        qs:20,
                        cjb: -1220,
                        scj:-300,
                        tb:3000
                    },
                     {
                        cyj: 1000,
                        rwg: -2918,
                        qs:20,
                        cjb: -1220,
                        scj:-300,
                        tb:3000
                    },
                    {
                        cyj: 1000,
                        rwg: -2918,
                        qs:20,
                        cjb: -1220,
                        scj:-300,
                        tb:3000
                    },
                     {
                        cyj: 1000,
                        rwg: -2918,
                        qs:20,
                        cjb: -1220,
                        scj:-300,
                        tb:3000
                    },
                ],
                model1: ''
            }
        }
    }
</script>

<style lang="less" scoped>
.mj_tip{
        padding: 20px;
        text-align:center;
        font-size:20px;
    }

</style>
