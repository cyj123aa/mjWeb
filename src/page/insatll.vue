<template>

<div>
 
 <p class="mj_tip"  > 麻将数据场次入录</p>

   
     <Button type="success" long>新建</Button>
<tr></tr>
        <div class="mj_tip">
          麻将历次战绩
            <Table border  :columns="columns1" :data="data1"></Table>
      </div>

    
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
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
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
                model1: '',
                 methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data1[index].cyj}<br>Age：${this.data1[index].cyj}<br>Address：${this.data1[index].cyj}`
                })
            },
            remove (index) {
                this.data1.splice(index, 1);
            }
        }
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
