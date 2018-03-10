<template>
  <div class="nav">
    <div :class="['item',{'active': type === 'daily'}]" @click="handleClick('daily')">
      TODAY
    </div>
    <div :class="['item',{'active': type === 'weekly'}]" @click="handleClick('weekly')">
      WEEK
    </div>
    <div :class="['item',{'active': type === 'monthly'}]" @click="handleClick('monthly')">
      MONTH
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (type) {
      return this.$emit('handleClick', type)
    }
  },
  computed: {
    type () {
      return this.$store.state.type
    },
  }
}
</script>


<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  border-top: #EAEAEA solid 1px;
}

.nav .item {
  width: 33.33333%;
  text-align: center;
  background-color: #fff;
  color: #B5B5B5;
  font-size: 12px;
  font-weight: bold;
  padding: 18px 0;
  cursor: pointer;
}

.nav .item.active {
  color: #000;
}
</style>
