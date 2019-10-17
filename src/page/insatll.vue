<template>
  <div>
    <p class="mj_tip">麻将数据场次入录</p>
    <div class="submit_btn">
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
    <!-- <tr></tr> -->
    <div class="mj_tip">
      麻将历次战绩
      <Table border :columns="columns1" :data="data1"></Table>
    </div>
  </div>
</template>
<script>
import { installDay, getUser, getTable, getTableData } from "@/api/getData";
export default {
  data() {
    return {
      columns1: [],
      data1: [
      ],
      model1: ""
    };
  },
  mounted() {
    this.getTable();
    this.getTableData();
  },
  methods: {
    async submit() {
      const res = await installDay();
      if (res.status == 1) {
        this.$message.success("插入成功");
      } else {
        this.$message.success(res.message);
      }
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data1[index].cyj}<br>Age：${this.data1[index].cyj}<br>Address：${this.data1[index].cyj}`
      });
    },
    remove(index) {
      this.data1.splice(index, 1);
    },
    async getTableData() {
         const res = await getTableData();
         this.data1=res;
    },

    async getTable() {
      const res = await getTable();

      let action = {
        title: "Action",
        key: "action",
        width: 150,
        align: "center",
        render: (h, params) => {
          return h("div", [
            h(
              "Button",
              {
                props: {
                  type: "primary",
                  size: "small"
                },
                style: {
                  marginRight: "5px"
                },
                on: {
                  click: () => {
                    this.show(params.index);
                  }
                }
              },
              "View"
            ),
            h(
              "Button",
              {
                props: {
                  type: "error",
                  size: "small"
                },
                on: {
                  click: () => {
                    this.remove(params.index);
                  }
                }
              },
              "Delete"
            )
          ]);
        }
      };

      this.columns1 = res;
      this.columns1.push(action);
    }
  }
};
</script>

<style lang="less" scoped>
.mj_tip {
  padding: 20px;
  text-align: center;
  font-size: 20px;
}
</style>