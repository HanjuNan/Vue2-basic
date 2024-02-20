<template>
  <div>
    <my-header>
        商品列表页
    </my-header>
    <my-table></my-table>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyTable from '@/components/MyTable.vue'
export default {
    components: {
        MyHeader,
        MyTable
        
    }
}
</script>

<style>

</style>