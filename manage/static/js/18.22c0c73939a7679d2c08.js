webpackJsonp([18],{198:function(t,e,n){n(504);var s=n(86)(n(373),n(530),"data-v-7ccbc052",null);t.exports=s.exports},373:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(50),a=n.n(s),r=n(49),i=n.n(r),c=n(87);e.default={data:function(){return{columns1:[],data1:[],model1:""}},mounted:function(){this.getTable(),this.getTableData()},methods:{submit:function(){var t=this;return i()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(c.c)();case 2:s=e.sent,1==s.status?t.$message.success("插入成功"):t.$message.success(s.message);case 4:case"end":return e.stop()}},e,t)}))()},show:function(t){this.$Modal.info({title:"User Info",content:"Name："+this.data1[t].cyj+"<br>Age："+this.data1[t].cyj+"<br>Address："+this.data1[t].cyj})},remove:function(t){this.data1.splice(t,1)},getTableData:function(){var t=this;return i()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(c.d)();case 2:s=e.sent,t.data1=s;case 4:case"end":return e.stop()}},e,t)}))()},getTable:function(){var t=this;return i()(a.a.mark(function e(){var s,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(c.e)();case 2:s=e.sent,r={title:"Action",key:"action",width:150,align:"center",render:function(e,n){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.show(n.index)}}},"View"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(n.index)}}},"Delete")])}},t.columns1=s,t.columns1.push(r);case 6:case"end":return e.stop()}},e,t)}))()}}}},409:function(t,e,n){e=t.exports=n(189)(!1),e.push([t.i,".mj_tip[data-v-7ccbc052]{padding:20px;text-align:center;font-size:20px}",""])},504:function(t,e,n){var s=n(409);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(190)("ae712868",s,!0)},530:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"mj_tip"},[t._v("麻将数据场次入录")]),t._v(" "),n("div",{staticClass:"submit_btn"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1),t._v(" "),n("div",{staticClass:"mj_tip"},[t._v("\n    麻将历次战绩\n    "),n("Table",{attrs:{border:"",columns:t.columns1,data:t.data1}})],1)])},staticRenderFns:[]}}});