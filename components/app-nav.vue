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
    <div class="menu" @click="handleOpen">
      <div :class="['bars', {'is-open': isOpen}]">
        <span class="bar top"></span>
        <span class="bar middle"></span>
        <span class="bar bottom"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick(type) {
        return this.$emit('handleClick', type)
      },
      handleOpen () {
        this.$store.commit('SET_IS_OPEN', !this.isOpen)
      }
    },
    computed: {
      type() {
        return this.$store.state.type
      },
      isOpen () {
        return this.$store.state.isOpen
      }
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
    z-index: 11;
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

  .nav .menu {
    background-color: #000;
    min-width: 51px;
    position: relative;
    cursor: pointer;
  }
  .bars span {
    width: 30px;
    height: 2px;
    display: block;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -15px;
    transform: rotate(0deg);
  }

  .bars .top {
    transform: translateY(-10px);
  }

  .bars .bottom {
    transform: translateY(10px);
  }

  .bars.is-open .middle {
    background: rgba(255, 255, 255, 0);
  }

  .bars.is-open .top {
    transform: rotate(-45deg) translateY(0px);
  }

  .bars.is-open .bottom {
    transform: rotate(45deg) translateY(0px);
  }
</style>
