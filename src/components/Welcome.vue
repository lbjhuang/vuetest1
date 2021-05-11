<template>
  <el-container style="height: 800px; border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right" id="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">
            <el-link :underline="false">首页</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-link :underline="false">活动管理</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-link :underline="false">活动列表</el-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-link :underline="false">活动详情</el-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="tableData" :height="720" style="width: 100%">
          <el-table-column prop="date" label="日期" width="200">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="220">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="220">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="220">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="220">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="220">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="220">
          </el-table-column>

          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000" class="pageStyle"></el-pagination>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #87CEFA;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

#breadcrumb {
  margin-top: 8px;
  margin-bottom: 20px;

}

</style>

<script>


export default {
  //组件名字
  name: 'Welcome',

  //生命周期方法调用
  created: function () {
    this.getMenu()
  },

  //数据集合
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(15).fill(item),
      token: '123456789'
    }
  },

  //方法集合
  methods: {
    getMenu() {
      this.$axios({
        url: this.GLOABALUSE.API_BASE_URL,
        method: "post",
        params: {token: this.token}
      }).then(res => {
        console.log(res)
      })
    }
  }
};
</script>
