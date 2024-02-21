<template>
  <div>
    <my-header>
        商品列表页
    </my-header>
    <my-table :data="list">
      <template #header="">
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
       <template #body="{item, index}">
        <td>{{ index + 1 }}</td>
        <td>{{ item.goods_name }}</td>
        <td>{{ item.goods_price }}</td>
        <td>{{ item.tags }}</td>
        <td><button class="btn btn-danger">删除</button></td>
       </template>
    </my-table>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyTable from '@/components/MyTable.vue'
export default {
    components: {
        MyHeader,
        MyTable
        
    },
    data() {
      return {
        list: [
          {
            goods_name: '黄金女鞋',
            goods_price: 298,
            tags: ['舒适', '透气']
          },
          {
            goods_name: '黄金男鞋',
            goods_price: 228,
            tags: ['舒适', '透气']
          }
        ]
      }
    }
}
</script>

<style>

</style>